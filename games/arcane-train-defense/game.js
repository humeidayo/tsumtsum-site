(() => {
  'use strict';

  const canvas = document.getElementById('battlefield');
  const ctx = canvas.getContext('2d', { alpha: false });
  const W = canvas.width;
  const H = canvas.height;
  const TAU = Math.PI * 2;
  const MAX_LEVEL = 7;
  const STORAGE_KEY = 'humei_arcane_train_defense_v1';
  const FPS_STEP = 1 / 30;

  const battlefieldArt = new Image();
  battlefieldArt.src = '../../assets/images/arcane-train-battlefield.webp';
  const carSheet = new Image();
  carSheet.src = '../../assets/images/arcane-train-cars.webp';
  const enemySheet = new Image();
  enemySheet.src = '../../assets/images/arcane-train-enemies.webp';

  const screens = {
    title: document.getElementById('titleScreen'),
    play: document.getElementById('playScreen'),
    result: document.getElementById('resultScreen'),
  };
  const ui = {
    start: document.getElementById('startButton'),
    retry: document.getElementById('retryButton'),
    home: document.getElementById('homeButton'),
    sound: document.getElementById('soundButton'),
    pause: document.getElementById('pauseButton'),
    pauseLayer: document.getElementById('pauseLayer'),
    resume: document.getElementById('resumeButton'),
    wave: document.getElementById('waveValue'),
    hp: document.getElementById('hpValue'),
    hpBar: document.getElementById('hpBar'),
    scrap: document.getElementById('scrapValue'),
    time: document.getElementById('timeValue'),
    mana: document.getElementById('manaValue'),
    manaBar: document.getElementById('manaBar'),
    waveBanner: document.getElementById('waveBanner'),
    bossAlert: document.getElementById('bossAlert'),
    bossName: document.getElementById('bossName'),
    combo: document.getElementById('comboDisplay'),
    tapGuide: document.getElementById('tapGuide'),
    carButtons: [...document.querySelectorAll('.car-button')],
    spellButtons: [...document.querySelectorAll('.spell-button')],
    choiceBackdrop: document.getElementById('choiceBackdrop'),
    choiceGrid: document.getElementById('choiceGrid'),
    choiceProgress: document.getElementById('choiceProgress'),
    reroll: document.getElementById('rerollButton'),
    tipsButton: document.getElementById('tipsButton'),
    tipsBackdrop: document.getElementById('tipsBackdrop'),
    tipsClose: document.getElementById('tipsClose'),
    titleBest: document.getElementById('titleBest'),
    resultOverline: document.getElementById('resultOverline'),
    resultTitle: document.getElementById('resultTitle'),
    finalScore: document.getElementById('finalScore'),
    resultWave: document.getElementById('resultWave'),
    resultKills: document.getElementById('resultKills'),
    resultCombo: document.getElementById('resultCombo'),
    resultBest: document.getElementById('resultBest'),
  };

  const WAVE_DATA = [
    { duration: 46, spawn: 1.18, hp: 90, speed: 64, boss: 'クリスタル・アルファ', bossHp: 2600, sprite: 0 },
    { duration: 48, spawn: 1.02, hp: 150, speed: 70, boss: '紅刃の略奪王', bossHp: 5200, sprite: 1 },
    { duration: 50, spawn: .88, hp: 230, speed: 76, boss: '夜霧の車掌', bossHp: 9200, sprite: 2 },
    { duration: 52, spawn: .76, hp: 360, speed: 82, boss: '黒晶ゴーレム', bossHp: 15500, sprite: 3 },
    { duration: 54, spawn: .66, hp: 520, speed: 90, boss: '天翔ガーゴイル', bossHp: 25500, sprite: 4 },
    { duration: 58, spawn: .56, hp: 760, speed: 98, boss: '終焉竜ノクス', bossHp: 48000, sprite: 5 },
  ];

  const CAR_TYPES = {
    cannon: { name: '砲撃車', sprite: 1, color: '#ff665f' },
    mage: { name: '魔術車', sprite: 2, color: '#b66cff' },
    sanctuary: { name: '聖護車', sprite: 3, color: '#ffe47d' },
    reactor: { name: '炉心車', sprite: 4, color: '#52e9ff' },
  };

  const ENEMY_NAMES = ['晶牙ウルフ', '紅刃ゴブリン', '夜霧レイス', '黒晶ゴーレム', '天翔ガーゴイル', '終焉竜ノクス'];
  const ENEMY_SCALES = [1, 1.02, 1.05, 1.18, 1.18, 1.65];
  const CAR_POSITIONS = [
    { key: 'engine', x: 360, y: 500, sprite: 0 },
    { key: 'cannon', x: 360, y: 610, sprite: 1 },
    { key: 'mage', x: 360, y: 704, sprite: 2 },
    { key: 'sanctuary', x: 360, y: 798, sprite: 3 },
    { key: 'reactor', x: 360, y: 882, sprite: 4 },
  ];

  const UPGRADE_POOL = [
    { icon: '剣', name: '魔力装填', detail: '全車両の攻撃力 +15%', apply: s => { s.damageMult *= 1.15; } },
    { icon: '速', name: '高速詠唱', detail: '全車両の攻撃速度 +12%', apply: s => { s.rateMult *= 1.12; } },
    { icon: '鎧', name: '装甲増設', detail: '最大耐久 +180、耐久を180回復', apply: s => { s.hpMax += 180; s.hp = Math.min(s.hpMax, s.hp + 180); } },
    { icon: '魔', name: '大型魔力炉', detail: '最大魔力 +20、魔力回復 +20%', apply: s => { s.manaMax += 20; s.manaRegen *= 1.2; s.mana = Math.min(s.manaMax, s.mana + 20); } },
    { icon: '財', name: '回収磁石', detail: '敵から得る魔導片 +22%', apply: s => { s.scrapMult *= 1.22; } },
    { icon: '照', name: '照準水晶', detail: 'タップ砲撃の威力 +35%', apply: s => { s.focusMult *= 1.35; } },
    { icon: '連', name: '連撃刻印', detail: 'コンボ猶予 +0.6秒、倍率上限上昇', apply: s => { s.comboWindow += .6; s.comboPower += .012; } },
    { icon: '護', name: '障壁共鳴', detail: '障壁量 +35%、聖護車の回復 +25%', apply: s => { s.barrierMult *= 1.35; s.healMult *= 1.25; } },
    { icon: '雷', name: '雷帝契約', detail: '天雷の威力 +40%', apply: s => { s.thunderMult *= 1.4; } },
  ];

  let state = null;
  let raf = 0;
  let previousTime = performance.now();
  let accumulator = 0;
  let audioContext = null;
  let soundOn = true;
  let musicBeat = 0;
  let musicClock = 0;

  function getBest() {
    try { return Number(localStorage.getItem(STORAGE_KEY)) || 0; } catch { return 0; }
  }
  function saveBest(value) {
    try { localStorage.setItem(STORAGE_KEY, String(value)); } catch { /* storage can be unavailable */ }
  }
  function showScreen(name) {
    Object.entries(screens).forEach(([key, element]) => element.classList.toggle('is-active', key === name));
    ui.pause.hidden = name !== 'play';
  }
  function ensureAudio() {
    if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === 'suspended') audioContext.resume();
  }
  function tone(frequency, duration = .08, type = 'sine', volume = .045, delay = 0) {
    if (!soundOn) return;
    ensureAudio();
    const now = audioContext.currentTime + delay;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, now);
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(volume, now + .008);
    gain.gain.exponentialRampToValueAtTime(.0001, now + duration);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + duration + .03);
  }
  function sfx(kind) {
    if (kind === 'shot') tone(620, .06, 'square', .025);
    if (kind === 'kill') { tone(440, .08, 'triangle', .04); tone(760, .1, 'triangle', .025, .04); }
    if (kind === 'upgrade') { tone(392, .1, 'triangle', .05); tone(523, .12, 'triangle', .05, .08); tone(784, .18, 'triangle', .04, .16); }
    if (kind === 'hurt') tone(120, .16, 'sawtooth', .05);
    if (kind === 'boss') { tone(92, .35, 'sawtooth', .06); tone(70, .5, 'square', .03, .18); }
    if (kind === 'spell') { tone(280, .1, 'sine', .05); tone(920, .28, 'triangle', .045, .08); }
  }
  function updateMusic(dt) {
    if (!state || state.paused || state.phase !== 'battle' || !soundOn) return;
    musicClock -= dt;
    if (musicClock > 0) return;
    const boss = state.enemies.some(enemy => enemy.boss);
    const notes = boss ? [110, 110, 147, 165, 147, 196] : [147, 196, 220, 196, 165, 196, 247, 220];
    tone(notes[musicBeat % notes.length], boss ? .22 : .13, boss ? 'sawtooth' : 'triangle', boss ? .025 : .018);
    musicBeat += 1;
    musicClock = boss ? .27 : .42;
  }

  function createState() {
    return {
      wave: 0, phase: 'countdown', paused: false, countdown: 3, waveTime: WAVE_DATA[0].duration,
      hpMax: 1200, hp: 1200, shield: 0, scrap: 400, manaMax: 100, mana: 30,
      manaRegen: 3.2, damageMult: 1, rateMult: 1, scrapMult: 1, focusMult: 1,
      barrierMult: 1, healMult: 1, thunderMult: 1, comboWindow: 2.2, comboPower: .03,
      cars: { cannon: 1, mage: 1, sanctuary: 1, reactor: 1 },
      cooldowns: { engine: 0, cannon: 0, mage: 0, sanctuary: 0, reactor: 0, focus: 0 },
      spellTimers: { overdrive: 0 }, enemies: [], projectiles: [], effects: [], particles: [], texts: [],
      spawnClock: .5, bossSpawned: false, bossAlert: 0, backgroundOffset: 0,
      kills: 0, combo: 0, maxCombo: 0, comboClock: 0, score: 0, rerollUsed: false,
      totalTime: 0, waveKills: 0, lastTarget: null, tutorialClock: 7,
    };
  }

  function startGame() {
    ensureAudio();
    state = createState();
    ui.pauseLayer.hidden = true;
    ui.choiceBackdrop.hidden = true;
    showScreen('play');
    showWaveBanner();
    updateUI();
    sfx('upgrade');
  }
  function showWaveBanner() {
    ui.waveBanner.hidden = false;
    ui.waveBanner.querySelector('strong').textContent = `区間 ${state.wave + 1}`;
    ui.waveBanner.querySelector('span').textContent = Math.ceil(state.countdown);
  }
  function beginWave() {
    state.phase = 'battle';
    state.waveTime = WAVE_DATA[state.wave].duration;
    state.spawnClock = .35;
    state.bossSpawned = false;
    state.waveKills = 0;
    ui.waveBanner.hidden = true;
    tone(523, .12, 'triangle', .05);
    tone(784, .18, 'triangle', .04, .09);
  }

  function enemyStats(sprite, boss = false) {
    const wave = WAVE_DATA[state.wave];
    const hpFactor = 1 + sprite * .18;
    return {
      hp: boss ? wave.bossHp : wave.hp * hpFactor * (.85 + Math.random() * .3),
      speed: boss ? wave.speed * .48 : wave.speed * (.82 + Math.random() * .34),
      damage: boss ? 42 + state.wave * 12 : 10 + state.wave * 4 + sprite * 2,
      reward: boss ? 400 + state.wave * 170 : 22 + state.wave * 8 + sprite * 3,
    };
  }
  function spawnEnemy(boss = false) {
    const wave = WAVE_DATA[state.wave];
    let sprite;
    if (boss) sprite = wave.sprite;
    else sprite = Math.min(4, Math.floor(Math.random() * Math.min(5, state.wave + 2)));
    const side = Math.random();
    const x = side < .38 ? -55 : side > .76 ? W + 55 : 100 + Math.random() * (W - 200);
    const y = side < .38 || side > .76 ? 130 + Math.random() * 480 : -65;
    const targetIndex = 1 + Math.floor(Math.random() * 4);
    const target = CAR_POSITIONS[targetIndex];
    const stats = enemyStats(sprite, boss);
    state.enemies.push({
      id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
      sprite, name: boss ? wave.boss : ENEMY_NAMES[sprite], boss, x, y,
      targetX: target.x + (Math.random() - .5) * 120, targetY: target.y + (Math.random() - .5) * 35,
      hp: stats.hp, maxHp: stats.hp, speed: stats.speed, damage: stats.damage, reward: stats.reward,
      attackClock: .5 + Math.random() * .5, hitFlash: 0, slow: 0, dead: false,
    });
    if (boss) {
      state.bossAlert = 2.6;
      ui.bossAlert.hidden = false;
      ui.bossName.textContent = wave.boss;
      sfx('boss');
    }
  }

  function nearestEnemy(x = 360, y = 500, range = Infinity, exclude = new Set()) {
    let target = null;
    let distance = range;
    for (const enemy of state.enemies) {
      if (enemy.dead || exclude.has(enemy.id)) continue;
      const current = Math.hypot(enemy.x - x, enemy.y - y);
      if (current < distance) { distance = current; target = enemy; }
    }
    return target;
  }
  function damageEnemy(enemy, amount, color = '#fff', critical = false) {
    if (!enemy || enemy.dead) return;
    const damage = Math.max(1, Math.round(amount));
    enemy.hp -= damage;
    enemy.hitFlash = .08;
    state.texts.push({ x: enemy.x, y: enemy.y - 18, value: damage, color, life: .6, critical });
    if (enemy.hp <= 0) killEnemy(enemy);
  }
  function killEnemy(enemy) {
    if (enemy.dead) return;
    enemy.dead = true;
    state.kills += 1;
    state.waveKills += 1;
    if (state.comboClock > 0) state.combo += 1; else state.combo = 1;
    state.comboClock = state.comboWindow;
    state.maxCombo = Math.max(state.maxCombo, state.combo);
    const comboBonus = 1 + Math.min(state.combo, 30) * state.comboPower;
    state.scrap += Math.round(enemy.reward * state.scrapMult * comboBonus);
    state.mana = Math.min(state.manaMax, state.mana + (enemy.boss ? 24 : 4));
    state.score += Math.round(enemy.reward * 10 * comboBonus);
    burst(enemy.x, enemy.y, enemy.boss ? 20 : 8, enemy.boss ? '#ffd369' : '#aa70ff');
    sfx(enemy.boss ? 'upgrade' : 'kill');
  }
  function burst(x, y, count, color) {
    for (let i = 0; i < count; i += 1) {
      const angle = Math.random() * TAU;
      const speed = 40 + Math.random() * 130;
      state.particles.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: .4 + Math.random() * .5, color, size: 2 + Math.random() * 5 });
    }
  }
  function fireProjectile(source, target, damage, color, options = {}) {
    if (!target) return;
    state.projectiles.push({ x: source.x, y: source.y, target, damage, color, speed: options.speed || 650, splash: options.splash || 0, chain: options.chain || 0, life: 2 });
  }

  function updateWeapons(dt) {
    const speedBoost = state.spellTimers.overdrive > 0 ? 1.75 : 1;
    Object.keys(state.cooldowns).forEach(key => { state.cooldowns[key] = Math.max(0, state.cooldowns[key] - dt); });
    const damage = state.damageMult;
    const rate = state.rateMult * speedBoost;

    if (state.cooldowns.engine <= 0) {
      const target = nearestEnemy(360, 500, 460);
      if (target) { fireProjectile(CAR_POSITIONS[0], target, 28 * damage, '#52e9ff', { speed: 760 }); state.cooldowns.engine = .72 / rate; }
    }
    const cannonLevel = state.cars.cannon;
    if (state.cooldowns.cannon <= 0) {
      const target = nearestEnemy(360, 610, 540);
      if (target) { fireProjectile(CAR_POSITIONS[1], target, (72 + cannonLevel * 25) * damage, '#ff715f', { speed: 540, splash: 42 + cannonLevel * 3 }); state.cooldowns.cannon = 1.12 / (rate * (1 + cannonLevel * .05)); }
    }
    const mageLevel = state.cars.mage;
    if (state.cooldowns.mage <= 0) {
      const target = nearestEnemy(360, 704, 570);
      if (target) { fireProjectile(CAR_POSITIONS[2], target, (42 + mageLevel * 16) * damage, '#c582ff', { speed: 850, chain: 1 + Math.floor(mageLevel / 3) }); state.cooldowns.mage = .7 / (rate * (1 + mageLevel * .045)); }
    }
    const sanctuaryLevel = state.cars.sanctuary;
    if (state.cooldowns.sanctuary <= 0) {
      const heal = (10 + sanctuaryLevel * 5) * state.healMult;
      state.hp = Math.min(state.hpMax, state.hp + heal);
      state.effects.push({ kind: 'heal', x: 360, y: 798, radius: 18, life: .65, maxLife: .65, color: '#ffe47d' });
      state.cooldowns.sanctuary = 2.8 / (1 + sanctuaryLevel * .04);
    }
    const reactorLevel = state.cars.reactor;
    if (state.cooldowns.reactor <= 0) {
      const target = nearestEnemy(360, 850, 610);
      if (target) { fireProjectile(CAR_POSITIONS[4], target, (34 + reactorLevel * 14) * damage, '#52e9ff', { speed: 920, chain: Math.floor(reactorLevel / 4) }); state.cooldowns.reactor = 1.15 / (rate * (1 + reactorLevel * .05)); }
    }
  }

  function updateProjectiles(dt) {
    for (const projectile of state.projectiles) {
      if (!projectile.target || projectile.target.dead) projectile.target = nearestEnemy(projectile.x, projectile.y);
      if (!projectile.target) { projectile.life = 0; continue; }
      const dx = projectile.target.x - projectile.x;
      const dy = projectile.target.y - projectile.y;
      const distance = Math.hypot(dx, dy);
      if (distance < projectile.speed * dt + 14) {
        const target = projectile.target;
        damageEnemy(target, projectile.damage, projectile.color);
        if (projectile.splash) {
          state.enemies.forEach(enemy => {
            if (!enemy.dead && enemy !== target && Math.hypot(enemy.x - target.x, enemy.y - target.y) < projectile.splash) damageEnemy(enemy, projectile.damage * .42, projectile.color);
          });
          state.effects.push({ kind: 'blast', x: target.x, y: target.y, radius: projectile.splash, life: .28, maxLife: .28, color: projectile.color });
        }
        if (projectile.chain) {
          const used = new Set([target.id]);
          let previous = target;
          for (let i = 0; i < projectile.chain; i += 1) {
            const chained = nearestEnemy(previous.x, previous.y, 160, used);
            if (!chained) break;
            used.add(chained.id);
            damageEnemy(chained, projectile.damage * .58, projectile.color);
            state.effects.push({ kind: 'beam', x: previous.x, y: previous.y, x2: chained.x, y2: chained.y, life: .16, maxLife: .16, color: projectile.color });
            previous = chained;
          }
        }
        projectile.life = 0;
      } else {
        projectile.x += dx / distance * projectile.speed * dt;
        projectile.y += dy / distance * projectile.speed * dt;
        projectile.life -= dt;
      }
    }
    state.projectiles = state.projectiles.filter(projectile => projectile.life > 0);
  }

  function updateEnemies(dt) {
    for (const enemy of state.enemies) {
      if (enemy.dead) continue;
      enemy.hitFlash = Math.max(0, enemy.hitFlash - dt);
      enemy.slow = Math.max(0, enemy.slow - dt);
      const dx = enemy.targetX - enemy.x;
      const dy = enemy.targetY - enemy.y;
      const distance = Math.hypot(dx, dy);
      const attackRange = enemy.boss ? 88 : 50;
      if (distance > attackRange) {
        const speed = enemy.speed * (enemy.slow > 0 ? .58 : 1);
        enemy.x += dx / distance * speed * dt;
        enemy.y += dy / distance * speed * dt;
      } else {
        enemy.attackClock -= dt;
        if (enemy.attackClock <= 0) {
          const incoming = enemy.damage;
          if (state.shield > 0) {
            const absorbed = Math.min(state.shield, incoming);
            state.shield -= absorbed;
            if (incoming > absorbed) state.hp -= incoming - absorbed;
          } else state.hp -= incoming;
          enemy.attackClock = enemy.boss ? .7 : 1.05;
          state.effects.push({ kind: 'blast', x: enemy.targetX, y: enemy.targetY, radius: enemy.boss ? 42 : 24, life: .22, maxLife: .22, color: '#ff5c68' });
          sfx('hurt');
        }
      }
    }
    state.enemies = state.enemies.filter(enemy => !enemy.dead);
    if (state.hp <= 0) finishGame(false);
  }

  function updateBattle(dt) {
    const wave = WAVE_DATA[state.wave];
    state.totalTime += dt;
    state.waveTime = Math.max(0, state.waveTime - dt);
    state.backgroundOffset = (state.backgroundOffset + dt * 62) % 80;
    state.spawnClock -= dt;
    state.comboClock = Math.max(0, state.comboClock - dt);
    if (state.comboClock <= 0) state.combo = 0;
    state.spellTimers.overdrive = Math.max(0, state.spellTimers.overdrive - dt);
    state.mana = Math.min(state.manaMax, state.mana + state.manaRegen * (1 + state.cars.reactor * .08) * dt);
    state.tutorialClock = Math.max(0, state.tutorialClock - dt);
    ui.tapGuide.style.opacity = state.tutorialClock > 0 ? '1' : '0';
    if (state.spawnClock <= 0 && state.waveTime > 2) {
      spawnEnemy(false);
      const pressure = 1 + Math.max(0, 18 - state.waveTime) * .02;
      state.spawnClock = wave.spawn / pressure * (.82 + Math.random() * .34);
    }
    if (!state.bossSpawned && state.waveTime <= 15) {
      state.bossSpawned = true;
      spawnEnemy(true);
    }
    state.bossAlert = Math.max(0, state.bossAlert - dt);
    if (state.bossAlert <= 0) ui.bossAlert.hidden = true;
    updateWeapons(dt);
    updateProjectiles(dt);
    updateEnemies(dt);
    updateEffects(dt);
    if (state.waveTime <= 0 && state.bossSpawned && state.enemies.length === 0 && state.phase === 'battle') completeWave();
  }

  function updateEffects(dt) {
    for (const particle of state.particles) { particle.x += particle.vx * dt; particle.y += particle.vy * dt; particle.vy += 90 * dt; particle.life -= dt; }
    for (const effect of state.effects) effect.life -= dt;
    for (const text of state.texts) { text.y -= 55 * dt; text.life -= dt; }
    state.particles = state.particles.filter(item => item.life > 0);
    state.effects = state.effects.filter(item => item.life > 0);
    state.texts = state.texts.filter(item => item.life > 0);
  }

  function completeWave() {
    state.phase = 'choice';
    state.hp = Math.min(state.hpMax, state.hp + state.hpMax * .25);
    state.scrap += 180 + state.wave * 70;
    if (state.wave >= WAVE_DATA.length - 1) { finishGame(true); return; }
    showChoices();
  }
  function sampleChoices() {
    return [...UPGRADE_POOL].sort(() => Math.random() - .5).slice(0, 3);
  }
  function showChoices() {
    ui.choiceBackdrop.hidden = false;
    ui.choiceProgress.textContent = `区間 ${state.wave + 1} 突破 / 耐久25%回復・魔導片支給`;
    ui.reroll.disabled = state.rerollUsed;
    renderChoices(sampleChoices());
    sfx('upgrade');
  }
  function renderChoices(choices) {
    ui.choiceGrid.replaceChildren();
    choices.forEach(choice => {
      const button = document.createElement('button');
      button.className = 'choice-card';
      button.type = 'button';
      button.innerHTML = `<span>${choice.icon}</span><div><strong>${choice.name}</strong><small>${choice.detail}</small></div>`;
      button.addEventListener('click', () => {
        choice.apply(state);
        ui.choiceBackdrop.hidden = true;
        state.wave += 1;
        state.countdown = 3;
        state.phase = 'countdown';
        state.enemies.length = 0;
        showWaveBanner();
        updateUI();
        sfx('upgrade');
      }, { once: true });
      ui.choiceGrid.append(button);
    });
  }

  function upgradeCar(key) {
    if (!state || state.phase !== 'battle') return;
    const level = state.cars[key];
    if (level >= MAX_LEVEL) return;
    const cost = upgradeCost(level);
    if (state.scrap < cost) { tone(120, .12, 'square', .035); return; }
    state.scrap -= cost;
    state.cars[key] += 1;
    burst(CAR_POSITIONS.find(car => car.key === key).x, CAR_POSITIONS.find(car => car.key === key).y, 14, CAR_TYPES[key].color);
    sfx('upgrade');
    updateUI();
  }
  function upgradeCost(level) { return Math.round(140 * Math.pow(1.58, level - 1) / 10) * 10; }

  function useSpell(key) {
    if (!state || state.phase !== 'battle' || state.paused) return;
    const costs = { thunder: 40, barrier: 50, overdrive: 60 };
    const cost = costs[key];
    if (state.mana < cost) { tone(120, .12, 'square', .035); return; }
    state.mana -= cost;
    if (key === 'thunder') {
      const amount = 260 * state.damageMult * state.thunderMult;
      state.enemies.forEach(enemy => damageEnemy(enemy, amount * (enemy.boss ? .65 : 1), '#fff07e', true));
      for (const enemy of state.enemies) state.effects.push({ kind: 'beam', x: enemy.x, y: 0, x2: enemy.x, y2: enemy.y, life: .32, maxLife: .32, color: '#fff07e' });
    }
    if (key === 'barrier') {
      state.shield = Math.min(900, state.shield + (280 + state.cars.sanctuary * 45) * state.barrierMult);
      state.effects.push({ kind: 'shield', x: 360, y: 700, radius: 175, life: 1, maxLife: 1, color: '#52e9ff' });
    }
    if (key === 'overdrive') {
      state.spellTimers.overdrive = Math.max(state.spellTimers.overdrive, 8);
      state.effects.push({ kind: 'shield', x: 360, y: 700, radius: 140, life: 1, maxLife: 1, color: '#ff6db0' });
    }
    sfx('spell');
    updateUI();
  }

  function focusFire(clientX, clientY) {
    if (!state || state.phase !== 'battle' || state.paused || state.cooldowns.focus > 0) return;
    const rect = canvas.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width * W;
    const y = (clientY - rect.top) / rect.height * H;
    let target = null;
    let distance = 85;
    for (const enemy of state.enemies) {
      const current = Math.hypot(enemy.x - x, enemy.y - y);
      if (current < distance) { distance = current; target = enemy; }
    }
    if (!target) target = nearestEnemy(x, y, 180);
    if (!target) return;
    state.lastTarget = target.id;
    const critical = Math.random() < .12;
    const amount = 82 * state.focusMult * state.damageMult * (critical ? 1.8 : 1);
    damageEnemy(target, amount, critical ? '#fff07e' : '#52e9ff', critical);
    state.effects.push({ kind: 'beam', x: 360, y: 500, x2: target.x, y2: target.y, life: .12, maxLife: .12, color: '#52e9ff' });
    state.cooldowns.focus = .32;
    sfx('shot');
  }

  function finishGame(win) {
    if (!state || state.phase === 'result') return;
    state.phase = 'result';
    const reached = win ? 6 : state.wave + 1;
    const score = Math.max(0, Math.round(state.score + reached * 3000 + Math.max(0, state.hp) * 8 + state.scrap * 2 + state.maxCombo * 150));
    const best = Math.max(getBest(), score);
    saveBest(best);
    ui.resultOverline.textContent = win ? 'FINAL TERMINAL REACHED' : 'TRAIN DISABLED';
    ui.resultTitle.textContent = win ? '走破成功' : '運行不能';
    ui.finalScore.textContent = score.toLocaleString('ja-JP');
    ui.resultWave.textContent = `${reached} / 6`;
    ui.resultKills.textContent = state.kills.toLocaleString('ja-JP');
    ui.resultCombo.textContent = state.maxCombo.toLocaleString('ja-JP');
    ui.resultBest.textContent = best.toLocaleString('ja-JP');
    ui.titleBest.textContent = `BEST ${best.toLocaleString('ja-JP')}`;
    showScreen('result');
    if (win) sfx('upgrade'); else sfx('hurt');
  }

  function update(dt) {
    if (!state || state.paused || state.phase === 'result' || state.phase === 'choice') return;
    updateMusic(dt);
    if (state.phase === 'countdown') {
      state.countdown -= dt;
      ui.waveBanner.querySelector('span').textContent = Math.max(1, Math.ceil(state.countdown));
      state.backgroundOffset = (state.backgroundOffset + dt * 36) % 80;
      if (state.countdown <= 0) beginWave();
    } else updateBattle(dt);
    updateUI();
  }

  function drawImageCell(image, cells, index, x, y, width, height, alpha = 1) {
    if (!image.complete || !image.naturalWidth) return false;
    const cellWidth = image.naturalWidth / cells;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.drawImage(image, cellWidth * index, 0, cellWidth, image.naturalHeight, x - width / 2, y - height / 2, width, height);
    ctx.restore();
    return true;
  }
  function drawBackground() {
    if (battlefieldArt.complete && battlefieldArt.naturalWidth) ctx.drawImage(battlefieldArt, 0, 0, W, H);
    else { ctx.fillStyle = '#0a2540'; ctx.fillRect(0, 0, W, H); }
    ctx.save();
    ctx.globalAlpha = .28;
    ctx.strokeStyle = '#77efff';
    ctx.lineWidth = 3;
    for (let y = -80 + state.backgroundOffset; y < H; y += 80) {
      ctx.beginPath(); ctx.moveTo(315, y); ctx.lineTo(405, y); ctx.stroke();
    }
    ctx.restore();
    const vignette = ctx.createRadialGradient(W / 2, H / 2, 160, W / 2, H / 2, 570);
    vignette.addColorStop(0, 'rgba(0,0,0,0)'); vignette.addColorStop(1, 'rgba(0,4,10,.5)');
    ctx.fillStyle = vignette; ctx.fillRect(0, 0, W, H);
  }
  function drawTrain() {
    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,.35)';
    ctx.beginPath(); ctx.ellipse(360, 710, 95, 255, 0, 0, TAU); ctx.fill();
    CAR_POSITIONS.slice().reverse().forEach((car, reverseIndex) => {
      const index = CAR_POSITIONS.length - 1 - reverseIndex;
      const isEngine = car.key === 'engine';
      const width = isEngine ? 100 : 86;
      const height = isEngine ? 160 : 135;
      if (!drawImageCell(carSheet, 5, car.sprite, car.x, car.y, width, height)) {
        ctx.fillStyle = isEngine ? '#173d62' : CAR_TYPES[car.key].color;
        ctx.fillRect(car.x - width / 2, car.y - height / 2, width, height);
      }
      if (!isEngine) {
        const level = state.cars[car.key];
        ctx.fillStyle = '#07131f'; ctx.strokeStyle = CAR_TYPES[car.key].color; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.roundRect(car.x + 25, car.y - 52, 31, 20, 5); ctx.fill(); ctx.stroke();
        ctx.fillStyle = '#fff'; ctx.font = '900 13px sans-serif'; ctx.textAlign = 'center'; ctx.fillText(`L${level}`, car.x + 40, car.y - 37);
      }
    });
    if (state.shield > 0) {
      ctx.strokeStyle = `rgba(82,233,255,${.35 + Math.sin(performance.now() / 160) * .12})`;
      ctx.lineWidth = 8; ctx.beginPath(); ctx.ellipse(360, 700, 115, 285, 0, 0, TAU); ctx.stroke();
    }
    if (state.spellTimers.overdrive > 0) {
      ctx.strokeStyle = 'rgba(255,109,176,.7)'; ctx.lineWidth = 4;
      for (let i = 0; i < 4; i += 1) { const y = 560 + i * 110 + ((performance.now() / 4) % 80); ctx.beginPath(); ctx.moveTo(270, y); ctx.lineTo(315, y + 55); ctx.stroke(); ctx.beginPath(); ctx.moveTo(450, y); ctx.lineTo(405, y + 55); ctx.stroke(); }
    }
    ctx.restore();
  }
  function drawEnemies() {
    const ordered = [...state.enemies].sort((a, b) => a.y - b.y);
    for (const enemy of ordered) {
      const base = enemy.boss ? 134 : 72;
      const scale = ENEMY_SCALES[enemy.sprite] * (enemy.boss ? 1.18 : 1);
      const width = base * scale;
      const height = base * 1.35 * scale;
      if (enemy.boss) {
        const aura = ctx.createRadialGradient(enemy.x, enemy.y, 10, enemy.x, enemy.y, width * .75);
        aura.addColorStop(0, 'rgba(188,93,255,.45)'); aura.addColorStop(1, 'rgba(80,20,130,0)');
        ctx.fillStyle = aura; ctx.beginPath(); ctx.arc(enemy.x, enemy.y, width * .8, 0, TAU); ctx.fill();
      }
      drawImageCell(enemySheet, 6, enemy.sprite, enemy.x, enemy.y, width, height, enemy.hitFlash > 0 ? .65 : 1);
      const barWidth = enemy.boss ? 150 : 65;
      const ratio = Math.max(0, enemy.hp / enemy.maxHp);
      ctx.fillStyle = 'rgba(0,0,0,.7)'; ctx.fillRect(enemy.x - barWidth / 2, enemy.y - height / 2 - 10, barWidth, enemy.boss ? 9 : 6);
      ctx.fillStyle = enemy.boss ? '#ff4f78' : '#a76aff'; ctx.fillRect(enemy.x - barWidth / 2 + 1, enemy.y - height / 2 - 9, (barWidth - 2) * ratio, enemy.boss ? 7 : 4);
      if (enemy.boss) { ctx.fillStyle = '#fff'; ctx.font = '900 12px sans-serif'; ctx.textAlign = 'center'; ctx.fillText(enemy.name, enemy.x, enemy.y - height / 2 - 17); }
    }
  }
  function drawEffects() {
    for (const projectile of state.projectiles) {
      ctx.fillStyle = projectile.color; ctx.shadowColor = projectile.color; ctx.shadowBlur = 12;
      ctx.beginPath(); ctx.arc(projectile.x, projectile.y, 7, 0, TAU); ctx.fill(); ctx.shadowBlur = 0;
    }
    for (const effect of state.effects) {
      const alpha = Math.max(0, effect.life / effect.maxLife);
      ctx.save(); ctx.globalAlpha = alpha; ctx.strokeStyle = effect.color; ctx.fillStyle = effect.color;
      if (effect.kind === 'beam') { ctx.lineWidth = 7 * alpha + 2; ctx.shadowColor = effect.color; ctx.shadowBlur = 15; ctx.beginPath(); ctx.moveTo(effect.x, effect.y); ctx.lineTo(effect.x2, effect.y2); ctx.stroke(); }
      if (effect.kind === 'blast' || effect.kind === 'shield' || effect.kind === 'heal') { ctx.lineWidth = 7; ctx.beginPath(); ctx.arc(effect.x, effect.y, effect.radius * (1.3 - alpha * .3), 0, TAU); ctx.stroke(); }
      ctx.restore();
    }
    for (const particle of state.particles) { ctx.globalAlpha = Math.min(1, particle.life * 2); ctx.fillStyle = particle.color; ctx.fillRect(particle.x, particle.y, particle.size, particle.size); }
    ctx.globalAlpha = 1;
    for (const text of state.texts) {
      ctx.globalAlpha = Math.min(1, text.life * 2); ctx.fillStyle = text.color; ctx.strokeStyle = '#06111b'; ctx.lineWidth = 5; ctx.textAlign = 'center'; ctx.font = `900 ${text.critical ? 27 : 20}px "Yu Gothic UI", sans-serif`; ctx.strokeText(text.critical ? `${text.value}!` : text.value, text.x, text.y); ctx.fillText(text.critical ? `${text.value}!` : text.value, text.x, text.y);
    }
    ctx.globalAlpha = 1;
  }
  function draw() {
    if (!state || !screens.play.classList.contains('is-active')) return;
    drawBackground();
    drawEnemies();
    drawTrain();
    drawEffects();
  }

  function updateUI() {
    if (!state) return;
    ui.wave.textContent = `${state.wave + 1} / 6`;
    ui.hp.textContent = `${Math.max(0, Math.ceil(state.hp)).toLocaleString('ja-JP')}${state.shield > 0 ? ` +${Math.ceil(state.shield)}` : ''}`;
    ui.hpBar.style.width = `${Math.max(0, state.hp / state.hpMax * 100)}%`;
    ui.scrap.textContent = Math.floor(state.scrap).toLocaleString('ja-JP');
    ui.time.textContent = `0:${Math.ceil(state.waveTime).toString().padStart(2, '0')}`;
    ui.mana.textContent = Math.floor(state.mana);
    ui.manaBar.style.width = `${state.mana / state.manaMax * 100}%`;
    ui.combo.querySelector('strong').textContent = state.combo;
    ui.combo.classList.toggle('is-active', state.combo >= 2);
    ui.carButtons.forEach(button => {
      const key = button.dataset.car;
      const level = state.cars[key];
      const maxed = level >= MAX_LEVEL;
      const cost = maxed ? 0 : upgradeCost(level);
      button.querySelector('b').textContent = level;
      button.querySelector('em').textContent = maxed ? 'MAX' : cost;
      button.disabled = state.phase !== 'battle' || maxed || state.scrap < cost;
      button.classList.toggle('is-max', maxed);
      button.setAttribute('aria-label', `${CAR_TYPES[key].name} レベル${level}${maxed ? ' 最大' : ` 強化費用${cost}`}`);
    });
    const spellCosts = { thunder: 40, barrier: 50, overdrive: 60 };
    ui.spellButtons.forEach(button => { button.disabled = state.phase !== 'battle' || state.mana < spellCosts[button.dataset.spell]; });
  }

  function setPaused(paused) {
    if (!state || state.phase === 'result' || state.phase === 'choice') return;
    state.paused = paused;
    ui.pauseLayer.hidden = !paused;
    ui.pause.textContent = paused ? '▶' : 'Ⅱ';
    ui.pause.setAttribute('aria-label', paused ? '再開' : '一時停止');
  }
  function frame(now) {
    const elapsed = Math.min(.08, (now - previousTime) / 1000);
    previousTime = now;
    accumulator += elapsed;
    while (accumulator >= FPS_STEP) { update(FPS_STEP); accumulator -= FPS_STEP; }
    draw();
    raf = requestAnimationFrame(frame);
  }

  ui.start.addEventListener('click', startGame);
  ui.retry.addEventListener('click', startGame);
  ui.home.addEventListener('click', () => { state = null; showScreen('title'); ui.pause.hidden = true; });
  ui.sound.addEventListener('click', () => { soundOn = !soundOn; ui.sound.textContent = soundOn ? '♪' : '×'; ui.sound.setAttribute('aria-label', soundOn ? '音を切る' : '音を出す'); if (soundOn) { ensureAudio(); tone(523); } });
  ui.pause.addEventListener('click', () => setPaused(!state?.paused));
  ui.resume.addEventListener('click', () => setPaused(false));
  ui.carButtons.forEach(button => button.addEventListener('click', () => upgradeCar(button.dataset.car)));
  ui.spellButtons.forEach(button => button.addEventListener('click', () => useSpell(button.dataset.spell)));
  ui.reroll.addEventListener('click', () => { if (!state || state.rerollUsed) return; state.rerollUsed = true; ui.reroll.disabled = true; renderChoices(sampleChoices()); tone(330, .1, 'triangle', .04); });
  canvas.addEventListener('pointerdown', event => { event.preventDefault(); focusFire(event.clientX, event.clientY); });
  ui.tipsButton.addEventListener('click', () => { ui.tipsBackdrop.hidden = false; });
  ui.tipsClose.addEventListener('click', () => { ui.tipsBackdrop.hidden = true; });
  ui.tipsBackdrop.addEventListener('click', event => { if (event.target === ui.tipsBackdrop) ui.tipsBackdrop.hidden = true; });
  window.addEventListener('keydown', event => {
    if (event.repeat) return;
    if (event.key === 'Escape') setPaused(!state?.paused);
    if (['1', '2', '3', '4'].includes(event.key)) upgradeCar(['cannon', 'mage', 'sanctuary', 'reactor'][Number(event.key) - 1]);
    if (event.key.toLowerCase() === 'q') useSpell('thunder');
    if (event.key.toLowerCase() === 'w') useSpell('barrier');
    if (event.key.toLowerCase() === 'e') useSpell('overdrive');
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden && state && state.phase === 'battle') setPaused(true); });

  ui.titleBest.textContent = `BEST ${getBest().toLocaleString('ja-JP')}`;
  ui.pause.hidden = true;
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(frame);
})();
