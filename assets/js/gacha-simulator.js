(() => {
  'use strict';

  const form = document.querySelector('#gachaForm');
  if (!form) return;

  const elements = {
    rate: document.querySelector('#rateInput'),
    draws: document.querySelector('#drawCountInput'),
    desiredCopies: document.querySelector('#desiredCopiesInput'),
    confidence: document.querySelector('#confidenceInput'),
    validation: document.querySelector('#validationMessage'),
    ring: document.querySelector('#probabilityRing'),
    ringValue: document.querySelector('#ringValue'),
    mainProbability: document.querySelector('#mainProbability'),
    plainLanguage: document.querySelector('#plainLanguageResult'),
    condition: document.querySelector('#conditionLine'),
    expected: document.querySelector('#expectedCopies'),
    zero: document.querySelector('#zeroProbability'),
    mode: document.querySelector('#modeCopies'),
    tenPullCount: document.querySelector('#tenPullCount'),
    neededDraws: document.querySelector('#neededDraws'),
    neededTenPulls: document.querySelector('#neededTenPulls'),
    reverseExplanation: document.querySelector('#reverseExplanation'),
    confidenceList: document.querySelector('#confidenceList'),
    distributionRange: document.querySelector('#distributionRange'),
    distributionBody: document.querySelector('#distributionBody')
  };

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const integer = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 0 });

  function logGamma(value) {
    const coefficients = [
      676.5203681218851,
      -1259.1392167224028,
      771.3234287776531,
      -176.6150291621406,
      12.507343278686905,
      -0.13857109526572012,
      9.984369578019572e-6,
      1.5056327351493116e-7
    ];
    if (value < 0.5) {
      return Math.log(Math.PI) - Math.log(Math.sin(Math.PI * value)) - logGamma(1 - value);
    }
    let z = value - 1;
    let x = 0.9999999999998099;
    coefficients.forEach((coefficient, index) => {
      x += coefficient / (z + index + 1);
    });
    const t = z + coefficients.length - 0.5;
    return 0.5 * Math.log(2 * Math.PI) + (z + 0.5) * Math.log(t) - t + Math.log(x);
  }

  function logBinomialPmf(k, n, probability) {
    if (k < 0 || k > n) return -Infinity;
    if (probability === 0) return k === 0 ? 0 : -Infinity;
    if (probability === 1) return k === n ? 0 : -Infinity;
    return logGamma(n + 1) - logGamma(k + 1) - logGamma(n - k + 1)
      + k * Math.log(probability) + (n - k) * Math.log1p(-probability);
  }

  function exactProbability(k, n, probability) {
    const logValue = logBinomialPmf(k, n, probability);
    return logValue === -Infinity ? 0 : clamp(Math.exp(logValue), 0, 1);
  }

  function lowerCdf(maxK, n, probability) {
    if (maxK < 0) return 0;
    if (maxK >= n) return 1;
    if (probability === 0) return 1;
    if (probability === 1) return 0;

    const logs = [];
    let maximum = -Infinity;
    for (let k = 0; k <= maxK; k += 1) {
      const logValue = logBinomialPmf(k, n, probability);
      logs.push(logValue);
      if (logValue > maximum) maximum = logValue;
    }
    if (maximum === -Infinity) return 0;
    const scaledSum = logs.reduce((sum, logValue) => sum + Math.exp(logValue - maximum), 0);
    return clamp(Math.exp(maximum) * scaledSum, 0, 1);
  }

  function atLeastProbability(minimumCopies, n, probability) {
    if (minimumCopies <= 0) return 1;
    if (minimumCopies > n || probability === 0) return 0;
    if (probability === 1) return n >= minimumCopies ? 1 : 0;
    if (minimumCopies === 1) {
      return clamp(-Math.expm1(n * Math.log1p(-probability)), 0, 1);
    }
    return clamp(1 - lowerCdf(minimumCopies - 1, n, probability), 0, 1);
  }

  function requiredDraws(probability, copies, confidence) {
    if (probability <= 0) return Infinity;
    if (probability >= 1) return copies;

    const limit = 100000000;
    let low = copies;
    let high = Math.max(copies, Math.ceil(copies / probability));
    while (high < limit && atLeastProbability(copies, high, probability) < confidence) {
      high = Math.min(limit, high * 2);
    }
    if (atLeastProbability(copies, high, probability) < confidence) return Infinity;

    while (low < high) {
      const middle = Math.floor((low + high) / 2);
      if (atLeastProbability(copies, middle, probability) >= confidence) high = middle;
      else low = middle + 1;
    }
    return low;
  }

  function formatPercent(value) {
    const percent = clamp(value, 0, 1) * 100;
    if (percent === 0) return '0%';
    if (percent < 0.0001) return '<0.0001%';
    if (percent < 0.01) return `${percent.toFixed(4)}%`;
    if (percent < 1) return `${percent.toFixed(3)}%`;
    return `${percent.toFixed(2)}%`;
  }

  function formatExpected(value) {
    if (value < 10) return value.toFixed(2);
    if (value < 100) return value.toFixed(1);
    return integer.format(value);
  }

  function readInputs() {
    const ratePercent = Number(elements.rate.value);
    const draws = Number(elements.draws.value);
    const desiredCopies = Number(elements.desiredCopies.value);
    const confidencePercent = Number(elements.confidence.value);
    const errors = [];

    if (!Number.isFinite(ratePercent) || ratePercent <= 0 || ratePercent > 100) errors.push('排出率は0より大きく100以下で入力してください。');
    if (!Number.isInteger(draws) || draws < 1 || draws > 100000) errors.push('回す回数は1～100,000回の整数で入力してください。');
    if (!Number.isInteger(desiredCopies) || desiredCopies < 1 || desiredCopies > 999) errors.push('欲しい入手数は1～999体の整数で入力してください。');
    if (!Number.isFinite(confidencePercent) || confidencePercent < 1 || confidencePercent > 99.99) errors.push('達成確率は1～99.99%で入力してください。');

    return {
      errors,
      ratePercent,
      probability: ratePercent / 100,
      draws,
      desiredCopies,
      confidencePercent,
      confidence: confidencePercent / 100
    };
  }

  function distributionEntries(n, probability) {
    const mean = n * probability;
    const deviation = Math.sqrt(n * probability * (1 - probability));
    let start = 0;
    let end = Math.min(n, Math.max(8, Math.ceil(mean + 5 * deviation)));

    if (end > 36) {
      start = Math.max(1, Math.floor(mean - 16));
      end = Math.min(n, start + 32);
    }

    const rows = [];
    if (start > 0) {
      rows.push({ label: '0体', exact: exactProbability(0, n, probability), atLeast: 1, individual: true });
      if (start > 1) {
        const grouped = clamp(lowerCdf(start - 1, n, probability) - exactProbability(0, n, probability), 0, 1);
        rows.push({ label: `1～${start - 1}体`, exact: grouped, atLeast: atLeastProbability(1, n, probability), individual: false });
      }
    }
    for (let k = start; k <= end; k += 1) {
      if (start > 0 && k === 0) continue;
      rows.push({ label: `${integer.format(k)}体`, exact: exactProbability(k, n, probability), atLeast: atLeastProbability(k, n, probability), individual: true });
    }
    if (end < n) {
      const tail = atLeastProbability(end + 1, n, probability);
      rows.push({ label: `${integer.format(end + 1)}体以上`, exact: tail, atLeast: tail, individual: false });
    }
    return { rows, start, end };
  }

  function renderDistribution(n, probability) {
    const { rows, start, end } = distributionEntries(n, probability);
    const maxExact = Math.max(...rows.filter((row) => row.individual).map((row) => row.exact), Number.EPSILON);
    elements.distributionBody.innerHTML = rows.map((row) => {
      const barWidth = row.individual ? clamp((row.exact / maxExact) * 100, 1, 100) : 0;
      return `<tr>
        <td>${row.label}</td>
        <td>${formatPercent(row.exact)}</td>
        <td>${formatPercent(row.atLeast)}</td>
        <td><div class="probability-bar" aria-hidden="true"><i style="--bar-width:${barWidth.toFixed(2)}%"></i></div></td>
      </tr>`;
    }).join('');
    elements.distributionRange.textContent = start === 0
      ? `0～${integer.format(end)}体を表示`
      : `主な範囲 ${integer.format(start)}～${integer.format(end)}体を表示`;
  }

  function renderConfidenceList(probability, desiredCopies) {
    const levels = [50, 80, 90, 95, 99];
    elements.confidenceList.innerHTML = levels.map((level) => {
      const draws = requiredDraws(probability, desiredCopies, level / 100);
      const value = Number.isFinite(draws) ? `${integer.format(draws)}回` : '算出不可';
      return `<div class="confidence-item"><span>${level}%達成</span><strong>${value}</strong></div>`;
    }).join('');
  }

  function synchronizePreset(selector, value, attribute) {
    document.querySelectorAll(selector).forEach((button) => {
      button.classList.toggle('selected', Number(button.dataset[attribute]) === Number(value));
    });
  }

  function calculate() {
    const values = readInputs();
    elements.validation.textContent = values.errors[0] || '';
    if (values.errors.length) return;

    const atLeastOne = atLeastProbability(1, values.draws, values.probability);
    const zero = exactProbability(0, values.draws, values.probability);
    const expected = values.draws * values.probability;
    const mode = Math.min(values.draws, Math.floor((values.draws + 1) * values.probability));
    const rateLabel = Number.isInteger(values.ratePercent) ? integer.format(values.ratePercent) : values.ratePercent.toString();
    const probabilityLabel = formatPercent(atLeastOne);

    elements.ring.style.setProperty('--probability', `${atLeastOne * 360}deg`);
    elements.ringValue.textContent = probabilityLabel;
    elements.mainProbability.textContent = probabilityLabel;
    elements.plainLanguage.textContent = `100人中約${Math.round(atLeastOne * 100)}人が1体以上入手できる確率です。`;
    elements.condition.textContent = `排出率${rateLabel}%を${integer.format(values.draws)}回`;
    elements.expected.textContent = `${formatExpected(expected)}体`;
    elements.zero.textContent = formatPercent(zero);
    elements.mode.textContent = `${integer.format(mode)}体`;
    elements.tenPullCount.textContent = `${integer.format(Math.ceil(values.draws / 10))}回分`;

    const needed = requiredDraws(values.probability, values.desiredCopies, values.confidence);
    if (Number.isFinite(needed)) {
      elements.neededDraws.textContent = `${integer.format(needed)}回`;
      elements.neededTenPulls.textContent = `10連${integer.format(Math.ceil(needed / 10))}回分`;
      elements.reverseExplanation.textContent = `排出率${rateLabel}%で${integer.format(values.desiredCopies)}体以上を${values.confidencePercent}%の確率で入手するための最小回数です。`;
    } else {
      elements.neededDraws.textContent = '算出不可';
      elements.neededTenPulls.textContent = '設定条件を確認してください';
      elements.reverseExplanation.textContent = '1億回以内では指定した条件へ到達しません。排出率か目標条件を見直してください。';
    }

    renderConfidenceList(values.probability, values.desiredCopies);
    renderDistribution(values.draws, values.probability);
    synchronizePreset('[data-rate]', values.ratePercent, 'rate');
    synchronizePreset('[data-draws]', values.draws, 'draws');
    synchronizePreset('[data-confidence]', values.confidencePercent, 'confidence');
  }

  document.querySelectorAll('[data-rate]').forEach((button) => {
    button.addEventListener('click', () => {
      elements.rate.value = button.dataset.rate;
      calculate();
    });
  });
  document.querySelectorAll('[data-draws]').forEach((button) => {
    button.addEventListener('click', () => {
      elements.draws.value = button.dataset.draws;
      calculate();
    });
  });
  document.querySelectorAll('[data-confidence]').forEach((button) => {
    button.addEventListener('click', () => {
      elements.confidence.value = button.dataset.confidence;
      calculate();
    });
  });

  [elements.rate, elements.draws, elements.desiredCopies, elements.confidence].forEach((input) => {
    input.addEventListener('change', calculate);
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    calculate();
  });

  calculate();
})();
