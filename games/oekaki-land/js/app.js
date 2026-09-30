
(() => {
'use strict';

const DATA = window.APP_DATA;
const $ = s => document.querySelector(s);
const screen = $('#screen');
const topbar = $('#topbar');
const titleEl = $('#screenTitle');
const backBtn = $('#backBtn');
const speakBtn = $('#speakBtn');
const adultBtn = $('#adultBtn');
const toastEl = $('#toast');
const successOverlay = $('#successOverlay');
const successWord = $('#successWord');

const DEFAULTS = {name:'',difficulty:'normal',bgm:true,sfx:true};
let settings = {...DEFAULTS, ...JSON.parse(localStorage.getItem('oekakiSettings') || '{}')};
let state = {
  view:'home',
  kanaIndex:0,
  nameIndex:0,
  nameWhole:false,
  currentItem:null,
  libraryType:null,
  currentCategory:null,
  drawMode:'free',
  color:'#ff5e68',
  brushSize:'normal',
  notebookTool:'pen',
  history:[],
  redo:[],
  completed:false,
  paintActions:0,
  nameWritten:[],
  nameFinished:false
};

const palette = [
  ['#ff5e68','あか'],['#ff9f43','オレンジ'],['#ffd93d','きいろ'],
  ['#50cf7b','みどり'],['#49a7ff','あお'],['#8f70e8','むらさき'],
  ['#ff7db2','ピンク'],['#9a6544','ちゃいろ'],['#202b33','くろ'],['#ffffff','しろ'],
  ['rainbow','レインボー']
];

function showToast(msg){
  toastEl.textContent = msg; toastEl.classList.add('show');
  clearTimeout(showToast.t); showToast.t=setTimeout(()=>toastEl.classList.remove('show'),1500);
}
function saveSettings(){ localStorage.setItem('oekakiSettings', JSON.stringify(settings)); }

function setTop({title='',back=true}={}){
  topbar.classList.toggle('hidden', !back && !title);
  titleEl.textContent = title;
  backBtn.classList.toggle('hidden', !back);
  speakBtn.classList.add('hidden');
  adultBtn.classList.toggle('hidden', state.view!=='home');
}

function route(view, extra={}){
  cleanupCanvas();
  state.view=view; state.completed=false; Object.assign(state, extra);
  successOverlay.classList.add('hidden');
  if(view==='home') renderHome();
  if(view==='kana') renderKana();
  if(view==='name') renderName();
  if(view==='library') renderLibrary();
  if(view==='trace') renderTrace();
  if(view==='coloring') renderColoring();
  if(view==='notebook') renderNotebook();
}

function renderHome(){
  setTop({}); adultBtn.classList.remove('hidden');
  screen.innerHTML = `
    <section class="home-wrap">
      <div class="logo">🌈 おえかきランド</div>
      <div class="logo-sub">かいて・なぞって・ぬって あそぼう！</div>
      <div class="home-grid">
        <button class="mode-card mode-kana" data-go="kana">
          <div class="mode-art mode-art-bubbles"><span class="letter-bubble">あ</span><span class="letter-bubble small">ぁ</span><span class="letter-bubble accent">が</span></div>
          <div class="mode-label">ひらがな</div><div class="mode-sub">もじを なぞろう</div>
        </button>
        <button class="mode-card mode-name" data-go="name">
          <div class="mode-art mode-art-bubbles"><span class="letter-bubble">な</span><span class="letter-bubble">ま</span><span class="letter-bubble">え</span></div>
          <div class="mode-label">おなまえ</div><div class="mode-sub">${(settings.name&&settings.name!=='なまえ')?settings.name:'なまえを せってい'}</div>
        </button>
        <button class="mode-card mode-trace" data-go="traceLib">
          <div class="mode-art mode-art-double"><img class="mode-thumb" src="./assets/processed/cat_thumb.jpg" alt=""><img class="mode-thumb second" src="./assets/processed/rocket_thumb.jpg" alt=""></div>
          <div class="mode-label">なぞりえ</div><div class="mode-sub">うすい せんを なぞろう</div>
        </button>
        <button class="mode-card mode-color" data-go="colorLib">
          <div class="mode-art mode-art-double"><img class="mode-thumb" src="./assets/processed/lion_thumb.jpg" alt=""><img class="mode-thumb second" src="./assets/processed/police_thumb.jpg" alt=""></div>
          <div class="mode-label">ぬりえ</div><div class="mode-sub">いろを まぜて ぬろう</div>
        </button>
        <button class="mode-card mode-note" data-go="notebook">
          <div class="mode-art mode-art-bubbles"><span class="tool-bubble">✏️</span><span class="tool-bubble">🖍️</span><span class="tool-bubble">⭐</span></div>
          <div class="mode-label">じゆうちょう</div><div class="mode-sub">すきに おえかき</div>
        </button>
      </div>
    </section>`;
  screen.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>{
    const g=b.dataset.go;
    if(g==='traceLib') route('library',{libraryType:'trace'});
    else if(g==='colorLib') route('library',{libraryType:'color'});
    else route(g);
  });
}

function renderKana(){
  const ch=DATA.kana[state.kanaIndex];
  setTop({title:`ひらがな「${ch}」`,back:true});
  screen.innerHTML = `<div class="tracer-layout">
    <div class="canvas-card"><div class="helper-badge">「${ch}」を なぞってね</div><canvas id="mainCanvas"></canvas></div>
    <div class="bottom-actions">
      <button id="prevBtn" class="big-action secondary">← まえ</button>
      <button id="resetBtn" class="big-action secondary">🔄 もういちど</button>
      <span class="progress-mini">${state.kanaIndex+1} / ${DATA.kana.length}</span>
      <button id="judgeBtn" class="big-action judge">⭕ はんてい</button>
      <button id="nextLocalBtn" class="big-action primary">つぎ →</button>
    </div>
  </div>`;
  initTraceCanvas({kind:'text',text:ch,opacity:.24,manualJudge:true});
  $('#prevBtn').onclick=()=>{state.kanaIndex=(state.kanaIndex-1+DATA.kana.length)%DATA.kana.length;renderKana();};
  $('#resetBtn').onclick=renderKana;
  $('#nextLocalBtn').onclick=()=>{state.kanaIndex=(state.kanaIndex+1)%DATA.kana.length;renderKana();};
  $('#judgeBtn').onclick=()=>judgeKana(ch);
}

function judgeTracing(label,minMoves=10){
  if(traceMoves < minMoves){
    showToast('もうすこし なぞってみよう ✏️');
    playGentleNo();
    return;
  }
  const ratio = traceHits / Math.max(1, traceMoves);
  if(ratio >= .38){
    complete({name:label});
  }else{
    showToast('おしい！ うすいせんの ちかくを なぞってみよう');
    playGentleNo();
  }
}
function judgeKana(ch){ judgeTracing(ch,10); }

function renderName(){
  const childName=(settings.name && settings.name!=='なまえ') ? settings.name.trim() : '';
  setTop({title:'おなまえ',back:true});
  if(!childName){
    screen.innerHTML=`<div class="name-setup-empty"><div class="name-setup-card">
      <div class="name-setup-icon">✏️</div>
      <div class="name-setup-title">じぶんの なまえを せっていしよう！</div>
      <div class="name-setup-sub">「⚙️ せってい」から なまえを いれてね</div>
      <button id="openNameSettings" class="big-action primary">⚙️ なまえを せってい</button>
    </div></div>`;
    $('#openNameSettings').onclick=openSettings;
    return;
  }

  const chars=[...childName];
  if(state.nameWritten.length>chars.length) state.nameWritten=[];
  if(state.nameFinished || state.nameWritten.length>=chars.length){
    state.nameFinished=true;
    setTop({title:'できた！',back:true});
    screen.innerHTML=`<div class="name-finish-screen">
      <div class="name-finish-label">👏 おなまえ かけたね！</div>
      <div class="name-finish-big">${escapeHtml(childName)}</div>
      <div class="name-finish-written">${state.nameWritten.map((src,i)=>`<div class="name-written-final"><img src="${src}" alt="${escapeHtml(chars[i]||'')}"></div>`).join('')}</div>
      <div class="name-finish-actions">
        <button id="nameRestartBtn" class="big-action primary">🔄 もういちど</button>
        <button id="nameSettingsBtn" class="big-action secondary">⚙️ なまえ設定</button>
      </div>
    </div>`;
    $('#nameRestartBtn').onclick=()=>{state.nameIndex=0;state.nameWritten=[];state.nameFinished=false;renderName()};
    $('#nameSettingsBtn').onclick=openSettings;
    return;
  }

  state.nameIndex=state.nameWritten.length;
  const text=chars[state.nameIndex];
  const opacity=settings.difficulty==='easy'?.34:settings.difficulty==='light'?.12:.22;
  setTop({title:`${state.nameIndex+1} / ${chars.length} もじめ`,back:true});
  screen.innerHTML = `<div class="name-practice-layout">
    <section class="name-display-panel">
      <div class="name-display-label">あなたの おなまえ</div>
      <div class="name-display-full">${escapeHtml(childName)}</div>
      <div class="name-written-strip">
        ${chars.map((ch,i)=> i<state.nameWritten.length
          ? `<div class="name-written-tile done"><img src="${state.nameWritten[i]}" alt="${escapeHtml(ch)}"></div>`
          : `<div class="name-written-tile ${i===state.nameIndex?'current':''}">${escapeHtml(ch)}</div>`).join('')}
      </div>
    </section>
    <div class="name-canvas-wrap">
      <div class="canvas-card name-canvas-card"><div class="helper-badge">「${escapeHtml(text)}」を かいてね ✏️</div><canvas id="mainCanvas"></canvas></div>
    </div>
    <div class="bottom-actions name-actions">
      <button id="nameSettingsBtn" class="big-action secondary">⚙️ なまえ設定</button>
      <button id="resetBtn" class="big-action secondary">🔄 かきなおす</button>
      <button id="judgeBtn" class="big-action judge">⭕ かけた！</button>
    </div>
  </div>`;
  initTraceCanvas({kind:'text',text,opacity,whole:false,manualJudge:true});
  $('#nameSettingsBtn').onclick=openSettings;
  $('#resetBtn').onclick=renderName;
  $('#judgeBtn').onclick=()=>finishNameCharacter(text,chars.length);
}

function escapeHtml(value){
  return String(value??'').replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
}

function cropNameDrawingDataUrl(){
  if(!canvas) return '';
  try{
    const out=document.createElement('canvas');
    const w=Math.max(1,Math.floor(canvas.width)), h=Math.max(1,Math.floor(canvas.height));
    out.width=w;out.height=h;
    const og=out.getContext('2d');
    og.fillStyle='#fff';og.fillRect(0,0,w,h);
    og.drawImage(canvas,0,0);
    return out.toDataURL('image/png');
  }catch(e){ return canvas.toDataURL('image/png'); }
}

function finishNameCharacter(ch,total){
  if(traceMoves<6){
    showToast('もうすこし かいてみよう ✏️');
    playGentleNo();
    return;
  }
  state.nameWritten.push(cropNameDrawingDataUrl());
  playApplause();
  if(state.nameWritten.length>=total){
    state.nameFinished=true;
    setTimeout(renderName,260);
  }else{
    state.nameIndex=state.nameWritten.length;
    setTimeout(renderName,180);
  }
}
function tracerMarkup(helper, current,total){
  return `<div class="tracer-layout">
    <div class="canvas-card"><div class="helper-badge">${helper}</div><canvas id="mainCanvas"></canvas></div>
    <div class="bottom-actions">
      <button id="prevBtn" class="big-action secondary">← まえ</button>
      <button id="resetBtn" class="big-action secondary">🔄 もういちど</button>
      <span class="progress-mini">${current} / ${total}</span>
      <button id="nextLocalBtn" class="big-action primary">つぎ →</button>
    </div>
  </div>`;
}
function bindTracerButtons(prev,reset,next){
  $('#prevBtn').onclick=prev; $('#resetBtn').onclick=reset; $('#nextLocalBtn').onclick=next;
}

function renderLibrary(){
  const list=state.libraryType==='trace'?DATA.traceItems:DATA.coloringItems;
  const cats=[...new Set(list.map(x=>x.category))];
  if(!state.currentCategory || !cats.includes(state.currentCategory)) state.currentCategory=cats[0];
  setTop({title:state.libraryType==='trace'?'なぞりえ':'ぬりえ',back:true});
  screen.innerHTML=`<div class="library-layout">
    <div class="categories">${cats.map(c=>`<button class="category-btn ${c===state.currentCategory?'active':''}" data-cat="${c}">${catEmoji(c)} ${c}</button>`).join('')}</div>
    <div class="item-grid">${list.filter(x=>x.category===state.currentCategory).map(x=>`
      <button class="item-card" data-id="${x.id}">
        <div class="thumb ${customAsset(x)==null?'':'thumb-image'}">${customThumbHtml(x)}<span class="thumb-sparkle">✨</span></div>
        <div class="item-name">${x.name}</div>
        <div class="item-hint">${state.libraryType==='trace'?'なぞってみよう':'ぬってみよう'}</div>
      </button>`).join('')}</div>
  </div>`;
  screen.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>{state.currentCategory=b.dataset.cat;renderLibrary()});
  screen.querySelectorAll('.item-card').forEach(b=>b.onclick=()=>{
    const item=list.find(x=>x.id===b.dataset.id); state.currentItem=item;
    route(state.libraryType==='trace'?'trace':'coloring',{currentItem:item});
  });
}

function catEmoji(c){return ({'乗り物':'🚗','電車':'🚄','空':'✈️','飛行機':'✈️','恐竜':'🦖','動物':'🐶','食べ物':'🍎','かたち':'⭐','自然':'🌳'})[c]||'🎨'}
const CUSTOM_ASSETS = {"airplane": {"thumb": "./assets/processed/airplane_thumb.jpg", "traceBg": "./assets/processed/airplane_trace.jpg", "colorBg": "./assets/processed/airplane_colorbg.jpg", "outline": "./assets/processed/airplane_outline.png"}, "apple": {"thumb": "./assets/processed/apple_thumb.jpg", "traceBg": "./assets/processed/apple_trace.jpg", "colorBg": "./assets/processed/apple_colorbg.jpg", "outline": "./assets/processed/apple_outline.png"}, "banana": {"thumb": "./assets/processed/banana_thumb.jpg", "traceBg": "./assets/processed/banana_trace.jpg", "colorBg": "./assets/processed/banana_colorbg.jpg", "outline": "./assets/processed/banana_outline.png"}, "bus": {"thumb": "./assets/processed/bus_thumb.jpg", "traceBg": "./assets/processed/bus_trace.jpg", "colorBg": "./assets/processed/bus_colorbg.jpg", "outline": "./assets/processed/bus_outline.png"}, "cake": {"thumb": "./assets/processed/cake_thumb.jpg", "traceBg": "./assets/processed/cake_trace.jpg", "colorBg": "./assets/processed/cake_colorbg.jpg", "outline": "./assets/processed/cake_outline.png"}, "car": {"thumb": "./assets/processed/car_thumb.jpg", "traceBg": "./assets/processed/car_trace.jpg", "colorBg": "./assets/processed/car_colorbg.jpg", "outline": "./assets/processed/car_outline.png"}, "cat": {"thumb": "./assets/processed/cat_thumb.jpg", "traceBg": "./assets/processed/cat_trace.jpg", "colorBg": "./assets/processed/cat_colorbg.jpg", "outline": "./assets/processed/cat_outline.png"}, "dog": {"thumb": "./assets/processed/dog_thumb.jpg", "traceBg": "./assets/processed/dog_trace.jpg", "colorBg": "./assets/processed/dog_colorbg.jpg", "outline": "./assets/processed/dog_outline.png"}, "elephant": {"thumb": "./assets/processed/elephant_thumb.jpg", "traceBg": "./assets/processed/elephant_trace.jpg", "colorBg": "./assets/processed/elephant_colorbg.jpg", "outline": "./assets/processed/elephant_outline.png"}, "fire": {"thumb": "./assets/processed/fire_thumb.jpg", "traceBg": "./assets/processed/fire_trace.jpg", "colorBg": "./assets/processed/fire_colorbg.jpg", "outline": "./assets/processed/fire_outline.png"}, "flower": {"thumb": "./assets/processed/flower_thumb.jpg", "traceBg": "./assets/processed/flower_trace.jpg", "colorBg": "./assets/processed/flower_colorbg.jpg", "outline": "./assets/processed/flower_outline.png"}, "helicopter": {"thumb": "./assets/processed/helicopter_thumb.jpg", "traceBg": "./assets/processed/helicopter_trace.jpg", "colorBg": "./assets/processed/helicopter_colorbg.jpg", "outline": "./assets/processed/helicopter_outline.png"}, "icecream": {"thumb": "./assets/processed/icecream_thumb.jpg", "traceBg": "./assets/processed/icecream_trace.jpg", "colorBg": "./assets/processed/icecream_colorbg.jpg", "outline": "./assets/processed/icecream_outline.png"}, "jet": {"thumb": "./assets/processed/jet_thumb.jpg", "traceBg": "./assets/processed/jet_trace.jpg", "colorBg": "./assets/processed/jet_colorbg.jpg", "outline": "./assets/processed/jet_outline.png"}, "lion": {"thumb": "./assets/processed/lion_thumb.jpg", "traceBg": "./assets/processed/lion_trace.jpg", "colorBg": "./assets/processed/lion_colorbg.jpg", "outline": "./assets/processed/lion_outline.png"}, "monorail": {"thumb": "./assets/processed/monorail_thumb.jpg", "traceBg": "./assets/processed/monorail_trace.jpg", "colorBg": "./assets/processed/monorail_colorbg.jpg", "outline": "./assets/processed/monorail_outline.png"}, "panda": {"thumb": "./assets/processed/panda_thumb.jpg", "traceBg": "./assets/processed/panda_trace.jpg", "colorBg": "./assets/processed/panda_colorbg.jpg", "outline": "./assets/processed/panda_outline.png"}, "police": {"thumb": "./assets/processed/police_thumb.jpg", "traceBg": "./assets/processed/police_trace.jpg", "colorBg": "./assets/processed/police_colorbg.jpg", "outline": "./assets/processed/police_outline.png"}, "pteranodon": {"thumb": "./assets/processed/pteranodon_thumb.jpg", "traceBg": "./assets/processed/pteranodon_trace.jpg", "colorBg": "./assets/processed/pteranodon_colorbg.jpg", "outline": "./assets/processed/pteranodon_outline.png"}, "rainbow": {"thumb": "./assets/processed/rainbow_thumb.jpg", "traceBg": "./assets/processed/rainbow_trace.jpg", "colorBg": "./assets/processed/rainbow_colorbg.jpg", "outline": "./assets/processed/rainbow_outline.png"}, "rocket": {"thumb": "./assets/processed/rocket_thumb.jpg", "traceBg": "./assets/processed/rocket_trace.jpg", "colorBg": "./assets/processed/rocket_colorbg.jpg", "outline": "./assets/processed/rocket_outline.png"}, "shinkansen": {"thumb": "./assets/processed/shinkansen_thumb.jpg", "traceBg": "./assets/processed/shinkansen_trace.jpg", "colorBg": "./assets/processed/shinkansen_colorbg.jpg", "outline": "./assets/processed/shinkansen_outline.png"}, "steam": {"thumb": "./assets/processed/steam_thumb.jpg", "traceBg": "./assets/processed/steam_trace.jpg", "colorBg": "./assets/processed/steam_colorbg.jpg", "outline": "./assets/processed/steam_outline.png"}, "stego": {"thumb": "./assets/processed/stego_thumb.jpg", "traceBg": "./assets/processed/stego_trace.jpg", "colorBg": "./assets/processed/stego_colorbg.jpg", "outline": "./assets/processed/stego_outline.png"}, "sun": {"thumb": "./assets/processed/sun_thumb.jpg", "traceBg": "./assets/processed/sun_trace.jpg", "colorBg": "./assets/processed/sun_colorbg.jpg", "outline": "./assets/processed/sun_outline.png"}, "train": {"thumb": "./assets/processed/train_thumb.jpg", "traceBg": "./assets/processed/train_trace.jpg", "colorBg": "./assets/processed/train_colorbg.jpg", "outline": "./assets/processed/train_outline.png"}, "tree": {"thumb": "./assets/processed/tree_thumb.jpg", "traceBg": "./assets/processed/tree_trace.jpg", "colorBg": "./assets/processed/tree_colorbg.jpg", "outline": "./assets/processed/tree_outline.png"}, "trex": {"thumb": "./assets/processed/trex_thumb.jpg", "traceBg": "./assets/processed/trex_trace.jpg", "colorBg": "./assets/processed/trex_colorbg.jpg", "outline": "./assets/processed/trex_outline.png"}, "triceratops": {"thumb": "./assets/processed/triceratops_thumb.jpg", "traceBg": "./assets/processed/triceratops_trace.jpg", "colorBg": "./assets/processed/triceratops_colorbg.jpg", "outline": "./assets/processed/triceratops_outline.png"}, "truck": {"thumb": "./assets/processed/truck_thumb.jpg", "traceBg": "./assets/processed/truck_trace.jpg", "colorBg": "./assets/processed/truck_colorbg.jpg", "outline": "./assets/processed/truck_outline.png"}};
function customAsset(item){return item && CUSTOM_ASSETS[item.id] ? CUSTOM_ASSETS[item.id] : null;}
const ASSET_VERSION='11';
function assetUrl(src){return src ? `${src}?v=${ASSET_VERSION}` : ''}
function customThumbHtml(item){
  const asset=customAsset(item);
  if(asset?.thumb) return `<img class="thumb-photo" src="${assetUrl(asset.thumb)}" alt="${item.name}" onload="this.nextElementSibling.style.display='none'" onerror="this.style.display='none'"><span class="thumb-fallback">${item.emoji}</span>`;
  return `<span class="thumb-fallback standalone">${item.emoji}</span>`;
}
function referenceImageHtml(item, mode='trace'){
  const asset=customAsset(item); if(!asset) return '';
  const src = mode==='color' ? asset.colorBg : asset.traceBg;
  return src ? `<img class="canvas-reference" src="${assetUrl(src)}" alt="" aria-hidden="true" onerror="this.style.display='none'">` : '';
}
function referenceOutlineHtml(item, mode='color'){
  const asset=customAsset(item); if(!asset) return '';
  return (mode==='color' && asset.outline) ? `<img class="canvas-outline" src="${assetUrl(asset.outline)}" alt="" aria-hidden="true" onerror="this.style.display='none'">` : '';
}
function renderTrace(){
  const item=state.currentItem;
  setTop({title:item.name,back:true});
  const list=DATA.traceItems, idx=list.findIndex(x=>x.id===item.id);
  screen.innerHTML = `<div class="tracer-layout">
    <div class="canvas-card cute-canvas custom-guide-card"><div class="helper-badge">${item.emoji} うすいえを なぞってね</div>${referenceImageHtml(item,'trace')}<canvas id="mainCanvas"></canvas></div>
    <div class="bottom-actions">
      <button id="resetBtn" class="big-action secondary">🔄 もういちど</button>
      <span class="progress-mini">${idx+1} / ${list.length}</span>
      <button id="saveTrace" class="big-action orange">💾 ほぞん</button>
      <button id="nextLocalBtn" class="big-action primary">つぎ →</button>
    </div>
  </div>`;
  initTraceCanvas({kind:'illustration',item,manualJudge:true});
  $('#resetBtn').onclick=renderTrace;
  $('#saveTrace').onclick=()=>saveCanvas($('#mainCanvas'),item.name);
  $('#nextLocalBtn').onclick=()=>{state.currentItem=list[(idx+1)%list.length];renderTrace()};
}

function renderColoring(){
  const item=state.currentItem;
  setTop({title:item.name,back:true});
  screen.innerHTML=`<div class="coloring-layout">
    <div class="drawing-zone">
      <div class="canvas-card custom-guide-card"><div class="helper-badge">${item.emoji} すきな いろで ぬろう！</div>${referenceImageHtml(item,'color')}${referenceOutlineHtml(item,'color')}<canvas id="mainCanvas"></canvas></div>
      ${palettePanel('coloring',item)}
    </div>
    <div class="toolbar-bottom">
      <button id="undoBtn" class="big-action secondary">↶ もどす</button>
      <button id="redoBtn" class="big-action secondary">↷ やりなおす</button>
      <button id="clearBtn" class="big-action secondary">🗑️ けす</button>
      <button id="saveBtn" class="big-action orange">💾 ほぞん</button>
    </div>
  </div>`;
  initColoringCanvas(item);
  bindPalette('coloring');
  $('#undoBtn').onclick=undoCanvas; $('#redoBtn').onclick=redoCanvas;
  $('#clearBtn').onclick=()=>renderColoring();
  $('#saveBtn').onclick=()=>saveCanvas($('#mainCanvas'),item.name);
}

function judgeColoring(item){
  if(state.paintActions < 5){
    showToast('もうすこし いろを ぬってみよう 🎨');
    playGentleNo();
    return;
  }
  complete(item);
}

function renderNotebook(){
  topbar.classList.add('hidden');
  adultBtn.classList.add('hidden');
  screen.innerHTML=`<div class="notebook-fullscreen">
    <div class="canvas-card notebook-canvas-card"><canvas id="mainCanvas"></canvas></div>
    <button id="notebookBack" class="notebook-float notebook-back">← もどる</button>
    <button id="saveBtn" class="notebook-float notebook-save">💾 ほぞん</button>
    <div class="notebook-floating-tools">
      <div class="notebook-color-row">${palette.map(([v,n],i)=>`<button class="color-dot ${i===0?'active':''} ${v==='rainbow'?'rainbow':''}" data-color="${v}" title="${n}" style="${v==='rainbow'?'':`background:${v}`}"></button>`).join('')}</div>
      <div class="notebook-tool-row">
        <button class="tool-btn active" data-tool="pen">✏️ ペン</button>
        <button class="tool-btn" data-tool="crayon">🖍️ クレヨン</button>
        <button class="tool-btn" data-tool="eraser">🧽 けしごむ</button>
        <button class="size-btn" data-size="thin">ほそい</button>
        <button class="size-btn active" data-size="normal">ふつう</button>
        <button class="size-btn" data-size="thick">ふとい</button>
        <button id="undoBtn" class="tool-btn">↶</button>
        <button id="redoBtn" class="tool-btn">↷</button>
        <button id="clearBtn" class="tool-btn danger-mini">🗑️</button>
      </div>
    </div>
  </div>`;
  initNotebookCanvas();
  bindPalette('notebook');
  $('#notebookBack').onclick=()=>route('home');
  $('#undoBtn').onclick=undoCanvas; $('#redoBtn').onclick=redoCanvas;
  $('#clearBtn').onclick=()=>renderNotebook();
  $('#saveBtn').onclick=()=>saveCanvas($('#mainCanvas'),'じゆうちょう');
}

function palettePanel(kind,item=null){
  return `<aside class="palette-panel">
    <div class="panel-title">🎨 いろを えらぼう</div>
    <div class="palette">${palette.map(([v,n],i)=>`<button class="color-dot ${i===0?'active':''} ${v==='rainbow'?'rainbow':''}" data-color="${v}" title="${n}" style="${v==='rainbow'?'':`background:${v}`}"></button>`).join('')}</div>
    ${kind==='coloring'?(customAsset(item)?`<div class="panel-title" style="margin-top:12px">ぬりかた</div><div class="tool-stack single-tool">
      <button class="tool-btn active" data-mode="free">🖍️ じゆうぬり</button>
    </div>`:`<div class="panel-title" style="margin-top:12px">ぬりかた</div><div class="tool-stack">
      <button class="tool-btn active" data-mode="free">🖍️ じゆう</button>
      <button class="tool-btn" data-mode="fill">🪣 かんたん</button>
    </div>`):`<div class="panel-title" style="margin-top:12px">どうぐ</div><div class="tool-stack">
      <button class="tool-btn active" data-tool="pen">✏️ ペン</button>
      <button class="tool-btn" data-tool="crayon">🖍️ クレヨン</button>
      <button class="tool-btn" data-tool="eraser">🧽 けしごむ</button>
    </div>`}
    <div class="panel-title" style="margin-top:12px">🖍️ ふとさ</div>
    <div class="tool-stack">
      <button class="size-btn" data-size="thin">ほそい</button>
      <button class="size-btn active" data-size="normal">ふつう</button>
      <button class="size-btn" data-size="thick">ふとい</button>
    </div>
  </aside>`;
}
function bindPalette(kind){
  screen.querySelectorAll('.color-dot').forEach(b=>b.onclick=()=>{
    state.color=b.dataset.color;
    screen.querySelectorAll('.color-dot').forEach(x=>x.classList.remove('active')); b.classList.add('active');
  });
  screen.querySelectorAll('[data-size]').forEach(b=>b.onclick=()=>{
    state.brushSize=b.dataset.size;
    screen.querySelectorAll('[data-size]').forEach(x=>x.classList.remove('active')); b.classList.add('active');
  });
  if(kind==='coloring'){
    screen.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{
      state.drawMode=b.dataset.mode;
      screen.querySelectorAll('[data-mode]').forEach(x=>x.classList.remove('active')); b.classList.add('active');
    });
  }else{
    screen.querySelectorAll('[data-tool]').forEach(b=>b.onclick=()=>{
      state.notebookTool=b.dataset.tool;
      screen.querySelectorAll('[data-tool]').forEach(x=>x.classList.remove('active')); b.classList.add('active');
    });
  }
}

backBtn.onclick=()=>{
  if(state.view==='kana'||state.view==='name'||state.view==='notebook') route('home');
  else if(state.view==='trace') route('library',{libraryType:'trace',currentCategory:state.currentItem.category});
  else if(state.view==='coloring') route('library',{libraryType:'color',currentCategory:state.currentItem.category});
  else if(state.view==='library') route('home');
};

let canvas=null, ctx=null, guideCanvas=null, guideCtx=null, dpr=1, pointerDown=false, lastPoint=null, traceHits=0, traceMoves=0, ro=null;
const imageCache = {};
function getCachedImage(src, onload){
  if(!src) return null;
  if(imageCache[src]?.loaded){ if(onload) onload(imageCache[src].img); return imageCache[src].img; }
  if(!imageCache[src]){
    const img=new Image();
    imageCache[src]={img,loaded:false};
    img.onload=()=>{imageCache[src].loaded=true; if(onload) onload(img)};
    img.src=src;
  }else if(onload){
    const rec=imageCache[src];
    if(rec.loaded) onload(rec.img); else rec.img.addEventListener('load',()=>onload(rec.img),{once:true});
  }
  return imageCache[src].img;
}
function cleanupCanvas(){ if(ro){ro.disconnect();ro=null} canvas=null;ctx=null;guideCanvas=null;guideCtx=null;pointerDown=false;state.history=[];state.redo=[]; }
function fitCanvas(c){
  const rect=c.parentElement.getBoundingClientRect();
  dpr=Math.min(window.devicePixelRatio||1,2);
  c.width=Math.max(1,Math.floor(rect.width*dpr)); c.height=Math.max(1,Math.floor(rect.height*dpr));
  c.style.width=rect.width+'px'; c.style.height=rect.height+'px';
  const x=c.getContext('2d'); x.setTransform(dpr,0,0,dpr,0,0); return {ctx:x,w:rect.width,h:rect.height};
}
function setupCanvas(redraw){
  canvas=$('#mainCanvas'); const r=fitCanvas(canvas); ctx=r.ctx; redraw(r.w,r.h);
  ro=new ResizeObserver(()=>{ const rr=fitCanvas(canvas); redraw(rr.w,rr.h); }); ro.observe(canvas.parentElement);
}

function clearNearWhite(ctx2,w,h,alphaScale=.33){
  const img=ctx2.getImageData(0,0,w,h), d=img.data;
  for(let i=0;i<d.length;i+=4){
    const r=d[i], g=d[i+1], b=d[i+2];
    if(r>240&&g>240&&b>240){ d[i+3]=0; }
    else { d[i+3]=Math.max(36, Math.min(255, Math.round(d[i+3]*alphaScale))); }
  }
  ctx2.putImageData(img,0,0);
}
function drawFaintReference(ctx2,w,h,item,alphaScale=.33){
  const src=customAsset(item)?.traceBg;
  if(!src) return false;
  const draw=(img)=>{
    ctx2.save();
    ctx2.clearRect(0,0,w,h);
    const iw=img.naturalWidth||img.width, ih=img.naturalHeight||img.height;
    const scale=Math.min((w*0.78)/iw,(h*0.72)/ih);
    const dw=iw*scale, dh=ih*scale, dx=(w-dw)/2, dy=(h-dh)/2+4;
    ctx2.drawImage(img,dx,dy,dw,dh);
    clearNearWhite(ctx2,w,h,alphaScale);
    ctx2.restore();
    if(ctx && guideCanvas && ctx2===guideCtx){ ctx.clearRect(0,0,w,h); ctx.fillStyle='#fff'; ctx.fillRect(0,0,w,h); ctx.drawImage(guideCanvas,0,0,w,h); }
  };
  const cached=getCachedImage(src,draw);
  if(cached && imageCache[src]?.loaded){ draw(cached); }
  return true;
}

function initTraceCanvas(opts){
  traceHits=0;traceMoves=0;
  setupCanvas((w,h)=>{
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);
    const customRef = !!customAsset(opts.item);
    if(customRef){
      guideCanvas=null; guideCtx=null;
      ctx.clearRect(0,0,w,h); // 背景画像はDOMレイヤー。描画Canvasは透明のまま。
    }else{
      guideCanvas=document.createElement('canvas'); guideCanvas.width=Math.floor(w);guideCanvas.height=Math.floor(h); guideCtx=guideCanvas.getContext('2d');
      guideCtx.clearRect(0,0,w,h);
      if(opts.kind==='text') drawTextGuide(guideCtx,w,h,opts.text,opts.opacity,opts.whole);
      else drawIllustration(guideCtx,w,h,opts.item,true);
      ctx.drawImage(guideCanvas,0,0,w,h);
    }
    attachTraceEvents(opts);
  });
}

function drawTextGuide(g,w,h,text,opacity=.22,whole=false){
  const len=[...text].length;
  const size=whole?Math.min(h*.58,w/(Math.max(2,len)*.9)):Math.min(h*.72,w*.48);
  g.textAlign='center';g.textBaseline='middle';
  g.font=`900 ${size}px "Hiragino Maru Gothic ProN","Yu Gothic","Meiryo",sans-serif`;
  g.strokeStyle=`rgba(86,142,173,${Math.max(.18,opacity+.05)})`; g.lineWidth=Math.max(7,size*.052); g.setLineDash([]);
  g.strokeText(text,w/2,h/2+size*.05);
  g.fillStyle=`rgba(106,160,188,${Math.max(.07,opacity*.48)})`;g.fillText(text,w/2,h/2+size*.05);
  g.fillStyle='#ff6e6e';g.beginPath();g.arc(w*.24,h*.25,10,0,Math.PI*2);g.fill();
  g.fillStyle='#365c73';g.font='900 24px sans-serif';g.fillText('①',w*.24+30,h*.25);
}

function attachTraceEvents(opts){
  const start=e=>{e.preventDefault();pointerDown=true;lastPoint=pt(e);};
  const move=e=>{
    if(!pointerDown)return;e.preventDefault();const p=pt(e); const base=Math.max(20,Math.min(canvas.clientWidth,canvas.clientHeight)*.045);
    const pen=Math.max(11,base*.5);
    ctx.globalCompositeOperation='source-over';
    ctx.globalAlpha=1;
    ctx.strokeStyle='#2f9df4';ctx.lineWidth=pen;ctx.lineCap='round';ctx.lineJoin='round';
    ctx.beginPath();ctx.moveTo(lastPoint.x,lastPoint.y);ctx.lineTo(p.x,p.y);ctx.stroke();
    const hit=guideCtx ? guideHit(p.x,p.y,Math.max(14,pen*1.15)) : true; traceHits += hit?1:0; traceMoves++; lastPoint=p;
  };
  const end=e=>{
    if(!pointerDown)return; pointerDown=false;
    if(opts.manualJudge) return;
    if(traceMoves>18 && traceHits/traceMoves>.48){
      if(opts.kind==='text') complete({speechText:opts.text||'',sound:'text'});
      else complete(opts.item);
    }
  };
  canvas.onpointerdown=start;canvas.onpointermove=move;canvas.onpointerup=end;canvas.onpointercancel=end;canvas.onpointerleave=end;
}
function guideHit(x,y,r){
  if(!guideCtx)return false;
  const W=guideCanvas.width,H=guideCanvas.height, x0=Math.max(0,Math.floor(x-r)),y0=Math.max(0,Math.floor(y-r));
  const ww=Math.min(W-x0,Math.ceil(r*2)),hh=Math.min(H-y0,Math.ceil(r*2)); if(ww<=0||hh<=0)return false;
  const d=guideCtx.getImageData(x0,y0,ww,hh).data;
  for(let i=3;i<d.length;i+=16) if(d[i]>18)return true;
  return false;
}

function initColoringCanvas(item){
  state.history=[];state.redo=[];state.drawMode='free';state.paintActions=0;
  setupCanvas((w,h)=>{
    ctx.clearRect(0,0,w,h);
    if(customAsset(item)){
      // 添付画像は背面DOMレイヤー。Canvasは透明で、色は必ず前面に描く。
    }else{
      ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);
      drawIllustration(ctx,w,h,item,false);
    }
    snapshot();
    attachPaintEvents(item);
  });
}
function initNotebookCanvas(){
  state.history=[];state.redo=[];state.notebookTool='pen';
  setupCanvas((w,h)=>{
    ctx.clearRect(0,0,w,h);ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);snapshot();
    attachNotebookEvents();
  });
}

function attachPaintEvents(item){
  canvas.onpointerdown=e=>{
    e.preventDefault();
    if(state.drawMode==='fill'){
      snapshot(); state.paintActions += 5;
      const p=pt(e), color=resolveColor(p.x,p.y);
      floodFill(Math.floor(p.x*dpr),Math.floor(p.y*dpr),hexToRgba(color),34);
      if(!customAsset(item)) drawIllustration(ctx,canvas.clientWidth,canvas.clientHeight,item,false,true);
      return;
    }
    pointerDown=true; lastPoint=pt(e); snapshot(); state.paintActions += 1;
  };
  canvas.onpointermove=e=>{if(!pointerDown||state.drawMode!=='free')return;e.preventDefault();const p=pt(e);drawStroke(lastPoint,p,false);lastPoint=p;state.paintActions += 1;};
  canvas.onpointerup=canvas.onpointercancel=()=>{pointerDown=false;if(!customAsset(item))drawIllustration(ctx,canvas.clientWidth,canvas.clientHeight,item,false,true)};
}
function attachNotebookEvents(){
  canvas.onpointerdown=e=>{e.preventDefault();pointerDown=true;lastPoint=pt(e);snapshot()};
  canvas.onpointermove=e=>{if(!pointerDown)return;e.preventDefault();const p=pt(e);drawStroke(lastPoint,p,state.notebookTool==='eraser');lastPoint=p};
  canvas.onpointerup=canvas.onpointercancel=()=>pointerDown=false;
}
function pt(e){const r=canvas.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top}}
function brushWidth(){return state.brushSize==='thin'?7:state.brushSize==='thick'?30:16}
function resolveColor(x,y){
  if(state.color!=='rainbow')return state.color;
  const hue=Math.round(((x/(canvas.clientWidth||1))*280+(y/(canvas.clientHeight||1))*80)%360);
  return hslToHex(hue,85,58);
}
function drawStroke(a,b,eraser){
  ctx.globalCompositeOperation = eraser ? 'destination-out' : 'source-over';
  const color=resolveColor(b.x,b.y);
  ctx.strokeStyle=color;ctx.lineWidth=brushWidth();ctx.lineCap='round';ctx.lineJoin='round';
  if(state.notebookTool==='crayon'&&!eraser&&state.view==='notebook'){ctx.globalAlpha=.72;ctx.lineWidth=brushWidth()*1.25}else ctx.globalAlpha=1;
  ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
  ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';
}
function snapshot(){
  if(!canvas)return;
  try{
    state.history.push(canvas.toDataURL('image/png')); if(state.history.length>16)state.history.shift(); state.redo=[];
  }catch(e){}
}
function restoreDataUrl(url){
  const img=new Image();img.onload=()=>{ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);ctx.drawImage(img,0,0,canvas.clientWidth,canvas.clientHeight)};img.src=url;
}
function currentCanvasUrl(){try{return canvas.toDataURL('image/png')}catch(e){return null}}
function undoCanvas(){
  if(!state.history.length)return;
  const current=currentCanvasUrl(); if(current)state.redo.push(current);
  const prev=state.history.pop(); restoreDataUrl(prev);
}
function redoCanvas(){
  if(!state.redo.length)return;
  const current=currentCanvasUrl(); if(current)state.history.push(current);
  const next=state.redo.pop(); restoreDataUrl(next);
}

function floodFill(px,py,fill,tol=28){
  const raw=ctx.getImageData(0,0,canvas.width,canvas.height),d=raw.data,W=raw.width,H=raw.height;
  if(px<0||py<0||px>=W||py>=H)return;
  const idx=(py*W+px)*4, target=[d[idx],d[idx+1],d[idx+2],d[idx+3]];
  if(close(target,fill,10))return;
  const stack=[[px,py]],seen=new Uint8Array(W*H), max=180000, step=Math.max(1,Math.floor(dpr));
  let count=0;
  while(stack.length&&count<max){
    const [x,y]=stack.pop(),si=y*W+x;if(seen[si])continue;seen[si]=1;count++;
    const i=si*4, cur=[d[i],d[i+1],d[i+2],d[i+3]];
    if(!close(cur,target,tol))continue;
    d[i]=fill[0];d[i+1]=fill[1];d[i+2]=fill[2];d[i+3]=255;
    if(x>step)stack.push([x-step,y]);if(x<W-step)stack.push([x+step,y]);if(y>step)stack.push([x,y-step]);if(y<H-step)stack.push([x,y+step]);
  }
  ctx.putImageData(raw,0,0);
}
function close(a,b,t){return Math.abs(a[0]-b[0])<t&&Math.abs(a[1]-b[1])<t&&Math.abs(a[2]-b[2])<t}
function hexToRgba(hex){if(hex[0]!=='#')hex='#ff5e68';const n=parseInt(hex.slice(1),16);return[(n>>16)&255,(n>>8)&255,n&255,255]}
function hslToHex(h,s,l){s/=100;l/=100;const c=(1-Math.abs(2*l-1))*s,x=c*(1-Math.abs((h/60)%2-1)),m=l-c/2;let r=0,g=0,b=0;if(h<60)[r,g,b]=[c,x,0];else if(h<120)[r,g,b]=[x,c,0];else if(h<180)[r,g,b]=[0,c,x];else if(h<240)[r,g,b]=[0,x,c];else if(h<300)[r,g,b]=[x,0,c];else[r,g,b]=[c,0,x];return '#'+[r,g,b].map(v=>Math.round((v+m)*255).toString(16).padStart(2,'0')).join('')}

function drawIllustration(g,w,h,item,trace=false,outlineOnly=false){
  g.save();
  const cx=w*.5, cy=h*.52, S=Math.min(w,h)*.31;
  const lineColor=trace?'rgba(85,155,187,.34)':'#344b5c';
  const softFill=trace?'rgba(157,221,242,.055)':'#fffdf8';
  g.lineCap='round';g.lineJoin='round';g.strokeStyle=lineColor;g.lineWidth=trace?8:9;g.setLineDash([]);
  const fillShape=()=>{if(!outlineOnly){g.fillStyle=softFill;g.fill()}g.stroke()};
  const path=(pts,close=true)=>{g.beginPath();g.moveTo(cx+pts[0][0]*S,cy+pts[0][1]*S);for(const p of pts.slice(1))g.lineTo(cx+p[0]*S,cy+p[1]*S);if(close)g.closePath();fillShape()};
  const ellipse=(x,y,rx,ry)=>{g.beginPath();g.ellipse(cx+x*S,cy+y*S,rx*S,ry*S,0,0,Math.PI*2);fillShape()};
  const rr=(x,y,ww,hh,r=.12)=>{g.beginPath();g.roundRect(cx+x*S,cy+y*S,ww*S,hh*S,r*S);fillShape()};
  const line=(pts)=>{g.beginPath();g.moveTo(cx+pts[0][0]*S,cy+pts[0][1]*S);for(const p of pts.slice(1))g.lineTo(cx+p[0]*S,cy+p[1]*S);g.stroke()};
  const bez=(p0,c1,c2,p1)=>{g.beginPath();g.moveTo(cx+p0[0]*S,cy+p0[1]*S);g.bezierCurveTo(cx+c1[0]*S,cy+c1[1]*S,cx+c2[0]*S,cy+c2[1]*S,cx+p1[0]*S,cy+p1[1]*S);g.stroke()};
  const eye=(x,y,r=.085)=>{
    g.save();g.setLineDash([]);g.lineWidth=trace?5:6;g.strokeStyle=lineColor;
    g.beginPath();g.ellipse(cx+x*S,cy+y*S,r*S,r*1.18*S,0,0,Math.PI*2);
    if(!trace){g.fillStyle='#263b49';g.fill()}g.stroke();
    if(!trace){g.fillStyle='#fff';g.beginPath();g.arc(cx+(x-.025)*S,cy+(y-.035)*S,r*.33*S,0,Math.PI*2);g.fill()}
    g.restore();
  };
  const blush=(x,y)=>{if(trace)return;g.save();g.fillStyle='rgba(255,143,164,.36)';g.beginPath();g.ellipse(cx+x*S,cy+y*S,.12*S,.055*S,0,0,Math.PI*2);g.fill();g.restore()};
  const smile=(x,y,scale=1)=>{g.save();g.strokeStyle=lineColor;g.lineWidth=trace?4:5;g.beginPath();g.arc(cx+x*S,cy+y*S,.18*S*scale,.1*Math.PI,.9*Math.PI);g.stroke();g.restore()};
  const face=(x=0,y=0,scale=1)=>{eye(x-.18*scale,y-.05*scale,.075*scale);eye(x+.18*scale,y-.05*scale,.075*scale);blush(x-.34*scale,y+.08*scale);blush(x+.34*scale,y+.08*scale);smile(x,y+.10*scale,.8*scale)};
  const wheel=(x,y)=>{ellipse(x,y,.17,.17);ellipse(x,y,.07,.07)};

  const id=item.id;

  // くるま系：丸い車体＋大きな窓＋にっこり顔
  if(['car','police','fire','bus','truck'].includes(id)){
    if(id==='police'){
      // 参考画像に合わせた横向きパトカー
      path([[-1.18,.10],[-1.02,-.28],[-.66,-.56],[.22,-.56],[.58,-.26],[1.02,-.22],[1.16,.08],[1.08,.28],[-1.08,.28]],true);
      line([[-1.08,.28],[1.08,.28]]);
      rr(-.72,-.40,.56,.34,.05); rr(-.04,-.40,.48,.34,.05);
      wheel(-.62,.34); wheel(.62,.34);
      rr(-.10,-.82,.52,.17,.04);
      if(!trace){
        g.save();
        g.fillStyle='rgba(85,155,244,.18)'; g.beginPath(); g.roundRect(cx-1.08*S,cy+.00*S,2.16*S,.28*S,.12*S); g.fill();
        g.fillStyle='rgba(130,196,255,.16)'; g.beginPath(); g.roundRect(cx-.74*S,cy-.38*S,.54*S,.28*S,.05*S); g.fill(); g.beginPath(); g.roundRect(cx-.02*S,cy-.38*S,.46*S,.28*S,.05*S); g.fill();
        g.fillStyle='rgba(255,92,92,.12)'; g.beginPath(); g.roundRect(cx-.10*S,cy-.82*S,.17*S,.17*S,.04*S); g.fill();
        g.fillStyle='rgba(92,160,255,.12)'; g.beginPath(); g.roundRect(cx+.07*S,cy-.82*S,.17*S,.17*S,.04*S); g.fill();
        g.restore();
      }
      g.save();
      g.setLineDash([]); g.textAlign='center'; g.textBaseline='middle';
      g.fillStyle=trace? 'rgba(180,90,90,.45)' : '#e65555';
      g.font=`900 ${Math.max(20,S*.22)}px "Hiragino Maru Gothic ProN","Yu Gothic","Meiryo",sans-serif`;
      g.fillText('パトロール', cx-.02*S, cy-.02*S);
      g.restore();
      if(!trace){
        g.save(); g.strokeStyle='#ffb245'; g.lineWidth=5;
        line([[-.22,-.80],[-.36,-.92]]); line([[-.16,-.88],[-.30,-1.02]]);
        line([[.54,-.80],[.68,-.92]]); line([[.48,-.88],[.62,-1.02]]);
        g.restore();
      }
    } else {
      rr(-1.12,-.10,2.24,.64,.18);
      if(id==='bus') rr(-.82,-.72,1.64,.68,.16);
      else if(id==='truck'){rr(-1.0,-.62,1.02,.48,.12);rr(.12,-.58,.78,.44,.12)}
      else path([[-.72,-.10],[-.44,-.63],[.42,-.63],[.78,-.10]],true);
      wheel(-.70,.48);wheel(.72,.48);
      if(id==='fire'){rr(-.78,-.80,1.42,.16,.05);line([[.52,-.62],[.98,-.96]])}
      face(.06,.10,.72);
    }
  }
  else if(['shinkansen','train','steam','monorail'].includes(id)){
    if(id==='steam'){
      rr(-1.02,-.44,.72,.68,.10);ellipse(.18,-.10,.72,.46);rr(.45,-.76,.22,.42,.06);wheel(-.62,.47);wheel(.20,.47);wheel(.70,.47);face(.24,-.10,.58);
    }else{
      rr(-1.15,-.60,2.30,.96,.20);
      for(let x=-.72;x<=.42;x+=.38)rr(x,-.40,.26,.25,.05);
      wheel(-.72,.47);wheel(.72,.47);
      if(id==='shinkansen')path([[1.12,-.58],[1.48,-.12],[1.10,.36]],true);
      if(id==='monorail')line([[-1.30,.68],[1.30,.68]]);
      face(.50,.08,.50);
    }
  }
  else if(['airplane','jet'].includes(id)){
    path([[-1.36,.00],[.86,-.10],[1.34,.04],[.86,.20],[-1.36,.13]],true);
    path([[-.34,-.04],[.18,-.80],[.55,-.72],[.25,-.02]],true);
    path([[-.22,.12],[.36,.72],[.66,.64],[.28,.12]],true);
    face(.60,.05,.45);
  }
  else if(id==='helicopter'){
    ellipse(.12,.02,.78,.44);rr(-.82,-.13,.46,.22,.07);line([[-1.28,-.02],[-.75,-.02]]);line([[-1.30,-.28],[-1.30,.22]]);line([[-.60,-.48],[.72,-.48]]);line([[.06,-.48],[.06,-.70]]);face(.25,.04,.48);
  }
  else if(id==='rocket'){
    ellipse(0,-.12,.43,.82);path([[-.42,.18],[-.76,.62],[-.32,.53]],true);path([[.42,.18],[.76,.62],[.32,.53]],true);path([[-.18,.68],[0,1.14],[.18,.68]],true);ellipse(0,-.34,.16,.16);face(0,.10,.42);
  }
  // きょうりゅう：頭を大きくしたちびキャラ
  else if(['trex','triceratops','stego','pteranodon'].includes(id)){
    if(id==='pteranodon'){
      ellipse(0,-.10,.42,.38);path([[-.18,-.06],[-1.18,-.55],[-.62,.12],[-.16,.25]],true);path([[.18,-.06],[1.18,-.55],[.62,.12],[.16,.25]],true);path([[.20,-.30],[.78,-.42],[.32,-.10]],true);eye(-.10,-.18,.07);eye(.12,-.18,.07);smile(.02,-.02,.55);
    }else{
      ellipse(-.14,.24,.70,.48);ellipse(.55,-.28,.50,.44);bez([-.70,.22],[-1.20,-.02],[-1.40,.20],[-1.20,.38]);
      line([[-.34,.62],[-.46,1.04],[-.18,1.04],[-.02,.62]]);line([[.18,.62],[.20,1.04],[.48,1.04],[.48,.52]]);
      if(id==='trex'){line([[.34,.10],[.76,.20],[.52,.34]]);line([[.18,.05],[.48,.02],[.30,.18]])}
      if(id==='triceratops'){ellipse(.48,-.30,.60,.52);path([[.12,-.58],[.50,-.92],[.88,-.58]],true);line([[.72,-.60],[1.08,-.82]]);line([[.40,-.68],[.38,-1.00]])}
      if(id==='stego'){for(let x=-.70;x<=.24;x+=.22)path([[x,-.12],[x+.12,-.52],[x+.24,-.12]],true)}
      face(.58,-.25,.62);
    }
  }
  // どうぶつ：特徴を大きく、アニメ調
  else if(id==='cat'){
    // 参考画像に合わせた丸顔ねこ
    ellipse(0,0,.92,.82);
    path([[-.58,-.52],[-.72,-1.10],[-.30,-.78]],true);
    path([[.58,-.52],[.72,-1.10],[.30,-.78]],true);
    if(!trace){
      g.save();
      g.fillStyle='rgba(255,194,72,.16)';
      g.beginPath(); g.ellipse(cx,cy,.92*S,.82*S,0,0,Math.PI*2); g.fill();
      g.fillStyle='rgba(255,170,205,.26)';
      path([[-.50,-.54],[-.60,-.93],[-.34,-.72]],true);
      path([[.50,-.54],[.60,-.93],[.34,-.72]],true);
      g.restore();
      blush(-.42,.10); blush(.42,.10);
    }
    eye(-.26,-.08,.09); eye(.26,-.08,.09);
    path([[-.08,.08],[0,-.02],[.08,.08]],true);
    line([[0,.08],[0,.26]]);
    bez([-.22,.30],[-.16,.44],[-.06,.47],[0,.47]);
    bez([0,.47],[.06,.47],[.16,.44],[.22,.30]);
    line([[-.18,.14],[-.74,.04]]); line([[-.20,.22],[-.76,.24]]); line([[-.18,.30],[-.66,.48]]);
    line([[.18,.14],[.74,.04]]); line([[.20,.22],[.76,.24]]); line([[.18,.30],[.66,.48]]);
  }
  else if(id==='dog'){
    ellipse(0,.40,.58,.48);ellipse(0,-.35,.70,.60);
    ellipse(-.62,-.40,.27,.48);ellipse(.62,-.40,.27,.48);
    ellipse(-.22,.72,.22,.14);ellipse(.22,.72,.22,.14);bez([.50,.42],[.92,.12],[1.06,.46],[.86,.66]);
    face(0,-.30,.72);ellipse(0,-.10,.11,.08);
  }
  else if(id==='lion'){
    ellipse(0,-.32,1.00,.90);ellipse(0,-.32,.66,.58);ellipse(0,.48,.55,.42);ellipse(-.20,.78,.20,.13);ellipse(.20,.78,.20,.13);face(0,-.28,.70);ellipse(0,-.08,.10,.08);
  }
  else if(id==='panda'){
    ellipse(0,.38,.56,.45);ellipse(0,-.35,.70,.60);ellipse(-.52,-.82,.24,.24);ellipse(.52,-.82,.24,.24);
    ellipse(-.22,-.38,.18,.24);ellipse(.22,-.38,.18,.24);eye(-.22,-.38,.065);eye(.22,-.38,.065);ellipse(0,-.10,.10,.07);smile(0,.02,.62);ellipse(-.20,.72,.20,.13);ellipse(.20,.72,.20,.13);
  }
  else if(id==='elephant'){
    ellipse(0,.36,.60,.46);ellipse(0,-.34,.72,.62);ellipse(-.58,-.30,.38,.48);ellipse(.58,-.30,.38,.48);
    bez([.10,-.05],[.24,.34],[.12,.76],[-.04,.74]);eye(-.22,-.38,.07);eye(.22,-.38,.07);smile(0,-.08,.60);ellipse(-.20,.72,.20,.13);ellipse(.20,.72,.20,.13);
  }
  // たべもの・かたち・しぜん
  else if(id==='apple'){ellipse(-.18,.08,.54,.60);ellipse(.22,.08,.54,.60);line([[0,-.50],[.10,-.92]]);path([[.08,-.82],[.48,-.92],[.34,-.64]],true);face(.02,.12,.58)}
  else if(id==='banana'){g.beginPath();g.arc(cx,cy,S*.82,.15*Math.PI,1.12*Math.PI);g.arc(cx+.16*S,cy-.12*S,S*.60,1.18*Math.PI,.15*Math.PI,true);g.closePath();fillShape();face(-.02,.10,.52)}
  else if(id==='icecream'){path([[-.52,-.18],[0,1.00],[.52,-.18]],true);ellipse(0,-.44,.58,.44);face(0,-.42,.58)}
  else if(id==='cake'){rr(-.78,-.12,1.56,.66,.10);rr(-.58,-.54,1.16,.42,.10);line([[0,-.54],[0,-.92]]);ellipse(0,-1.00,.08,.15);face(0,.10,.58)}
  else if(id==='star'){const pts=[];for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?.46:1;pts.push([Math.cos(a)*r,Math.sin(a)*r])}path(pts,true);face(0,.08,.58)}
  else if(id==='heart'){g.beginPath();g.moveTo(cx,cy+.72*S);g.bezierCurveTo(cx-1.18*S,cy-.02*S,cx-.70*S,cy-.96*S,cx,cy-.46*S);g.bezierCurveTo(cx+.70*S,cy-.96*S,cx+1.18*S,cy-.02*S,cx,cy+.72*S);g.closePath();fillShape();face(0,.04,.56)}
  else if(id==='circle'){ellipse(0,0,.88,.88);face(0,.04,.60)}
  else if(id==='triangle'){path([[0,-.94],[-.92,.80],[.92,.80]],true);face(0,.20,.52)}
  else if(id==='square'){rr(-.86,-.86,1.72,1.72,.10);face(0,.04,.58)}
  else if(id==='flower'){ellipse(0,0,.20,.20);for(let i=0;i<8;i++){const a=i*Math.PI/4;ellipse(Math.cos(a)*.48,Math.sin(a)*.48,.24,.34)}line([[0,.68],[0,1.18]]);face(0,0,.36)}
  else if(id==='tree'){rr(-.16,.18,.32,.88,.05);ellipse(0,-.30,.76,.58);ellipse(-.48,-.06,.44,.42);ellipse(.48,-.06,.44,.42);face(0,-.20,.45)}
  else if(id==='sun'){ellipse(0,0,.54,.54);for(let i=0;i<12;i++){const a=i*Math.PI/6;line([[Math.cos(a)*.76,Math.sin(a)*.76],[Math.cos(a)*1.10,Math.sin(a)*1.10]])}face(0,.02,.46)}
  else if(id==='rainbow'){for(let r=1.05;r>=.45;r-=.18){g.beginPath();g.arc(cx,cy+.42*S,r*S,Math.PI,0);g.stroke()}face(0,.40,.48)}

  g.restore();
}

async function complete(item){
  if(state.completed)return;state.completed=true;
  playApplause();
  setTimeout(()=>{
    successWord.textContent=Math.random()>.5?'よくできました！':'じょうず！';
    successOverlay.classList.remove('hidden');
  },260);
}
$('#againBtn').onclick=()=>{
  successOverlay.classList.add('hidden');state.completed=false;
  if(state.view==='kana')renderKana(); else if(state.view==='name')renderName(); else if(state.view==='trace')renderTrace(); else if(state.view==='coloring')renderColoring();
};
$('#nextBtn').onclick=()=>{
  successOverlay.classList.add('hidden');state.completed=false;
  if(state.view==='kana'){state.kanaIndex=(state.kanaIndex+1)%DATA.kana.length;renderKana()}
  else if(state.view==='name'){renderName()}
  else if(state.view==='trace'){const l=DATA.traceItems,i=l.findIndex(x=>x.id===state.currentItem.id);state.currentItem=l[(i+1)%l.length];renderTrace()}
  else if(state.view==='coloring'){const l=DATA.coloringItems,i=l.findIndex(x=>x.id===state.currentItem.id);state.currentItem=l[(i+1)%l.length];renderColoring()}
};

let audioCtx=null,bgmTimer=null,bgmGain=null;
function ac(){if(!audioCtx)audioCtx=new (window.AudioContext||window.webkitAudioContext)(); if(audioCtx.state==='suspended')audioCtx.resume();return audioCtx}
function tone(freq=440,dur=.12,type='sine',vol=.05,delay=0){
  if(!settings.sfx)return;const A=ac(),o=A.createOscillator(),g=A.createGain();o.type=type;o.frequency.value=freq;g.gain.value=vol;o.connect(g).connect(A.destination);const t=A.currentTime+delay;o.start(t);g.gain.exponentialRampToValueAtTime(.001,t+dur);o.stop(t+dur);
}
function playClap(){playApplause()}
function playApplause(){
  if(!settings.sfx)return;
  const A=ac();
  const duration=.95, len=Math.floor(A.sampleRate*duration), buffer=A.createBuffer(1,len,A.sampleRate), data=buffer.getChannelData(0);
  for(let i=0;i<len;i++) data[i]=(Math.random()*2-1)*Math.exp(-i/(A.sampleRate*1.25));
  const src=A.createBufferSource();src.buffer=buffer;
  const hp=A.createBiquadFilter();hp.type='highpass';hp.frequency.value=650;
  const bp=A.createBiquadFilter();bp.type='bandpass';bp.frequency.value=1800;bp.Q.value=.65;
  const gain=A.createGain();gain.gain.value=.0001;
  src.connect(hp).connect(bp).connect(gain).connect(A.destination);
  const t=A.currentTime;
  for(let k=0;k<9;k++){
    const tt=t+k*.09+(Math.random()*.02);
    gain.gain.setValueAtTime(.008,tt);
    gain.gain.linearRampToValueAtTime(.055+Math.random()*.025,tt+.018);
    gain.gain.exponentialRampToValueAtTime(.006,tt+.065);
  }
  src.start(t);src.stop(t+duration);
}
function playGentleNo(){if(!settings.sfx)return;tone(360,.10,'sine',.018);tone(300,.12,'sine',.016,.11)}
function playObjectSound(f){
  if(!settings.sfx)return;
  if(f==='vehicle'){tone(120,.25,'sawtooth',.035);tone(150,.22,'sawtooth',.025,.18)}
  else if(f==='train'){[260,180,260,180].forEach((n,i)=>tone(n,.08,'square',.025,i*.11))}
  else if(f==='air'){tone(320,.4,'sawtooth',.02);tone(460,.22,'sine',.02,.18)}
  else if(f==='animal'){tone(330,.12,'triangle',.04);tone(250,.18,'triangle',.04,.12)}
  else if(f==='dino'){tone(110,.35,'sawtooth',.045);tone(80,.28,'square',.025,.2)}
  else if(f==='food'||f==='nature'||f==='shape'){tone(520,.12,'sine',.035);tone(720,.16,'sine',.03,.1)}
}
function startBgm(){
  stopBgm(); if(!settings.bgm)return;
  const A=ac(); bgmGain=A.createGain();bgmGain.gain.value=.012;bgmGain.connect(A.destination);
  const notes=[261.6,329.6,392,523.3], play=()=>{if(!settings.bgm)return;notes.forEach((n,i)=>{const o=A.createOscillator(),g=A.createGain();o.type='sine';o.frequency.value=n;g.gain.value=.18;o.connect(g).connect(bgmGain);const t=A.currentTime+i*.23;o.start(t);g.gain.exponentialRampToValueAtTime(.001,t+.38);o.stop(t+.4)})};
  play();bgmTimer=setInterval(play,4200);
}
function stopBgm(){if(bgmTimer)clearInterval(bgmTimer);bgmTimer=null;if(bgmGain){try{bgmGain.disconnect()}catch{}bgmGain=null}}

function paintReferenceWithDarkOutline(og,img,dx,dy,dw,dh,alpha=.5){
  const tmp=document.createElement('canvas'); tmp.width=Math.max(1,Math.round(dw)); tmp.height=Math.max(1,Math.round(dh));
  const tg=tmp.getContext('2d');
  tg.drawImage(img,0,0,tmp.width,tmp.height);
  const image=tg.getImageData(0,0,tmp.width,tmp.height), d=image.data;
  for(let i=0;i<d.length;i+=4){
    const r=d[i], g=d[i+1], b=d[i+2], a=d[i+3];
    if(a===0) continue;
    if(r>240&&g>240&&b>240){ d[i+3]=0; continue; }
    d[i]=Math.max(0,Math.round(r*0.82));
    d[i+1]=Math.max(0,Math.round(g*0.82));
    d[i+2]=Math.max(0,Math.round(b*0.82));
    d[i+3]=Math.round(a*alpha);
  }
  tg.putImageData(image,0,0);
  og.drawImage(tmp,dx,dy,dw,dh);
}

async function saveCanvas(c,name){
  try{
    let url=c.toDataURL('image/png');
    const asset=(state.view==='trace'||state.view==='coloring') ? customAsset(state.currentItem) : null;
    if(asset){
      const out=document.createElement('canvas');out.width=c.width;out.height=c.height;const og=out.getContext('2d');
      og.fillStyle='#fff';og.fillRect(0,0,out.width,out.height);
      const bgSrc = state.view==='trace' ? asset.traceBg : asset.colorBg;
      if(bgSrc){
        const bg=await new Promise((resolve,reject)=>{const im=new Image();im.onload=()=>resolve(im);im.onerror=reject;im.src=assetUrl(bgSrc)});
        og.drawImage(bg,0,0,out.width,out.height);
      }
      og.drawImage(c,0,0);
      if(state.view==='coloring' && asset.outline){
        const ol=await new Promise((resolve,reject)=>{const im=new Image();im.onload=()=>resolve(im);im.onerror=reject;im.src=assetUrl(asset.outline)});
        og.drawImage(ol,0,0,out.width,out.height);
      }
      url=out.toDataURL('image/png');
    }
    const a=document.createElement('a'); const stamp=new Date().toISOString().slice(0,10);
    a.download=`${stamp}_${name}.png`;a.href=url;document.body.appendChild(a);a.click();a.remove();showToast('💾 ほぞんしたよ！');
  }catch(e){showToast('ほぞんできませんでした')}
}

const modal=$('#settingsModal');
adultBtn.onclick=openSettings;
function openSettings(){
  modal.classList.remove('hidden');$('#nameInput').value=settings.name;$('#bgmToggle').checked=settings.bgm;$('#sfxToggle').checked=settings.sfx;
  document.querySelectorAll('#difficultyGroup button').forEach(b=>b.classList.toggle('active',b.dataset.value===settings.difficulty));
}
$('#closeSettings').onclick=()=>modal.classList.add('hidden');
document.querySelectorAll('#difficultyGroup button').forEach(b=>b.onclick=()=>document.querySelectorAll('#difficultyGroup button').forEach(x=>x.classList.toggle('active',x===b)));
$('#saveSettings').onclick=()=>{
  const name=$('#nameInput').value.trim().slice(0,12);
  const diff=document.querySelector('#difficultyGroup button.active')?.dataset.value||'normal';
  settings={name,difficulty:diff,bgm:$('#bgmToggle').checked,sfx:$('#sfxToggle').checked};saveSettings();modal.classList.add('hidden');
  state.nameIndex=0; state.nameWritten=[]; state.nameFinished=false;
  if(settings.bgm)startBgm();else stopBgm();showToast(name?'おなまえを ほぞんしました ✏️':'せっていを ほぞんしました');
  if(state.view==='name')renderName(); else if(state.view==='home')renderHome();
};
$('#resetSettings').onclick=()=>{settings={...DEFAULTS};saveSettings();modal.classList.add('hidden');showToast('せっていを リセットしました')};

['gesturestart','gesturechange','gestureend','dblclick','contextmenu','dragstart'].forEach(ev=>document.addEventListener(ev,e=>e.preventDefault(),{passive:false}));
document.addEventListener('touchmove',e=>{
  const allow=e.target.closest('.item-grid,.categories,.palette-panel,.modal-card');
  if(!allow)e.preventDefault();
},{passive:false});
let lastTouchEnd=0;document.addEventListener('touchend',e=>{const now=Date.now();if(now-lastTouchEnd<320)e.preventDefault();lastTouchEnd=now},{passive:false});

document.addEventListener('pointerdown',()=>{if(settings.bgm&&!audioCtx)startBgm()},{once:true});
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));
route('home');
})();
