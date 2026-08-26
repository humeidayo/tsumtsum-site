(() => {
  'use strict';

  const canvas = document.getElementById('battlefield');
  const ctx = canvas.getContext('2d', { alpha: false });
  const W = canvas.width;
  const H = canvas.height;
  const TAU = Math.PI * 2;
  const STORAGE_KEY = 'humei_crash_defense_v1';
  const MAX_TOWER_LEVEL = 7;
  const BOSS_VISUAL_SCALE = 1.25;
  const query = new URLSearchParams(location.search);
  const TEST_MODE = query.has('test');
  const DEBUG_MODE = TEST_MODE || query.has('debug');
  const mobile = matchMedia('(max-width: 700px)').matches;
  const spriteAtlas = new Image();
  spriteAtlas.src = '../../assets/images/crash-defense-atlas.webp';
  const extraAtlas = new Image();
  extraAtlas.src = '../../assets/images/crash-defense-extra-atlas.webp';
  const battlefieldArt = new Image();
  battlefieldArt.src = '../../assets/images/crash-defense-battlefield.webp';
  const coreArt = new Image();
  coreArt.src = '../../assets/images/crash-defense-core.webp';
  const bossArt = {
    king: new Image(),
    reaper: new Image(),
    swan: new Image(),
  };
  bossArt.king.src = '../../assets/images/crash-boss-king.webp';
  bossArt.reaper.src = '../../assets/images/crash-boss-reaper.webp';
  bossArt.swan.src = '../../assets/images/crash-boss-swan.webp';
  const SPRITES = {
    bank: { x: 0, y: 20, w: 384, h: 480 },
    tech: { x: 384, y: 20, w: 384, h: 480 },
    dividend: { x: 768, y: 20, w: 384, h: 480 },
    hedge: { x: 1152, y: 20, w: 384, h: 492 },
    bear: { x: 0, y: 620, w: 330, h: 360 },
    captain: { x: 300, y: 530, w: 400, h: 470 },
    whale: { x: 650, y: 500, w: 470, h: 500 },
    titan: { x: 1080, y: 430, w: 456, h: 594 },
  };

  const screens = {
    title: document.getElementById('titleScreen'),
    play: document.getElementById('playScreen'),
    result: document.getElementById('resultScreen'),
  };
  const ui = {
    sound: document.getElementById('soundButton'),
    start: document.getElementById('startButton'),
    retry: document.getElementById('retryButton'),
    home: document.getElementById('homeButton'),
    wave: document.getElementById('waveValue'),
    core: document.getElementById('coreValue'),
    coreBar: document.getElementById('coreBar'),
    cash: document.getElementById('cashValue'),
    time: document.getElementById('timeValue'),
    waveBanner: document.getElementById('waveBanner'),
    support: document.getElementById('supportButton'),
    supportBar: document.getElementById('supportBar'),
    supportValue: document.getElementById('supportValue'),
    unitButtons: [...document.querySelectorAll('.unit-button')],
    towerPanel: document.getElementById('towerPanel'),
    towerType: document.getElementById('towerType'),
    towerLevel: document.getElementById('towerLevel'),
    towerStats: document.getElementById('towerStats'),
    upgradeTower: document.getElementById('upgradeTowerButton'),
    upgradeCost: document.getElementById('upgradeCost'),
    sellTower: document.getElementById('sellTowerButton'),
    choiceBackdrop: document.getElementById('choiceBackdrop'),
    choiceGrid: document.getElementById('choiceGrid'),
    choiceProgress: document.getElementById('choiceProgress'),
    rerollChoices: document.getElementById('rerollChoicesButton'),
    titleBest: document.getElementById('titleBest'),
    resultVisual: document.getElementById('resultVisual'),
    resultOverline: document.getElementById('resultOverline'),
    resultTitle: document.getElementById('resultTitle'),
    finalScore: document.getElementById('finalScore'),
    resultWave: document.getElementById('resultWave'),
    resultKills: document.getElementById('resultKills'),
    resultCore: document.getElementById('resultCore'),
    resultBest: document.getElementById('resultBest'),
  };

  const UNIT_TYPES = {
    bank: { name: '銀行砲', cost: 500, range: 176, damage: 100, rate: .76, color: '#ffc84a', icon: '盾', projectile: true },
    tech: { name: '成長レーザー', cost: 650, range: 164, damage: 35, rate: .26, color: '#42e7e0', icon: '雷', projectile: false },
    dividend: { name: '配当ビーコン', cost: 700, range: 185, damage: 70, rate: .92, color: '#66f2a2', icon: '＋', projectile: true, income: 7 },
    hedge: { name: 'ヘッジ装置', cost: 600, range: 185, damage: 48, rate: .9, color: '#b78cff', icon: '◇', projectile: true, slow: .34 },
    pod: { name: '積立ポッド', cost: 850, range: 205, damage: 42, rate: 1.5, color: '#ff9d3d', icon: '弾', projectile: true, burst: 3, splash: 38 },
    breaker: { name: 'サーキットブレーカー', cost: 950, range: 152, damage: 115, rate: 2.85, color: '#ff5d4d', icon: '電', area: true, stun: .3 },
  };

  const BOSSES = {
    captain: { kind: 'captain', name: 'ベア・キャプテン', speed: 45, damage: 22, reward: 500, radius: 36 },
    whale: { kind: 'whale', name: '追証ホエール', speed: 43, damage: 30, reward: 750, radius: 40 },
    king: { kind: 'king', name: '逆風ベアキング', speed: 41, damage: 36, reward: 1100, radius: 44 },
    titan: { kind: 'titan', name: '暴落タイタン', speed: 39, damage: 44, reward: 1550, radius: 46 },
    reaper: { kind: 'reaper', name: 'ロスカット・リーパー', speed: 37, damage: 50, reward: 2200, radius: 48 },
    swan: { kind: 'swan', name: 'ブラックスワン・ゼロ', speed: 30, damage: 60, reward: 5200, radius: 56 },
  };

  const WAVES = [
    {
      count: 82, hp: 190, speed: 96, reward: 39, spawn: .74, target: 120,
      bosses: [{ ...BOSSES.captain, hp: 5200, spawnAt: 55, final: true }],
    },
    {
      count: 96, hp: 370, speed: 104, reward: 46, spawn: .66, target: 120,
      bosses: [
        { ...BOSSES.captain, name: '中ボス ベア・キャプテン', hp: 2900, speed: 50, spawnAt: 20 },
        { ...BOSSES.whale, hp: 12500, spawnAt: 58, final: true },
      ],
    },
    {
      count: 120, hp: 950, speed: 132, reward: 40, spawn: .54, target: 120,
      bosses: [
        { ...BOSSES.captain, name: '中ボス ベア・キャプテン', hp: 3800, speed: 52, spawnAt: 14 },
        { ...BOSSES.whale, name: '中ボス 追証ホエール', hp: 7000, speed: 49, spawnAt: 30 },
        { ...BOSSES.king, hp: 24000, spawnAt: 52, final: true },
      ],
    },
    {
      count: 135, hp: 1550, speed: 146, reward: 44, spawn: .48, target: 120,
      bosses: [
        { ...BOSSES.captain, name: '中ボス ベア・キャプテン', hp: 4500, speed: 52, spawnAt: 12 },
        { ...BOSSES.whale, name: '中ボス 追証ホエール', hp: 8500, speed: 49, spawnAt: 24 },
        { ...BOSSES.king, name: '中ボス 逆風ベアキング', hp: 15000, speed: 46, spawnAt: 36 },
        { ...BOSSES.titan, hp: 42000, spawnAt: 50, final: true },
      ],
    },
    {
      count: 150, hp: 2350, speed: 160, reward: 48, spawn: .43, target: 120,
      bosses: [
        { ...BOSSES.captain, name: '中ボス ベア・キャプテン', hp: 5200, speed: 52, spawnAt: 10 },
        { ...BOSSES.whale, name: '中ボス 追証ホエール', hp: 9500, speed: 49, spawnAt: 20 },
        { ...BOSSES.king, name: '中ボス 逆風ベアキング', hp: 17000, speed: 46, spawnAt: 30 },
        { ...BOSSES.titan, name: '中ボス 暴落タイタン', hp: 28000, speed: 43, spawnAt: 40 },
        { ...BOSSES.reaper, hp: 72000, spawnAt: 46, final: true },
      ],
    },
    {
      count: 180, hp: 3400, speed: 174, reward: 52, spawn: .36, target: 180,
      bosses: [
        { ...BOSSES.captain, name: '中ボス ベア・キャプテン', hp: 6500, speed: 52, spawnAt: 10 },
        { ...BOSSES.whale, name: '中ボス 追証ホエール', hp: 12000, speed: 49, spawnAt: 24 },
        { ...BOSSES.king, name: '中ボス 逆風ベアキング', hp: 22000, speed: 46, spawnAt: 38 },
        { ...BOSSES.titan, name: '中ボス 暴落タイタン', hp: 36000, speed: 43, spawnAt: 52 },
        { ...BOSSES.reaper, name: '中ボス ロスカット・リーパー', hp: 60000, speed: 40, spawnAt: 68 },
        { ...BOSSES.swan, hp: 260000, spawnAt: 90, final: true },
      ],
    },
  ];

  const PATH = [
    { x: 360, y: -50 }, { x: 360, y: 150 }, { x: 105, y: 150 }, { x: 105, y: 360 },
    { x: 612, y: 360 }, { x: 612, y: 570 }, { x: 200, y: 570 }, { x: 200, y: 800 },
    { x: 520, y: 800 }, { x: 520, y: 1000 }, { x: 360, y: 1070 },
  ];
  const PADS = [
    { x: 520, y: 112 }, { x: 230, y: 254 }, { x: 500, y: 258 }, { x: 225, y: 458 },
    { x: 505, y: 475 }, { x: 92, y: 690 }, { x: 365, y: 690 }, { x: 625, y: 708 },
    { x: 100, y: 865 }, { x: 620, y: 865 }, { x: 210, y: 930 }, { x: 510, y: 930 },
  ];
  const pathSegments = [];
  let pathLength = 0;
  for (let i = 0; i < PATH.length - 1; i += 1) {
    const a = PATH[i];
    const b = PATH[i + 1];
    const length = Math.hypot(b.x - a.x, b.y - a.y);
    pathSegments.push({ a, b, length, start: pathLength });
    pathLength += length;
  }

  const GLOBAL_CHOICES = [
    { key: 'power', icon: '▲', name: '全面高', detail: '全ユニットの攻撃力 +10%', apply: (s) => { s.damageMult *= 1.1; } },
    { key: 'speed', icon: '»', name: '高速約定', detail: '全ユニットの攻撃速度 +8%', apply: (s) => { s.rateMult *= 1.08; } },
    { key: 'range', icon: '◎', name: '市場拡大', detail: '全ユニットの射程 +7%', apply: (s) => { s.rangeMult *= 1.07; } },
    { key: 'core', icon: '♥', name: '資本注入', detail: 'コア最大値 +15、20回復', apply: (s) => { s.coreMax += 15; s.core = Math.min(s.coreMax, s.core + 20); } },
    { key: 'cash', icon: '￥', name: '追加予算', detail: '防衛資金を700獲得', apply: (s) => { s.cash += 700; } },
    { key: 'reward', icon: '＋', name: '買い戻し益', detail: '撃破時の獲得資金 +12%', apply: (s) => { s.rewardMult *= 1.12; } },
    { key: 'critical', icon: '!', name: '踏み上げ', detail: 'クリティカル率 +5%', apply: (s) => { s.crit += .05; } },
    { key: 'support', icon: '◆', name: '公的支援', detail: '買い支えの必要チャージ -10', apply: (s) => { s.supportNeed = Math.max(100, s.supportNeed - 10); } },
  ];

  let state = null;
  let raf = 0;
  let lastFrame = performance.now();
  let selectedUnit = 'bank';
  let selectedTowerId = null;
  let nextId = 1;
  let save = readSave();
  let audioContext = null;
  let soundOn = save.sound !== false;
  let staticLayer = null;
  let musicTimer = 0;
  let musicMode = 'normal';
  let musicStep = 0;

  function readSave() {
    try { return { best: 0, maxWave: 0, clears: 0, sound: true, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') }; }
    catch { return { best: 0, maxWave: 0, clears: 0, sound: true }; }
  }

  function writeSave() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(save));
  }

  function formatNumber(value) { return Math.max(0, Math.floor(value)).toLocaleString('ja-JP'); }
  function formatTime(seconds) {
    const whole = Math.max(0, Math.floor(seconds));
    return `${String(Math.floor(whole / 60)).padStart(2, '0')}:${String(whole % 60).padStart(2, '0')}`;
  }

  function showScreen(name) {
    Object.entries(screens).forEach(([key, screen]) => screen.classList.toggle('is-active', key === name));
  }

  function ensureAudio() {
    if (!soundOn) return null;
    if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === 'suspended') audioContext.resume();
    return audioContext;
  }

  function tone(frequency, duration = .07, type = 'square', volume = .035) {
    const ac = ensureAudio();
    if (!ac) return;
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    const now = ac.currentTime;
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, now);
    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(.001, now + duration);
    osc.connect(gain); gain.connect(ac.destination); osc.start(now); osc.stop(now + duration);
  }

  const MUSIC_PATTERNS = {
    normal: { interval: 165, lead: [220, 277, 330, 440, 330, 277, 247, 330], bass: [110, 110, 123, 123, 98, 98, 110, 110] },
    boss: { interval: 105, lead: [165, 196, 185, 247, 165, 277, 196, 185], bass: [82, 82, 92, 73, 82, 98, 92, 73] },
  };

  function playMusicStep() {
    if (!soundOn || !state || !['prep', 'wave'].includes(state.phase)) return;
    const pattern = MUSIC_PATTERNS[musicMode];
    const index = musicStep % pattern.lead.length;
    tone(pattern.lead[index], musicMode === 'boss' ? .09 : .12, 'square', musicMode === 'boss' ? .008 : .006);
    if (index % 2 === 0) tone(pattern.bass[index], .16, 'triangle', .009);
    musicStep += 1;
  }

  function stopMusic() {
    clearInterval(musicTimer);
    musicTimer = 0;
  }

  function startMusic(mode = 'normal') {
    stopMusic();
    musicMode = mode;
    musicStep = 0;
    ui.sound.dataset.music = mode;
    if (!soundOn || !state) return;
    playMusicStep();
    musicTimer = setInterval(playMusicStep, MUSIC_PATTERNS[mode].interval);
  }

  function setMusicMode(mode) {
    if (musicMode !== mode || !musicTimer) startMusic(mode);
  }

  function setSound(value) {
    soundOn = value;
    save.sound = value;
    writeSave();
    ui.sound.textContent = value ? '♪' : '×';
    ui.sound.setAttribute('aria-label', value ? 'サウンドを消す' : 'サウンドをつける');
    if (!value) stopMusic();
    else if (state && ['prep', 'wave'].includes(state.phase)) startMusic(state.enemies.some((enemy) => enemy.boss) ? 'boss' : 'normal');
  }

  function newState() {
    return {
      phase: 'prep', wave: 0, prep: TEST_MODE ? .2 : 3.2, elapsed: 0, waveElapsed: 0, cash: 2000, score: 0,
      core: TEST_MODE ? 9999 : 100, coreMax: TEST_MODE ? 9999 : 100, coreAttackClock: 0, kills: 0, spawned: 0, nextSpawn: 0, bossSpawned: 0, bossSpawnClock: 0,
      bossAddsSpawned: 0, bossAddClock: 0,
      towers: [], enemies: [], projectiles: [], beams: [], particles: [], floaters: [],
      support: 0, supportNeed: 140, damageMult: 1, rateMult: 1, rangeMult: 1,
      rewardMult: 1, crit: .05, shake: 0, flash: 0, bannerClock: 0,
      pendingChoices: 0, rerollsLeft: 0, lastChoiceKeys: [],
    };
  }

  function startGame() {
    ensureAudio();
    state = newState();
    selectedUnit = 'bank';
    selectedTowerId = null;
    updateUnitButtons();
    ui.towerPanel.hidden = true;
    ui.choiceBackdrop.hidden = true;
    showScreen('play');
    lastFrame = performance.now();
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(loop);
    tone(392, .12, 'square', .05);
    setTimeout(() => tone(523, .15, 'square', .05), 90);
    startMusic('normal');
  }

  function returnTitle() {
    cancelAnimationFrame(raf);
    stopMusic();
    state = null;
    ui.titleBest.textContent = `BEST SCORE ${formatNumber(save.best)}`;
    showScreen('title');
  }

  function pointOnPath(distance) {
    const d = Math.max(0, Math.min(pathLength, distance));
    const seg = pathSegments.find((item) => d <= item.start + item.length) || pathSegments[pathSegments.length - 1];
    const ratio = Math.max(0, Math.min(1, (d - seg.start) / seg.length));
    return { x: seg.a.x + (seg.b.x - seg.a.x) * ratio, y: seg.a.y + (seg.b.y - seg.a.y) * ratio };
  }

  function spawnEnemy(isBoss = false, bossConfig = null, reinforcement = false) {
    const wave = WAVES[state.wave];
    const boss = bossConfig;
    const variant = (state.spawned + state.bossAddsSpawned) % 4;
    const enemy = {
      id: nextId++, distance: 0, x: PATH[0].x, y: PATH[0].y,
      maxHp: isBoss ? boss.hp : wave.hp * (variant === 2 ? 1.45 : variant === 3 ? .76 : 1),
      hp: 0,
      speed: isBoss ? boss.speed : wave.speed * (variant === 3 ? 1.35 : variant === 2 ? .78 : 1),
      baseSpeed: 0,
      reward: isBoss ? boss.reward : wave.reward * (variant === 2 ? 1.3 : variant === 3 ? .82 : 1) * (reinforcement ? .82 : 1),
      damage: isBoss ? boss.damage : variant === 2 ? 7 : variant === 3 ? 3 : 4,
      boss: isBoss, finalBoss: isBoss ? !!boss.final : false, reinforcement, bossKind: isBoss ? boss.kind : '', bossSlot: isBoss ? state.bossSpawned : -1, name: isBoss ? boss.name : '', variant, radius: isBoss ? (boss.radius || 34) : variant === 2 ? 21 : 16,
      atCore: false, coreAttackClock: 0, coreX: 0, coreY: 0,
      slowUntil: 0, stunUntil: 0, hitFlash: 0, phase: Math.random() * TAU,
    };
    enemy.hp = enemy.maxHp;
    enemy.baseSpeed = enemy.speed;
    state.enemies.push(enemy);
    if (isBoss) {
      state.bannerClock = 2.5;
      ui.waveBanner.hidden = false;
      ui.waveBanner.innerHTML = `<small>${boss.final ? 'WAVE BOSS' : 'MID BOSS'}</small><strong>${boss.name}</strong><span>${boss.final ? 'FINAL' : '!'}</span>`;
      tone(110, .28, 'sawtooth', .06);
      setMusicMode('boss');
    }
  }

  function startWave() {
    state.phase = 'wave';
    state.spawned = 0;
    state.nextSpawn = 0;
    state.bossSpawned = 0;
    state.bossSpawnClock = 0;
    state.bossAddsSpawned = 0;
    state.bossAddClock = 0;
    state.waveElapsed = 0;
    ui.waveBanner.hidden = true;
    tone(523, .09, 'square', .045);
  }

  function update(dt) {
    if (!state || state.phase === 'choice' || state.phase === 'result') return;
    state.elapsed += dt;
    state.shake = Math.max(0, state.shake - dt * 24);
    state.flash = Math.max(0, state.flash - dt * 2.8);
    if (state.bannerClock > 0) {
      state.bannerClock -= dt;
      if (state.bannerClock <= 0 && state.phase === 'wave') ui.waveBanner.hidden = true;
    }

    if (state.phase === 'prep') {
      state.prep -= dt;
      ui.waveBanner.hidden = false;
      ui.waveBanner.innerHTML = `<small>PREPARE</small><strong>WAVE ${state.wave + 1}</strong><span>${Math.max(0, Math.ceil(state.prep))}</span>`;
      if (state.prep <= 0) startWave();
    }

    if (state.phase === 'wave') {
      const wave = WAVES[state.wave];
      const bosses = wave.bosses || [];
      state.waveElapsed += dt;
      state.nextSpawn -= dt;
      if (state.spawned < wave.count && state.nextSpawn <= 0 && state.enemies.length < 44) {
        spawnEnemy(false);
        state.spawned += 1;
        state.nextSpawn = wave.spawn;
      }
      state.bossSpawnClock -= dt;
      state.bossAddClock -= dt;
      const bossAlive = state.enemies.some((enemy) => enemy.boss && enemy.hp > 0);
      const nextBoss = bosses[state.bossSpawned];
      if (nextBoss && state.waveElapsed >= nextBoss.spawnAt && state.bossSpawnClock <= 0) {
        spawnEnemy(true, nextBoss);
        state.bossSpawned += 1;
        state.bossSpawnClock = 1.2;
      }

      const bossPhaseActive = bossAlive || (state.bossSpawned > 0 && state.bossSpawned < bosses.length);
      if (bossPhaseActive && state.spawned >= wave.count && state.bossAddClock <= 0 && state.enemies.length < 44) {
        spawnEnemy(false, null, true);
        state.bossAddsSpawned += 1;
        state.bossAddClock = Math.max(.42, wave.spawn * 1.15);
      }

      updateTowers(dt);
      updateCoreDefense(dt);
      updateProjectiles(dt);
      updateEnemies(dt);

      const complete = state.spawned >= wave.count && state.bossSpawned >= bosses.length && state.enemies.length === 0;
      if (complete) completeWave();
    }

    updateEffects(dt);
    updateHud();
  }

  function bankCritChance(tower) { return state.crit + (tower.level - 1) * .015; }
  function techChainCount(tower) { return 1 + Math.floor((tower.level - 1) / 3); }
  function hedgeSlowDuration(tower) { return 1.1 + (tower.level - 1) * .08; }
  function podShotCount(tower) { return Math.min(6, 3 + Math.floor((tower.level - 1) / 2)); }
  function podSplashMult(tower) { return 1 + (tower.level - 1) * .07; }
  function breakerHitCount(tower) { return 6 + Math.floor((tower.level - 1) / 2); }
  function breakerStunDuration() { return UNIT_TYPES.breaker.stun; }
  function towerDamageScale(tower) { return 1 + (tower.level - 1) * .4; }
  function towerRateScale(tower) { return 1 + (tower.level - 1) * .08; }
  function towerRangeScale(tower) { return 1 + (tower.level - 1) * .06; }
  function dividendInterval(tower) { return Math.max(3.4, 5.2 - tower.level * .25); }
  function dividendIncome(tower) { return Math.round(Math.round(UNIT_TYPES.dividend.income + (tower.level - 1) * 13.2) * 12) / 10; }

  function updateTowers(dt) {
    for (const tower of state.towers) {
      const type = UNIT_TYPES[tower.type];
      tower.cooldown -= dt;
      tower.incomeClock -= dt;
      if (type.income && tower.incomeClock <= 0) {
        tower.incomeClock = dividendInterval(tower);
        const income = dividendIncome(tower);
        state.cash += income;
        addFloater(tower.x, tower.y - 38, `+${income}`, type.color);
      }
      if (tower.cooldown > 0) continue;
      const range = type.range * state.rangeMult * towerRangeScale(tower);
      const targets = state.enemies
        .filter((enemy) => enemy.atCore || Math.hypot(enemy.x - tower.x, enemy.y - tower.y) <= range)
        .sort((a, b) => b.distance - a.distance);
      const target = targets[0];
      if (!target) continue;
      tower.angle = Math.atan2(target.y - tower.y, target.x - tower.x);
      tower.cooldown = type.rate / state.rateMult / towerRateScale(tower);
      const critical = Math.random() < (tower.type === 'bank' ? bankCritChance(tower) : state.crit);
      const damage = type.damage * state.damageMult * towerDamageScale(tower) * (critical ? 2 : 1);
      if (type.area) {
        const hits = targets.slice(0, breakerHitCount(tower));
        hits.forEach((enemy, index) => {
          hitEnemy(enemy, damage * (index ? .72 : 1), critical && index === 0, 0);
          enemy.stunUntil = Math.max(enemy.stunUntil, state.elapsed + breakerStunDuration(tower));
          state.beams.push({ x1: tower.x, y1: tower.y - 26, x2: enemy.x, y2: enemy.y, life: .2, color: type.color, lightning: true });
        });
        state.flash = Math.max(state.flash, .12);
        state.shake = Math.max(state.shake, 4);
        tone(118, .08, 'sawtooth', .026);
      } else if (type.projectile) {
        const shots = tower.type === 'pod' ? Math.min(podShotCount(tower), targets.length) : 1;
        for (let i = 0; i < shots; i += 1) {
          const shotTarget = targets[i] || target;
          state.projectiles.push({ id: nextId++, x: tower.x + (i - shots / 2) * 5, y: tower.y - 8, targetId: shotTarget.id, speed: tower.type === 'pod' ? 510 : 440, damage, color: type.color, slow: tower.type === 'hedge' ? hedgeSlowDuration(tower) : 0, critical, radius: tower.type === 'pod' ? 6 : critical ? 7 : 5, splash: type.splash || 0, splashMult: tower.type === 'pod' ? podSplashMult(tower) : 1, pod: tower.type === 'pod' });
        }
      } else {
        const beamTargets = tower.type === 'tech' ? targets.slice(0, techChainCount(tower)) : [target];
        beamTargets.forEach((beamTarget, index) => {
          hitEnemy(beamTarget, damage * (index ? .68 : 1), critical && index === 0, 0);
          state.beams.push({ x1: tower.x, y1: tower.y, x2: beamTarget.x, y2: beamTarget.y, life: .14, color: type.color });
        });
        tone(760, .025, 'square', .012);
      }
      tower.pulse = .24;
    }
  }

  function updateCoreDefense(dt) {
    state.coreAttackClock -= dt;
    if (state.coreAttackClock > 0) return;
    const target = state.enemies
      .filter((enemy) => enemy.hp > 0 && Math.hypot(enemy.x - 360, enemy.y - 997) <= 235)
      .sort((a, b) => Number(b.atCore) - Number(a.atCore) || b.distance - a.distance)[0];
    if (!target) return;
    const damage = 55 + state.wave * 20;
    hitEnemy(target, damage, false, 0);
    state.beams.push({ x1: 360, y1: 940, x2: target.x, y2: target.y, life: .2, color: '#62fff0', lightning: true, coreAttack: true });
    state.coreAttackClock = .85;
    tone(740, .045, 'square', .018);
  }

  function updateProjectiles(dt) {
    for (const projectile of state.projectiles) {
      const target = state.enemies.find((enemy) => enemy.id === projectile.targetId);
      if (!target) { projectile.life = 0; continue; }
      const dx = target.x - projectile.x;
      const dy = target.y - projectile.y;
      const distance = Math.hypot(dx, dy);
      if (distance < target.radius + projectile.radius + 5) {
        hitEnemy(target, projectile.damage, projectile.critical, projectile.slow);
        if (projectile.splash) {
          for (const enemy of state.enemies) {
            if (enemy.id === target.id || enemy.hp <= 0) continue;
            if (Math.hypot(enemy.x - target.x, enemy.y - target.y) <= projectile.splash) hitEnemy(enemy, projectile.damage * .42 * projectile.splashMult, false, 0);
          }
          burst(target.x, target.y, projectile.color, 14, 1.6);
        }
        projectile.life = 0;
        continue;
      }
      projectile.x += dx / distance * projectile.speed * dt;
      projectile.y += dy / distance * projectile.speed * dt;
      projectile.life = 1;
    }
    state.projectiles = state.projectiles.filter((projectile) => projectile.life !== 0).slice(-100);
  }

  function hitEnemy(enemy, damage, critical, slow) {
    enemy.hp -= damage;
    enemy.hitFlash = .08;
    if (slow) enemy.slowUntil = Math.max(enemy.slowUntil, state.elapsed + slow);
    addFloater(enemy.x, enemy.y - enemy.radius, `${critical ? 'CRIT ' : ''}${Math.round(damage)}`, critical ? '#ffe25e' : '#f7ffff', 'damage');
    burst(enemy.x, enemy.y, critical ? '#ffc84a' : '#42e7e0', critical ? 10 : 5, critical ? 1.65 : 1.4);
    if (critical) tone(930, .035, 'square', .018);
  }

  function updateEnemies(dt) {
    for (const enemy of state.enemies) {
      enemy.hitFlash = Math.max(0, enemy.hitFlash - dt);
      if (enemy.hp <= 0) continue;
      if (state.elapsed < enemy.stunUntil) continue;
      if (enemy.atCore) {
        enemy.coreAttackClock -= dt;
        enemy.x = enemy.coreX;
        enemy.y = enemy.coreY;
        if (enemy.coreAttackClock <= 0) {
          state.core = Math.max(0, state.core - enemy.damage);
          enemy.coreAttackClock = enemy.boss ? 1.55 : 1.35 + enemy.variant * .12;
          state.shake = Math.max(state.shake, enemy.boss ? 16 : 7);
          state.flash = Math.max(state.flash, enemy.boss ? .42 : .24);
          state.beams.push({ x1: enemy.x, y1: enemy.y - enemy.radius * .4, x2: 360, y2: 997, life: enemy.boss ? .24 : .16, color: '#ff4b4b', enemyAttack: true, bossAttack: enemy.boss });
          burst(360, 1015, '#ff4b4b', enemy.boss ? 18 : 8, enemy.boss ? 1.7 : 1.3);
          addFloater(360, 945, `CORE -${enemy.damage}`, '#ff7168', 'damage');
          tone(enemy.boss ? 78 : 105, enemy.boss ? .18 : .09, 'sawtooth', enemy.boss ? .065 : .035);
        }
        continue;
      }
      const slow = state.elapsed < enemy.slowUntil ? .55 : 1;
      enemy.distance += enemy.baseSpeed * slow * dt;
      const point = pointOnPath(enemy.distance);
      enemy.x = point.x;
      enemy.y = point.y;
      if (enemy.distance >= pathLength - 4) {
        enemy.distance = pathLength;
        enemy.atCore = true;
        enemy.coreAttackClock = .35;
        enemy.coreX = point.x;
        enemy.coreY = point.y;
        addFloater(enemy.x, enemy.y - enemy.radius - 10, 'CORE ATTACK', '#ff7168');
      }
    }

    const dead = state.enemies.filter((enemy) => enemy.hp <= 0);
    for (const enemy of dead) {
      const reward = Math.round(enemy.reward * state.rewardMult);
      state.cash += reward;
      state.score += Math.round(enemy.maxHp * .7 + reward * 8 + state.wave * 40);
      state.kills += 1;
      state.support = Math.min(state.supportNeed, state.support + (enemy.boss ? 8 : 1));
      burst(enemy.x, enemy.y, enemy.boss ? '#ffc84a' : '#ff765f', enemy.boss ? 28 : 9);
      addFloater(enemy.x, enemy.y - 30, `+${reward}`, '#ffc84a');
      tone(enemy.boss ? 180 : 240, enemy.boss ? .15 : .04, 'triangle', enemy.boss ? .05 : .015);
    }
    state.enemies = state.enemies.filter((enemy) => enemy.hp > 0);
    if (!state.enemies.some((enemy) => enemy.boss) && musicMode === 'boss') setMusicMode('normal');
    if (state.core <= 0) finishGame(false);
  }

  function completeWave() {
    state.score += 700 + state.wave * 250 + Math.round(state.core * 12);
    state.core = state.coreMax;
    tone(523, .1, 'square', .05); setTimeout(() => tone(659, .1, 'square', .05), 80); setTimeout(() => tone(784, .16, 'square', .05), 160);
    if (state.wave >= WAVES.length - 1) {
      finishGame(true);
      return;
    }
    state.phase = 'choice';
    state.pendingChoices = 3;
    state.rerollsLeft = 1;
    state.lastChoiceKeys = [];
    showChoices();
  }

  function showChoices() {
    let available = GLOBAL_CHOICES.filter((choice) => !state.lastChoiceKeys.includes(choice.key));
    if (available.length < 3) available = [...GLOBAL_CHOICES];
    const pool = available.sort(() => Math.random() - .5).slice(0, 3);
    state.lastChoiceKeys = pool.map((choice) => choice.key);
    ui.choiceGrid.innerHTML = '';
    ui.choiceProgress.textContent = state.pendingChoices > 1 ? `全体強化　あと${state.pendingChoices}回` : '全体強化を1つ選択';
    ui.rerollChoices.disabled = state.rerollsLeft <= 0;
    ui.rerollChoices.textContent = state.rerollsLeft > 0 ? '↻ 候補を更新する（1回のみ）' : '候補更新は使用済み';
    pool.forEach((choice, index) => {
      const button = document.createElement('button');
      button.className = 'choice-card';
      button.type = 'button';
      button.dataset.choice = String(index + 1);
      button.innerHTML = `<em>${index + 1}</em><i>${choice.icon}</i><strong>${choice.name}</strong><span>${choice.detail}</span>`;
      button.addEventListener('click', () => {
        choice.apply(state);
        tone(660, .12, 'triangle', .05);
        state.pendingChoices -= 1;
        if (state.pendingChoices > 0) {
          showChoices();
        } else {
          ui.choiceBackdrop.hidden = true;
          state.wave += 1;
          state.phase = 'prep';
          state.prep = TEST_MODE ? .15 : 2.4;
          startMusic('normal');
        }
        updateHud();
      }, { once: true });
      ui.choiceGrid.append(button);
    });
    ui.choiceBackdrop.hidden = false;
  }

  function rerollChoices() {
    if (!state || state.phase !== 'choice' || state.rerollsLeft <= 0) return;
    state.rerollsLeft -= 1;
    tone(330, .07, 'square', .03);
    showChoices();
  }

  function finishGame(won) {
    if (!state || state.phase === 'result') return;
    state.phase = 'result';
    stopMusic();
    const coreRatio = Math.max(0, state.core / state.coreMax);
    const finalScore = Math.max(0, Math.round(state.score + state.cash * .6 + coreRatio * 5000 + (won ? 12000 : 0)));
    save.best = Math.max(save.best, finalScore);
    save.maxWave = Math.max(save.maxWave || 0, state.wave + 1);
    if (won) save.clears = (save.clears || 0) + 1;
    writeSave();
    ui.resultVisual.classList.toggle('is-loss', !won);
    ui.resultOverline.textContent = won ? 'MARKET SECURED' : 'CORE LIQUIDATED';
    ui.resultTitle.textContent = won ? '防衛成功' : '市場崩壊';
    ui.finalScore.textContent = formatNumber(finalScore);
    ui.resultWave.textContent = `${state.wave + 1} / ${WAVES.length}`;
    ui.resultKills.textContent = formatNumber(state.kills);
    ui.resultCore.textContent = `${Math.round(coreRatio * 100)}%`;
    ui.resultBest.textContent = formatNumber(save.best);
    showScreen('result');
    tone(won ? 523 : 100, .3, won ? 'square' : 'sawtooth', .06);
    if (won) { setTimeout(() => tone(659, .25, 'square', .06), 120); setTimeout(() => tone(784, .4, 'square', .06), 240); }
  }

  function activateSupport() {
    if (!state || state.phase !== 'wave' || state.support < state.supportNeed) return;
    state.support = 0;
    state.flash = .8;
    state.shake = 14;
    for (const enemy of state.enemies) {
      enemy.hp -= enemy.maxHp * (enemy.boss ? .05 : .16);
      enemy.stunUntil = state.elapsed + .55;
      burst(enemy.x, enemy.y, '#ffc84a', 5);
    }
    state.beams.push({ x1: 0, y1: 0, x2: W, y2: H, life: .45, color: '#ffc84a', support: true });
    tone(220, .18, 'sawtooth', .07); setTimeout(() => tone(660, .28, 'square', .06), 100);
    updateHud();
  }

  function buildAtPad(index) {
    if (!state || state.phase === 'choice' || state.phase === 'result') return;
    if (state.towers.some((tower) => tower.pad === index)) {
      selectTower(state.towers.find((tower) => tower.pad === index).id);
      return;
    }
    const type = UNIT_TYPES[selectedUnit];
    if (state.cash < type.cost) {
      addFloater(PADS[index].x, PADS[index].y - 35, '資金不足', '#ff8a7a');
      tone(100, .08, 'square', .025);
      return;
    }
    state.cash -= type.cost;
    const pad = PADS[index];
    const tower = { id: nextId++, pad: index, type: selectedUnit, x: pad.x, y: pad.y, level: 1, cooldown: .1, incomeClock: 4, angle: -Math.PI / 2, pulse: .4, spent: type.cost };
    state.towers.push(tower);
    selectedTowerId = tower.id;
    burst(pad.x, pad.y, type.color, 14);
    tone(410, .08, 'square', .04); setTimeout(() => tone(620, .08, 'square', .03), 60);
    updateTowerPanel();
    updateHud();
  }

  function selectTower(id) {
    selectedTowerId = id;
    updateTowerPanel();
  }

  function selectedTower() { return state?.towers.find((tower) => tower.id === selectedTowerId) || null; }

  function towerSpecialText(tower) {
    const type = UNIT_TYPES[tower.type];
    if (tower.type === 'bank') return `会心 ${Math.round(bankCritChance(tower) * 100)}%`;
    if (tower.type === 'tech') return `連鎖 ${techChainCount(tower)}体`;
    if (tower.type === 'dividend') return `配当 +${dividendIncome(tower)} / ${dividendInterval(tower).toFixed(1)}秒`;
    if (tower.type === 'hedge') return `減速 ${hedgeSlowDuration(tower).toFixed(1)}秒`;
    if (tower.type === 'pod') return `${podShotCount(tower)}連射 / 爆風 ${Math.round(podSplashMult(tower) * 100)}%`;
    return `停止 ${breakerStunDuration(tower).toFixed(1)}秒 / ${breakerHitCount(tower)}体`;
  }

  function towerUpgradeCost(tower) { return Math.round(UNIT_TYPES[tower.type].cost * (.82 + tower.level * .66)); }

  function upgradeTower() {
    const tower = selectedTower();
    if (!tower || tower.level >= MAX_TOWER_LEVEL) return;
    const cost = towerUpgradeCost(tower);
    if (state.cash < cost) { tone(100, .08, 'square', .025); return; }
    state.cash -= cost;
    tower.spent += cost;
    tower.level += 1;
    tower.pulse = .6;
    burst(tower.x, tower.y, UNIT_TYPES[tower.type].color, 18);
    tone(520 + tower.level * 70, .14, 'square', .05);
    updateTowerPanel(); updateHud();
  }

  function sellTower() {
    const tower = selectedTower();
    if (!tower) return;
    const value = Math.round(tower.spent * .55);
    state.cash += value;
    state.towers = state.towers.filter((item) => item.id !== tower.id);
    burst(tower.x, tower.y, '#ffc84a', 10);
    addFloater(tower.x, tower.y - 30, `+${value}`, '#ffc84a');
    selectedTowerId = null;
    ui.towerPanel.hidden = true;
    tone(300, .08, 'triangle', .03); updateHud();
  }

  function updateTowerPanel() {
    const tower = selectedTower();
    if (!tower) { ui.towerPanel.hidden = true; return; }
    const type = UNIT_TYPES[tower.type];
    const cost = towerUpgradeCost(tower);
    ui.towerPanel.hidden = false;
    ui.towerType.textContent = type.name;
    ui.towerLevel.textContent = `LV.${tower.level}`;
    ui.towerStats.textContent = `攻撃 ${Math.round(type.damage * state.damageMult * towerDamageScale(tower))} / 射程 ${Math.round(type.range * state.rangeMult * towerRangeScale(tower))} / ${towerSpecialText(tower)}`;
    ui.upgradeCost.textContent = tower.level >= MAX_TOWER_LEVEL ? 'MAX' : formatNumber(cost);
    ui.upgradeTower.disabled = tower.level >= MAX_TOWER_LEVEL || state.cash < cost;
  }

  function selectUnit(type) {
    if (!UNIT_TYPES[type]) return;
    selectedUnit = type;
    selectedTowerId = null;
    ui.towerPanel.hidden = true;
    updateUnitButtons();
    tone(340 + Object.keys(UNIT_TYPES).indexOf(type) * 80, .035, 'square', .018);
  }

  function updateUnitButtons() {
    ui.unitButtons.forEach((button) => {
      const selected = button.dataset.unit === selectedUnit;
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
  }

  function addFloater(x, y, text, color, kind = 'info') {
    if (state.floaters.length >= 22) return;
    const life = kind === 'damage' ? .92 : .8;
    state.floaters.push({ x, y, text, color, kind, life, maxLife: life });
  }

  function burst(x, y, color, count, sizeMult = 1) {
    const available = Math.max(0, 90 - state.particles.length);
    for (let i = 0; i < Math.min(count, available); i += 1) {
      const angle = Math.random() * TAU;
      const speed = 45 + Math.random() * 120;
      state.particles.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, color, life: .35 + Math.random() * .4, size: (2 + Math.random() * 4) * sizeMult });
    }
  }

  function updateEffects(dt) {
    for (const tower of state.towers) tower.pulse = Math.max(0, tower.pulse - dt);
    for (const beam of state.beams) beam.life -= dt;
    for (const particle of state.particles) { particle.x += particle.vx * dt; particle.y += particle.vy * dt; particle.vx *= .96; particle.vy *= .96; particle.life -= dt; }
    for (const floater of state.floaters) { floater.y -= 34 * dt; floater.life -= dt; }
    state.beams = state.beams.filter((beam) => beam.life > 0).slice(-18);
    state.particles = state.particles.filter((particle) => particle.life > 0).slice(-90);
    state.floaters = state.floaters.filter((floater) => floater.life > 0).slice(-22);
  }

  function updateHud() {
    if (!state) return;
    ui.wave.textContent = `${state.wave + 1} / ${WAVES.length}`;
    ui.core.textContent = `${Math.max(0, Math.ceil(state.core))}`;
    ui.coreBar.style.width = `${Math.max(0, state.core / state.coreMax * 100)}%`;
    ui.cash.textContent = formatNumber(state.cash);
    ui.time.textContent = formatTime(state.elapsed);
    const supportPct = Math.min(100, state.support / state.supportNeed * 100);
    ui.supportBar.style.width = `${supportPct}%`;
    ui.supportValue.textContent = `${Math.floor(supportPct)}%`;
    ui.support.disabled = supportPct < 100 || state.phase !== 'wave';
    ui.unitButtons.forEach((button) => { button.classList.toggle('is-unaffordable', state.cash < UNIT_TYPES[button.dataset.unit].cost); });
    if (selectedTowerId) updateTowerPanel();
    if (DEBUG_MODE) {
      document.body.dataset.crashDebug = JSON.stringify({
        phase: state.phase, wave: state.wave, waveElapsed: Math.round(state.waveElapsed), core: state.core, cash: state.cash, kills: state.kills,
        spawned: state.spawned, bossAddsSpawned: state.bossAddsSpawned, coreAttackers: state.enemies.filter((enemy) => enemy.atCore).length,
        towers: state.towers.map((tower) => ({ type: tower.type, pad: tower.pad, level: tower.level })),
        bosses: state.enemies.filter((enemy) => enemy.boss).map((enemy) => ({ kind: enemy.bossKind, hp: Math.round(enemy.hp), maxHp: enemy.maxHp, distance: Math.round(enemy.distance) })),
      });
    }
  }

  function createStaticLayer() {
    staticLayer = document.createElement('canvas');
    staticLayer.width = W; staticLayer.height = H;
    const g = staticLayer.getContext('2d');
    const backdrop = g.createLinearGradient(0, 0, W, H);
    backdrop.addColorStop(0, '#190b0c'); backdrop.addColorStop(.42, '#071614'); backdrop.addColorStop(1, '#041a1b');
    g.fillStyle = backdrop; g.fillRect(0, 0, W, H);
    if (battlefieldArt.complete && battlefieldArt.naturalWidth) {
      g.imageSmoothingEnabled = false;
      g.drawImage(battlefieldArt, 0, 0, W, H);
      g.fillStyle = 'rgba(2, 9, 13, .14)';
      g.fillRect(0, 0, W, H);
    }
    const redStorm = g.createRadialGradient(80, 180, 10, 80, 180, 430);
    redStorm.addColorStop(0, 'rgba(255,44,37,.24)'); redStorm.addColorStop(1, 'rgba(255,44,37,0)');
    g.fillStyle = redStorm; g.fillRect(0, 0, W, 700);
    const coreGlow = g.createRadialGradient(360, 1060, 10, 360, 1060, 300);
    coreGlow.addColorStop(0, 'rgba(43,238,225,.24)'); coreGlow.addColorStop(1, 'rgba(43,238,225,0)');
    g.fillStyle = coreGlow; g.fillRect(0, 760, W, 360);
    g.strokeStyle = 'rgba(103, 210, 177, .09)'; g.lineWidth = 1;
    for (let x = 0; x <= W; x += 40) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, H); g.stroke(); }
    for (let y = 0; y <= H; y += 40) { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); }
    const rand = seededRandom(20260821);
    for (let x = 18; x < W; x += 24) {
      const base = 50 + rand() * 980;
      const height = 8 + rand() * 34;
      const up = rand() > .48;
      g.strokeStyle = up ? 'rgba(61, 224, 159, .12)' : 'rgba(255, 75, 75, .12)';
      g.fillStyle = g.strokeStyle;
      g.beginPath(); g.moveTo(x, base - height); g.lineTo(x, base + height); g.stroke();
      g.fillRect(x - 3, base - height * .45, 6, height * .9);
    }
    for (let i = 0; i < 18; i += 1) {
      const x = rand() * W; const y = 80 + rand() * 900; const size = 8 + rand() * 22;
      g.fillStyle = rand() > .48 ? 'rgba(28,82,72,.18)' : 'rgba(72,24,28,.2)';
      g.fillRect(x, y, size, size * .22); g.fillRect(x + size * .39, y - size * .35, size * .22, size * .9);
    }
    g.lineCap = 'round'; g.lineJoin = 'round';
    g.shadowColor = '#000'; g.shadowBlur = 14;
    g.strokeStyle = 'rgba(0,0,0,.96)'; g.lineWidth = 102; drawPath(g); g.stroke();
    g.shadowBlur = 0;
    g.strokeStyle = '#5f481b'; g.lineWidth = 92; drawPath(g); g.stroke();
    g.strokeStyle = '#d5a538'; g.lineWidth = 84; drawPath(g); g.stroke();
    g.strokeStyle = '#111a22'; g.lineWidth = 76; drawPath(g); g.stroke();
    const routeMetal = g.createLinearGradient(0, 0, 0, H);
    routeMetal.addColorStop(0, '#32151a');
    routeMetal.addColorStop(.34, '#202833');
    routeMetal.addColorStop(.68, '#162b32');
    routeMetal.addColorStop(1, '#11383b');
    g.strokeStyle = routeMetal; g.lineWidth = 66; drawPath(g); g.stroke();
    g.strokeStyle = 'rgba(255,214,107,.55)'; g.lineWidth = 2; drawPath(g); g.stroke();
    drawRoutePlates(g);
    const signal = g.createLinearGradient(0, 0, 0, H);
    signal.addColorStop(0, '#ff493f'); signal.addColorStop(.55, '#f04444'); signal.addColorStop(1, '#48e8dc');
    g.strokeStyle = signal; g.lineWidth = 5; g.setLineDash([15, 18]); drawPath(g); g.stroke(); g.setLineDash([]);
  }

  function seededRandom(seed) {
    return () => { seed = Math.imul(48271, seed) | 0; return (seed >>> 0) / 4294967296; };
  }

  function drawPath(g) {
    g.beginPath(); g.moveTo(PATH[0].x, PATH[0].y);
    for (let i = 1; i < PATH.length; i += 1) g.lineTo(PATH[i].x, PATH[i].y);
  }

  function drawRoutePlates(g) {
    for (let distance = 36; distance < pathLength - 30; distance += 62) {
      const point = pointOnPath(distance);
      const before = pointOnPath(distance - 4);
      const after = pointOnPath(distance + 4);
      const angle = Math.atan2(after.y - before.y, after.x - before.x) + Math.PI / 2;
      const dx = Math.cos(angle);
      const dy = Math.sin(angle);
      g.strokeStyle = 'rgba(126,168,177,.28)';
      g.lineWidth = 2;
      g.beginPath();
      g.moveTo(point.x - dx * 29, point.y - dy * 29);
      g.lineTo(point.x + dx * 29, point.y + dy * 29);
      g.stroke();
      g.fillStyle = distance < pathLength * .48 ? '#ff5148' : '#51e8d9';
      g.fillRect(point.x - dx * 25 - 2, point.y - dy * 25 - 2, 4, 4);
      g.fillRect(point.x + dx * 25 - 2, point.y + dy * 25 - 2, 4, 4);
    }
  }

  function draw() {
    if (!state) return;
    const shakeX = state.shake ? (Math.random() - .5) * state.shake : 0;
    const shakeY = state.shake ? (Math.random() - .5) * state.shake : 0;
    ctx.save(); ctx.translate(shakeX, shakeY); ctx.drawImage(staticLayer, 0, 0);
    drawCore(); drawPads();
    for (const tower of state.towers) drawTower(tower);
    for (const enemy of state.enemies) if (!enemy.boss) drawEnemy(enemy);
    for (const enemy of state.enemies) if (enemy.boss) drawEnemy(enemy);
    for (const projectile of state.projectiles) drawProjectile(projectile);
    for (const beam of state.beams) drawBeam(beam);
    for (const particle of state.particles) { ctx.globalAlpha = Math.min(1, particle.life * 2); ctx.fillStyle = particle.color; ctx.fillRect(particle.x - particle.size / 2, particle.y - particle.size / 2, particle.size, particle.size); }
    ctx.globalAlpha = 1;
    for (const floater of state.floaters) {
      const progress = 1 - floater.life / floater.maxLife;
      const damage = floater.kind === 'damage';
      const pop = damage ? 1 + Math.sin(Math.min(1, progress * 2.2) * Math.PI) * .22 : 1;
      ctx.save();
      ctx.translate(floater.x, floater.y);
      ctx.scale(pop, pop);
      ctx.globalAlpha = Math.min(1, floater.life * 2.4);
      ctx.font = damage ? '900 24px "Arial Rounded MT Bold", "Trebuchet MS", "Yu Gothic UI", sans-serif' : '900 18px "Yu Gothic UI", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      if (damage) {
        ctx.lineJoin = 'round';
        ctx.lineWidth = 6;
        ctx.strokeStyle = '#071018';
        ctx.shadowColor = '#000';
        ctx.shadowBlur = 5;
        ctx.strokeText(floater.text, 0, 0);
      }
      ctx.shadowBlur = 0;
      ctx.fillStyle = floater.color;
      ctx.fillText(floater.text, 0, 0);
      ctx.restore();
    }
    ctx.globalAlpha = 1; ctx.restore();
    if (state.flash > 0) { ctx.fillStyle = `rgba(255, 235, 145, ${state.flash * .24})`; ctx.fillRect(0, 0, W, H); }
  }

  function drawCore() {
    const ratio = Math.max(0, state.core / state.coreMax);
    const critical = ratio <= .35;
    const coreColor = critical ? '#ff3d42' : '#42e7e0';
    const pulse = Math.sin(state.elapsed * 3.2) * 4;
    ctx.save();
    ctx.translate(360, 997);

    const aura = ctx.createRadialGradient(0, 18, 12, 0, 18, 126 + pulse);
    aura.addColorStop(0, critical ? 'rgba(255,55,60,.42)' : 'rgba(61,242,226,.38)');
    aura.addColorStop(.58, critical ? 'rgba(255,42,47,.16)' : 'rgba(42,210,219,.13)');
    aura.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = aura;
    ctx.beginPath();
    ctx.arc(0, 18, 128 + pulse, 0, TAU);
    ctx.fill();

    ctx.save();
    ctx.rotate(state.elapsed * .24);
    ctx.setLineDash([18, 10, 5, 10]);
    ctx.lineDashOffset = -state.elapsed * 18;
    ctx.strokeStyle = critical ? '#ff5d54' : '#79fff0';
    ctx.lineWidth = 3;
    ctx.shadowColor = coreColor;
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.ellipse(0, 54, 105 + pulse * .35, 35 + pulse * .12, 0, 0, TAU);
    ctx.stroke();
    ctx.restore();

    if (coreArt.complete && coreArt.naturalWidth) {
      ctx.save();
      ctx.imageSmoothingEnabled = false;
      ctx.filter = critical ? 'saturate(.7) hue-rotate(145deg) brightness(.95)' : 'none';
      ctx.shadowColor = coreColor;
      ctx.shadowBlur = critical ? 22 : 16;
      ctx.drawImage(coreArt, -125, -110 + pulse * .18, 250, 228);
      ctx.restore();
    } else {
      ctx.fillStyle = coreColor;
      ctx.beginPath();
      ctx.arc(0, 12, 68, 0, TAU);
      ctx.fill();
    }

    ctx.save();
    ctx.translate(0, -58);
    ctx.fillStyle = '#eaffff';
    ctx.shadowColor = coreColor;
    ctx.shadowBlur = 18;
    ctx.beginPath();
    ctx.arc(0, 0, 9 + Math.sin(state.elapsed * 8) * 1.5, 0, TAU);
    ctx.fill();
    ctx.strokeStyle = coreColor;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, 17, -state.elapsed * 2, -state.elapsed * 2 + Math.PI * 1.35);
    ctx.stroke();
    ctx.restore();

    ctx.strokeStyle = '#f0bd45';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.ellipse(0, 66, 92, 30, 0, Math.PI * .1, Math.PI * .9);
    ctx.stroke();
    ctx.strokeStyle = coreColor;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.ellipse(0, 66, 92, 30, 0, Math.PI * .1, Math.PI * (.1 + .8 * ratio));
    ctx.stroke();

    if (critical) {
      ctx.globalAlpha = .45 + Math.sin(state.elapsed * 12) * .2;
      ctx.strokeStyle = '#fff0d0';
      ctx.lineWidth = 3;
      for (let i = 0; i < 3; i += 1) {
        const start = -58 + i * 55;
        ctx.beginPath();
        ctx.moveTo(start, -10);
        ctx.lineTo(start + 15, 5);
        ctx.lineTo(start + 4, 25);
        ctx.lineTo(start + 22, 43);
        ctx.stroke();
      }
    }
    ctx.restore();
  }

  function drawPads() {
    for (let i = 0; i < PADS.length; i += 1) {
      const pad = PADS[i];
      const occupied = state.towers.some((tower) => tower.pad === i);
      if (occupied) continue;
      const affordable = state.cash >= UNIT_TYPES[selectedUnit].cost;
      ctx.save(); ctx.translate(pad.x, pad.y);
      const color = affordable ? UNIT_TYPES[selectedUnit].color : '#65403d';
      ctx.shadowColor = color; ctx.shadowBlur = affordable ? 12 : 0;
      ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath();
      for (let p = 0; p < 6; p += 1) { const a = -Math.PI / 2 + p * TAU / 6; const radius = 32 + Math.sin(state.elapsed * 3 + i) * 1.5; const x = Math.cos(a) * radius; const y = Math.sin(a) * radius * .72; p ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
      ctx.closePath(); ctx.stroke(); ctx.shadowBlur = 0;
      ctx.fillStyle = '#101b1a'; ctx.beginPath(); ctx.ellipse(0, 4, 25, 17, 0, 0, TAU); ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,.22)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(0, 4, 21, 13, 0, 0, TAU); ctx.stroke();
      ctx.fillStyle = affordable ? '#dfffee' : '#a47470'; ctx.font = '900 17px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('+', 0, 4); ctx.restore();
    }
  }

  function drawAtlasSprite(key, x, y, width, height, flip = false, filter = 'none') {
    if (!spriteAtlas.complete || !spriteAtlas.naturalWidth) return false;
    const sprite = SPRITES[key];
    ctx.save(); ctx.translate(x, y); if (flip) ctx.scale(-1, 1); ctx.filter = filter; ctx.imageSmoothingEnabled = false;
    ctx.drawImage(spriteAtlas, sprite.x, sprite.y, sprite.w, sprite.h, -width / 2, -height / 2, width, height);
    ctx.restore(); return true;
  }

  function drawBossSprite(key, x, y, width, height, flip = false, filter = 'none') {
    const image = bossArt[key];
    if (!image || !image.complete || !image.naturalWidth) return false;
    ctx.save();
    ctx.translate(x, y);
    if (flip) ctx.scale(-1, 1);
    ctx.filter = filter;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(image, -width / 2, -height / 2, width, height);
    ctx.restore();
    return true;
  }

  function drawExtraSprite(key, x, y, width, height) {
    if (!extraAtlas.complete || !extraAtlas.naturalWidth) return false;
    const sourceX = key === 'pod' ? 0 : extraAtlas.naturalWidth / 2;
    ctx.save();
    ctx.translate(x, y);
    ctx.globalCompositeOperation = 'screen';
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(extraAtlas, sourceX, 0, extraAtlas.naturalWidth / 2, extraAtlas.naturalHeight, -width / 2, -height / 2, width, height);
    ctx.restore();
    return true;
  }

  function drawTower(tower) {
    const type = UNIT_TYPES[tower.type];
    const selected = tower.id === selectedTowerId;
    ctx.save(); ctx.translate(tower.x, tower.y);
    if (selected) { ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.globalAlpha = .22; ctx.beginPath(); ctx.arc(0, 0, type.range * state.rangeMult * towerRangeScale(tower), 0, TAU); ctx.stroke(); ctx.globalAlpha = 1; }
    ctx.fillStyle = 'rgba(0,0,0,.5)'; ctx.beginPath(); ctx.ellipse(0, 22, 37, 15, 0, 0, TAU); ctx.fill();
    if (tower.pulse > 0) { ctx.globalAlpha = tower.pulse * 2.5; ctx.strokeStyle = type.color; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(0, 0, 38 + tower.pulse * 35, 0, TAU); ctx.stroke(); ctx.globalAlpha = 1; }
    const sizes = { bank: [94, 118], tech: [92, 118], dividend: [88, 126], hedge: [102, 123], pod: [106, 112], breaker: [98, 120] };
    const size = sizes[tower.type];
    const rendered = ['pod', 'breaker'].includes(tower.type)
      ? drawExtraSprite(tower.type, 0, -18, size[0], size[1])
      : drawAtlasSprite(tower.type, 0, -18, size[0], size[1]);
    if (!rendered) {
      ctx.fillStyle = type.color; ctx.beginPath(); ctx.arc(0, -6, 25, 0, TAU); ctx.fill();
    }
    ctx.fillStyle = '#06110e'; ctx.strokeStyle = type.color; ctx.lineWidth = 2; ctx.beginPath(); ctx.roundRect(-18, 32, 36, 19, 4); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff'; ctx.font = '900 11px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(`L${tower.level}`, 0, 42); ctx.restore();
  }

  function drawEnemy(enemy) {
    const bob = Math.sin(state.elapsed * 7 + enemy.phase) * (enemy.boss ? 2 : 3);
    ctx.save(); ctx.translate(enemy.x, enemy.y + bob);
    const next = pointOnPath(enemy.distance + 14); const flip = next.x < enemy.x;
    let sprite = 'bear'; let width = enemy.variant === 2 ? 94 : enemy.variant === 3 ? 68 : 80; let height = width * 1.04;
    if (enemy.bossKind === 'captain') { sprite = 'captain'; width = 112; height = 130; }
    if (enemy.bossKind === 'whale') { sprite = 'whale'; width = 136; height = 136; }
    if (enemy.bossKind === 'king') { width = 154; height = 148; }
    if (enemy.bossKind === 'titan') { sprite = 'titan'; width = 142; height = 174; }
    if (enemy.bossKind === 'reaper') { width = 150; height = 170; }
    if (enemy.bossKind === 'swan') { width = 190; height = 180; }
    if (enemy.boss) {
      width *= BOSS_VISUAL_SCALE;
      height *= BOSS_VISUAL_SCALE;
      const auraRadius = Math.max(width, height) * .48;
      const auraPulse = 1 + Math.sin(state.elapsed * 5 + enemy.phase) * .07;
      const auraColor = enemy.finalBoss ? '#ff376d' : '#ffc84a';
      const auraFill = enemy.finalBoss ? 'rgba(255,55,109,.16)' : 'rgba(255,200,74,.13)';
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = auraFill;
      ctx.shadowColor = auraColor;
      ctx.shadowBlur = 34;
      ctx.beginPath();
      ctx.arc(0, -12, auraRadius * auraPulse, 0, TAU);
      ctx.fill();
      ctx.globalAlpha = .86;
      ctx.strokeStyle = auraColor;
      ctx.lineWidth = enemy.finalBoss ? 7 : 5;
      ctx.beginPath();
      ctx.arc(0, -12, auraRadius * (.92 + (auraPulse - 1) * 1.5), 0, TAU);
      ctx.stroke();
      ctx.rotate(-state.elapsed * .45);
      ctx.globalAlpha = .58;
      ctx.setLineDash([14, 10]);
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, -12, auraRadius * 1.12, 0, TAU);
      ctx.stroke();
      ctx.restore();
    }
    ctx.fillStyle = 'rgba(0,0,0,.58)'; ctx.beginPath(); ctx.ellipse(0, enemy.radius + 9, enemy.boss ? width * .34 : 25, enemy.boss ? 20 : 9, 0, 0, TAU); ctx.fill();
    const filter = enemy.hitFlash > 0 ? 'brightness(3) saturate(0)' : enemy.variant === 2 && !enemy.boss ? 'brightness(.82) saturate(1.25)' : enemy.variant === 3 && !enemy.boss ? 'brightness(1.25)' : 'none';
    const rendered = ['king', 'reaper', 'swan'].includes(enemy.bossKind)
      ? drawBossSprite(enemy.bossKind, 0, -18, width, height, flip, filter)
      : drawAtlasSprite(sprite, 0, enemy.boss ? -18 : -5, width, height, flip, filter);
    if (!rendered) {
      ctx.fillStyle = '#e44e45'; ctx.beginPath(); ctx.arc(0, 0, enemy.radius, 0, TAU); ctx.fill();
    }
    if (enemy.boss) { ctx.font = '900 14px "Yu Gothic UI", sans-serif'; ctx.textAlign = 'center'; ctx.lineWidth = 5; ctx.strokeStyle = '#160707'; ctx.strokeText(enemy.name, 0, -height * .53); ctx.fillStyle = '#fff1c2'; ctx.fillText(enemy.name, 0, -height * .53); }
    if (state.elapsed < enemy.slowUntil) { ctx.strokeStyle = '#b78cff'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(0, 0, enemy.radius + 8, 0, TAU); ctx.stroke(); }
    if (state.elapsed < enemy.stunUntil) { ctx.fillStyle = '#ffc84a'; ctx.font = '900 16px sans-serif'; ctx.textAlign = 'center'; ctx.fillText('×', 0, -enemy.radius - 10); }
    const barWidth = enemy.boss ? 118 : 42; const barY = enemy.boss ? height * .42 : enemy.radius + 18;
    ctx.fillStyle = '#270707'; ctx.fillRect(-barWidth / 2, barY, barWidth, 6);
    ctx.fillStyle = enemy.boss ? '#ffc84a' : '#66f2a2'; ctx.fillRect(-barWidth / 2, barY, barWidth * Math.max(0, enemy.hp / enemy.maxHp), 6);
    ctx.restore();
  }

  function drawProjectile(projectile) {
    ctx.save(); ctx.translate(projectile.x, projectile.y); ctx.rotate(state.elapsed * 8); ctx.scale(projectile.pod ? 1.45 : 1.55, projectile.pod ? 1.45 : 1.55); ctx.fillStyle = projectile.color; ctx.shadowColor = projectile.color; ctx.shadowBlur = 26;
    ctx.save();
    ctx.globalAlpha = .28;
    ctx.beginPath();
    ctx.arc(0, 0, projectile.radius * 2.4, 0, TAU);
    ctx.fill();
    ctx.restore();
    if (projectile.pod) {
      ctx.fillStyle = '#f7f4e8'; ctx.fillRect(-7, -4, 12, 8);
      ctx.fillStyle = '#ff9d3d'; ctx.fillRect(2, -5, 7, 10);
      ctx.fillStyle = '#42e7e0'; ctx.fillRect(-10, -2, 4, 4);
      ctx.restore();
      return;
    }
    ctx.beginPath();
    for (let i = 0; i < 8; i += 1) { const a = i * TAU / 8; const r = i % 2 ? projectile.radius * .55 : projectile.radius * 1.45; const x = Math.cos(a) * r; const y = Math.sin(a) * r; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
    ctx.closePath(); ctx.fill(); ctx.restore();
  }

  function drawBeam(beam) {
    ctx.save(); ctx.globalAlpha = Math.min(1, beam.life * 8); ctx.strokeStyle = beam.color; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.shadowColor = beam.color; ctx.shadowBlur = beam.support ? 34 : 24; ctx.beginPath(); ctx.moveTo(beam.x1, beam.y1);
    if (beam.lightning) {
      const steps = 6;
      for (let i = 1; i < steps; i += 1) {
        const t = i / steps;
        ctx.lineTo(beam.x1 + (beam.x2 - beam.x1) * t + (Math.random() - .5) * 22, beam.y1 + (beam.y2 - beam.y1) * t + (Math.random() - .5) * 22);
      }
    }
    ctx.lineTo(beam.x2, beam.y2);
    ctx.lineWidth = beam.support ? 22 : beam.bossAttack ? 14 : beam.enemyAttack ? 9 : beam.lightning ? 10 : 7;
    ctx.stroke();
    if (!beam.support) {
      ctx.globalAlpha *= .78;
      ctx.shadowBlur = 0;
      ctx.strokeStyle = beam.enemyAttack ? '#ffe59a' : '#f5ffff';
      ctx.lineWidth = beam.bossAttack ? 4 : beam.lightning || beam.enemyAttack ? 3 : 2;
      ctx.stroke();
    }
    ctx.restore();
  }

  function loop(now) {
    if (!state) return;
    const targetFps = mobile ? 45 : (state.enemies.length > 20 || state.projectiles.length > 55 ? 45 : 60);
    if (now - lastFrame < 1000 / targetFps) { raf = requestAnimationFrame(loop); return; }
    let dt = Math.min(.05, (now - lastFrame) / 1000);
    lastFrame = now;
    if (TEST_MODE) dt *= 2;
    update(dt); draw();
    raf = requestAnimationFrame(loop);
  }

  function pointerPosition(event) {
    const rect = canvas.getBoundingClientRect();
    return { x: (event.clientX - rect.left) / rect.width * W, y: (event.clientY - rect.top) / rect.height * H };
  }

  canvas.addEventListener('pointerdown', (event) => {
    if (!state) return;
    const point = pointerPosition(event);
    const tower = state.towers.find((item) => Math.hypot(item.x - point.x, item.y - point.y) < 38);
    if (tower) { selectTower(tower.id); return; }
    const padIndex = PADS.findIndex((pad) => Math.hypot(pad.x - point.x, pad.y - point.y) < 42);
    if (padIndex >= 0) buildAtPad(padIndex);
    else { selectedTowerId = null; ui.towerPanel.hidden = true; }
  });

  ui.start.addEventListener('click', startGame);
  ui.retry.addEventListener('click', startGame);
  ui.home.addEventListener('click', returnTitle);
  ui.sound.addEventListener('click', () => setSound(!soundOn));
  ui.support.addEventListener('click', activateSupport);
  ui.rerollChoices.addEventListener('click', rerollChoices);
  ui.unitButtons.forEach((button) => button.addEventListener('click', () => selectUnit(button.dataset.unit)));
  ui.upgradeTower.addEventListener('click', upgradeTower);
  ui.sellTower.addEventListener('click', sellTower);
  window.addEventListener('keydown', (event) => {
    if (state?.phase === 'choice' && ['1', '2', '3'].includes(event.key)) {
      ui.choiceGrid.querySelector(`[data-choice="${event.key}"]`)?.click();
      return;
    }
    if (state?.phase !== 'choice' && ['1', '2', '3', '4', '5', '6'].includes(event.key)) selectUnit(Object.keys(UNIT_TYPES)[Number(event.key) - 1]);
    if (event.code === 'Space') {
      event.preventDefault();
      if (state?.phase === 'choice') rerollChoices(); else activateSupport();
    }
    if (event.key === 'Escape') { selectedTowerId = null; ui.towerPanel.hidden = true; }
    if (TEST_MODE && event.key === 'Home' && state) { event.preventDefault(); state.cash += 100000; updateHud(); }
    if (TEST_MODE && event.key === 'PageDown' && state) { event.preventDefault(); state.core = Math.min(state.core, state.coreMax * .25); updateHud(); }
    if (TEST_MODE && event.key === 'F6' && state?.phase === 'wave') {
      event.preventDefault();
      for (const enemy of state.enemies) if (enemy.boss) enemy.distance = pathLength;
    }
    if (TEST_MODE && event.key === 'F7' && state?.phase === 'wave') {
      event.preventDefault();
      state.enemies = state.enemies.filter((enemy) => !enemy.boss);
      state.waveElapsed = 999;
      state.bossSpawnClock = 0;
    }
    if (TEST_MODE && event.key === 'End' && state?.phase === 'wave') {
      event.preventDefault(); state.spawned = WAVES[state.wave].count; state.bossSpawned = WAVES[state.wave].bosses.length; state.enemies = [];
    }
  });

  if (TEST_MODE) {
    window.__crashDefenseDebug = {
      getState: () => state && ({
        phase: state.phase, wave: state.wave, waveElapsed: Math.round(state.waveElapsed), core: state.core, cash: state.cash, kills: state.kills,
        enemies: state.enemies.length, bossesSpawned: state.bossSpawned, bossAddsSpawned: state.bossAddsSpawned, coreAttackers: state.enemies.filter((enemy) => enemy.atCore).length,
        towers: state.towers.map((tower) => ({ type: tower.type, pad: tower.pad, level: tower.level })),
        liveBosses: state.enemies.filter((enemy) => enemy.boss).map((enemy) => ({ kind: enemy.bossKind, hp: Math.round(enemy.hp), maxHp: enemy.maxHp, distance: Math.round(enemy.distance) })),
      }),
      fund: () => { if (state) state.cash += 100000; },
      buildAtPad: (pad, type = 'bank') => {
        if (!state || !PADS[pad] || !UNIT_TYPES[type]) return false;
        selectUnit(type);
        const before = state.towers.length;
        buildAtPad(pad);
        return state.towers.length > before;
      },
      startWave: () => { if (state?.phase === 'prep') { state.prep = 0; } },
      completeWave: () => { if (state?.phase === 'wave') { state.spawned = WAVES[state.wave].count; state.bossSpawned = WAVES[state.wave].bosses.length; state.enemies = []; } },
    };
  }

  createStaticLayer();
  battlefieldArt.addEventListener('load', createStaticLayer, { once: true });
  setSound(soundOn);
  ui.titleBest.textContent = `BEST SCORE ${formatNumber(save.best)}`;
})();
