(() => {
  'use strict';

  const WIDTH = 720;
  const HEIGHT = 1000;
  const TOTAL_ROUNDS = 6;
  const TRAIT_DURATION_MS = 3000;
  const PADDLE_HIT_DURATION_MS = 3000;
  const STORAGE_KEY = 'fumeidayo_brick_rush_best_v1';
  const QUERY = new URLSearchParams(window.location.search);
  const TEST_MODE = QUERY.has('test');
  const TEST_BOSS = Number(QUERY.get('boss')) || 0;

  const ui = {
    titleScreen: document.getElementById('titleScreen'),
    playScreen: document.getElementById('playScreen'),
    resultScreen: document.getElementById('resultScreen'),
    startButton: document.getElementById('startButton'),
    retryButton: document.getElementById('retryButton'),
    homeButton: document.getElementById('homeButton'),
    soundButton: document.getElementById('soundButton'),
    pauseButton: document.getElementById('pauseButton'),
    pauseBackdrop: document.getElementById('pauseBackdrop'),
    resumeButton: document.getElementById('resumeButton'),
    quitButton: document.getElementById('quitButton'),
    choiceBackdrop: document.getElementById('choiceBackdrop'),
    choiceGrid: document.getElementById('choiceGrid'),
    choiceProgress: document.getElementById('choiceProgress'),
    rerollButton: document.getElementById('rerollButton'),
    roundValue: document.getElementById('roundValue'),
    scoreValue: document.getElementById('scoreValue'),
    comboValue: document.getElementById('comboValue'),
    multiplierValue: document.getElementById('multiplierValue'),
    lifeValue: document.getElementById('lifeValue'),
    rushMeter: document.getElementById('rushMeter'),
    roundBanner: document.getElementById('roundBanner'),
    statusText: document.getElementById('statusText'),
    bossHud: document.getElementById('bossHud'),
    bossName: document.getElementById('bossName'),
    bossHpValue: document.getElementById('bossHpValue'),
    bossHpFill: document.getElementById('bossHpFill'),
    effectToast: document.getElementById('effectToast'),
    effectIcon: document.getElementById('effectIcon'),
    effectText: document.getElementById('effectText'),
    titleBest: document.getElementById('titleBest'),
    resultOverline: document.getElementById('resultOverline'),
    resultTitle: document.getElementById('resultTitle'),
    finalScore: document.getElementById('finalScore'),
    newRecordBadge: document.getElementById('newRecordBadge'),
    resultRound: document.getElementById('resultRound'),
    resultCombo: document.getElementById('resultCombo'),
    resultBricks: document.getElementById('resultBricks'),
    resultTime: document.getElementById('resultTime')
  };

  let game = null;
  let activeScene = null;
  let run = null;
  let soundEnabled = true;
  let audioContext = null;
  let bgmTimer = 0;
  let bgmStep = 0;
  let lastHitTone = 0;

  function safeBest() {
    try { return Number(localStorage.getItem(STORAGE_KEY)) || 0; } catch (_) { return 0; }
  }

  function saveBest(value) {
    try { localStorage.setItem(STORAGE_KEY, String(value)); } catch (_) {}
  }

  function formatNumber(value) {
    return Math.max(0, Math.floor(value)).toLocaleString('ja-JP');
  }

  function formatTime(seconds) {
    const total = Math.max(0, Math.floor(seconds));
    return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`;
  }

  function showScreen(target) {
    [ui.titleScreen, ui.playScreen, ui.resultScreen].forEach((screen) => {
      screen.classList.toggle('is-active', screen === target);
    });
  }

  function createRun() {
    return {
      round: 1,
      score: 0,
      lives: 3,
      combo: 0,
      maxCombo: 0,
      bricks: 0,
      startedAt: performance.now(),
      power: 1,
      extraBalls: 0,
      paddleScale: 1,
      speedScale: 1,
      blastChance: 0,
      critChance: .05,
      pierceChance: 0,
      comboWindow: 1.25,
      comboBonus: 0,
      shield: 0,
      bossStage: 0,
      bossMaxHp: 0,
      lastChoiceKeys: []
    };
  }

  const BLOCK_TYPES = {
    blue: { color: 0x2678ff, edge: 0x9fd3ff, shape: 'wide', width: 104, height: 30, name: 'BOOST' },
    cyan: { color: 0x58dced, edge: 0xc8fbff, shape: 'rect', width: 72, height: 34, name: 'BURST' },
    split: { color: 0xff684f, edge: 0xffd1a8, shape: 'split', width: 64, height: 38, name: 'SPLIT' },
    yellow: { color: 0xffb23e, edge: 0xfff1a8, shape: 'small', width: 42, height: 27, name: 'MINI' },
    green: { color: 0x65dc83, edge: 0xd8ffe0, shape: 'circle', width: 42, height: 42, name: 'WIDE' },
    pink: { color: 0xff4f91, edge: 0xffc4db, shape: 'triangle', width: 68, height: 44, name: 'COMBO' },
    purple: { color: 0xa85cff, edge: 0xe4c7ff, shape: 'tall', width: 48, height: 44, name: 'PIERCE' },
    obstacle: { color: 0x586477, edge: 0xd4deec, shape: 'square', width: 52, height: 52, name: 'JAMMER' },
    boss: { color: 0x521067, edge: 0xff82ce, shape: 'boss', width: 0, height: 0, name: 'INVADER' }
  };

  function ensureAudio() {
    if (!soundEnabled) return null;
    if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === 'suspended') audioContext.resume();
    return audioContext;
  }

  function tone(frequency, duration = .08, type = 'square', gain = .035, delay = 0) {
    const ctx = ensureAudio();
    if (!ctx) return;
    const start = ctx.currentTime + delay;
    const oscillator = ctx.createOscillator();
    const volume = ctx.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, start);
    volume.gain.setValueAtTime(0.0001, start);
    volume.gain.exponentialRampToValueAtTime(Math.max(.0002, gain), start + .008);
    volume.gain.exponentialRampToValueAtTime(.0001, start + duration);
    oscillator.connect(volume).connect(ctx.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + .02);
  }

  function hitSound(combo, explosive = false) {
    const now = performance.now();
    if (now - lastHitTone < 26) return;
    lastHitTone = now;
    const pitch = 220 + Math.min(combo, 40) * 10;
    tone(explosive ? 95 : pitch, explosive ? .18 : .055, explosive ? 'sawtooth' : 'square', explosive ? .065 : .024);
    if (combo > 0 && combo % 10 === 0) {
      tone(520, .16, 'square', .045, .02);
      tone(780, .2, 'triangle', .04, .07);
      tone(1040, .24, 'sine', .035, .12);
    }
  }

  function startBgm() {
    stopBgm();
    if (!soundEnabled) return;
    const invaderPulse = [196, 165, 147, 123, 196, 165, 139, 110];
    const invaderLead = [392, 0, 330, 0, 294, 330, 247, 0];
    const bossBass = [82, 82, 98, 110, 82, 123, 117, 98];
    const bossLead = [330, 349, 392, 466, 440, 392, 349, 294];
    const bossMode = Boolean(activeScene && activeScene.inBoss);
    bgmStep = 0;
    bgmTimer = window.setInterval(() => {
      if (!run || !ui.playScreen.classList.contains('is-active') || !activeScene || activeScene.scene.isPaused()) return;
      if (bossMode) {
        const bass = bossBass[bgmStep % bossBass.length];
        const lead = bossLead[bgmStep % bossLead.length];
        tone(bass, .16, 'sawtooth', .016);
        tone(lead, .095, bgmStep % 2 ? 'square' : 'triangle', .012, .025);
        if (bgmStep % 4 === 0) tone(55, .11, 'square', .018);
      } else {
        const pulse = invaderPulse[bgmStep % invaderPulse.length];
        const lead = invaderLead[bgmStep % invaderLead.length];
        tone(pulse, .09, 'square', .012);
        if (lead) tone(lead, .07, 'triangle', .008, .035);
        if (bgmStep % 4 === 0) tone(73, .08, 'square', .012);
      }
      bgmStep += 1;
    }, bossMode ? 132 : Math.max(170, 248 - (run ? run.round * 9 : 0)));
  }

  function stopBgm() {
    if (bgmTimer) window.clearInterval(bgmTimer);
    bgmTimer = 0;
  }

  function updateSoundButton() {
    ui.soundButton.textContent = soundEnabled ? '♪' : '×';
    ui.soundButton.setAttribute('aria-label', soundEnabled ? 'サウンドを切る' : 'サウンドを入れる');
  }

  const UPGRADES = [
    {
      key: 'blast',
      icon: '爆',
      name: '爆裂ショット',
      detail: '破壊時の爆発率を12%追加。周囲のブロックにもダメージ。',
      available: (state) => state.blastChance < .48,
      apply: (state) => { state.blastChance += .12; }
    },
    {
      key: 'pierce',
      icon: '貫',
      name: 'プラズマ貫通',
      detail: '18%の確率でブロックに反射せず、そのまま突き抜ける。',
      available: (state) => state.pierceChance < .54,
      apply: (state) => { state.pierceChance += .18; }
    },
    {
      key: 'wide',
      icon: '↔',
      name: 'ワイドパドル',
      detail: 'パドルの横幅を18%拡大。敵弾を受けても立て直しやすくする。',
      available: (state) => state.paddleScale < 1.65,
      apply: (state) => { state.paddleScale = Math.min(1.7, state.paddleScale + .18); }
    }
  ];

  function pickChoices() {
    const available = UPGRADES.filter((upgrade) => {
      const allowed = !upgrade.available || upgrade.available(run);
      return allowed && !run.lastChoiceKeys.includes(upgrade.key);
    });
    const fallback = UPGRADES.filter((upgrade) => !upgrade.available || upgrade.available(run));
    const pool = (available.length >= 3 ? available : fallback).slice();
    Phaser.Utils.Array.Shuffle(pool);
    const chosen = pool.slice(0, 3);
    run.lastChoiceKeys = chosen.map((upgrade) => upgrade.key);
    return chosen;
  }

  function updateUpgradeProgress(scene) {
    const flow = scene.upgradeFlow;
    if (!flow) return;
    const current = flow.total - flow.remaining + 1;
    ui.choiceProgress.textContent = flow.total > 1
      ? `${flow.label}　${current} / ${flow.total}`
      : flow.label;
  }

  function resetChoiceReroll(scene) {
    scene.choiceRerollUsed = false;
    ui.rerollButton.disabled = false;
    ui.rerollButton.textContent = '↻ 候補を更新する（1回のみ）';
  }

  function renderChoices(scene) {
    const choices = pickChoices();
    ui.choiceGrid.innerHTML = '';
    choices.forEach((upgrade, index) => {
      const button = document.createElement('button');
      button.className = 'choice-card';
      button.type = 'button';
      button.dataset.choice = String(index + 1);
      button.innerHTML = `<em>${index + 1}</em><i class="choice-icon">${upgrade.icon}</i><strong>${upgrade.name}</strong><span>${upgrade.detail}</span>`;
      button.addEventListener('click', () => {
        upgrade.apply(run);
        tone(440, .12, 'square', .05);
        tone(660, .16, 'triangle', .04, .07);
        updateHud();
        const flow = scene.upgradeFlow;
        if (!flow) return;
        flow.remaining -= 1;
        if (flow.remaining > 0) {
          resetChoiceReroll(scene);
          updateUpgradeProgress(scene);
          renderChoices(scene);
          return;
        }
        ui.choiceBackdrop.hidden = true;
        scene.physics.resume();
        scene.upgradeFlow = null;
        flow.onComplete();
      }, { once: true });
      ui.choiceGrid.append(button);
    });
  }

  function showUpgradeChoice(scene, options = {}) {
    scene.physics.pause();
    scene.clearBalls();
    scene.clearEnemyShots();
    stopBgm();
    scene.upgradeFlow = {
      total: options.count || 1,
      remaining: options.count || 1,
      label: options.label || `ROUND ${run.round} CLEAR　次は ROUND ${run.round + 1}`,
      onComplete: options.onComplete || (() => {
        run.round += 1;
        scene.startRound();
      })
    };
    resetChoiceReroll(scene);
    updateUpgradeProgress(scene);
    renderChoices(scene);
    ui.choiceBackdrop.hidden = false;
    tone(392, .12, 'triangle', .045);
    tone(523, .16, 'triangle', .04, .08);
    tone(784, .24, 'triangle', .035, .16);
  }

  function updateHud() {
    if (!run) return;
    ui.roundValue.textContent = activeScene && activeScene.inBoss ? `${run.round} BOSS` : `${run.round} / ${TOTAL_ROUNDS}`;
    ui.scoreValue.textContent = formatNumber(run.score);
    ui.comboValue.textContent = String(run.combo);
    const multiplier = 1 + Math.floor(run.combo / 8) * .25 + run.comboBonus;
    ui.multiplierValue.textContent = multiplier.toFixed(1);
    ui.lifeValue.textContent = '♥'.repeat(Math.max(0, run.lives)) || '0';
    ui.rushMeter.style.width = `${Math.min(100, run.combo * 4)}%`;
  }

  let effectToastTimer = 0;
  function showEffectToast(type, icon, text) {
    window.clearTimeout(effectToastTimer);
    ui.effectToast.dataset.type = type;
    ui.effectIcon.textContent = icon;
    ui.effectText.textContent = text;
    ui.effectToast.hidden = false;
    effectToastTimer = window.setTimeout(() => { ui.effectToast.hidden = true; }, 820);
  }

  function hideBossHud() {
    ui.bossHud.hidden = true;
  }

  function updateBossHud(hp, maxHp, name) {
    const safeMax = Math.max(1, maxHp);
    ui.bossHud.hidden = false;
    ui.bossName.textContent = name;
    ui.bossHpValue.textContent = `${Math.max(0, Math.ceil(hp))} / ${safeMax}`;
    ui.bossHpFill.style.width = `${Phaser.Math.Clamp(hp / safeMax, 0, 1) * 100}%`;
  }

  function showRoundBanner(round, boss = false) {
    ui.roundBanner.hidden = false;
    ui.roundBanner.querySelector('small').textContent = boss ? 'WARNING / BOSS SIGNAL' : 'READY';
    ui.roundBanner.querySelector('strong').textContent = boss ? (round === 6 ? 'FINAL INVADER' : 'INVADER ATTACK') : `ROUND ${round}`;
    ui.roundBanner.querySelector('span').textContent = boss ? '動くコアを撃ち落とせ' : 'タップでボールを発射';
    window.setTimeout(() => { ui.roundBanner.hidden = true; }, boss ? 1500 : 1050);
  }

  class BrickRushScene extends Phaser.Scene {
    constructor() {
      super('BrickRushScene');
      this.pointerX = WIDTH / 2;
      this.waitingLaunch = true;
      this.roundClearing = false;
      this.choiceRerollUsed = false;
      this.upgradeFlow = null;
      this.lastHitAt = 0;
      this.inBoss = false;
      this.bossRound = 0;
      this.testBossStarted = false;
      this.paddleBoostUntil = 0;
      this.paddleShrinkUntil = 0;
      this.paddleDamageScale = 1;
    }

    create() {
      activeScene = this;
      this.physics.world.setBounds(12, 12, WIDTH - 24, HEIGHT + 60);
      this.physics.world.setBoundsCollision(true, true, true, false);
      this.makeTextures();
      this.drawArena();

      this.bricks = this.physics.add.staticGroup();
      this.balls = this.physics.add.group({ allowGravity: false });
      this.enemyShots = this.physics.add.group({ allowGravity: false });
      this.paddle = this.add.rectangle(WIDTH / 2, 912, 156, 28, 0x58ecff, .001)
        .setDepth(30);
      this.paddleVisual = this.add.graphics().setPosition(WIDTH / 2, 912).setDepth(31);
      this.physics.add.existing(this.paddle, true);
      this.paddle.body.setSize(156, 28);

      this.sparkEmitter = this.add.particles(0, 0, 'spark', {
        speed: { min: 120, max: 390 },
        angle: { min: 0, max: 360 },
        lifespan: { min: 260, max: 560 },
        scale: { start: 1.1, end: 0 },
        blendMode: 'ADD',
        gravityY: 180,
        emitting: false
      }).setDepth(80);

      this.trailEmitter = this.add.particles(0, 0, 'trail', {
        speed: 8,
        lifespan: 210,
        scale: { start: .8, end: 0 },
        alpha: { start: .8, end: 0 },
        blendMode: 'ADD',
        emitting: false
      }).setDepth(18);

      this.physics.add.collider(this.balls, this.paddle, this.onPaddleHit, null, this);
      this.physics.add.overlap(this.enemyShots, this.paddle, this.onEnemyShotHitPaddle, null, this);
      this.physics.add.collider(
        this.balls,
        this.bricks,
        this.onBrickHit,
        (ball) => {
          ball.setData('impactVX', ball.body.velocity.x);
          ball.setData('impactVY', ball.body.velocity.y);
          return true;
        },
        this
      );

      this.cursors = this.input.keyboard.createCursorKeys();
      this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
      this.input.on('pointermove', (pointer) => { this.pointerX = pointer.x; });
      this.input.on('pointerdown', (pointer) => {
        this.pointerX = pointer.x;
        this.launchBalls();
      });
      this.input.keyboard.on('keydown-SPACE', () => this.launchBalls());

      this.startRound();
    }

    makeTextures() {
      const graphics = this.make.graphics({ x: 0, y: 0, add: false });
      graphics.fillStyle(0xffffff, 1);
      graphics.fillCircle(7, 7, 7);
      graphics.generateTexture('spark', 14, 14);
      graphics.clear();
      graphics.fillStyle(0x58ecff, 1);
      graphics.fillCircle(6, 6, 6);
      graphics.generateTexture('trail', 12, 12);
      graphics.destroy();
    }

    drawArena() {
      const bg = this.add.graphics().setDepth(-20);
      bg.fillStyle(0x06132d, 1);
      bg.fillRect(0, 0, WIDTH, HEIGHT);
      bg.lineStyle(1, 0x2c7ac2, .16);
      for (let y = 40; y < HEIGHT; y += 42) bg.lineBetween(20, y, WIDTH - 20, y);
      for (let x = 28; x < WIDTH; x += 58) bg.lineBetween(x, 20, x, HEIGHT);
      bg.fillStyle(0x0d2855, 1);
      bg.fillRect(0, 0, 12, HEIGHT);
      bg.fillRect(WIDTH - 12, 0, 12, HEIGHT);
      bg.lineStyle(3, 0x58ecff, .65);
      bg.lineBetween(14, 0, 14, HEIGHT);
      bg.lineBetween(WIDTH - 14, 0, WIDTH - 14, HEIGHT);

      const stars = this.add.graphics().setDepth(-10);
      for (let i = 0; i < 42; i += 1) {
        const x = 24 + ((i * 137) % 670);
        const y = 34 + ((i * 83) % 880);
        stars.fillStyle(i % 5 === 0 ? 0xffe05c : 0x78cfff, .22 + (i % 3) * .12);
        stars.fillCircle(x, y, i % 5 === 0 ? 2.4 : 1.4);
      }
    }

    startRound() {
      this.roundClearing = false;
      this.inBoss = false;
      this.bossRound = 0;
      this.waitingLaunch = true;
      this.lastHitAt = 0;
      run.combo = 0;
      this.clearBalls();
      this.clearEnemyShots();
      this.clearBricks();
      this.paddleShrinkUntil = 0;
      this.paddleDamageScale = 1;
      this.resizePaddle();
      this.paddle.x = WIDTH / 2;
      this.paddle.body.updateFromGameObject();
      hideBossHud();
      if ((TEST_BOSS === 3 || TEST_BOSS === 6) && !this.testBossStarted) {
        this.testBossStarted = true;
        run.round = TEST_BOSS;
        this.startBossBattle(TEST_BOSS);
        return;
      }
      this.buildRound(run.round);
      this.spawnLaunchBalls();
      updateHud();
      showRoundBanner(run.round);
      ui.statusText.textContent = '色ブロックの効果を使い分けろ';
      startBgm();
    }

    resizePaddle() {
      const temporaryBoost = this.time && this.time.now < this.paddleBoostUntil ? 1.24 : 1;
      const enemyShrink = this.time && this.time.now < this.paddleShrinkUntil ? this.paddleDamageScale : 1;
      const width = Phaser.Math.Clamp(156 * run.paddleScale * temporaryBoost * enemyShrink, 78, 285);
      this.paddle.setDisplaySize(width, 28);
      this.paddle.body.setSize(width, 28);
      this.paddle.body.updateFromGameObject();
      this.drawPaddleVisual(width);
      this.syncPaddleVisual();
    }

    drawPaddleVisual(width) {
      if (!this.paddleVisual) return;
      const boosted = this.time && this.time.now < this.paddleBoostUntil;
      const damaged = this.time && this.time.now < this.paddleShrinkUntil;
      const face = damaged ? 0xff4f91 : (boosted ? 0x83f28f : 0x58ecff);
      const edge = damaged ? 0x8e2452 : (boosted ? 0x277b48 : 0x146a9d);
      const g = this.paddleVisual;
      const x = -width / 2;
      g.clear();
      g.fillStyle(0x020817, .72);
      g.fillRoundedRect(x - 5, -8, width + 10, 26, 10);
      g.fillStyle(edge, 1);
      g.fillRoundedRect(x, -14, width, 28, 9);
      g.fillStyle(face, 1);
      g.fillRoundedRect(x + 3, -12, width - 6, 21, 7);
      g.lineStyle(3, 0xffffff, .94);
      g.strokeRoundedRect(x + 1, -13, width - 2, 25, 8);
      g.fillStyle(0xffffff, .34);
      g.fillRoundedRect(x + 8, -9, Math.max(20, width - 16), 5, 3);
      g.fillStyle(0xffffff, .82);
      g.fillCircle(-width * .32, 0, 3);
      g.fillCircle(width * .32, 0, 3);
      g.lineStyle(2, 0xffffff, .4);
      g.strokeRoundedRect(-Math.min(31, width * .22), -8, Math.min(62, width * .44), 15, 5);
    }

    syncPaddleVisual() {
      if (!this.paddleVisual) return;
      this.paddleVisual.setPosition(this.paddle.x, this.paddle.y);
    }

    clearBalls() {
      if (!this.balls) return;
      this.balls.getChildren().slice().forEach((ball) => this.destroyBall(ball));
    }

    clearEnemyShots() {
      if (!this.enemyShots) return;
      this.enemyShots.getChildren().slice().forEach((shot) => this.destroyEnemyShot(shot));
    }

    destroyEnemyShot(shot) {
      if (!shot) return;
      const aura = shot.getData('aura');
      if (aura && aura.active) aura.destroy();
      if (shot.active) shot.destroy();
    }

    destroyBall(ball) {
      if (!ball) return;
      const aura = ball.getData('aura');
      if (aura && aura.active) aura.destroy();
      if (ball.active) ball.destroy();
    }

    clearBricks() {
      if (!this.bricks) return;
      this.bricks.getChildren().slice().forEach((brick) => this.destroyBrickVisuals(brick, false));
      this.bricks.clear(true, true);
      this.bossVisual = null;
    }

    spawnLaunchBalls() {
      const count = 1 + run.extraBalls;
      for (let i = 0; i < count; i += 1) {
        const x = this.paddle.x + (i - (count - 1) / 2) * 22;
        const aura = this.add.circle(x, 884, 23, 0x58ecff, .16)
          .setStrokeStyle(2, 0x9ff7ff, .5)
          .setBlendMode(Phaser.BlendModes.ADD)
          .setDepth(22);
        const ball = this.add.circle(x, 884, 13, 0xffe05c)
          .setStrokeStyle(3, 0xffffff)
          .setDepth(25);
        this.physics.add.existing(ball);
        ball.body.setCircle(13);
        ball.body.setBounce(1, 1);
        ball.body.setCollideWorldBounds(true);
        ball.body.allowGravity = false;
        ball.setData('stuck', true);
        ball.setData('offset', (i - (count - 1) / 2) * 22);
        ball.setData('aura', aura);
        ball.setData('speedBoostUntil', 0);
        ball.setData('smallUntil', 0);
        ball.setData('pierceUntil', 0);
        ball.setData('jamUntil', 0);
        ball.setData('lastMotionX', ball.x);
        ball.setData('lastMotionY', ball.y);
        ball.setData('lastMotionAt', this.time.now);
        ball.setData('previousX', ball.x);
        ball.setData('previousY', ball.y);
        this.balls.add(ball);
      }
    }

    launchBalls() {
      if (!run || !this.waitingLaunch || !ui.playScreen.classList.contains('is-active')) return;
      this.waitingLaunch = false;
      const balls = this.balls.getChildren();
      const baseSpeed = (550 + run.round * 24) * run.speedScale;
      balls.forEach((ball, index) => {
        ball.setData('stuck', false);
        const spread = (index - (balls.length - 1) / 2) * .16;
        const angle = -Math.PI / 2 + spread + Phaser.Math.FloatBetween(-.08, .08);
        ball.body.setVelocity(Math.cos(angle) * baseSpeed, Math.sin(angle) * baseSpeed);
        ball.setData('lastMotionX', ball.x);
        ball.setData('lastMotionY', ball.y);
        ball.setData('lastMotionAt', this.time.now);
      });
      ui.statusText.textContent = 'コンボをつないで一気に砕け';
      tone(330, .09, 'square', .04);
      tone(520, .12, 'triangle', .025, .05);
    }

    buildRound(round) {
      if (TEST_MODE && !TEST_BOSS) {
        const requestedType = QUERY.get('test');
        const testType = BLOCK_TYPES[requestedType] && requestedType !== 'boss' ? requestedType : 'blue';
        const testHp = testType === 'green' || testType === 'split' ? 99 : 1;
        this.createBrick(WIDTH / 2, 155, 640, 42, testHp, { typeKey: testType, index: round });
        return;
      }
      const patterns = [
        ['blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
        ['cyan', 'yellow', 'cyan', 'yellow', 'cyan', 'yellow', 'cyan', 'yellow'],
        ['pink', 'green', 'purple', 'green', 'pink', 'green', 'purple', 'green', 'pink'],
        ['blue', 'yellow', 'obstacle', 'yellow', 'blue', 'yellow', 'obstacle', 'yellow'],
        ['cyan', 'green', 'pink', 'purple', 'pink', 'green', 'cyan', 'purple'],
        ['obstacle', 'yellow', 'cyan', 'green', 'cyan', 'yellow', 'obstacle', 'green', 'cyan'],
        ['split', 'cyan', 'yellow', 'split', 'yellow', 'cyan', 'split']
      ];
      const roundLayouts = {
        1: [0, 1, 2, 0, 1],
        2: [0, 1, 6, 2, 3, 0, 1],
        3: [0, 6, 2, 3, 1, 4, 2, 0],
        4: [3, 6, 4, 1, 5, 2, 3, 4, 0],
        5: [4, 5, 6, 3, 1, 5, 2, 3, 4, 0],
        6: [5, 6, 4, 3, 5, 2, 4, 5, 3, 1, 5]
      };
      const layout = roundLayouts[round] || roundLayouts[6];
      const gap = 8;
      let index = 0;

      layout.forEach((patternIndex, row) => {
        const keys = patterns[patternIndex].filter((key) => round >= 2 || key !== 'obstacle');
        const rowWidth = keys.reduce((sum, key) => sum + BLOCK_TYPES[key].width, 0) + gap * (keys.length - 1);
        let cursor = (WIDTH - rowWidth) / 2;
        keys.forEach((typeKey, col) => {
          const type = BLOCK_TYPES[typeKey];
          const width = type.width;
          const height = type.height;
          const x = cursor + width / 2;
          const y = 210 + row * 53;
          cursor += width + gap;

          const baseHp = 1 + Math.floor(round / 2);
          let hp = baseHp;
          if (typeKey === 'yellow') hp = Math.max(1, baseHp - 1);
          if (typeKey === 'pink' || typeKey === 'purple') hp = baseHp + 1;
          if (typeKey === 'split') hp = Math.max(1, baseHp);
          if (typeKey === 'obstacle') hp = baseHp + 4;
          const moving = (round >= 2 && typeKey === 'green') || (round >= 4 && typeKey === 'obstacle' && col % 2 === 0);
          this.createBrick(x, y, width, height, hp, {
            typeKey,
            index,
            moving,
            moveRange: typeKey === 'green' ? 30 + round * 4 : 18 + round * 2,
            moveSpeed: typeKey === 'green' ? .85 + row * .04 : .62,
            phase: index * .7
          });
          index += 1;
        });
      });
      this.spawnNormalEnemies(round);
    }

    spawnNormalEnemies(round) {
      const count = Math.min(5, 2 + Math.floor(round / 2));
      const columns = count <= 3 ? count : Math.ceil(count / 2);
      const spacing = Math.min(156, 560 / Math.max(1, columns - 1));
      for (let i = 0; i < count; i += 1) {
        const row = count > 3 ? Math.floor(i / columns) : 0;
        const col = i % columns;
        const rowCount = Math.min(columns, count - row * columns);
        const rowWidth = spacing * Math.max(0, rowCount - 1);
        const x = WIDTH / 2 - rowWidth / 2 + col * spacing;
        const y = 55 + row * 74;
        this.createEnemy(x, y, round, i);
      }
    }

    createEnemy(x, y, round, index) {
      const hp = 5;
      const enemy = this.add.rectangle(x, y, 64, 48, 0x142f62, .001).setDepth(15);
      this.physics.add.existing(enemy, true);
      enemy.body.setSize(64, 48);
      this.bricks.add(enemy);
      enemy.setData('hp', hp);
      enemy.setData('maxHp', hp);
      enemy.setData('baseColor', 0x2f87ff);
      enemy.setData('boss', false);
      enemy.setData('enemy', true);
      enemy.setData('shooter', true);
      enemy.setData('typeKey', 'enemy');
      enemy.setData('shape', 'enemy');
      enemy.setData('moving', true);
      enemy.setData('originX', x);
      enemy.setData('originY', y);
      enemy.setData('moveRange', 38 + round * 5);
      enemy.setData('moveSpeed', .72 + index * .09 + round * .025);
      enemy.setData('phase', index * 1.7);
      enemy.setData('shotInterval', Math.max(1500, 2850 - round * 150 + index * 80));
      enemy.setData('nextShotAt', this.time.now + 1400 + index * 320);

      const aura = this.add.ellipse(x, y, 88, 66, 0x1f8cff, .08)
        .setStrokeStyle(2, 0x7de8ff, .34)
        .setBlendMode(Phaser.BlendModes.ADD)
        .setDepth(13);
      const visual = this.add.graphics().setPosition(x, y).setDepth(16);
      const bodyColor = index % 2 ? 0xff4f91 : 0x2f87ff;
      visual.fillStyle(0x07152f, 1);
      visual.fillRoundedRect(-32, -22, 64, 44, 8);
      visual.lineStyle(3, bodyColor, 1);
      visual.strokeRoundedRect(-32, -22, 64, 44, 8);
      visual.fillStyle(bodyColor, 1);
      visual.fillRect(-24, -16, 48, 8);
      visual.fillRect(-30, -8, 12, 16);
      visual.fillRect(18, -8, 12, 16);
      visual.fillRect(-20, 14, 12, 10);
      visual.fillRect(8, 14, 12, 10);
      visual.fillStyle(0xffe05c, 1);
      visual.fillRect(-17, -5, 9, 9);
      visual.fillRect(8, -5, 9, 9);
      visual.fillStyle(0xffffff, .9);
      visual.fillRect(-4, 8, 8, 4);
      const label = this.add.text(x, y + 38, String(hp), {
        fontFamily: '"Arial Black", "Yu Gothic UI", sans-serif',
        fontSize: '21px',
        fontStyle: 'bold',
        color: '#ffe05c',
        stroke: '#07152f',
        strokeThickness: 6
      }).setOrigin(.5).setDepth(17);
      label.setShadow(0, 3, '#000000', 3, true, true);
      enemy.setData('enemyVisual', visual);
      enemy.setData('enemyAura', aura);
      enemy.setData('label', label);
      return enemy;
    }

    startBossBattle(round) {
      this.roundClearing = false;
      this.inBoss = true;
      this.bossRound = round;
      run.bossStage = round;
      run.combo = 0;
      this.lastHitAt = 0;
      this.waitingLaunch = true;
      this.clearBalls();
      this.clearEnemyShots();
      this.clearBricks();
      this.paddleShrinkUntil = 0;
      this.paddleDamageScale = 1;
      this.resizePaddle();
      this.paddle.x = WIDTH / 2;
      this.paddle.body.updateFromGameObject();
      this.buildBossBattle(round);
      this.spawnLaunchBalls();
      updateHud();
      showRoundBanner(round, true);
      ui.statusText.textContent = 'インベーダーの移動を読んで迎撃';
      startBgm();
      tone(92, .35, 'sawtooth', .06);
      tone(138, .3, 'square', .04, .12);
      tone(207, .32, 'triangle', .035, .26);
    }

    buildBossBattle(round) {
      const finalBoss = round === 6;
      const mainHp = TEST_MODE ? 1 : (finalBoss ? 560 : 180);
      const boss = this.createBrick(WIDTH / 2, finalBoss ? 168 : 205, finalBoss ? 300 : 246, finalBoss ? 146 : 122, mainHp, {
        boss: true,
        typeKey: 'boss',
        index: 999,
        moving: true,
        moveRange: finalBoss ? 182 : 150,
        moveSpeed: finalBoss ? 1.2 : 1.02,
        phase: 0,
        shooter: true,
        shotInterval: finalBoss ? 880 : 1250,
        shotDelay: 1650
      });
      boss.setAlpha(.18);
      this.createInvaderVisual(boss, finalBoss);

      let totalBossHp = mainHp;
      if (finalBoss) {
        const returningHp = TEST_MODE ? 1 : 240;
        const returningBoss = this.createBrick(WIDTH / 2, 360, 246, 122, returningHp, {
          boss: true,
          typeKey: 'boss',
          index: 1000,
          moving: true,
          moveRange: 142,
          moveSpeed: 1.38,
          phase: Math.PI,
          shooter: true,
          shotInterval: 1080,
          shotDelay: 2050
        });
        returningBoss.setAlpha(.18);
        this.createInvaderVisual(returningBoss, false);
        totalBossHp += returningHp;
      }
      run.bossMaxHp = totalBossHp;
      this.updateBossAggregateHud();

      const shieldCount = TEST_MODE ? 0 : (finalBoss ? 8 : 6);
      for (let i = 0; i < shieldCount; i += 1) {
        const side = i % 2 === 0 ? -1 : 1;
        const lane = Math.floor(i / 2);
        this.createBrick(
          WIDTH / 2 + side * (156 + lane * 25),
          (finalBoss ? 500 : 345) + lane * 52,
          Math.max(54, 84 - lane * 7),
          30,
          finalBoss ? 12 + lane * 2 : 7 + lane,
          {
          typeKey: 'obstacle',
          index: 1100 + i,
          moving: true,
          moveRange: 36 + lane * 10,
          moveSpeed: .82 + lane * .16,
          phase: i * 1.1
          }
        );
      }
    }

    updateBossAggregateHud() {
      const bosses = this.bricks.getChildren().filter((brick) => brick.active && brick.getData('boss'));
      const hp = bosses.reduce((sum, brick) => sum + Math.max(0, brick.getData('hp')), 0);
      const name = this.bossRound === 6 ? 'OMEGA + NEON INVADERS' : 'NEON INVADER';
      updateBossHud(hp, run.bossMaxHp, name);
    }

    createInvaderVisual(brick, finalBoss) {
      const map = finalBoss
        ? ['0011111100','0111111110','1110110111','1111111111','0011001100','0110110110','1100000011']
        : ['00111100','01111110','11011011','11111111','00100100','01011010','10100101'];
      const cell = finalBoss ? 22 : 20;
      const cols = map[0].length;
      const rows = map.length;
      const visual = this.add.graphics().setDepth(16);
      visual.fillStyle(finalBoss ? 0xff4f91 : 0x58ecff, 1);
      map.forEach((line, row) => {
        [...line].forEach((pixel, col) => {
          if (pixel === '1') visual.fillRoundedRect((col - cols / 2) * cell, (row - rows / 2) * cell, cell - 3, cell - 3, 3);
        });
      });
      visual.fillStyle(0xffe05c, 1);
      visual.fillRect((-cols / 2 + 2) * cell, (-rows / 2 + 2) * cell, cell - 3, cell - 3);
      visual.fillRect((cols / 2 - 3) * cell, (-rows / 2 + 2) * cell, cell - 3, cell - 3);
      visual.setPosition(brick.x, brick.y);
      const aura = this.add.ellipse(brick.x, brick.y, brick.width + 58, brick.height + 50, finalBoss ? 0xff2f8b : 0x28dfff, .08)
        .setStrokeStyle(5, finalBoss ? 0xff82ce : 0x82f5ff, .45)
        .setBlendMode(Phaser.BlendModes.ADD)
        .setDepth(14);
      brick.setData('bossVisual', visual);
      brick.setData('bossAura', aura);
      this.bossVisual = visual;
    }

    createBrick(x, y, width, height, hp, options = {}) {
      const boss = Boolean(options.boss);
      const index = options.index || 0;
      const typeKey = options.typeKey || ['blue', 'cyan', 'yellow', 'green', 'pink', 'purple'][index % 6];
      const type = BLOCK_TYPES[typeKey] || BLOCK_TYPES.blue;
      const color = type.color;
      const shaped = type.shape === 'circle' || type.shape === 'triangle';
      const brick = this.add.rectangle(x, y, width, height, color, .001).setDepth(10);
      this.physics.add.existing(brick, true);
      if (type.shape === 'circle') brick.body.setCircle(width / 2);
      else brick.body.setSize(width, type.shape === 'triangle' ? height * .82 : height);
      this.bricks.add(brick);
      brick.setData('hp', hp);
      brick.setData('maxHp', hp);
      brick.setData('baseColor', color);
      brick.setData('boss', boss);
      brick.setData('enemy', false);
      brick.setData('shooter', Boolean(options.shooter));
      brick.setData('shotInterval', options.shotInterval || 0);
      brick.setData('nextShotAt', this.time.now + (options.shotDelay || 1600));
      brick.setData('typeKey', typeKey);
      brick.setData('shape', type.shape);
      brick.setData('moving', Boolean(options.moving));
      brick.setData('originX', x);
      brick.setData('originY', y);
      brick.setData('moveRange', options.moveRange || 0);
      brick.setData('moveSpeed', options.moveSpeed || 0);
      brick.setData('phase', options.phase || 0);

      if (shaped) {
        const shapeVisual = this.add.graphics().setPosition(x, y).setDepth(11);
        if (type.shape === 'circle') {
          shapeVisual.fillStyle(type.edge, .85);
          shapeVisual.fillCircle(0, 5, width / 2);
          shapeVisual.fillStyle(color, 1);
          shapeVisual.fillCircle(0, -1, width / 2 - 2);
          shapeVisual.lineStyle(3, 0xffffff, .88);
          shapeVisual.strokeCircle(0, -1, width / 2 - 2);
          shapeVisual.fillStyle(0xffffff, .38);
          shapeVisual.fillEllipse(-width * .13, -height * .22, width * .42, height * .2);
        } else {
          shapeVisual.fillStyle(type.edge, .9);
          shapeVisual.fillTriangle(0, -height / 2 + 5, -width / 2, height / 2 + 5, width / 2, height / 2 + 5);
          shapeVisual.fillStyle(color, 1);
          shapeVisual.fillTriangle(0, -height / 2, -width / 2 + 3, height / 2, width / 2 - 3, height / 2);
          shapeVisual.lineStyle(3, 0xffffff, .88);
          shapeVisual.strokeTriangle(0, -height / 2, -width / 2 + 3, height / 2, width / 2 - 3, height / 2);
          shapeVisual.fillStyle(0xffffff, .3);
          shapeVisual.fillTriangle(0, -height * .34, -width * .24, height * .22, -width * .1, height * .22);
        }
        brick.setData('shapeVisual', shapeVisual);
      } else {
        const brickVisual = this.add.graphics().setPosition(x, y).setDepth(11);
        brickVisual.fillStyle(type.edge, .76);
        brickVisual.fillRoundedRect(-width / 2, -height / 2 + 3, width, height, 5);
        brickVisual.fillStyle(color, 1);
        brickVisual.fillRoundedRect(-width / 2, -height / 2, width, height - 2, 5);
        brickVisual.lineStyle(2, 0xffffff, .66);
        brickVisual.strokeRoundedRect(-width / 2 + 1, -height / 2 + 1, width - 2, height - 4, 4);
        brickVisual.fillStyle(0xffffff, .2);
        brickVisual.fillRoundedRect(-width / 2 + 6, -height / 2 + 5, width - 12, Math.max(4, height * .11), 3);
        brick.setData('brickVisual', brickVisual);
        if (typeKey === 'split') {
          const specialVisual = this.add.graphics().setPosition(x, y - 5).setDepth(12);
          specialVisual.fillStyle(0xffffff, .96);
          specialVisual.fillCircle(-14, 0, 6);
          specialVisual.fillCircle(14, 0, 6);
          specialVisual.lineStyle(3, 0xffe05c, 1);
          specialVisual.lineBetween(-5, -7, 5, 7);
          brick.setData('specialVisual', specialVisual);
        }
      }
      if (hp > 1 && !boss) {
        const numberSize = Phaser.Math.Clamp(Math.round(height * .53), 18, 25);
        const label = this.add.text(x, y + (typeKey === 'split' ? 10 : 0), String(hp), {
          fontFamily: '"Arial Black", "Yu Gothic UI", sans-serif',
          fontSize: `${typeKey === 'split' ? Math.max(17, numberSize - 2) : numberSize}px`,
          fontStyle: 'bold',
          color: '#ffffff',
          stroke: '#07152f',
          strokeThickness: 5
        }).setOrigin(.5).setDepth(12);
        label.setShadow(0, 3, '#000000', 3, true, true);
        brick.setData('label', label);
      }
      return brick;
    }

    onPaddleHit(first, second) {
      const ball = first === this.paddle ? second : first;
      if (!ball?.body || typeof ball.body.setVelocity !== 'function') return;
      if (!ball.active) return;
      const offset = Phaser.Math.Clamp((ball.x - this.paddle.x) / (this.paddle.displayWidth / 2), -1, 1);
      const speed = Math.max((550 + run.round * 24) * run.speedScale, ball.body.velocity.length());
      const angle = Phaser.Math.DegToRad(-90 + offset * 58);
      ball.body.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
      ball.y = this.paddle.y - 25;
      tone(165, .045, 'square', .018);
    }

    fireEnemyShot(shooter) {
      if (!shooter?.active || this.roundClearing) return;
      const bossShot = Boolean(shooter.getData('boss'));
      const radius = bossShot ? 12 : 8;
      const color = bossShot ? 0xff4f91 : 0x35cfff;
      const x = shooter.x;
      const y = shooter.y + shooter.height * .5 + radius + 4;
      const shot = this.add.circle(x, y, radius, color, 1)
        .setStrokeStyle(bossShot ? 4 : 3, 0xffffff, .95)
        .setDepth(34);
      const aura = this.add.circle(x, y, radius * 2.2, color, .18)
        .setStrokeStyle(2, bossShot ? 0xffb0dc : 0xaaf6ff, .56)
        .setBlendMode(Phaser.BlendModes.ADD)
        .setDepth(33);
      this.physics.add.existing(shot);
      this.enemyShots.add(shot);
      shot.body.setCircle(radius);
      shot.body.allowGravity = false;
      const speed = bossShot ? 360 + run.round * 18 : 265 + run.round * 14;
      const targetX = this.paddle.x;
      const targetY = this.paddle.y;
      const directionX = targetX - x;
      const directionY = targetY - y;
      const distance = Math.max(1, Math.hypot(directionX, directionY));
      shot.body.setVelocity(directionX / distance * speed, directionY / distance * speed);
      shot.setData('bossShot', bossShot);
      shot.setData('aura', aura);
      tone(bossShot ? 120 : 185, bossShot ? .12 : .07, 'sawtooth', bossShot ? .032 : .018);
    }

    onEnemyShotHitPaddle(first, second) {
      const shot = first === this.paddle ? second : first;
      if (!shot?.active) return;
      const bossShot = Boolean(shot.getData('bossShot'));
      const alreadyShrunk = this.time.now < this.paddleShrinkUntil;
      const hitScale = bossShot ? .7 : .82;
      this.paddleDamageScale = alreadyShrunk
        ? Math.max(.54, this.paddleDamageScale * .9)
        : hitScale;
      this.paddleShrinkUntil = this.time.now + PADDLE_HIT_DURATION_MS;
      this.destroyEnemyShot(shot);
      this.resizePaddle();
      this.cameras.main.flash(90, 255, 70, 120, false);
      this.cameras.main.shake(150, bossShot ? .009 : .005);
      this.sparkEmitter.emitParticleAt(this.paddle.x, this.paddle.y, bossShot ? 24 : 14);
      showEffectToast('obstacle', bossShot ? 'BOSS HIT' : 'ENEMY HIT', '3秒間 パドル縮小');
      tone(78, .22, 'sawtooth', .055);
    }

    onBrickHit(ball, brick) {
      if (!brick.active || this.roundClearing) return;
      const impactX = ball.getData('impactVX') || ball.body.velocity.x;
      const impactY = ball.getData('impactVY') || ball.body.velocity.y;
      this.applyBrickTrait(ball, brick, impactX, impactY);
      const enemyTarget = Boolean(brick.getData('enemy'));
      const critical = !enemyTarget && Math.random() < run.critChance;
      const damage = enemyTarget ? 1 : run.power * (critical ? 2 : 1);
      this.damageBrick(brick, damage, false, critical);

      if (this.time.now < (ball.getData('pierceUntil') || 0) || Math.random() < run.pierceChance) {
        this.time.delayedCall(0, () => {
          if (ball.active) ball.body.setVelocity(impactX, impactY);
        });
      }
    }

    applyBrickTrait(ball, brick, impactX, impactY) {
      const typeKey = brick.getData('typeKey');
      if (!typeKey || typeKey === 'boss') return;
      const now = this.time.now;
      const lastTraitAt = ball.getData('lastTraitAt') || 0;
      const lastTraitBrick = ball.getData('lastTraitBrick');
      if (lastTraitBrick === brick && now - lastTraitAt < 140) return;
      ball.setData('lastTraitAt', now);
      ball.setData('lastTraitBrick', brick);

      if (typeKey === 'blue') {
        ball.setData('speedBoostUntil', now + TRAIT_DURATION_MS);
        ball.body.velocity.scale(1.5);
        showEffectToast('blue', 'BLUE', '3秒間 SPEED ×1.5');
        tone(620, .07, 'square', .035);
      } else if (typeKey === 'yellow') {
        ball.setData('smallUntil', now + TRAIT_DURATION_MS);
        ball.setScale(.66);
        ball.body.setCircle(8, 5, 5);
        const aura = ball.getData('aura');
        if (aura) aura.setScale(.72);
        showEffectToast('yellow', 'YELLOW', '3秒間 ボール小型化');
        tone(740, .08, 'triangle', .035);
      } else if (typeKey === 'pink') {
        run.combo += 2;
        run.maxCombo = Math.max(run.maxCombo, run.combo);
        showEffectToast('pink', 'PINK', 'COMBO +2');
        tone(520, .06, 'square', .032);
        tone(780, .09, 'triangle', .025, .035);
      } else if (typeKey === 'cyan') {
        if (now - (brick.getData('burstAt') || 0) > 420) {
          brick.setData('burstAt', now);
          showEffectToast('blue', 'CYAN', '周囲へパルス攻撃');
          this.explodeAt(brick.x, brick.y, .52);
        }
      } else if (typeKey === 'split') {
        if (!brick.getData('splitUsed') && this.spawnSplitBall(ball)) {
          brick.setData('splitUsed', true);
          showEffectToast('split', 'SPLIT', 'ボールが2方向へ分裂');
          tone(460, .07, 'square', .035);
          tone(690, .11, 'triangle', .03, .04);
        }
      } else if (typeKey === 'green') {
        this.paddleBoostUntil = now + TRAIT_DURATION_MS;
        this.resizePaddle();
        showEffectToast('green', 'GREEN', '3秒間 パドル拡大');
        tone(410, .1, 'triangle', .03);
      } else if (typeKey === 'purple') {
        ball.setData('pierceUntil', now + TRAIT_DURATION_MS);
        ball.body.setVelocity(impactX, impactY);
        showEffectToast('purple', 'PURPLE', '3秒間 貫通');
        tone(860, .08, 'sawtooth', .028);
      } else if (typeKey === 'obstacle') {
        ball.setData('jamUntil', now + TRAIT_DURATION_MS);
        ball.body.setVelocity(impactX * .72, impactY * .72);
        showEffectToast('obstacle', 'JAMMER', '3秒間 SPEED DOWN');
        tone(105, .12, 'square', .04);
      }
    }

    spawnSplitBall(sourceBall) {
      const activeBalls = this.balls.getChildren().filter((ball) => ball.active);
      if (activeBalls.length >= 8 || !sourceBall?.body) return false;
      const speed = Math.max(560, sourceBall.body.velocity.length());
      const sourceAngle = Math.atan2(sourceBall.body.velocity.y, sourceBall.body.velocity.x);
      const cloneAngle = sourceAngle + (sourceBall.body.velocity.x >= 0 ? .48 : -.48);
      const redirectedAngle = sourceAngle - (sourceBall.body.velocity.x >= 0 ? .2 : -.2);
      sourceBall.body.setVelocity(Math.cos(redirectedAngle) * speed, Math.sin(redirectedAngle) * speed);

      const x = Phaser.Math.Clamp(sourceBall.x + (sourceBall.body.velocity.x >= 0 ? 5 : -5), 30, WIDTH - 30);
      const y = Phaser.Math.Clamp(sourceBall.y + 4, 30, 900);
      const aura = this.add.circle(x, y, 23, 0xff684f, .18)
        .setStrokeStyle(2, 0xffd1a8, .64)
        .setBlendMode(Phaser.BlendModes.ADD)
        .setDepth(22);
      const clone = this.add.circle(x, y, 13, 0xffe05c)
        .setStrokeStyle(3, 0xffffff)
        .setDepth(25);
      this.physics.add.existing(clone);
      clone.body.setCircle(13);
      clone.body.setBounce(1, 1);
      clone.body.setCollideWorldBounds(true);
      clone.body.allowGravity = false;
      clone.body.setVelocity(Math.cos(cloneAngle) * speed, Math.sin(cloneAngle) * speed);
      clone.setData('stuck', false);
      clone.setData('offset', 0);
      clone.setData('aura', aura);
      clone.setData('speedBoostUntil', 0);
      clone.setData('smallUntil', 0);
      clone.setData('pierceUntil', 0);
      clone.setData('jamUntil', 0);
      clone.setData('lastMotionX', x);
      clone.setData('lastMotionY', y);
      clone.setData('lastMotionAt', this.time.now);
      clone.setData('previousX', x);
      clone.setData('previousY', y);
      this.balls.add(clone);
      this.sparkEmitter.emitParticleAt(x, y, 18);
      return true;
    }

    damageBrick(brick, damage, fromExplosion, critical = false) {
      if (!brick || !brick.active) return;
      const now = this.time.now / 1000;
      run.combo = now - this.lastHitAt <= run.comboWindow ? run.combo + 1 : 1;
      this.lastHitAt = now;
      run.maxCombo = Math.max(run.maxCombo, run.combo);

      const nextHp = brick.getData('hp') - damage;
      brick.setData('hp', nextHp);
      if (brick.getData('boss')) {
        this.updateBossAggregateHud();
      }
      const multiplier = 1 + Math.floor(run.combo / 8) * .25 + run.comboBonus;
      const bossBonus = brick.getData('boss') ? 5 : 1;
      run.score += Math.round((90 + run.round * 25) * multiplier * bossBonus * (critical ? 1.5 : 1));
      this.showHitEffect(brick.x, brick.y, critical ? `CRIT ${damage}` : `+${Math.round(100 * multiplier)}`, critical);
      this.sparkEmitter.emitParticleAt(brick.x, brick.y, critical ? 14 : 7);
      this.cameras.main.shake(critical ? 80 : 38, critical ? .005 : .0017);

      if (nextHp <= 0) {
        run.bricks += 1;
        const defeatedBoss = brick.getData('boss');
        const blast = !fromExplosion && Math.random() < run.blastChance;
        const x = brick.x;
        const y = brick.y;
        this.destroyBrickVisuals(brick, true);
        hitSound(run.combo, blast);
        if (blast) this.explodeAt(x, y);
        if (defeatedBoss) {
          const remainingBosses = this.bricks.getChildren().filter((other) => other.active && other.getData('boss'));
          if (remainingBosses.length === 0) {
            this.bricks.getChildren().slice().forEach((other) => {
              if (other.active && !other.getData('boss')) this.destroyBrickVisuals(other, true);
            });
          } else {
            this.updateBossAggregateHud();
            ui.statusText.textContent = '残るインベーダーを撃ち落とせ';
          }
        }
        if (this.bricks.countActive(true) === 0) this.clearRound();
      } else {
        const ratio = Phaser.Math.Clamp(nextHp / brick.getData('maxHp'), 0, 1);
        brick.setAlpha(brick.getData('boss') ? .18 : .001);
        const shapeVisual = brick.getData('shapeVisual');
        const brickVisual = brick.getData('brickVisual');
        const enemyVisual = brick.getData('enemyVisual');
        const enemyAura = brick.getData('enemyAura');
        if (shapeVisual) {
          shapeVisual.setAlpha(.56 + ratio * .44);
          shapeVisual.setScale(1 + (1 - ratio) * .035);
        }
        if (brickVisual) {
          brickVisual.setAlpha(.62 + ratio * .38);
          brickVisual.setScale(1 + (1 - ratio) * .035);
        }
        if (enemyVisual) {
          enemyVisual.setAlpha(.62 + ratio * .38);
          enemyVisual.setScale(1 + (1 - ratio) * .045);
        }
        if (enemyAura) enemyAura.setAlpha(.04 + ratio * .08);
        const label = brick.getData('label');
        if (label) label.setText(brick.getData('boss') ? `CORE ${Math.max(0, nextHp)}` : String(Math.max(0, nextHp)));
        hitSound(run.combo, false);
      }
      updateHud();
    }

    destroyBrickVisuals(brick, animate) {
      if (!brick) return;
      const shine = brick.getData('shine');
      const label = brick.getData('label');
      const shapeVisual = brick.getData('shapeVisual');
      const brickVisual = brick.getData('brickVisual');
      const specialVisual = brick.getData('specialVisual');
      const bossVisual = brick.getData('bossVisual');
      const bossAura = brick.getData('bossAura');
      const enemyVisual = brick.getData('enemyVisual');
      const enemyAura = brick.getData('enemyAura');
      if (shine) shine.destroy();
      if (label) label.destroy();
      if (shapeVisual) shapeVisual.destroy();
      if (brickVisual) brickVisual.destroy();
      if (specialVisual) specialVisual.destroy();
      if (bossVisual) bossVisual.destroy();
      if (bossAura) bossAura.destroy();
      if (enemyVisual) enemyVisual.destroy();
      if (enemyAura) enemyAura.destroy();
      if (animate) {
        const shape = brick.getData('shape');
        let ghost;
        if (shape === 'circle') {
          ghost = this.add.circle(brick.x, brick.y, brick.width / 2, brick.getData('baseColor'), .9).setStrokeStyle(3, 0xffffff).setDepth(50);
        } else if (shape === 'triangle') {
          ghost = this.add.graphics().setPosition(brick.x, brick.y).setDepth(50);
          ghost.fillStyle(brick.getData('baseColor'), .9);
          ghost.lineStyle(3, 0xffffff, 1);
          ghost.fillTriangle(0, -brick.height / 2, -brick.width / 2, brick.height / 2, brick.width / 2, brick.height / 2);
          ghost.strokeTriangle(0, -brick.height / 2, -brick.width / 2, brick.height / 2, brick.width / 2, brick.height / 2);
        } else {
          ghost = this.add.rectangle(brick.x, brick.y, brick.width, brick.height, brick.getData('baseColor'), .9).setStrokeStyle(3, 0xffffff).setDepth(50);
        }
        this.tweens.add({
          targets: ghost,
          alpha: 0,
          scaleX: 1.35,
          scaleY: .25,
          angle: Phaser.Math.Between(-16, 16),
          duration: 240,
          ease: 'Cubic.easeOut',
          onComplete: () => ghost.destroy()
        });
      }
      brick.destroy();
    }

    explodeAt(x, y, damageScale = 1) {
      const ring = this.add.circle(x, y, 18, 0xffe05c, .75).setStrokeStyle(6, 0xffffff).setDepth(65);
      this.tweens.add({
        targets: ring,
        radius: 96,
        alpha: 0,
        duration: 280,
        onComplete: () => ring.destroy()
      });
      this.cameras.main.flash(90, 255, 190, 70, false);
      this.cameras.main.shake(150, .009);
      this.sparkEmitter.emitParticleAt(x, y, 28);
      const nearby = this.bricks.getChildren().filter((other) => (
        other.active &&
        !other.getData('enemy') &&
        Phaser.Math.Distance.Between(x, y, other.x, other.y) < 108
      ));
      nearby.forEach((other) => this.damageBrick(other, Math.max(1, Math.ceil(run.power * .65 * damageScale)), true));
    }

    showHitEffect(x, y, text, critical) {
      const pop = this.add.text(x, y, text, {
        fontFamily: '"Arial Black", "Yu Gothic UI", sans-serif',
        fontSize: critical ? '39px' : '29px',
        fontStyle: 'bold',
        color: critical ? '#ffe05c' : '#ffffff',
        stroke: critical ? '#a72c52' : '#145aa0',
        strokeThickness: critical ? 9 : 7
      }).setOrigin(.5).setDepth(90);
      pop.setShadow(0, 5, '#020817', 4, true, true);
      this.tweens.add({
        targets: pop,
        y: y - 54,
        scale: critical ? 1.2 : 1,
        alpha: 0,
        duration: critical ? 620 : 430,
        ease: 'Cubic.easeOut',
        onComplete: () => pop.destroy()
      });
      if (run.combo > 0 && run.combo % 10 === 0) this.showComboBurst();
    }

    showComboBurst() {
      const text = this.add.text(WIDTH / 2, 480, `${run.combo} COMBO!`, {
        fontFamily: '"Arial Black", sans-serif',
        fontSize: '52px',
        color: '#ffe05c',
        stroke: '#db2d74',
        strokeThickness: 10
      }).setOrigin(.5).setDepth(100).setScale(.5);
      this.tweens.add({
        targets: text,
        scale: 1.12,
        yoyo: true,
        hold: 150,
        alpha: { from: 1, to: 0 },
        duration: 320,
        onComplete: () => text.destroy()
      });
      this.cameras.main.flash(85, 60, 200, 255, false);
    }

    clearRound() {
      if (this.roundClearing) return;
      this.roundClearing = true;
      this.clearEnemyShots();
      const clearedBoss = this.inBoss;
      run.score += clearedBoss ? 6500 * run.round : 1500 * run.round;
      updateHud();
      if (clearedBoss) {
        hideBossHud();
        this.cameras.main.flash(260, 255, 225, 90, false);
        this.cameras.main.shake(420, .012);
        ui.statusText.textContent = 'INVADER DESTROYED!';
      }
      this.time.delayedCall(clearedBoss ? 900 : 560, () => {
        if (clearedBoss) {
          if (this.bossRound === TOTAL_ROUNDS) finishRun(true);
          else showUpgradeChoice(this, {
            count: 2,
            label: 'BOSS CLEAR　連続強化',
            onComplete: () => {
              run.round += 1;
              this.startRound();
            }
          });
        } else if (run.round === 3 || run.round === 6) {
          showUpgradeChoice(this, {
            count: 1,
            label: `ROUND ${run.round} CLEAR　ボス前強化`,
            onComplete: () => this.startBossBattle(run.round)
          });
        } else {
          showUpgradeChoice(this, {
            count: 1,
            label: `ROUND ${run.round} CLEAR　次は ROUND ${run.round + 1}`,
            onComplete: () => {
              run.round += 1;
              this.startRound();
            }
          });
        }
      });
    }

    loseBall(ball) {
      if (!ball.active) return;
      const remaining = this.balls.getChildren().filter((other) => other !== ball && other.active).length;
      const missX = Phaser.Math.Clamp(ball.x, 50, WIDTH - 50);
      this.destroyBall(ball);
      if (remaining > 0) return;

      const miss = this.add.text(missX, 900, 'MISS!', {
        fontFamily: '"Arial Black", sans-serif',
        fontSize: '34px',
        color: '#ff668f',
        stroke: '#ffffff',
        strokeThickness: 6
      }).setOrigin(.5).setDepth(100);
      this.tweens.add({ targets: miss, y: 845, alpha: 0, duration: 520, onComplete: () => miss.destroy() });

      if (run.shield > 0) {
        run.shield -= 1;
        ui.statusText.textContent = 'シールドで落下を防いだ';
        tone(420, .12, 'triangle', .04);
      } else {
        run.lives -= 1;
        run.combo = 0;
        tone(88, .3, 'sawtooth', .055);
      }

      updateHud();
      if (run.lives <= 0) {
        finishRun(false);
        return;
      }
      this.waitingLaunch = true;
      this.spawnLaunchBalls();
      ui.statusText.textContent = '自動で再発射します';
      this.time.delayedCall(680, () => {
        if (!run || this.roundClearing || !this.waitingLaunch || !ui.choiceBackdrop.hidden || !ui.playScreen.classList.contains('is-active')) return;
        this.launchBalls();
      });
    }

    guardBallBounds(ball) {
      const radius = ball.getData('smallUntil') && this.time.now < ball.getData('smallUntil') ? 8 : 13;
      const left = 15 + radius;
      const right = WIDTH - 15 - radius;
      const top = 15 + radius;
      const velocity = ball.body.velocity;
      let x = ball.x;
      let y = ball.y;
      let vx = velocity.x;
      let vy = velocity.y;
      let corrected = false;

      if (x < left) { x = left; vx = Math.abs(vx); corrected = true; }
      else if (x > right) { x = right; vx = -Math.abs(vx); corrected = true; }
      if (y < top) { y = top; vy = Math.abs(vy); corrected = true; }

      if (corrected) {
        ball.body.reset(x, y);
        ball.body.setVelocity(vx || 180, vy || 420);
        ball.setData('lastMotionAt', this.time.now);
        tone(180, .035, 'square', .014);
      }
    }

    recoverStalledBall(ball, targetSpeed) {
      const lastX = ball.getData('lastMotionX');
      const lastY = ball.getData('lastMotionY');
      const moved = Phaser.Math.Distance.Between(lastX, lastY, ball.x, ball.y);
      if (moved > 2) {
        ball.setData('lastMotionX', ball.x);
        ball.setData('lastMotionY', ball.y);
        ball.setData('lastMotionAt', this.time.now);
        return;
      }
      if (this.time.now - (ball.getData('lastMotionAt') || 0) < 520) return;
      const direction = ball.x < WIDTH / 2 ? 1 : -1;
      ball.body.setVelocity(direction * targetSpeed * .72, -targetSpeed * .7);
      ball.y = Phaser.Math.Clamp(ball.y - 10, 40, 900);
      ball.setData('lastMotionX', ball.x);
      ball.setData('lastMotionY', ball.y);
      ball.setData('lastMotionAt', this.time.now);
      ui.statusText.textContent = 'ボールを再加速しました';
    }

    resolvePaddleTunneling(ball, previousX, previousY) {
      if (!ball?.active || !ball.body || ball.body.velocity.y <= 0) return false;
      const radius = ball.getData('smallUntil') && this.time.now < ball.getData('smallUntil') ? 8 : 13;
      const paddleTop = this.paddle.y - this.paddle.displayHeight / 2;
      const contactY = paddleTop - radius;
      const travelY = ball.y - previousY;
      if (travelY <= 0 || previousY > contactY || ball.y < contactY) return false;
      const progress = Phaser.Math.Clamp((contactY - previousY) / travelY, 0, 1);
      const contactX = Phaser.Math.Linear(previousX, ball.x, progress);
      const paddleHalf = this.paddle.displayWidth / 2;
      if (contactX + radius < this.paddle.x - paddleHalf || contactX - radius > this.paddle.x + paddleHalf) return false;
      ball.body.reset(contactX, contactY);
      this.onPaddleHit(this.paddle, ball);
      return true;
    }

    syncBrickVisuals(brick) {
      const label = brick.getData('label');
      const shapeVisual = brick.getData('shapeVisual');
      const brickVisual = brick.getData('brickVisual');
      const specialVisual = brick.getData('specialVisual');
      const bossVisual = brick.getData('bossVisual');
      const bossAura = brick.getData('bossAura');
      const enemyVisual = brick.getData('enemyVisual');
      const enemyAura = brick.getData('enemyAura');
      if (label) {
        const labelOffset = brick.getData('enemy') ? 38 : (brick.getData('typeKey') === 'split' ? 10 : 0);
        label.setPosition(brick.x, brick.y + labelOffset);
      }
      if (shapeVisual) shapeVisual.setPosition(brick.x, brick.y);
      if (brickVisual) brickVisual.setPosition(brick.x, brick.y);
      if (specialVisual) specialVisual.setPosition(brick.x, brick.y - 5);
      if (bossVisual) bossVisual.setPosition(brick.x, brick.y);
      if (bossAura) bossAura.setPosition(brick.x, brick.y);
      if (enemyVisual) enemyVisual.setPosition(brick.x, brick.y);
      if (enemyAura) enemyAura.setPosition(brick.x, brick.y);
      if (brick.body) brick.body.updateFromGameObject();
    }

    update(_, delta) {
      if (!run || !ui.playScreen.classList.contains('is-active')) return;
      const dt = Math.min(delta / 1000, .05);
      const keyMove = (this.cursors.left.isDown || this.keyA.isDown ? -1 : 0) + (this.cursors.right.isDown || this.keyD.isDown ? 1 : 0);
      if (keyMove) this.pointerX += keyMove * 590 * dt;
      const half = this.paddle.displayWidth / 2;
      this.pointerX = Phaser.Math.Clamp(this.pointerX, 18 + half, WIDTH - 18 - half);
      this.paddle.x = Phaser.Math.Linear(this.paddle.x, this.pointerX, Math.min(1, dt * 18));
      this.paddle.body.updateFromGameObject();
      this.syncPaddleVisual();

      if (this.paddleBoostUntil && this.time.now >= this.paddleBoostUntil) {
        this.paddleBoostUntil = 0;
        this.resizePaddle();
      }

      if (this.paddleShrinkUntil && this.time.now >= this.paddleShrinkUntil) {
        this.paddleShrinkUntil = 0;
        this.paddleDamageScale = 1;
        this.resizePaddle();
        ui.statusText.textContent = 'パドルサイズが元に戻った';
      }

      this.bricks.getChildren().forEach((brick) => {
        if (!brick.active) return;
        if (brick.getData('moving')) {
          const phase = brick.getData('phase') || 0;
          const speed = brick.getData('moveSpeed') || 1;
          brick.x = brick.getData('originX') + Math.sin(this.time.now * .001 * speed + phase) * brick.getData('moveRange');
          if (brick.getData('boss')) brick.y = brick.getData('originY') + Math.sin(this.time.now * .0017) * 12;
          this.syncBrickVisuals(brick);
          const bossAura = brick.getData('bossAura');
          const enemyAura = brick.getData('enemyAura');
          if (bossAura) bossAura.setScale(1 + Math.sin(this.time.now * .006) * .045);
          if (enemyAura) enemyAura.setScale(1 + Math.sin(this.time.now * .007 + (brick.getData('phase') || 0)) * .07);
        }
        if (
          brick.getData('shooter') &&
          !this.waitingLaunch &&
          ui.choiceBackdrop.hidden &&
          this.time.now >= (brick.getData('nextShotAt') || 0)
        ) {
          this.fireEnemyShot(brick);
          brick.setData('nextShotAt', this.time.now + (brick.getData('shotInterval') || 2200));
        }
      });

      const balls = this.balls.getChildren();
      balls.forEach((ball, index) => {
        if (!ball.active) return;
        const aura = ball.getData('aura');
        const previousX = ball.getData('previousX') ?? ball.x;
        const previousY = ball.getData('previousY') ?? ball.y;
        if (ball.getData('stuck')) {
          ball.x = this.paddle.x + ball.getData('offset');
          ball.y = this.paddle.y - 28;
          ball.body.reset(ball.x, ball.y);
        } else {
          this.guardBallBounds(ball);
          this.resolvePaddleTunneling(ball, previousX, previousY);
          const boosted = this.time.now < (ball.getData('speedBoostUntil') || 0);
          const jammed = this.time.now < (ball.getData('jamUntil') || 0);
          const effectScale = boosted ? 1.5 : (jammed ? .72 : 1);
          const minSpeed = (535 + run.round * 24) * run.speedScale * effectScale;
          const maxSpeed = minSpeed * (boosted ? 1.14 : 1.22);
          const velocity = ball.body.velocity;
          let speed = velocity.length();
          if (speed < minSpeed) velocity.scale(minSpeed / Math.max(1, speed));
          speed = velocity.length();
          if (speed > maxSpeed) velocity.scale(maxSpeed / speed);
          if (Math.abs(velocity.x) < 90) velocity.x = (velocity.x < 0 ? -1 : 1) * 90;
          if (Math.abs(velocity.y) < 150) velocity.y = (velocity.y < 0 ? -1 : 1) * 150;
          this.recoverStalledBall(ball, minSpeed);
          if (ball.getData('smallUntil') && this.time.now >= ball.getData('smallUntil')) {
            ball.setData('smallUntil', 0);
            ball.setScale(1);
            ball.body.setCircle(13);
            if (aura) aura.setScale(1);
          }
          if (!Number.isFinite(ball.x) || !Number.isFinite(ball.y) || Math.abs(ball.x) > WIDTH * 3 || Math.abs(ball.y) > HEIGHT * 3) {
            this.loseBall(ball);
            return;
          }
          if ((this.game.loop.frame + index) % 2 === 0) this.trailEmitter.emitParticleAt(ball.x, ball.y, 1);
          if (ball.y > 958) this.loseBall(ball);
        }
        if (ball.active) {
          ball.setData('previousX', ball.x);
          ball.setData('previousY', ball.y);
        }
        if (aura && aura.active) {
          aura.setPosition(ball.x, ball.y);
          aura.setAlpha(this.time.now < (ball.getData('speedBoostUntil') || 0) ? .34 : .16);
          aura.setStrokeStyle(2, this.time.now < (ball.getData('pierceUntil') || 0) ? 0xb36cff : 0x9ff7ff, .6);
        }
      });

      this.enemyShots.getChildren().slice().forEach((shot) => {
        if (!shot.active) return;
        const aura = shot.getData('aura');
        if (aura && aura.active) {
          aura.setPosition(shot.x, shot.y);
          aura.setScale(1 + Math.sin(this.time.now * .014) * .14);
        }
        if (shot.y > HEIGHT + 40 || shot.x < -40 || shot.x > WIDTH + 40) this.destroyEnemyShot(shot);
      });

      if (run.combo > 0 && this.time.now / 1000 - this.lastHitAt > run.comboWindow) {
        run.combo = 0;
        updateHud();
      }
    }
  }

  function makeGame() {
    if (game) return;
    game = new Phaser.Game({
      type: Phaser.AUTO,
      parent: 'gameCanvas',
      width: WIDTH,
      height: HEIGHT,
      backgroundColor: '#06132d',
      transparent: false,
      render: {
        antialias: true,
        roundPixels: true,
        powerPreference: 'high-performance'
      },
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { x: 0, y: 0 },
          debug: false,
          fps: 120
        }
      },
      scene: [BrickRushScene],
      audio: { noAudio: true }
    });
  }

  function startRun() {
    ensureAudio();
    run = createRun();
    hideBossHud();
    ui.effectToast.hidden = true;
    ui.choiceBackdrop.hidden = true;
    ui.pauseBackdrop.hidden = true;
    ui.newRecordBadge.classList.remove('is-visible');
    showScreen(ui.playScreen);
    updateHud();
    if (!game) {
      makeGame();
    } else {
      const scene = game.scene.getScene('BrickRushScene');
      scene.scene.restart();
    }
    startBgm();
  }

  function finishRun(cleared) {
    if (!run) return;
    stopBgm();
    hideBossHud();
    ui.effectToast.hidden = true;
    if (activeScene) {
      activeScene.clearEnemyShots();
      activeScene.physics.pause();
    }
    const elapsed = (performance.now() - run.startedAt) / 1000;
    const clearBonus = cleared ? Math.max(0, Math.round(90000 - elapsed * 100)) : 0;
    run.score += clearBonus;
    const best = safeBest();
    const isRecord = run.score > best;
    if (isRecord) saveBest(run.score);

    ui.resultOverline.textContent = cleared ? 'RUSH COMPLETE' : 'BALLS LOST';
    ui.resultTitle.textContent = cleared ? '全ラウンド突破！' : 'ラッシュ終了';
    ui.finalScore.textContent = formatNumber(run.score);
    ui.resultRound.textContent = `${run.round} / ${TOTAL_ROUNDS}`;
    ui.resultCombo.textContent = formatNumber(run.maxCombo);
    ui.resultBricks.textContent = formatNumber(run.bricks);
    ui.resultTime.textContent = formatTime(elapsed);
    ui.newRecordBadge.classList.toggle('is-visible', isRecord);
    ui.titleBest.textContent = formatNumber(Math.max(best, run.score));
    showScreen(ui.resultScreen);
    if (cleared) {
      tone(392, .18, 'square', .045);
      tone(523, .22, 'triangle', .04, .1);
      tone(659, .28, 'triangle', .04, .2);
      tone(784, .35, 'sine', .035, .32);
    }
  }

  function pauseGame() {
    if (!activeScene || !run || !ui.playScreen.classList.contains('is-active') || !ui.choiceBackdrop.hidden) return;
    activeScene.physics.pause();
    activeScene.scene.pause();
    ui.pauseBackdrop.hidden = false;
    stopBgm();
  }

  function resumeGame() {
    if (!activeScene) return;
    ui.pauseBackdrop.hidden = true;
    activeScene.scene.resume();
    activeScene.physics.resume();
    startBgm();
  }

  function goHome() {
    stopBgm();
    hideBossHud();
    ui.effectToast.hidden = true;
    ui.choiceBackdrop.hidden = true;
    ui.pauseBackdrop.hidden = true;
    if (activeScene) {
      activeScene.physics.pause();
      activeScene.scene.pause();
    }
    run = null;
    showScreen(ui.titleScreen);
    ui.titleBest.textContent = formatNumber(safeBest());
  }

  ui.startButton.addEventListener('click', startRun);
  ui.retryButton.addEventListener('click', startRun);
  ui.homeButton.addEventListener('click', goHome);
  ui.pauseButton.addEventListener('click', pauseGame);
  ui.resumeButton.addEventListener('click', resumeGame);
  ui.quitButton.addEventListener('click', goHome);
  ui.soundButton.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    updateSoundButton();
    if (soundEnabled) {
      ensureAudio();
      if (run && ui.playScreen.classList.contains('is-active')) startBgm();
      tone(440, .1, 'square', .035);
    } else {
      stopBgm();
    }
  });
  ui.rerollButton.addEventListener('click', () => {
    if (!activeScene || activeScene.choiceRerollUsed) return;
    activeScene.choiceRerollUsed = true;
    ui.rerollButton.disabled = true;
    ui.rerollButton.textContent = '候補更新は使用済み';
    renderChoices(activeScene);
    tone(260, .09, 'square', .035);
    tone(390, .12, 'triangle', .025, .05);
  });

  window.addEventListener('keydown', (event) => {
    if (!ui.choiceBackdrop.hidden && ['1', '2', '3'].includes(event.key)) {
      ui.choiceGrid.querySelector(`[data-choice="${event.key}"]`)?.click();
      return;
    }
    if (event.key === 'Escape' || event.key.toLowerCase() === 'p') {
      if (!ui.pauseBackdrop.hidden) resumeGame();
      else pauseGame();
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden && run && ui.playScreen.classList.contains('is-active') && ui.choiceBackdrop.hidden) pauseGame();
  });

  ui.titleBest.textContent = formatNumber(safeBest());
  updateSoundButton();
  window.__brickRushTest = {
    start: startRun,
    getRun: () => run,
    getScene: () => activeScene,
    finish: finishRun
  };
})();
