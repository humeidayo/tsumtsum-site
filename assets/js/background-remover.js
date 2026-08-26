const MAX_FILE_SIZE = 15 * 1024 * 1024;
const maxEdge = (navigator.deviceMemory && navigator.deviceMemory <= 4) || innerWidth < 760 ? 2200 : 3200;

const imageInput = document.getElementById('imageInput');
const selectImageButton = document.getElementById('selectImageButton');
const pasteImageButton = document.getElementById('pasteImageButton');
const changeImageButton = document.getElementById('changeImageButton');
const uploadStage = document.getElementById('uploadStage');
const uploadMessage = document.getElementById('uploadMessage');
const editor = document.getElementById('editor');
const fileThumb = document.getElementById('fileThumb');
const fileName = document.getElementById('fileName');
const fileInfo = document.getElementById('fileInfo');
const backgroundColor = document.getElementById('backgroundColor');
const toleranceRange = document.getElementById('toleranceRange');
const toleranceValue = document.getElementById('toleranceValue');
const featherRange = document.getElementById('featherRange');
const featherValue = document.getElementById('featherValue');
const solidControls = document.getElementById('solidControls');
const aiControls = document.getElementById('aiControls');
const modeHint = document.getElementById('modeHint');
const processButton = document.getElementById('processButton');
const copyButton = document.getElementById('copyButton');
const downloadButton = document.getElementById('downloadButton');
const processStatus = document.getElementById('processStatus');
const progressTrack = document.getElementById('progressTrack');
const progressBar = document.getElementById('progressBar');
const previewImage = document.getElementById('previewImage');
const previewCanvas = document.getElementById('previewCanvas');
const tapGuide = document.getElementById('tapGuide');
const resultSize = document.getElementById('resultSize');
const workCanvas = document.getElementById('workCanvas');
const resultCanvas = document.getElementById('resultCanvas');
const workContext = workCanvas.getContext('2d', { willReadFrequently: true });
const resultContext = resultCanvas.getContext('2d', { willReadFrequently: true });

let sourceFile = null;
let sourceUrl = '';
let resultUrl = '';
let currentMode = 'auto';
let backgroundRemover = null;
let updateTimer = 0;
let processing = false;

const formatBytes = (bytes) => {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)}KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)}MB`;
};

const setStatus = (message, error = false) => {
  processStatus.textContent = message;
  processStatus.classList.toggle('error', error);
};

const setProgress = (value, visible = true) => {
  progressTrack.hidden = !visible;
  progressBar.style.width = `${Math.max(0, Math.min(100, value))}%`;
};

const revokeResultUrl = () => {
  if (resultUrl) URL.revokeObjectURL(resultUrl);
  resultUrl = '';
};

const loadImage = (url) => new Promise((resolve, reject) => {
  const image = new Image();
  image.onload = () => resolve(image);
  image.onerror = () => reject(new Error('画像を読み込めませんでした。'));
  image.src = url;
});

const mostCommonEdgeColor = (data, width, height) => {
  const buckets = new Map();
  const add = (x, y) => {
    const index = (y * width + x) * 4;
    if (data[index + 3] < 16) return;
    const r = data[index];
    const g = data[index + 1];
    const b = data[index + 2];
    const key = `${r >> 4}-${g >> 4}-${b >> 4}`;
    const item = buckets.get(key) || { count: 0, r: 0, g: 0, b: 0 };
    item.count += 1;
    item.r += r;
    item.g += g;
    item.b += b;
    buckets.set(key, item);
  };
  const step = Math.max(1, Math.floor(Math.max(width, height) / 600));
  for (let x = 0; x < width; x += step) { add(x, 0); add(x, height - 1); }
  for (let y = step; y < height - 1; y += step) { add(0, y); add(width - 1, y); }
  let best = { count: 1, r: 255, g: 255, b: 255 };
  buckets.forEach((item) => { if (item.count > best.count) best = item; });
  return [Math.round(best.r / best.count), Math.round(best.g / best.count), Math.round(best.b / best.count)];
};

const rgbToHex = ([r, g, b]) => `#${[r, g, b].map((value) => value.toString(16).padStart(2, '0')).join('')}`;
const hexToRgb = (hex) => [1, 3, 5].map((index) => parseInt(hex.slice(index, index + 2), 16));

const buildSoftMask = (mask, width, height, radius) => {
  if (!radius) return mask;
  const horizontal = new Uint16Array(mask.length);
  const output = new Uint8ClampedArray(mask.length);
  const diameter = radius * 2 + 1;
  for (let y = 0; y < height; y += 1) {
    let sum = 0;
    const row = y * width;
    for (let x = -radius; x <= radius; x += 1) sum += mask[row + Math.max(0, Math.min(width - 1, x))];
    for (let x = 0; x < width; x += 1) {
      horizontal[row + x] = Math.round(sum / diameter);
      const removeX = Math.max(0, x - radius);
      const addX = Math.min(width - 1, x + radius + 1);
      sum += mask[row + addX] - mask[row + removeX];
    }
  }
  for (let x = 0; x < width; x += 1) {
    let sum = 0;
    for (let y = -radius; y <= radius; y += 1) sum += horizontal[Math.max(0, Math.min(height - 1, y)) * width + x];
    for (let y = 0; y < height; y += 1) {
      output[y * width + x] = Math.round(sum / diameter);
      const removeY = Math.max(0, y - radius);
      const addY = Math.min(height - 1, y + radius + 1);
      sum += horizontal[addY * width + x] - horizontal[removeY * width + x];
    }
  }
  return output;
};

const removeSolidBackground = () => {
  const width = workCanvas.width;
  const height = workCanvas.height;
  const imageData = workContext.getImageData(0, 0, width, height);
  const data = imageData.data;
  const target = hexToRgb(backgroundColor.value);
  const tolerance = Number(toleranceRange.value);
  const threshold = tolerance * tolerance * 3;
  const pixelCount = width * height;
  const visited = new Uint8Array(pixelCount);
  const queue = new Int32Array(pixelCount);
  let head = 0;
  let tail = 0;

  const matches = (pixel) => {
    const index = pixel * 4;
    if (data[index + 3] < 16) return true;
    const dr = data[index] - target[0];
    const dg = data[index + 1] - target[1];
    const db = data[index + 2] - target[2];
    return dr * dr + dg * dg + db * db <= threshold;
  };
  const enqueue = (pixel) => {
    if (!visited[pixel] && matches(pixel)) {
      visited[pixel] = 1;
      queue[tail++] = pixel;
    }
  };

  for (let x = 0; x < width; x += 1) { enqueue(x); enqueue((height - 1) * width + x); }
  for (let y = 1; y < height - 1; y += 1) { enqueue(y * width); enqueue(y * width + width - 1); }

  while (head < tail) {
    const pixel = queue[head++];
    const x = pixel % width;
    if (x > 0) enqueue(pixel - 1);
    if (x < width - 1) enqueue(pixel + 1);
    if (pixel >= width) enqueue(pixel - width);
    if (pixel < pixelCount - width) enqueue(pixel + width);
  }

  const mask = new Uint8ClampedArray(pixelCount);
  for (let pixel = 0; pixel < pixelCount; pixel += 1) mask[pixel] = visited[pixel] ? 0 : 255;
  const softened = buildSoftMask(mask, width, height, Number(featherRange.value));
  for (let pixel = 0; pixel < pixelCount; pixel += 1) {
    const alphaIndex = pixel * 4 + 3;
    data[alphaIndex] = Math.round(data[alphaIndex] * softened[pixel] / 255);
  }
  resultContext.putImageData(imageData, 0, 0);
};

const loadBackgroundModel = async () => {
  if (backgroundRemover) return backgroundRemover;
  setProgress(4);
  setStatus('背景AIを読み込んでいます。初回は少し時間がかかります。');
  const { pipeline } = await import('https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.2.0');
  backgroundRemover = await pipeline('background-removal', 'onnx-community/ormbg-ONNX', {
    device: 'wasm',
    dtype: 'q8',
    progress_callback: (event) => {
      if (typeof event.progress === 'number') setProgress(8 + event.progress * .78);
      if (event.status === 'ready') setProgress(90);
    }
  });
  return backgroundRemover;
};

const removeAutomaticBackground = async () => {
  const remover = await loadBackgroundModel();
  setStatus('画像の主役と背景を判定しています。');
  setProgress(92);
  const output = await remover(sourceUrl);
  const removedImage = Array.isArray(output) ? output[0] : output;
  if (!removedImage || typeof removedImage.toCanvas !== 'function') throw new Error('背景AIの結果を取得できませんでした。');
  const removedCanvas = removedImage.toCanvas();
  resultContext.clearRect(0, 0, resultCanvas.width, resultCanvas.height);
  resultContext.drawImage(removedCanvas, 0, 0, resultCanvas.width, resultCanvas.height);
  setProgress(100);
};

const showView = (view) => {
  document.querySelectorAll('.preview-toggle button').forEach((button) => button.classList.toggle('active', button.dataset.view === view));
  previewImage.src = view === 'before' || !resultUrl ? sourceUrl : resultUrl;
  previewCanvas.classList.toggle('checkerboard', view !== 'before');
  tapGuide.hidden = currentMode !== 'solid' || view !== 'after';
};

const updateResultPreview = async () => {
  revokeResultUrl();
  const blob = await new Promise((resolve) => resultCanvas.toBlob(resolve, 'image/png'));
  if (!blob) throw new Error('透過PNGを作成できませんでした。');
  resultUrl = URL.createObjectURL(blob);
  previewImage.src = resultUrl;
  copyButton.disabled = false;
  downloadButton.disabled = false;
  resultSize.textContent = `${workCanvas.width} × ${workCanvas.height}px / ${formatBytes(blob.size)}`;
  showView('after');
};

const processImage = async () => {
  if (!sourceFile || processing) return;
  processing = true;
  processButton.disabled = true;
  copyButton.disabled = true;
  downloadButton.disabled = true;
  setStatus(currentMode === 'solid' ? '背景色を判定して透過しています。' : '背景AIの準備をしています。');
  if (currentMode === 'solid') setProgress(35);
  try {
    await new Promise((resolve) => requestAnimationFrame(resolve));
    if (currentMode === 'solid') {
      removeSolidBackground();
      setProgress(88);
    } else {
      await removeAutomaticBackground();
    }
    await updateResultPreview();
    setProgress(100);
    setStatus('背景を透過しました。仕上がりを確認して保存できます。');
    setTimeout(() => setProgress(0, false), 600);
  } catch (error) {
    console.error(error);
    setProgress(0, false);
    setStatus(currentMode === 'auto' ? '背景AIを読み込めませんでした。通信環境を確認するか、「色で調整」をお試しください。' : error.message, true);
  } finally {
    processing = false;
    processButton.disabled = false;
  }
};

const scheduleSolidUpdate = () => {
  if (!sourceFile || currentMode !== 'solid') return;
  clearTimeout(updateTimer);
  updateTimer = setTimeout(processImage, 180);
};

const prepareFile = async (file) => {
  if (!file) return;
  if (!/^image\/(png|jpeg|webp)$/.test(file.type)) {
    alert('PNG・JPG・WebP画像を選んでください。');
    return;
  }
  if (file.size > MAX_FILE_SIZE) {
    alert('画像サイズは15MB以下にしてください。');
    return;
  }
  if (sourceUrl) URL.revokeObjectURL(sourceUrl);
  revokeResultUrl();
  sourceFile = file;
  sourceUrl = URL.createObjectURL(file);
  try {
    const image = await loadImage(sourceUrl);
    const scale = Math.min(1, maxEdge / Math.max(image.naturalWidth, image.naturalHeight));
    const width = Math.max(1, Math.round(image.naturalWidth * scale));
    const height = Math.max(1, Math.round(image.naturalHeight * scale));
    workCanvas.width = resultCanvas.width = width;
    workCanvas.height = resultCanvas.height = height;
    workContext.clearRect(0, 0, width, height);
    workContext.drawImage(image, 0, 0, width, height);
    const imageData = workContext.getImageData(0, 0, width, height);
    backgroundColor.value = rgbToHex(mostCommonEdgeColor(imageData.data, width, height));
    fileName.textContent = file.name;
    fileInfo.textContent = `${image.naturalWidth} × ${image.naturalHeight}px / ${formatBytes(file.size)}${scale < 1 ? '（処理用に縮小）' : ''}`;
    fileThumb.src = sourceUrl;
    previewImage.src = sourceUrl;
    resultSize.textContent = `${width} × ${height}px`;
    uploadStage.hidden = true;
    editor.hidden = false;
    showView('before');
    setStatus(currentMode === 'auto' ? '背景AIの判定を始めます。' : '背景色を自動判定しました。');
    await processImage();
  } catch (error) {
    setStatus(error.message, true);
  }
};

selectImageButton.addEventListener('click', () => imageInput.click());
changeImageButton.addEventListener('click', () => imageInput.click());
imageInput.addEventListener('change', () => prepareFile(imageInput.files[0]));

const fileFromClipboardItem = async (item) => {
  const imageType = item.types.find((type) => type.startsWith('image/'));
  if (!imageType) return null;
  const blob = await item.getType(imageType);
  const extension = imageType.split('/')[1].replace('jpeg', 'jpg');
  return new File([blob], `clipboard-image-${Date.now()}.${extension}`, { type: imageType });
};

pasteImageButton.addEventListener('click', async () => {
  uploadMessage.textContent = '';
  if (!navigator.clipboard?.read) {
    uploadMessage.textContent = 'このブラウザではボタン貼り付けに対応していません。Ctrl+Vをお試しください。';
    return;
  }
  try {
    const items = await navigator.clipboard.read();
    for (const item of items) {
      const file = await fileFromClipboardItem(item);
      if (file) {
        await prepareFile(file);
        return;
      }
    }
    uploadMessage.textContent = 'クリップボードに画像が見つかりませんでした。';
  } catch (error) {
    uploadMessage.textContent = '貼り付けを許可できませんでした。Ctrl+Vをお試しください。';
  }
});

document.addEventListener('paste', (event) => {
  const imageItem = [...(event.clipboardData?.items || [])].find((item) => item.type.startsWith('image/'));
  if (!imageItem) return;
  const file = imageItem.getAsFile();
  if (!file) return;
  event.preventDefault();
  const extension = file.type.split('/')[1].replace('jpeg', 'jpg');
  prepareFile(new File([file], `clipboard-image-${Date.now()}.${extension}`, { type: file.type }));
});

['dragenter', 'dragover'].forEach((name) => uploadStage.addEventListener(name, (event) => {
  event.preventDefault();
  uploadStage.classList.add('dragover');
}));
['dragleave', 'drop'].forEach((name) => uploadStage.addEventListener(name, (event) => {
  event.preventDefault();
  uploadStage.classList.remove('dragover');
}));
uploadStage.addEventListener('drop', (event) => prepareFile(event.dataTransfer.files[0]));

document.querySelectorAll('.segmented-control button').forEach((button) => button.addEventListener('click', () => {
  currentMode = button.dataset.mode;
  document.querySelectorAll('.segmented-control button').forEach((item) => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  solidControls.hidden = currentMode !== 'solid';
  aiControls.hidden = currentMode !== 'auto';
  tapGuide.hidden = currentMode !== 'solid';
  modeHint.textContent = currentMode === 'solid'
    ? '消したい背景色を指定し、画像の端からつながる部分を透過します。'
    : '画像の主役を判定し、その周囲を背景として自動で透過します。';
  processButton.textContent = currentMode === 'solid' ? '指定色で透過する' : '背景AIで透過する';
  copyButton.disabled = true;
  downloadButton.disabled = true;
  showView('before');
  setStatus(currentMode === 'auto' ? '背景AIが主役と背景を自動判定します。' : '設定を変えると自動で結果を更新します。');
}));

toleranceRange.addEventListener('input', () => { toleranceValue.value = toleranceRange.value; scheduleSolidUpdate(); });
featherRange.addEventListener('input', () => { featherValue.value = featherRange.value; scheduleSolidUpdate(); });
backgroundColor.addEventListener('input', scheduleSolidUpdate);
processButton.addEventListener('click', processImage);

previewCanvas.addEventListener('click', (event) => {
  if (!sourceFile || currentMode !== 'solid') return;
  const rect = previewImage.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) return;
  const imageRatio = workCanvas.width / workCanvas.height;
  const boxRatio = rect.width / rect.height;
  let drawWidth = rect.width;
  let drawHeight = rect.height;
  let offsetX = 0;
  let offsetY = 0;
  if (imageRatio > boxRatio) {
    drawHeight = rect.width / imageRatio;
    offsetY = (rect.height - drawHeight) / 2;
  } else {
    drawWidth = rect.height * imageRatio;
    offsetX = (rect.width - drawWidth) / 2;
  }
  const x = Math.floor((event.clientX - rect.left - offsetX) / drawWidth * workCanvas.width);
  const y = Math.floor((event.clientY - rect.top - offsetY) / drawHeight * workCanvas.height);
  if (x < 0 || y < 0 || x >= workCanvas.width || y >= workCanvas.height) return;
  const pixel = workContext.getImageData(x, y, 1, 1).data;
  backgroundColor.value = rgbToHex([pixel[0], pixel[1], pixel[2]]);
  setStatus('タップした色を背景色に設定しました。');
  scheduleSolidUpdate();
});

document.querySelectorAll('.preview-toggle button').forEach((button) => button.addEventListener('click', () => showView(button.dataset.view)));

downloadButton.addEventListener('click', () => {
  if (!resultUrl || !sourceFile) return;
  const link = document.createElement('a');
  const baseName = sourceFile.name.replace(/\.[^.]+$/, '');
  link.href = resultUrl;
  link.download = `${baseName}-transparent.png`;
  link.click();
});

copyButton.addEventListener('click', async () => {
  if (!sourceFile || copyButton.disabled) return;
  if (!navigator.clipboard?.write || typeof ClipboardItem === 'undefined') {
    setStatus('このブラウザは画像コピーに対応していません。透過PNGを保存してください。', true);
    return;
  }
  copyButton.disabled = true;
  try {
    const blob = await new Promise((resolve) => resultCanvas.toBlob(resolve, 'image/png'));
    if (!blob) throw new Error('画像を作成できませんでした。');
    await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
    setStatus('透過画像をコピーしました。ほかのアプリへ貼り付けられます。');
    copyButton.textContent = 'コピーしました';
    setTimeout(() => { copyButton.textContent = '透過画像をコピー'; }, 1400);
  } catch (error) {
    setStatus('画像をコピーできませんでした。透過PNGを保存してください。', true);
  } finally {
    copyButton.disabled = false;
  }
});

window.addEventListener('beforeunload', () => {
  if (sourceUrl) URL.revokeObjectURL(sourceUrl);
  revokeResultUrl();
});
