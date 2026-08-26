(() => {
  "use strict";

  const TOTAL_TIME = 300;
  const COMBO_WINDOW = 4;
  const STORAGE_KEY = "humei-shanghai-rush-scores-v1";
  const TYPE_COUNT = 34;
  const NUMBER_KANJI = ["一", "二", "三", "四", "五", "六", "七", "八", "九"];
  const WIND = ["東", "南", "西", "北"];
  const TYPE_NAMES = [
    ...NUMBER_KANJI.map(v => `${v}萬`),
    ...NUMBER_KANJI.map(v => `${v}索`),
    ...NUMBER_KANJI.map(v => `${v}筒`),
    ...WIND,
    "白", "發", "中"
  ];
  const TILE_IMAGE_PATHS = Array.from({ length: TYPE_COUNT }, (_, type) => `assets/tiles/tile-${String(type).padStart(2, "0")}.png`);

  const $ = id => document.getElementById(id);
  const ui = {
    title: $("titleScreen"), play: $("playScreen"), result: $("resultScreen"), board: $("tileBoard"), boardWrap: $("boardWrap"), effects: $("effectLayer"),
    score: $("scoreDisplay"), combo: $("comboDisplay"), multiplier: $("multiplierDisplay"), time: $("timeDisplay"), meter: $("comboMeterFill"), remaining: $("remainingDisplay"), status: $("statusMessage"), pairs: $("pairDisplay"), comboCountdown: $("comboCountdown"), shuffleCount: $("shuffleCount"),
    start: $("startButton"), retry: $("retryButton"), pause: $("pauseButton"), pauseModal: $("pauseModal"), resume: $("resumeButton"), quit: $("quitButton"), sound: $("soundButton"), hint: $("hintButton"), shuffle: $("shuffleButton"), fever: $("feverBanner"), shell: document.querySelector(".game-shell"),
    rankingModal: $("rankingModal"), rankingList: $("rankingList"), titleHigh: $("titleHighScore"), newRecord: $("newRecordBadge"),
    resultKicker: $("resultKicker"), resultTitle: $("resultTitle"), resultScore: $("resultScore"), resultTiles: $("resultTiles"), resultCombo: $("resultCombo"), resultTime: $("resultTime"), resultBonus: $("resultBonus")
  };

  let state = null;
  let rafId = 0;
  let lastFrame = 0;
  let audio = null;
  let titleCanvasesDrawn = false;

  const shuffleArray = array => {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };

  function buildPositions() {
    const positions = [];
    const addRect = (z, x0, y0, cols, rows) => {
      for (let y = y0; y < y0 + rows; y++) {
        for (let x = x0; x < x0 + cols; x++) positions.push({ id: `p-${z}-${x}-${y}`, x, y, z });
      }
    };
    addRect(0, 0, 0, 8, 10);
    addRect(1, 1, 1, 6, 8);
    addRect(2, 2, 3, 4, 3);
    addRect(3, 3, 4, 2, 2);
    return positions;
  }

  function isFreePosition(position, activeIds, positionsById) {
    if (!activeIds.has(position.id)) return false;
    for (const otherId of activeIds) {
      const other = positionsById.get(otherId);
      if (other.z > position.z && other.x === position.x && other.y === position.y) return false;
    }
    const leftBlocked = [...activeIds].some(id => {
      const other = positionsById.get(id);
      return other.z === position.z && other.y === position.y && other.x === position.x - 1;
    });
    const rightBlocked = [...activeIds].some(id => {
      const other = positionsById.get(id);
      return other.z === position.z && other.y === position.y && other.x === position.x + 1;
    });
    return !leftBlocked || !rightBlocked;
  }

  function buildRemovalPairs(positions, activeIds = new Set(positions.map(p => p.id))) {
    const byId = new Map(positions.map(p => [p.id, p]));
    const active = new Set(activeIds);
    const pairs = [];
    while (active.size >= 2) {
      const free = positions.filter(p => isFreePosition(p, active, byId));
      if (free.length < 2) return null;
      const weighted = shuffleArray(free).sort((a, b) => b.z - a.z + (Math.random() - .5) * 1.5);
      const first = weighted[0];
      const opposite = weighted.filter(p => p.id !== first.id).sort((a, b) => Math.abs((b.x + first.x) - 7) - Math.abs((a.x + first.x) - 7))[0];
      pairs.push([first.id, opposite.id]);
      active.delete(first.id);
      active.delete(opposite.id);
    }
    return pairs;
  }

  function createBoard() {
    const positions = buildPositions();
    const removalPairs = buildRemovalPairs(positions);
    if (!removalPairs) throw new Error("Solvable board generation failed");
    const pairTypes = shuffleArray(Array.from({ length: removalPairs.length }, (_, i) => i % TYPE_COUNT));
    const typeById = new Map();
    removalPairs.forEach((pair, index) => pair.forEach(id => typeById.set(id, pairTypes[index])));
    return positions.map(position => ({ ...position, type: typeById.get(position.id), active: true, element: null }));
  }

  function freeTiles() {
    const activeIds = new Set(state.tiles.filter(t => t.active).map(t => t.id));
    const byId = new Map(state.tiles.map(t => [t.id, t]));
    return state.tiles.filter(tile => tile.active && isFreePosition(tile, activeIds, byId));
  }

  function matchingPairs() {
    const free = freeTiles();
    const groups = new Map();
    free.forEach(tile => {
      if (!groups.has(tile.type)) groups.set(tile.type, []);
      groups.get(tile.type).push(tile);
    });
    const pairs = [];
    groups.forEach(group => {
      if (group.length >= 2) pairs.push([group[0], group[1]]);
    });
    return pairs;
  }

  function startGame() {
    ensureAudio();
    showScreen(ui.play);
    state = {
      tiles: createBoard(), selected: null, score: 0, combo: 0, maxCombo: 0, comboLeft: 0, timeLeft: TOTAL_TIME, elapsed: 0,
      running: true, paused: false, shuffles: 2, removed: 0, hints: 0, reshuffles: 0, startedAt: performance.now()
    };
    ui.board.innerHTML = "";
    ui.effects.innerHTML = "";
    state.tiles.forEach(createTileElement);
    layoutBoard();
    updateAvailability();
    updateHud();
    ui.status.textContent = "同じ牌を2枚選択";
    ui.pause.disabled = false;
    playSfx("start");
    startMusic();
    lastFrame = performance.now();
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(gameLoop);
  }

  function createTileElement(tile) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "mahjong-tile";
    button.dataset.id = tile.id;
    button.setAttribute("aria-label", TYPE_NAMES[tile.type]);
    button.innerHTML = `<span class="tile-face"><img src="${TILE_IMAGE_PATHS[tile.type]}" alt="" width="180" height="230" draggable="false" aria-hidden="true"></span>`;
    button.addEventListener("click", () => selectTile(tile));
    tile.element = button;
    ui.board.appendChild(button);
  }

  function layoutBoard() {
    if (!state || !state.tiles.length) return;
    const width = ui.boardWrap.clientWidth;
    const availableHeight = Math.max(470, window.innerHeight - 190);
    const tileW = Math.max(35, Math.min(54, (width - 22) / 8.28, availableHeight / 13.55));
    const tileH = tileW * 1.28;
    const gapX = Math.max(1, tileW * .035);
    const gapY = Math.max(1, tileH * .022);
    const fullW = 8 * tileW + 7 * gapX;
    const fullH = 10 * tileH + 9 * gapY;
    const startX = (width - fullW) / 2;
    const startY = 18;
    const boardHeight = Math.ceil(fullH + 35);
    ui.boardWrap.style.height = `${boardHeight}px`;
    ui.board.style.height = `${boardHeight}px`;
    state.tiles.forEach(tile => {
      const liftX = tile.z * -1.5;
      const liftY = tile.z * -4.5;
      const el = tile.element;
      el.style.width = `${tileW}px`;
      el.style.height = `${tileH}px`;
      el.style.left = `${startX + tile.x * (tileW + gapX)}px`;
      el.style.top = `${startY + tile.y * (tileH + gapY)}px`;
      el.style.setProperty("--lift-x", liftX);
      el.style.setProperty("--lift-y", liftY);
      el.style.zIndex = String(100 + tile.z * 300 + tile.y * 12 + tile.x);
    });
  }

  function updateAvailability() {
    if (!state) return;
    const freeIds = new Set(freeTiles().map(t => t.id));
    state.tiles.forEach(tile => {
      if (!tile.active) return;
      const free = freeIds.has(tile.id);
      tile.element.classList.toggle("free", free);
      tile.element.classList.toggle("blocked", !free);
      tile.element.setAttribute("aria-disabled", String(!free));
    });
    const pairs = matchingPairs();
    ui.pairs.textContent = `取れる組 ${pairs.length}`;
    if (!pairs.length && state.tiles.some(t => t.active)) setTimeout(autoReshuffle, 430);
  }

  function selectTile(tile) {
    if (!state?.running || state.paused || !tile.active || tile.element.classList.contains("removing")) return;
    if (!tile.element.classList.contains("free")) {
      playSfx("blocked");
      tile.element.classList.add("bad");
      setTimeout(() => tile.element?.classList.remove("bad"), 450);
      ui.status.textContent = "上か両側がふさがっています";
      return;
    }
    if (!state.selected) {
      state.selected = tile;
      tile.element.classList.add("selected");
      ui.status.textContent = `${TYPE_NAMES[tile.type]} を選択中`;
      playSfx("select");
      return;
    }
    if (state.selected.id === tile.id) {
      tile.element.classList.remove("selected");
      state.selected = null;
      ui.status.textContent = "選択を解除";
      return;
    }
    const first = state.selected;
    first.element.classList.remove("selected");
    state.selected = null;
    if (first.type === tile.type) removePair(first, tile);
    else {
      state.combo = 0;
      state.comboLeft = 0;
      state.score = Math.max(0, state.score - 40);
      first.element.classList.add("bad");
      tile.element.classList.add("bad");
      setTimeout(() => { first.element?.classList.remove("bad"); tile.element?.classList.remove("bad"); }, 480);
      ui.status.textContent = "違う牌です　-40";
      playSfx("miss");
      updateHud();
    }
  }

  function removePair(first, second) {
    const chained = state.comboLeft > 0 && state.combo > 0;
    state.combo = chained ? state.combo + 1 : 1;
    state.maxCombo = Math.max(state.maxCombo, state.combo);
    state.comboLeft = COMBO_WINDOW;
    const multiplier = comboMultiplier(state.combo);
    const points = Math.round(100 * multiplier + Math.min(400, state.combo * 12));
    state.score += points;
    state.removed += 2;
    first.active = false;
    second.active = false;
    first.element.classList.remove("free", "blocked", "selected", "hint", "bad");
    second.element.classList.remove("free", "blocked", "selected", "hint", "bad");
    first.element.setAttribute("aria-hidden", "true");
    second.element.setAttribute("aria-hidden", "true");
    first.element.classList.add("removing");
    second.element.classList.add("removing");
    const firstRect = first.element.getBoundingClientRect();
    const secondRect = second.element.getBoundingClientRect();
    const boardRect = ui.boardWrap.getBoundingClientRect();
    showScorePop(((firstRect.left + secondRect.right) / 2) - boardRect.left, ((firstRect.top + secondRect.top) / 2) - boardRect.top, points);
    ui.status.textContent = `${TYPE_NAMES[first.type]}　+${points.toLocaleString()}`;
    playSfx(state.combo % 10 === 0 ? "milestone" : "pair", state.combo);
    if (state.combo > 0 && state.combo % 10 === 0) {
      const chainBonus = state.combo * 100;
      state.score += chainBonus;
      showFever();
    }
    setTimeout(() => {
      first.element.style.display = "none";
      second.element.style.display = "none";
      updateAvailability();
      if (state.removed >= state.tiles.length) finishGame(true);
    }, 420);
    updateHud();
  }

  function comboMultiplier(combo) { return Math.min(5, 1 + Math.max(0, combo - 1) * .2); }

  function showScorePop(x, y, points) {
    const pop = document.createElement("span");
    pop.className = "score-pop";
    pop.style.setProperty("--px", `${x}px`);
    pop.style.setProperty("--py", `${y}px`);
    pop.textContent = `+${points.toLocaleString()}`;
    ui.effects.appendChild(pop);
    pop.addEventListener("animationend", () => pop.remove());
  }

  function showFever() {
    ui.fever.classList.remove("show");
    ui.shell.classList.remove("fever");
    void ui.fever.offsetWidth;
    ui.fever.classList.add("show");
    ui.shell.classList.add("fever");
    setTimeout(() => ui.shell.classList.remove("fever"), 600);
  }

  function useHint() {
    if (!state?.running || state.paused) return;
    const pair = matchingPairs()[0];
    if (!pair) return;
    state.score = Math.max(0, state.score - 300);
    state.combo = 0;
    state.comboLeft = 0;
    state.hints++;
    pair.forEach(tile => {
      tile.element.classList.add("hint");
      setTimeout(() => tile.element?.classList.remove("hint"), 1900);
    });
    ui.status.textContent = "光っている2枚が取れます　-300";
    playSfx("hint");
    updateHud();
  }

  function useShuffle() {
    if (!state?.running || state.paused || state.shuffles <= 0) return;
    state.shuffles--;
    state.score = Math.max(0, state.score - 500);
    state.combo = 0;
    state.comboLeft = 0;
    reshuffleRemaining();
    ui.status.textContent = "残りの牌を再配置しました　-500";
    playSfx("shuffle");
    updateHud();
  }

  function autoReshuffle() {
    if (!state?.running || matchingPairs().length || !state.tiles.some(t => t.active)) return;
    state.score = Math.max(0, state.score - 1000);
    state.combo = 0;
    state.comboLeft = 0;
    state.reshuffles++;
    reshuffleRemaining();
    ui.status.textContent = "手詰まりのため自動再配置　-1,000";
    playSfx("shuffle");
    updateHud();
  }

  function reshuffleRemaining() {
    const active = state.tiles.filter(t => t.active);
    const activeIds = new Set(active.map(t => t.id));
    const pairs = buildRemovalPairs(state.tiles, activeIds);
    if (!pairs) return;
    const pairTypes = [];
    const counts = new Map();
    active.forEach(tile => counts.set(tile.type, (counts.get(tile.type) || 0) + 1));
    counts.forEach((count, type) => {
      for (let i = 0; i < count / 2; i++) pairTypes.push(type);
    });
    const shuffledTypes = shuffleArray(pairTypes);
    const byId = new Map(state.tiles.map(t => [t.id, t]));
    pairs.forEach((pair, index) => pair.forEach(id => {
      const tile = byId.get(id);
      tile.type = shuffledTypes[index];
      tile.element.setAttribute("aria-label", TYPE_NAMES[tile.type]);
      tile.element.querySelector("img").src = TILE_IMAGE_PATHS[tile.type];
    }));
    updateAvailability();
  }

  function gameLoop(now) {
    if (!state?.running) return;
    const delta = Math.min(.05, (now - lastFrame) / 1000);
    lastFrame = now;
    if (!state.paused) {
      state.timeLeft = Math.max(0, state.timeLeft - delta);
      state.elapsed += delta;
      if (state.comboLeft > 0) {
        state.comboLeft = Math.max(0, state.comboLeft - delta);
        if (state.comboLeft === 0) state.combo = 0;
      }
      updateHud();
      if (state.timeLeft <= 0) {
        finishGame(false);
        return;
      }
    }
    rafId = requestAnimationFrame(gameLoop);
  }

  function updateHud() {
    if (!state) return;
    ui.score.textContent = Math.round(state.score).toLocaleString();
    ui.combo.textContent = String(state.combo);
    ui.multiplier.textContent = comboMultiplier(state.combo || 1).toFixed(1);
    ui.time.textContent = formatTime(state.timeLeft, true);
    ui.time.classList.toggle("warning", state.timeLeft <= 30);
    ui.remaining.textContent = `残り ${state.tiles.length - state.removed}枚`;
    ui.comboCountdown.textContent = state.combo > 0 ? state.comboLeft.toFixed(1) : "--";
    ui.meter.style.width = `${state.combo > 0 ? (state.comboLeft / COMBO_WINDOW) * 100 : 0}%`;
    ui.shuffleCount.textContent = String(state.shuffles);
    ui.shuffle.disabled = state.shuffles <= 0;
  }

  function finishGame(cleared) {
    if (!state?.running) return;
    state.running = false;
    cancelAnimationFrame(rafId);
    stopMusic();
    let timeBonus = 0;
    if (cleared) {
      timeBonus = Math.round(state.timeLeft * 45);
      state.score += timeBonus + 5000;
      playSfx("clear");
    } else playSfx("end");
    const finalScore = Math.round(state.score);
    const isRecord = saveScore({ score: finalScore, cleared, combo: state.maxCombo, time: cleared ? state.elapsed : TOTAL_TIME, date: Date.now() });
    ui.resultKicker.textContent = cleared ? "ALL TILES CLEARED" : "TIME UP";
    ui.resultTitle.textContent = cleared ? "完全制覇！" : "挑戦終了";
    ui.resultScore.textContent = finalScore.toLocaleString();
    ui.resultTiles.textContent = `${state.removed} / ${state.tiles.length}`;
    ui.resultCombo.textContent = String(state.maxCombo);
    ui.resultTime.textContent = cleared ? formatTime(state.elapsed, false) : "--:--";
    ui.resultBonus.textContent = timeBonus ? `+${(timeBonus + 5000).toLocaleString()}` : "0";
    ui.newRecord.classList.toggle("show", isRecord);
    updateTitleHighScore();
    setTimeout(() => showScreen(ui.result), 520);
  }

  function pauseGame() {
    if (!state?.running || state.paused) return;
    state.paused = true;
    stopMusic();
    ui.pauseModal.classList.add("open");
    ui.pauseModal.setAttribute("aria-hidden", "false");
  }

  function resumeGame() {
    if (!state?.running) return;
    state.paused = false;
    lastFrame = performance.now();
    ui.pauseModal.classList.remove("open");
    ui.pauseModal.setAttribute("aria-hidden", "true");
    startMusic();
  }

  function quitGame() {
    if (state) state.running = false;
    cancelAnimationFrame(rafId);
    stopMusic();
    ui.pauseModal.classList.remove("open");
    ui.pauseModal.setAttribute("aria-hidden", "true");
    showScreen(ui.title);
  }

  function showScreen(screen) {
    [ui.title, ui.play, ui.result].forEach(el => el.classList.toggle("active", el === screen));
    window.scrollTo(0, 0);
  }

  function formatTime(seconds, countdown) {
    const value = countdown ? Math.ceil(seconds) : Math.floor(seconds);
    const minutes = Math.floor(value / 60);
    const secs = value % 60;
    return `${minutes}:${String(secs).padStart(2, "0")}`;
  }

  function getScores() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); }
    catch { return []; }
  }

  function saveScore(record) {
    const scores = getScores();
    const previousBest = scores[0]?.score || 0;
    scores.push(record);
    scores.sort((a, b) => b.score - a.score || a.time - b.time);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scores.slice(0, 5)));
    return record.score > previousBest;
  }

  function updateTitleHighScore() { ui.titleHigh.textContent = (getScores()[0]?.score || 0).toLocaleString(); }

  function showRanking() {
    const scores = getScores();
    ui.rankingList.innerHTML = scores.length ? scores.map((entry, index) => `<li><span>${index + 1}</span><strong>${entry.score.toLocaleString()}</strong><small>${entry.cleared ? `${formatTime(entry.time, false)} CLEAR` : `${entry.combo} COMBO`}</small></li>`).join("") : '<li class="empty-record">まだ記録がありません</li>';
    ui.rankingModal.classList.add("open");
    ui.rankingModal.setAttribute("aria-hidden", "false");
  }

  function closeRanking() {
    ui.rankingModal.classList.remove("open");
    ui.rankingModal.setAttribute("aria-hidden", "true");
  }

  function drawTileFace(canvas, type) {
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    if (type < 9) drawCharacter(ctx, type, w, h);
    else if (type < 18) drawBamboo(ctx, type - 9, w, h);
    else if (type < 27) drawDots(ctx, type - 18, w, h);
    else if (type < 31) drawGlyph(ctx, WIND[type - 27], "#172c68", 100, w, h);
    else if (type === 31) drawWhiteDragon(ctx, w, h);
    else if (type === 32) drawGlyph(ctx, "發", "#08765d", 106, w, h);
    else if (type === 33) drawGlyph(ctx, "中", "#c82631", 112, w, h);
    else drawFlower(ctx, type === 34 ? "春" : "秋", type === 34 ? "#d83f64" : "#c87817", w, h);
  }

  function drawCharacter(ctx, index, w, h) {
    ctx.fillStyle = index === 4 ? "#08705b" : "#17265e";
    ctx.font = "900 94px 'Yu Mincho', 'Hiragino Mincho ProN', serif";
    ctx.fillText(NUMBER_KANJI[index], w / 2, 78);
    ctx.fillStyle = "#c62b35";
    ctx.font = "900 78px 'Yu Mincho', 'Hiragino Mincho ProN', serif";
    ctx.fillText("萬", w / 2, 170);
  }

  function drawBamboo(ctx, index, w, h) {
    if (index === 0) {
      drawBambooBird(ctx, w, h);
      return;
    }
    const patterns = [
      [],
      [[0,-.58],[0,.58]],
      [[0,-.72],[-.52,.45],[.52,.45]],
      [[-.5,-.52],[.5,-.52],[-.5,.52],[.5,.52]],
      [[-.58,-.58],[.58,-.58],[0,0],[-.58,.58],[.58,.58]],
      [[-.53,-.68],[.53,-.68],[-.53,0],[.53,0],[-.53,.68],[.53,.68]],
      [[-.56,-.72],[0,-.72],[.56,-.72],[-.38,.08],[.38,.08],[-.38,.72],[.38,.72]],
      [[-.5,-.78],[.5,-.78],[-.5,-.26],[.5,-.26],[-.5,.26],[.5,.26],[-.5,.78],[.5,.78]],
      [[-.58,-.72],[0,-.72],[.58,-.72],[-.58,0],[0,0],[.58,0],[-.58,.72],[0,.72],[.58,.72]]
    ][index];
    const coords = [];
    patterns.forEach(point => coords.push(point));
    const spreadX = index >= 8 ? 55 : 62;
    const spreadY = index >= 7 ? 62 : 70;
    coords.forEach(([gx, gy], i) => drawBambooStick(ctx, w / 2 + gx * spreadX, h / 2 + gy * spreadY, i, index));
  }

  function drawBambooBird(ctx, w, h) {
    ctx.save();
    ctx.translate(w / 2, h / 2 + 5);
    ctx.fillStyle = "#08745c";
    ctx.beginPath(); ctx.ellipse(0, 4, 33, 50, -.15, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#1c4f9b";
    ctx.beginPath(); ctx.ellipse(-10, 8, 17, 37, -.45, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#e1b637";
    ctx.beginPath(); ctx.moveTo(22,-28); ctx.lineTo(54,-17); ctx.lineTo(23,-8); ctx.closePath(); ctx.fill();
    ctx.fillStyle = "#c92c37";
    ctx.beginPath(); ctx.moveTo(-15,48); ctx.lineTo(-38,82); ctx.lineTo(-4,61); ctx.lineTo(13,84); ctx.lineTo(18,48); ctx.closePath(); ctx.fill();
    ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(11,-32,10,0,Math.PI*2); ctx.fill();
    ctx.fillStyle = "#13252c"; ctx.beginPath(); ctx.arc(14,-32,4,0,Math.PI*2); ctx.fill();
    ctx.restore();
  }

  function drawBambooStick(ctx, x, y, index, countIndex) {
    ctx.save(); ctx.translate(x, y);
    const scale = countIndex >= 7 ? .82 : countIndex >= 5 ? .9 : 1;
    ctx.scale(scale, scale);
    ctx.fillStyle = index % 3 === 0 ? "#1f4f9b" : "#08745c";
    ctx.strokeStyle = "rgba(0,0,0,.18)"; ctx.lineWidth = 3;
    [-22, 0, 22].forEach(offset => {
      ctx.beginPath(); ctx.roundRect(-10, offset - 11, 20, 22, 7); ctx.fill(); ctx.stroke();
    });
    ctx.strokeStyle = "#dbb63c"; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(-11,-11); ctx.lineTo(11,-11); ctx.moveTo(-11,11); ctx.lineTo(11,11); ctx.stroke();
    ctx.restore();
  }

  function drawDots(ctx, index, w, h) {
    const coordsByCount = [
      [[0,0]], [[-.55,-.55],[.55,.55]], [[-.55,-.55],[0,0],[.55,.55]],
      [[-.55,-.55],[.55,-.55],[-.55,.55],[.55,.55]],
      [[-.6,-.6],[.6,-.6],[0,0],[-.6,.6],[.6,.6]],
      [[-.6,-.7],[.6,-.7],[-.6,0],[.6,0],[-.6,.7],[.6,.7]],
      [[-.6,-.72],[0,-.72],[.6,-.72],[-.6,0],[.6,0],[-.6,.72],[.6,.72]],
      [[-.58,-.72],[0,-.72],[.58,-.72],[-.58,-.08],[.58,-.08],[-.58,.62],[0,.62],[.58,.62]],
      [[-.62,-.7],[0,-.7],[.62,-.7],[-.62,0],[0,0],[.62,0],[-.62,.7],[0,.7],[.62,.7]]
    ];
    const coords = coordsByCount[index];
    const radius = index === 0 ? 43 : index <= 3 ? 23 : 16;
    const spreadX = index >= 7 ? 59 : 66;
    const spreadY = index >= 7 ? 66 : 73;
    coords.forEach(([gx, gy], i) => drawDot(ctx, w / 2 + gx * spreadX, h / 2 + gy * spreadY, radius, i === 0 ? "#c52b35" : i % 2 ? "#155499" : "#08745c"));
  }

  function drawDot(ctx, x, y, radius, color) {
    const grad = ctx.createRadialGradient(x - radius * .35, y - radius * .35, 2, x, y, radius);
    grad.addColorStop(0, "#fff5a3"); grad.addColorStop(.18, color); grad.addColorStop(1, "#082f36");
    ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,.72)"; ctx.lineWidth = 3; ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,.65)"; ctx.beginPath(); ctx.arc(x - radius*.3, y-radius*.34, radius*.16, 0, Math.PI*2); ctx.fill();
  }

  function drawGlyph(ctx, glyph, color, size, w, h) {
    ctx.fillStyle = color;
    ctx.font = `900 ${Math.max(size, 126)}px 'Yu Mincho', 'Hiragino Mincho ProN', serif`;
    ctx.fillText(glyph, w / 2, h / 2 + 7);
  }

  function drawWhiteDragon(ctx, w, h) {
    ctx.strokeStyle = "#1f5c9a"; ctx.lineWidth = 11; ctx.strokeRect(29, 29, w - 58, h - 58);
    ctx.strokeStyle = "#08745c"; ctx.lineWidth = 5; ctx.strokeRect(43, 43, w - 86, h - 86);
  }

  function drawFlower(ctx, glyph, color, w, h) {
    ctx.save(); ctx.translate(w / 2, 92);
    for (let i = 0; i < 8; i++) {
      ctx.rotate(Math.PI / 4); ctx.fillStyle = i % 2 ? color : "#f0b53f";
      ctx.beginPath(); ctx.ellipse(0, -34, 15, 37, 0, 0, Math.PI * 2); ctx.fill();
    }
    ctx.fillStyle = "#fff2a5"; ctx.beginPath(); ctx.arc(0, 0, 17, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    ctx.fillStyle = color; ctx.font = "900 70px 'Yu Mincho', serif"; ctx.fillText(glyph, w / 2, 184);
  }

  function buildTitleTower() {
    if (titleCanvasesDrawn) return;
    const glyphs = ["中", "發", "東", "九", "萬", "●", "南", "八", "索", "白", "七", "筒", "北"];
    const classes = ["red", "green", "", "green", "red"];
    glyphs.forEach((glyph, index) => {
      const el = document.createElement("span");
      el.className = `demo-tile ${classes[index % classes.length]}`;
      const row = index < 5 ? 0 : index < 10 ? 1 : 2;
      const count = row === 0 ? 5 : row === 1 ? 5 : 3;
      const rowIndex = row === 0 ? index : row === 1 ? index - 5 : index - 10;
      el.style.left = `${50 + (rowIndex - (count - 1) / 2) * 16}%`;
      el.style.top = `${32 + row * 27}%`;
      el.style.setProperty("--r", `${(rowIndex - 2) * 1.2}deg`);
      el.style.zIndex = String(30 - row * 5 + rowIndex);
      el.textContent = glyph;
      $("titleTower").appendChild(el);
    });
    titleCanvasesDrawn = true;
  }

  function preloadTileImages() {
    TILE_IMAGE_PATHS.forEach(src => {
      const image = new Image();
      image.decoding = "async";
      image.src = src;
    });
  }

  function ensureAudio() {
    if (audio) {
      if (audio.ctx.state === "suspended") audio.ctx.resume();
      return;
    }
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const master = ctx.createGain(); master.gain.value = .22; master.connect(ctx.destination);
    audio = { ctx, master, enabled: true, timer: 0, step: 0, nextNote: 0, sources: new Set() };
  }

  function tone(freq, duration, type = "sine", volume = .15, delay = 0) {
    if (!audio?.enabled) return;
    const t = audio.ctx.currentTime + delay;
    const osc = audio.ctx.createOscillator();
    const gain = audio.ctx.createGain();
    osc.type = type; osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(.0001, t); gain.gain.exponentialRampToValueAtTime(volume, t + .012); gain.gain.exponentialRampToValueAtTime(.0001, t + duration);
    osc.connect(gain); gain.connect(audio.master); osc.start(t); osc.stop(t + duration + .03);
    audio.sources.add(osc); osc.onended = () => audio.sources.delete(osc);
  }

  function noiseBurst(duration = .25, volume = .12, delay = 0, cutoff = 700) {
    if (!audio?.enabled) return;
    const sampleRate = audio.ctx.sampleRate;
    const buffer = audio.ctx.createBuffer(1, Math.ceil(sampleRate * duration), sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      const decay = Math.pow(1 - i / data.length, 2.4);
      data[i] = (Math.random() * 2 - 1) * decay;
    }
    const source = audio.ctx.createBufferSource();
    const filter = audio.ctx.createBiquadFilter();
    const gain = audio.ctx.createGain();
    const start = audio.ctx.currentTime + delay;
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(cutoff, start);
    filter.frequency.exponentialRampToValueAtTime(90, start + duration);
    gain.gain.setValueAtTime(.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + .008);
    gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
    source.connect(filter); filter.connect(gain); gain.connect(audio.master);
    source.start(start); source.stop(start + duration + .02);
    audio.sources.add(source); source.onended = () => audio.sources.delete(source);
  }

  function playSfx(name, combo = 0) {
    if (!audio?.enabled) return;
    const rapidHits = (count, startFreq, interval = .045) => {
      for (let i = 0; i < count; i++) {
        tone(startFreq + i * 95, .075, i % 2 ? "square" : "triangle", .085, i * interval);
      }
    };
    const milestone = () => {
      const tier = Math.max(1, Math.floor(combo / 10));
      const pattern = (tier - 1) % 5;
      if (pattern === 0) {
        rapidHits(2, 540, .052);
        tone(1080, .18, "sine", .1, .11);
      } else if (pattern === 1) {
        rapidHits(3, 500, .042);
        tone(1240, .2, "triangle", .11, .14);
      } else if (pattern === 2) {
        rapidHits(2, 440, .035);
        noiseBurst(.3, .14, .07, 950);
        tone(92, .34, "sawtooth", .12, .06);
        tone(1320, .2, "triangle", .09, .18);
      } else if (pattern === 3) {
        noiseBurst(.24, .13, 0, 1100);
        tone(105, .28, "sawtooth", .11, 0);
        noiseBurst(.34, .15, .14, 760);
        tone(78, .42, "square", .1, .14);
        rapidHits(3, 760, .05);
      } else {
        noiseBurst(.48, .18, 0, 1250);
        tone(72, .52, "sawtooth", .14, 0);
        [659, 784, 988, 1319].forEach((freq, i) => tone(freq, .28, "triangle", .105, .12 + i * .07));
      }
    };
    const map = {
      select: () => tone(620, .07, "sine", .08), blocked: () => tone(115, .11, "square", .05), miss: () => { tone(210,.12,"sawtooth",.06); tone(150,.16,"sawtooth",.05,.05); },
      pair: () => {
        const base = Math.min(980, 500 + combo * 22);
        tone(base, .09, "triangle", .11);
        tone(base * 1.45, .11, "sine", .07, .035);
        if (combo >= 5) tone(base * 1.18, .07, "square", .045, .082);
      },
      milestone,
      hint: () => { tone(440,.12,"sine",.07); tone(660,.16,"sine",.06,.09); }, shuffle: () => [0,1,2,3].forEach((_,i) => tone(180+i*95,.09,"triangle",.07,i*.045)),
      start: () => [0,1,2].forEach((_,i) => tone([330,495,660][i],.25,"triangle",.09,i*.08)), end: () => { tone(330,.25,"triangle",.08); tone(220,.35,"triangle",.08,.16); },
      clear: () => [0,1,2,3,4,5].forEach((_,i) => tone([523,659,784,1047,1319,1568][i],.35,"triangle",.11,i*.09))
    };
    map[name]?.();
  }

  function startMusic() {
    if (!audio?.enabled || audio.timer) return;
    audio.nextNote = audio.ctx.currentTime + .05;
    const tempo = 148;
    const stepDuration = 60 / tempo / 2;
    const bass = [110,110,146.83,110,164.81,146.83,130.81,146.83,110,110,196,164.81,146.83,130.81,123.47,98];
    const lead = [440,0,523.25,0,659.25,0,523.25,0,440,0,587.33,0,659.25,587.33,523.25,0];
    const schedule = () => {
      while (audio.nextNote < audio.ctx.currentTime + .35) {
        const index = audio.step % 16;
        tone(bass[index], .12, "triangle", .025, Math.max(0, audio.nextNote - audio.ctx.currentTime));
        if (lead[index]) tone(lead[index], .09, "sine", .018, Math.max(0, audio.nextNote - audio.ctx.currentTime));
        if (index % 2 === 0) tone(75, .035, "square", .012, Math.max(0, audio.nextNote - audio.ctx.currentTime));
        audio.nextNote += stepDuration;
        audio.step++;
      }
    };
    schedule();
    audio.timer = window.setInterval(schedule, 100);
  }

  function stopMusic() {
    if (!audio?.timer) return;
    clearInterval(audio.timer);
    audio.timer = 0;
  }

  function toggleSound() {
    ensureAudio();
    if (!audio) return;
    audio.enabled = !audio.enabled;
    ui.sound.textContent = audio.enabled ? "♪" : "×";
    ui.sound.setAttribute("aria-label", audio.enabled ? "音を切る" : "音を出す");
    if (audio.enabled && state?.running && !state.paused) startMusic(); else stopMusic();
  }

  ui.start.addEventListener("click", startGame);
  ui.retry.addEventListener("click", startGame);
  ui.pause.addEventListener("click", pauseGame);
  ui.resume.addEventListener("click", resumeGame);
  ui.quit.addEventListener("click", quitGame);
  ui.sound.addEventListener("click", toggleSound);
  ui.hint.addEventListener("click", useHint);
  ui.shuffle.addEventListener("click", useShuffle);
  $("showRankingButton").addEventListener("click", showRanking);
  $("resultRankingButton").addEventListener("click", showRanking);
  $("closeRankingButton").addEventListener("click", closeRanking);
  $("resultHomeButton").addEventListener("click", () => showScreen(ui.title));
  window.addEventListener("resize", layoutBoard);
  document.addEventListener("visibilitychange", () => { if (document.hidden && state?.running && !state.paused) pauseGame(); });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      if (ui.rankingModal.classList.contains("open")) closeRanking();
      else if (state?.running && !state.paused) pauseGame();
      else if (state?.paused) resumeGame();
    }
    if (event.key.toLowerCase() === "h") useHint();
    if (event.key.toLowerCase() === "r") useShuffle();
  });

  buildTitleTower();
  preloadTileImages();
  updateTitleHighScore();
})();
