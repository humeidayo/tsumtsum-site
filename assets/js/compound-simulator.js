const form = document.querySelector('#compoundForm');
const initialInput = document.querySelector('#initialInput');
const monthlyInput = document.querySelector('#monthlyInput');
const rateInput = document.querySelector('#rateInput');
const yearsInput = document.querySelector('#yearsInput');
const crashYearInput = document.querySelector('#crashYearInput');
const crashRateInput = document.querySelector('#crashRateInput');
const boomYearInput = document.querySelector('#boomYearInput');
const boomRateInput = document.querySelector('#boomRateInput');
const validationMessage = document.querySelector('#validationMessage');
const chart = document.querySelector('#growthChart');

const scenarios = {
  small: { initial: 0, monthly: 10000, rate: 3, years: 10, crashYear: 5, crashRate: 20, boomYear: 5, boomRate: 15 },
  standard: { initial: 1000000, monthly: 30000, rate: 5, years: 20, crashYear: 8, crashRate: 30, boomYear: 8, boomRate: 25 },
  long: { initial: 1000000, monthly: 50000, rate: 5, years: 30, crashYear: 12, crashRate: 35, boomYear: 12, boomRate: 30 }
};

const marketMoves = {
  mild: { crashRate: 20, boomRate: 15 },
  standard: { crashRate: 30, boomRate: 25 },
  large: { crashRate: 45, boomRate: 40 }
};

let latestRows = [];

const formatInteger = (value) => Math.round(value).toLocaleString('ja-JP');
const formatYen = (value) => `${formatInteger(value)}円`;
const moneyInputs = [initialInput, monthlyInput];

function parseMoneyInput(input) {
  return Number(String(input.value).replace(/,/g, ''));
}

function formatMoneyInput(input) {
  const raw = String(input.value).replace(/[^0-9]/g, '');
  input.value = raw ? Number(raw).toLocaleString('ja-JP') : '';
}

function formatShortYen(value) {
  const absolute = Math.abs(value);
  const sign = value < 0 ? '-' : '';
  if (absolute >= 100000000) {
    const amount = (absolute / 100000000).toFixed(2).replace(/\.00$/, '').replace(/(\.\d)0$/, '$1');
    return `${sign}${amount}億円`;
  }
  if (absolute >= 10000) return `${sign}${formatInteger(absolute / 10000)}万円`;
  return `${sign}${formatInteger(absolute)}円`;
}

function formatHeroAmount(value) {
  const absolute = Math.abs(value);
  const sign = value < 0 ? '-' : '';
  if (absolute >= 100000000) {
    return { amount: `${sign}${(absolute / 100000000).toFixed(2).replace(/\.00$/, '')}`, unit: '億円' };
  }
  if (absolute >= 10000) return { amount: `${sign}${formatInteger(absolute / 10000)}`, unit: '万円' };
  return { amount: `${sign}${formatInteger(absolute)}`, unit: '円' };
}

function readConditions() {
  return {
    initial: parseMoneyInput(initialInput),
    monthly: parseMoneyInput(monthlyInput),
    rate: Number(rateInput.value),
    years: Number(yearsInput.value),
    crashYear: Number(crashYearInput.value),
    crashRate: Number(crashRateInput.value),
    boomYear: Number(boomYearInput.value),
    boomRate: Number(boomRateInput.value)
  };
}

function validate(values) {
  if (!Number.isFinite(values.initial) || values.initial < 0 || values.initial > 1000000000000) return '最初の金額は0円以上、1兆円以下で入力してください。';
  if (!Number.isFinite(values.monthly) || values.monthly < 0 || values.monthly > 1000000000) return '毎月の積立額は0円以上、10億円以下で入力してください。';
  if (values.initial === 0 && values.monthly === 0) return '最初の金額か毎月の積立額を入力してください。';
  if (!Number.isFinite(values.rate) || values.rate < -99 || values.rate > 100) return '想定年利は-99%から100%の範囲で入力してください。';
  if (!Number.isInteger(values.years) || values.years < 1 || values.years > 100) return '運用期間は1年から100年の整数で入力してください。';
  if (!Number.isInteger(values.crashYear) || values.crashYear < 1 || values.crashYear > values.years) return `暴落する年は1年目から${values.years}年目の範囲で入力してください。`;
  if (!Number.isFinite(values.crashRate) || values.crashRate < 0 || values.crashRate > 95) return '暴落の下落率は0%から95%の範囲で入力してください。';
  if (!Number.isInteger(values.boomYear) || values.boomYear < 1 || values.boomYear > values.years) return `暴騰する年は1年目から${values.years}年目の範囲で入力してください。`;
  if (!Number.isFinite(values.boomRate) || values.boomRate < 0 || values.boomRate > 300) return '暴騰の上昇率は0%から300%の範囲で入力してください。';
  return '';
}

function simulate({ initial, monthly, rate, years, crashYear, crashRate, boomYear, boomRate }) {
  const monthlyRate = rate / 100 / 12;
  let balance = initial;
  let lower = initial;
  let upper = initial;
  let principal = initial;
  const rows = [{ year: 0, balance, lower, upper, principal, profit: 0 }];

  for (let month = 1; month <= years * 12; month += 1) {
    balance *= 1 + monthlyRate;
    lower *= 1 + monthlyRate;
    upper *= 1 + monthlyRate;
    balance += monthly;
    lower += monthly;
    upper += monthly;
    principal += monthly;
    if (month % 12 === 0) {
      const year = month / 12;
      if (year === crashYear) lower *= 1 - crashRate / 100;
      if (year === boomYear) upper *= 1 + boomRate / 100;
      rows.push({
        year,
        balance,
        lower,
        upper,
        principal,
        profit: balance - principal
      });
    }
  }
  return rows;
}

function setHeroAmount(value) {
  const display = formatHeroAmount(value);
  document.querySelector('#finalAmount').textContent = display.amount;
  document.querySelector('#finalUnit').textContent = display.unit;
}

function updateSummary(values, finalRow) {
  const multiple = finalRow.principal > 0 ? finalRow.balance / finalRow.principal : 0;
  const profitShare = finalRow.balance > 0 ? finalRow.profit / finalRow.balance * 100 : 0;
  setHeroAmount(finalRow.balance);
  document.querySelector('#resultSentence').textContent = `${values.years}年間で、元本${formatShortYen(finalRow.principal)}が約${formatShortYen(finalRow.balance)}になる試算です。`;
  document.querySelector('#growthMultiple').textContent = `${multiple.toFixed(2)}倍`;
  document.querySelector('#totalPrincipal').textContent = formatShortYen(finalRow.principal);
  document.querySelector('#totalProfit').textContent = formatShortYen(finalRow.profit);
  document.querySelector('#paymentCount').textContent = `${values.years * 12}回`;
  document.querySelector('#profitShare').textContent = `${profitShare.toFixed(1)}%`;
  document.querySelector('#legendPrincipal').textContent = formatShortYen(finalRow.principal);
  document.querySelector('#legendProfit').textContent = formatShortYen(finalRow.profit);

  const positiveProfit = Math.max(0, finalRow.profit);
  const totalForBar = finalRow.principal + positiveProfit || 1;
  document.querySelector('#principalBar').style.width = `${finalRow.principal / totalForBar * 100}%`;
  document.querySelector('#profitBar').style.width = `${positiveProfit / totalForBar * 100}%`;
}

function updateScenarioRange(values, finalRow) {
  document.querySelector('#lowerFinal').textContent = formatShortYen(finalRow.lower);
  document.querySelector('#baseFinal').textContent = formatShortYen(finalRow.balance);
  document.querySelector('#upperFinal').textContent = formatShortYen(finalRow.upper);
  document.querySelector('#lowerLabel').textContent = `${values.crashYear}年目に${values.crashRate}%暴落`;
  document.querySelector('#upperLabel').textContent = `${values.boomYear}年目に${values.boomRate}%暴騰`;
  chart.setAttribute('aria-label', `${values.crashYear}年目に${values.crashRate}%暴落する下限、基準、${values.boomYear}年目に${values.boomRate}%暴騰する上限と元本の推移グラフ`);
}

function updateMilestones(rows) {
  const lastYear = rows.at(-1).year;
  const years = [...new Set([
    Math.max(1, Math.round(lastYear / 3)),
    Math.max(1, Math.round(lastYear * 2 / 3)),
    lastYear
  ])];
  document.querySelector('#milestoneGrid').innerHTML = years.map((year) => {
    const row = rows.find((item) => item.year === year) || rows.at(-1);
    return `<div class="milestone-card"><span>${row.year}年後</span><strong>${formatShortYen(row.balance)}</strong></div>`;
  }).join('');
}

function updateTable(rows) {
  const body = document.querySelector('#yearTableBody');
  body.innerHTML = rows.slice(1).map((row) => `
    <tr>
      <td>${row.year}年目</td>
      <td>${formatYen(row.lower)}</td>
      <td>${formatYen(row.balance)}</td>
      <td>${formatYen(row.upper)}</td>
    </tr>`).join('');
  document.querySelector('#tableRange').textContent = `1年目～${rows.at(-1).year}年目`;
}

function axisLabel(value) {
  if (value >= 100000000) return `${(value / 100000000).toFixed(value >= 1000000000 ? 0 : 1)}億`;
  if (value >= 10000) return `${Math.round(value / 10000)}万`;
  return formatInteger(value);
}

function drawChart(rows) {
  if (!chart || !rows.length) return;
  const width = Math.max(280, chart.clientWidth);
  const height = Math.max(240, chart.clientHeight);
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  chart.width = Math.round(width * ratio);
  chart.height = Math.round(height * ratio);
  const context = chart.getContext('2d');
  context.setTransform(ratio, 0, 0, ratio, 0, 0);

  const padding = { top: 18, right: 15, bottom: 35, left: width < 420 ? 47 : 64 };
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;
  const maxValue = Math.max(...rows.flatMap((row) => [row.lower, row.balance, row.upper, row.principal]), 1) * 1.08;
  const x = (index) => padding.left + index / Math.max(1, rows.length - 1) * plotWidth;
  const y = (value) => padding.top + plotHeight - value / maxValue * plotHeight;

  context.clearRect(0, 0, width, height);
  context.font = `700 ${width < 420 ? 9 : 10}px "Yu Gothic UI", sans-serif`;
  context.fillStyle = '#65777d';
  context.strokeStyle = '#dbe5e2';
  context.lineWidth = 1;
  for (let step = 0; step <= 4; step += 1) {
    const value = maxValue * step / 4;
    const lineY = y(value);
    context.beginPath();
    context.moveTo(padding.left, lineY);
    context.lineTo(width - padding.right, lineY);
    context.stroke();
    context.textAlign = 'right';
    context.fillText(axisLabel(value), padding.left - 7, lineY + 3);
  }

  const tickIndexes = [...new Set([0, Math.round((rows.length - 1) / 2), rows.length - 1])];
  context.textAlign = 'center';
  tickIndexes.forEach((index) => context.fillText(`${rows[index].year}年`, x(index), height - 10));

  const area = context.createLinearGradient(0, padding.top, 0, padding.top + plotHeight);
  area.addColorStop(0, 'rgba(99,230,190,.28)');
  area.addColorStop(1, 'rgba(255,107,94,.1)');
  context.beginPath();
  rows.forEach((row, index) => index === 0 ? context.moveTo(x(index), y(row.upper)) : context.lineTo(x(index), y(row.upper)));
  [...rows].reverse().forEach((row, reverseIndex) => context.lineTo(x(rows.length - 1 - reverseIndex), y(row.lower)));
  context.closePath();
  context.fillStyle = area;
  context.fill();

  const drawLine = (key, color, widthValue) => {
    context.beginPath();
    rows.forEach((row, index) => index === 0 ? context.moveTo(x(index), y(row[key])) : context.lineTo(x(index), y(row[key])));
    context.strokeStyle = color;
    context.lineWidth = widthValue;
    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.stroke();
  };
  drawLine('principal', '#f1aa22', 2.2);
  drawLine('lower', '#ee6458', 2.4);
  drawLine('upper', '#49b991', 2.4);
  drawLine('balance', '#08745e', 3.5);

  const final = rows.at(-1);
  [['lower', '#ee6458'], ['balance', '#08745e'], ['upper', '#49b991']].forEach(([key, color]) => {
    context.beginPath();
    context.arc(x(rows.length - 1), y(final[key]), 4.5, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
    context.strokeStyle = '#fff';
    context.lineWidth = 1.5;
    context.stroke();
  });
}

function calculate() {
  const values = readConditions();
  const error = validate(values);
  validationMessage.textContent = error;
  if (error) return;
  const rows = simulate(values);
  const finalRow = rows.at(-1);
  latestRows = rows;
  updateSummary(values, finalRow);
  updateScenarioRange(values, finalRow);
  updateMilestones(rows);
  updateTable(rows);
  drawChart(rows);
}

function selectMatchingRate() {
  document.querySelectorAll('[data-rate]').forEach((button) => {
    button.classList.toggle('selected', Number(button.dataset.rate) === Number(rateInput.value));
  });
}

function selectMatchingMove() {
  document.querySelectorAll('[data-move]').forEach((button) => {
    const move = marketMoves[button.dataset.move];
    button.classList.toggle('selected', move.crashRate === Number(crashRateInput.value) && move.boomRate === Number(boomRateInput.value));
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelectorAll('[data-scenario]').forEach((button) => button.classList.remove('selected'));
  selectMatchingRate();
  selectMatchingMove();
  calculate();
});

document.querySelectorAll('[data-scenario]').forEach((button) => {
  button.addEventListener('click', () => {
    const scenario = scenarios[button.dataset.scenario];
    initialInput.value = scenario.initial;
    monthlyInput.value = scenario.monthly;
    moneyInputs.forEach(formatMoneyInput);
    rateInput.value = scenario.rate;
    yearsInput.value = scenario.years;
    crashYearInput.value = scenario.crashYear;
    crashRateInput.value = scenario.crashRate;
    boomYearInput.value = scenario.boomYear;
    boomRateInput.value = scenario.boomRate;
    document.querySelectorAll('[data-scenario]').forEach((item) => item.classList.toggle('selected', item === button));
    selectMatchingRate();
    selectMatchingMove();
    calculate();
  });
});

document.querySelectorAll('[data-move]').forEach((button) => {
  button.addEventListener('click', () => {
    const move = marketMoves[button.dataset.move];
    crashRateInput.value = move.crashRate;
    boomRateInput.value = move.boomRate;
    document.querySelectorAll('[data-move]').forEach((item) => item.classList.toggle('selected', item === button));
    document.querySelectorAll('[data-scenario]').forEach((item) => item.classList.remove('selected'));
    calculate();
  });
});

document.querySelectorAll('[data-rate]').forEach((button) => {
  button.addEventListener('click', () => {
    rateInput.value = button.dataset.rate;
    selectMatchingRate();
    document.querySelectorAll('[data-scenario]').forEach((item) => item.classList.remove('selected'));
    calculate();
  });
});

moneyInputs.forEach((input) => {
  input.addEventListener('input', () => {
    const caret = input.selectionStart ?? input.value.length;
    const digitsBeforeCaret = input.value.slice(0, caret).replace(/[^0-9]/g, '').length;
    formatMoneyInput(input);
    let nextCaret = 0;
    let digits = 0;
    while (nextCaret < input.value.length && digits < digitsBeforeCaret) {
      if (/\d/.test(input.value[nextCaret])) digits += 1;
      nextCaret += 1;
    }
    input.setSelectionRange(nextCaret, nextCaret);
  });
  input.addEventListener('blur', () => formatMoneyInput(input));
  formatMoneyInput(input);
});

if ('ResizeObserver' in window) {
  new ResizeObserver(() => drawChart(latestRows)).observe(chart.parentElement);
} else {
  window.addEventListener('resize', () => drawChart(latestRows));
}

calculate();
