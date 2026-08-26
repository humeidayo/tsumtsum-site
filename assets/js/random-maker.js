const numberForm = document.querySelector('#numberForm');
const maxNumberInput = document.querySelector('#maxNumberInput');
const numberResult = document.querySelector('#numberResult');
const numberResultPanel = document.querySelector('.number-result');
const numberDrawButton = document.querySelector('#numberDrawButton');
const numberError = document.querySelector('#numberError');
const numberHistoryList = document.querySelector('#numberHistory');

const itemForm = document.querySelector('#itemForm');
const candidateGrid = document.querySelector('#candidateGrid');
const candidateCount = document.querySelector('#candidateCount');
const addCandidateButton = document.querySelector('#addCandidate');
const itemResult = document.querySelector('#itemResult');
const itemResultPanel = document.querySelector('.item-result');
const itemDrawButton = document.querySelector('#itemDrawButton');
const itemError = document.querySelector('#itemError');
const itemHistoryList = document.querySelector('#itemHistory');

const MAX_CANDIDATES = 20;
const MIN_CANDIDATE_FIELDS = 2;
const HISTORY_LIMIT = 10;
const numberHistory = [];
const itemHistory = [];
let numberDrawing = false;
let itemDrawing = false;

function secureRandomIndex(maxExclusive) {
  if (!Number.isInteger(maxExclusive) || maxExclusive < 1) throw new RangeError('抽選範囲が不正です。');
  if (!window.crypto?.getRandomValues) return Math.floor(Math.random() * maxExclusive);
  const range = 0x100000000;
  const limit = Math.floor(range / maxExclusive) * maxExclusive;
  const buffer = new Uint32Array(1);
  do window.crypto.getRandomValues(buffer); while (buffer[0] >= limit);
  return buffer[0] % maxExclusive;
}

function wait(duration) {
  return new Promise((resolve) => window.setTimeout(resolve, duration));
}

function renderNumberHistory() {
  numberHistoryList.innerHTML = numberHistory.length
    ? numberHistory.map((value) => `<li>${value.toLocaleString('ja-JP')}</li>`).join('')
    : '<li class="empty-history">まだ抽選していません</li>';
}

function renderItemHistory() {
  itemHistoryList.innerHTML = '';
  if (!itemHistory.length) {
    const empty = document.createElement('li');
    empty.className = 'empty-history';
    empty.textContent = 'まだ抽選していません';
    itemHistoryList.append(empty);
    return;
  }
  itemHistory.forEach((value) => {
    const item = document.createElement('li');
    item.textContent = value;
    itemHistoryList.append(item);
  });
}

async function animateNumber(maximum, finalValue) {
  numberDrawing = true;
  numberDrawButton.disabled = true;
  numberResultPanel.classList.add('drawing');
  for (let index = 0; index < 9; index += 1) {
    numberResult.textContent = (secureRandomIndex(maximum) + 1).toLocaleString('ja-JP');
    await wait(42 + index * 5);
  }
  const display = finalValue.toLocaleString('ja-JP');
  numberResult.textContent = display;
  numberResult.classList.toggle('long-number', display.length > 8);
  numberResultPanel.classList.remove('drawing');
  numberDrawButton.disabled = false;
  numberDrawing = false;
}

numberForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (numberDrawing) return;
  const maximum = Number(maxNumberInput.value);
  if (!Number.isInteger(maximum) || maximum < 1 || maximum > 1000000000) {
    numberError.textContent = '最大の数字は1から10億までの整数で入力してください。';
    return;
  }
  numberError.textContent = '';
  document.querySelectorAll('[data-max]').forEach((button) => button.classList.toggle('selected', Number(button.dataset.max) === maximum));
  const selected = secureRandomIndex(maximum) + 1;
  await animateNumber(maximum, selected);
  document.querySelector('#numberRange').textContent = `1〜${maximum.toLocaleString('ja-JP')}から抽選`;
  numberHistory.unshift(selected);
  numberHistory.splice(HISTORY_LIMIT);
  renderNumberHistory();
});

document.querySelectorAll('[data-max]').forEach((button) => {
  button.addEventListener('click', () => {
    maxNumberInput.value = button.dataset.max;
    document.querySelectorAll('[data-max]').forEach((item) => item.classList.toggle('selected', item === button));
    numberError.textContent = '';
  });
});

document.querySelector('#clearNumberHistory').addEventListener('click', () => {
  numberHistory.length = 0;
  numberResult.textContent = '-';
  numberResult.classList.remove('long-number');
  renderNumberHistory();
});

function updateCandidateRows() {
  const rows = [...candidateGrid.querySelectorAll('.candidate-row')];
  rows.forEach((row, index) => {
    const input = row.querySelector('input');
    const number = index + 1;
    row.querySelector(':scope > span').textContent = number;
    input.id = `candidate-${number}`;
    input.placeholder = `候補${number}`;
    row.querySelector('.remove-candidate').setAttribute('aria-label', `候補${number}を削除`);
    row.querySelector('.remove-candidate').disabled = rows.length <= MIN_CANDIDATE_FIELDS;
  });
  candidateCount.textContent = `${rows.length} / ${MAX_CANDIDATES}件`;
  addCandidateButton.disabled = rows.length >= MAX_CANDIDATES;
}

function addCandidate(value = '') {
  if (candidateGrid.children.length >= MAX_CANDIDATES) return;
  const row = document.createElement('div');
  row.className = 'candidate-row';
  const number = candidateGrid.children.length + 1;
  row.innerHTML = `<span>${number}</span><input id="candidate-${number}" type="text" maxlength="50" autocomplete="off" placeholder="候補${number}" value=""><button class="remove-candidate" type="button" title="この候補を削除" aria-label="候補${number}を削除">×</button>`;
  row.querySelector('input').value = value;
  candidateGrid.append(row);
  updateCandidateRows();
}

function activeCandidates() {
  return [...candidateGrid.querySelectorAll('.candidate-row')].map((row) => ({
    row,
    value: row.querySelector('input').value.trim()
  })).filter((candidate) => candidate.value);
}

async function animateItem(candidates, selected) {
  itemDrawing = true;
  itemDrawButton.disabled = true;
  itemResultPanel.classList.add('drawing');
  candidateGrid.querySelectorAll('.candidate-row').forEach((row) => row.classList.remove('winner'));
  for (let index = 0; index < 9; index += 1) {
    itemResult.textContent = candidates[secureRandomIndex(candidates.length)].value;
    await wait(48 + index * 5);
  }
  itemResult.textContent = selected.value;
  selected.row.classList.add('winner');
  itemResultPanel.classList.remove('drawing');
  itemDrawButton.disabled = false;
  itemDrawing = false;
}

itemForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (itemDrawing) return;
  const candidates = activeCandidates();
  if (!candidates.length) {
    itemError.textContent = '抽選する候補を1件以上入力してください。';
    return;
  }
  itemError.textContent = '';
  const selected = candidates[secureRandomIndex(candidates.length)];
  await animateItem(candidates, selected);
  document.querySelector('#itemPoolSize').textContent = `${candidates.length}件の候補から抽選`;
  itemHistory.unshift(selected.value);
  itemHistory.splice(HISTORY_LIMIT);
  renderItemHistory();
});

addCandidateButton.addEventListener('click', () => {
  addCandidate();
  candidateGrid.lastElementChild?.querySelector('input')?.focus();
});

candidateGrid.addEventListener('click', (event) => {
  const removeButton = event.target.closest('.remove-candidate');
  if (!removeButton || candidateGrid.children.length <= MIN_CANDIDATE_FIELDS) return;
  removeButton.closest('.candidate-row').remove();
  updateCandidateRows();
});

candidateGrid.addEventListener('input', () => {
  itemError.textContent = '';
  candidateGrid.querySelectorAll('.candidate-row').forEach((row) => row.classList.remove('winner'));
});

document.querySelector('#clearCandidates').addEventListener('click', () => {
  candidateGrid.querySelectorAll('input').forEach((input) => { input.value = ''; });
  candidateGrid.querySelectorAll('.candidate-row').forEach((row) => row.classList.remove('winner'));
  itemResult.textContent = 'まだ抽選していません';
  document.querySelector('#itemPoolSize').textContent = '候補を入力してください';
  itemError.textContent = '';
});

document.querySelector('#clearItemHistory').addEventListener('click', () => {
  itemHistory.length = 0;
  renderItemHistory();
});

for (let index = 0; index < 6; index += 1) addCandidate();
