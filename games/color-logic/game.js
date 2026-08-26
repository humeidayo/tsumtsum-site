(() => {
  "use strict";

  const STORAGE_KEY = "humei-color-logic-v1";
  const TEST_MODE = new URLSearchParams(location.search).has("test");
  const PALETTES = {
    flower: { R: "#ff5364", Y: "#ffd85a", G: "#48bd70", bg: "#dff6ff" },
    rocket: { W: "#f7fbff", B: "#46a3e6", O: "#ff9d43", R: "#f34f54", bg: "#111f46" },
    apple: { R: "#ef4053", G: "#4ebf67", bg: "#fff2c9" },
    crown: { Y: "#ffd34f", O: "#ed8d31", bg: "#59336f" },
    umbrella: { B: "#52a9ec", W: "#f5fbff", bg: "#ffefb7" },
    heart: { R: "#f04463", bg: "#ffe0e8" },
    hero: { B: "#1876db", R: "#e52e3c", S: "#ffc58f", K: "#20212a", W: "#f7f6ec", O: "#8a431d", Y: "#f2bd2d", bg: "#dff3fb" },
    knight: { L: "#aebed0", B: "#246fd3", S: "#ffc58f", K: "#202833", W: "#f7f6ec", O: "#8a4b23", Y: "#f0bc2f", bg: "#dff3fb" },
    mage: { P: "#7027b8", Y: "#f2c331", S: "#ffc58f", K: "#24152f", W: "#f7f6ec", O: "#7f411f", C: "#37cbed", bg: "#dff3fb" },
    cleric: { W: "#f7f6ec", R: "#e53a43", S: "#ffc58f", K: "#2c2021", Y: "#f2c331", O: "#89502b", bg: "#dff3fb" },
    merchant: { G: "#268d39", O: "#825022", S: "#ffc58f", K: "#24251f", W: "#f7f6ec", Y: "#e9bd2f", bg: "#dff3fb" }
  };

  const art = (id, name, mode, rows, palette, timeTarget) => {
    const size = mode === "normal" ? 10 : 20;
    if (rows.length !== size || rows.some(row => row.length !== size)) throw new Error(`Invalid puzzle: ${id}`);
    return { id, name, mode, size, rows, palette: PALETTES[palette], timeTarget };
  };

  const PUZZLES = {
    normal: [
      art("n1", "チューリップ", "normal", ["...RRRR...","..RRYYRR..","..RRYYRR..","...RRRR...","....GG....","...GGG....","..GGGGG...","....GG....","....GG....","...GGGG..."], "flower", 150),
      art("n2", "青空ロケット", "normal", ["....WW....","...WBBW...","...WBBW...","...WBBW...","..WWBBWW..","..WBBBBW..","...ORRO...","..OR..RO..",".OR....RO.","OO......OO"], "rocket", 165),
      art("n3", "まっかなリンゴ", "normal", ["...GG.....","....GG....","..RRRRRR..",".RRRRRRRR.","RRRRRRRRRR","RRRRRRRRRR","RRRRRRRRRR",".RRRRRRRR.","..RRRRRR..","...RRRR..."], "apple", 140),
      art("n4", "王さまのクラウン", "normal", ["..........",".Y..Y..Y..",".YY.Y.YY..",".YYYYYYYY.","..YYYYYY..","..YOOOOY..","..YOOOOY..","..YYYYYY..","...YYYY...",".........."], "crown", 150),
      art("n5", "雨上がりの傘", "normal", ["..BBBBBB..",".BBBBBBBB.","BBBBBBBBBB",".BBBBBBBB.","..BBBBBB..","....B.....","....B.....","....B..B..","....BBBB..",".........."], "umbrella", 145),
      art("n6", "ピクセルハート", "normal", [".RR....RR.","RRRR..RRRR","RRRRRRRRRR","RRRRRRRRRR",".RRRRRRRR.","..RRRRRR..","...RRRR...","....RR....","..........",".........."], "heart", 135)
    ],
    hard: [
      art("h20-1", "勇者", "hard", ["....................","...........K.K......","........KKKKKK......","....W...KOOOKK......","....W..KKKKKKKK.....","...WW.WKKOOOKKK.....","...WSW..OOSOOK......","....SW.KKOSSOK......","....WS..KKOOKK.R....","....WSWBBBBBBB......","....WWWBBBBBBBR.R...","....WWWBBBBBBBR.....","...W.WWBBBBBBBRR....","......KBBBBBBBRR....","......KBBBBBBBRRR...","......KBBBBBSBRRR...","......K.BB.BBB.R....",".......BBB..BBR.R...",".......BBB..BBR.....","...................."], "hero", 560),
      art("h20-2", "重装剣士", "hard", ["....................","...........LLL.B....",".....O....LBBL......","....KK..L.LLLLL.....","....OO...LLLL.L.....","....OL...LLLL.......","....KLK.KLLLLL......","....KLK.KLLLLL......",".....LO.KLLLLLL.....",".....LLKKLLLLLL.....",".....OLKKBBBBBB.....",".....KOKKLLLLLLK....","....KKOKKBBBBBBK....","......KKKLLLLLLK....","....K.KKKLLLLLLK....","......K.KLLLLL.K....","........KL..LL......",".....O.KKK..KKK.....",".......KKK..KKK.....","...................."], "knight", 620),
      art("h20-3", "魔法使い", "hard", ["....................","...........PPP......","..........PPPPP.....","..........PPPPP.....",".........YYYY.Y.....",".......KYYYYYY.Y....","....KKKKPPPPPP......","...KCCKKKOSOKKK.....","...KCOK.KOSSKKKK....","....KKKKKKOKKK......",".....KK.PPYPPPY.....","...O.KOKPPYPPP......",".....OOOPPYPPPY.....","......KOPPYPPPY.....",".....KKKPPYPPPY.....","......KKYYYYYYY.....","......KKPPYPPP......","......KKPPYPPP......","........PP.PPP......","...................."], "mage", 600),
      art("h20-4", "僧侶", "hard", ["....................",".........WWWW.......","........RSWWW.......","........RSWWWW.R....","....YO.KSRRRRR......",".....O.ORWWWWSR.....","....KKKORWWWWWR.....","...KOOKORWSSWWR.....","....OOKORWWWWWR.....","....KK.KWWRWWRW.....","....KK.KWWRWWR......","....KOOOSWRWWRW.....","....KOOOWWRWWRW.....",".....KOOWWRWWRWW....",".....KK.RRRRSRRR....",".....KK.SWRWWR.W....","...O.KKKWWRWSS......","...K.KKKWWRWWRW.....",".....KK.WW..WR......","...................."], "cleric", 590),
      art("h20-5", "商人", "hard", ["....................",".......OGGGG........",".....K.KGGGG........",".......KGGGGG.......",".....KKKYYYYY..O....","......KKGGGGGGGO....",".....KKKGSGGGGGO....",".......KGSSGGGGO....","...KKKO.GGGGGGGO....","....OK.KGGGGGGG.....","....KKOOGGGGGGG.....","...KYOOKGGGGSGGO....","...KYO.KOOOOOOO.....","....KKKKGGGGGGG.....","....O.KKGGGGG.......","....K..KOOOOO.......",".......KO.OOO.......","......KKO..OOO......","......KKO..OOO......","...................."], "merchant", 580)
    ]
  };

  const $ = id => document.getElementById(id);
  const ui = {
    title: $("titleScreen"), play: $("playScreen"), result: $("resultScreen"),
    sound: $("soundButton"), pause: $("pauseButton"), preview: $("titlePreview"),
    modeButtons: [...document.querySelectorAll("[data-mode]")], modeDescription: $("modeDescription"), bestSummary: $("bestSummary"), puzzleList: $("puzzleList"), start: $("startButton"),
    frame: $("puzzleFrame"), board: $("puzzleBoard"), rowClues: $("rowClues"), columnClues: $("columnClues"), sizeLabel: $("sizeLabel"), puzzleName: $("puzzleName"), time: $("timeDisplay"), misses: $("missDisplay"), progressText: $("progressText"), progressBar: $("progressBar"), modeBadge: $("modeBadge"), message: $("boardMessage"), reveal: $("revealTitle"), revealName: $("revealName"),
    undo: $("undoButton"), hint: $("hintButton"), hintCount: $("hintCount"), drawButtons: [...document.querySelectorAll("[data-draw]")],
    pauseModal: $("pauseModal"), resume: $("resumeButton"), quit: $("quitButton"), overModal: $("gameOverModal"), overRetry: $("overRetryButton"), overTitle: $("overTitleButton"),
    resultKicker: $("resultKicker"), resultTitle: $("resultTitle"), resultArt: $("resultArt"), resultName: $("resultName"), resultScore: $("resultScore"), resultTime: $("resultTime"), resultMiss: $("resultMiss"), resultHint: $("resultHint"), newBest: $("newBest"), confetti: $("resultConfetti"), next: $("nextButton"), retry: $("retryButton"), titleButton: $("titleButton")
  };

  let selection = { mode: "normal", index: 0 };
  let game = null;
  let timerId = 0;
  let audio = null;
  let drag = null;
  let records = loadRecords();

  function loadRecords() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch { return {}; }
  }

  function saveRecords() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  }

  function currentPuzzle() { return PUZZLES[selection.mode][selection.index]; }
  function isFilledChar(char) { return char !== "."; }
  function solutionAt(puzzle, index) { return isFilledChar(puzzle.rows[Math.floor(index / puzzle.size)][index % puzzle.size]); }
  function colorAt(puzzle, index) {
    const char = puzzle.rows[Math.floor(index / puzzle.size)][index % puzzle.size];
    return puzzle.palette[char] || puzzle.palette.bg;
  }

  function cluesForLine(values) {
    const clues = [];
    let run = 0;
    values.forEach(value => {
      if (value) run++;
      else if (run) { clues.push(run); run = 0; }
    });
    if (run) clues.push(run);
    return clues.length ? clues : [0];
  }

  function buildTitlePreview() {
    const puzzle = PUZZLES.normal[0];
    ui.preview.replaceChildren();
    puzzle.rows.join("").split("").forEach(char => {
      const cell = document.createElement("i");
      if (isFilledChar(char)) {
        cell.className = "on";
        cell.style.setProperty("--preview-color", puzzle.palette[char]);
      }
      ui.preview.append(cell);
    });
  }

  function renderPuzzleList() {
    const list = PUZZLES[selection.mode];
    ui.puzzleList.style.setProperty("--puzzle-count", list.length);
    ui.puzzleList.replaceChildren();
    list.forEach((puzzle, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = String(index + 1).padStart(2, "0");
      button.title = puzzle.name;
      button.setAttribute("aria-label", `問題${index + 1} ${puzzle.name}`);
      if (index === selection.index) button.classList.add("active");
      if (records[puzzle.id]?.cleared) button.classList.add("cleared");
      button.addEventListener("click", () => { selection.index = index; renderPuzzleList(); playSfx("tap"); });
      ui.puzzleList.append(button);
    });
    const cleared = list.filter(p => records[p.id]?.cleared).length;
    ui.bestSummary.textContent = `CLEAR ${cleared} / ${list.length}`;
    ui.modeDescription.textContent = selection.mode === "normal" ? "ミス5回・ヒント3回" : "ミス3回・ヒント1回";
  }

  function selectMode(mode) {
    selection.mode = mode;
    selection.index = Math.min(selection.index, PUZZLES[mode].length - 1);
    ui.modeButtons.forEach(button => {
      const active = button.dataset.mode === mode;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    renderPuzzleList();
    playSfx("tap");
  }

  function showScreen(name) {
    [ui.title, ui.play, ui.result].forEach(screen => screen.classList.remove("active"));
    ui[name].classList.add("active");
  }

  function startGame() {
    initAudio();
    const puzzle = currentPuzzle();
    game = {
      puzzle,
      cells: Array(puzzle.size * puzzle.size).fill(0),
      mode: "fill",
      mistakes: 0,
      maxMistakes: puzzle.mode === "normal" ? 5 : 3,
      hints: puzzle.mode === "normal" ? 3 : 1,
      hintsUsed: 0,
      history: [],
      elapsed: 0,
      startedAt: performance.now(),
      pausedAt: 0,
      pauseTotal: 0,
      finished: false,
      cursor: 0
    };
    buildBoard();
    updateHud();
    setDrawMode("fill");
    ui.message.textContent = "数字の数だけ連続して塗ります";
    ui.message.classList.remove("error");
    ui.pause.disabled = false;
    ui.reveal.classList.remove("show");
    showScreen("play");
    clearInterval(timerId);
    timerId = setInterval(updateTimer, 200);
    startMusic();
    playSfx("start");
  }

  function buildBoard() {
    const { puzzle } = game;
    ui.board.replaceChildren();
    ui.rowClues.replaceChildren();
    ui.columnClues.replaceChildren();
    ui.frame.classList.toggle("hard", puzzle.mode === "hard");
    ui.board.className = "puzzle-board";
    ui.board.style.gridTemplateColumns = `repeat(${puzzle.size}, 1fr)`;
    ui.board.style.gridTemplateRows = `repeat(${puzzle.size}, 1fr)`;
    ui.rowClues.style.gridTemplateRows = `repeat(${puzzle.size}, 1fr)`;
    ui.columnClues.style.gridTemplateColumns = `repeat(${puzzle.size}, 1fr)`;
    ui.sizeLabel.textContent = `${puzzle.size}×${puzzle.size}`;
    ui.puzzleName.textContent = puzzle.name;
    ui.modeBadge.textContent = puzzle.mode.toUpperCase();

    for (let row = 0; row < puzzle.size; row++) {
      const clue = document.createElement("div");
      clue.className = "row-clue";
      clue.dataset.line = row;
      clue.innerHTML = cluesForLine([...puzzle.rows[row]].map(isFilledChar)).map(n => `<span>${n}</span>`).join("");
      ui.rowClues.append(clue);
    }
    for (let col = 0; col < puzzle.size; col++) {
      const clue = document.createElement("div");
      clue.className = "column-clue";
      clue.dataset.line = col;
      const values = puzzle.rows.map(row => isFilledChar(row[col]));
      clue.innerHTML = cluesForLine(values).map(n => `<span>${n}</span>`).join("");
      ui.columnClues.append(clue);
    }
    for (let index = 0; index < puzzle.size * puzzle.size; index++) {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "cell";
      if (Math.floor(index / puzzle.size) % 5 === 0) cell.classList.add("row-five");
      cell.dataset.index = index;
      cell.setAttribute("role", "gridcell");
      cell.setAttribute("aria-label", `${Math.floor(index / puzzle.size) + 1}行 ${index % puzzle.size + 1}列`);
      cell.style.setProperty("--cell-color", colorAt(puzzle, index));
      cell.style.setProperty("--bg-color", puzzle.palette.bg);
      cell.style.setProperty("--delay", `${(Math.floor(index / puzzle.size) + index % puzzle.size) * 18}ms`);
      ui.board.append(cell);
    }
    updateCursor();
  }

  function setDrawMode(mode) {
    if (!game) return;
    game.mode = mode;
    ui.drawButtons.forEach(button => {
      const active = button.dataset.draw === mode;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    playSfx("mode");
  }

  function applyCell(index, requestedMode = game.mode, fromDrag = false) {
    if (!game || game.finished || index < 0 || index >= game.cells.length) return;
    const previous = game.cells[index];
    let next = requestedMode === "fill" ? 1 : 2;
    if (!fromDrag && previous === next) next = 0;
    if (fromDrag && previous === next) return;

    if (next === 1 && !solutionAt(game.puzzle, index)) {
      game.mistakes++;
      game.history.push({ index, previous, next: 2, mistake: true });
      game.cells[index] = 2;
      const cell = ui.board.children[index];
      cell.classList.remove("wrong");
      void cell.offsetWidth;
      cell.classList.add("wrong");
      ui.message.textContent = "そこは塗らないマスです";
      ui.message.classList.add("error");
      playSfx("wrong");
      updateCell(index);
      updateHud();
      if (game.mistakes >= game.maxMistakes) gameOver();
      return;
    }

    game.history.push({ index, previous, next, mistake: false });
    game.cells[index] = next;
    game.cursor = index;
    updateCell(index);
    updateLineStates(index);
    updateCursor();
    ui.message.classList.remove("error");
    ui.message.textContent = next === 1 ? "正解！ 次のマスへ" : next === 2 ? "×印をつけました" : "マスを戻しました";
    playSfx(next === 1 ? "fill" : "mark");
    updateHud();
    if (isComplete()) completePuzzle();
  }

  function updateCell(index) {
    const cell = ui.board.children[index];
    cell.classList.toggle("filled", game.cells[index] === 1);
    cell.classList.toggle("marked", game.cells[index] === 2);
    cell.setAttribute("aria-checked", game.cells[index] === 1 ? "true" : "false");
  }

  function lineSolved(type, line) {
    const { size } = game.puzzle;
    for (let i = 0; i < size; i++) {
      const index = type === "row" ? line * size + i : i * size + line;
      if (solutionAt(game.puzzle, index) && game.cells[index] !== 1) return false;
    }
    return true;
  }

  function updateLineStates(index) {
    const row = Math.floor(index / game.puzzle.size);
    const col = index % game.puzzle.size;
    ui.rowClues.children[row].classList.toggle("solved", lineSolved("row", row));
    ui.columnClues.children[col].classList.toggle("solved", lineSolved("col", col));
  }

  function refreshAllLines() {
    for (let i = 0; i < game.puzzle.size; i++) {
      ui.rowClues.children[i].classList.toggle("solved", lineSolved("row", i));
      ui.columnClues.children[i].classList.toggle("solved", lineSolved("col", i));
    }
  }

  function updateCursor() {
    [...ui.board.children].forEach((cell, index) => cell.classList.toggle("cursor", index === game.cursor));
  }

  function updateTimer() {
    if (!game || game.finished || game.pausedAt) return;
    game.elapsed = Math.floor((performance.now() - game.startedAt - game.pauseTotal) / 1000);
    ui.time.textContent = formatTime(game.elapsed);
  }

  function updateHud() {
    if (!game) return;
    const total = game.puzzle.rows.join("").split("").filter(isFilledChar).length;
    const filled = game.cells.reduce((sum, value, index) => sum + (value === 1 && solutionAt(game.puzzle, index) ? 1 : 0), 0);
    ui.progressText.textContent = `${filled} / ${total}`;
    ui.progressBar.style.width = `${filled / total * 100}%`;
    const hearts = "♥".repeat(Math.max(0, game.maxMistakes - game.mistakes));
    const lost = "♡".repeat(Math.min(game.maxMistakes, game.mistakes));
    ui.misses.textContent = hearts + lost;
    ui.hintCount.textContent = game.hints;
    ui.hint.disabled = game.hints <= 0;
    ui.undo.disabled = game.history.length === 0;
  }

  function undo() {
    if (!game || game.finished) return;
    const action = game.history.pop();
    if (!action) return;
    game.cells[action.index] = action.previous;
    if (action.mistake) game.mistakes = Math.max(0, game.mistakes - 1);
    game.cursor = action.index;
    updateCell(action.index);
    refreshAllLines();
    updateCursor();
    updateHud();
    ui.message.textContent = "1手戻しました";
    ui.message.classList.remove("error");
    playSfx("undo");
  }

  function useHint() {
    if (!game || game.finished || game.hints <= 0) return;
    const candidates = game.cells.map((value, index) => value !== 1 && solutionAt(game.puzzle, index) ? index : -1).filter(index => index >= 0);
    if (!candidates.length) return;
    const index = candidates[Math.floor(Math.random() * candidates.length)];
    const previous = game.cells[index];
    game.cells[index] = 1;
    game.history.push({ index, previous, next: 1, mistake: false });
    game.hints--;
    game.hintsUsed++;
    const cell = ui.board.children[index];
    cell.classList.add("hint");
    updateCell(index);
    updateLineStates(index);
    updateHud();
    ui.message.textContent = "ヒントのマスを塗りました";
    playSfx("hint");
    if (isComplete()) completePuzzle();
  }

  function isComplete() {
    return game.cells.every((value, index) => !solutionAt(game.puzzle, index) || value === 1);
  }

  function completePuzzle() {
    if (game.finished) return;
    game.finished = true;
    clearInterval(timerId);
    updateTimer();
    stopMusic();
    ui.pause.disabled = true;
    for (let i = 0; i < game.cells.length; i++) {
      if (!solutionAt(game.puzzle, i)) game.cells[i] = 0;
      updateCell(i);
    }
    ui.board.classList.add("revealing");
    ui.revealName.textContent = game.puzzle.name;
    ui.reveal.classList.add("show");
    playSfx("reveal");
    setTimeout(showResult, 1850);
  }

  function calculateScore() {
    const base = game.puzzle.mode === "hard" ? 18000 : 8000;
    const speed = Math.max(0, game.puzzle.timeTarget - game.elapsed) * (game.puzzle.mode === "hard" ? 24 : 18);
    const penalty = game.mistakes * 550 + game.hintsUsed * 800;
    return Math.max(500, base + speed - penalty);
  }

  function showResult() {
    const score = calculateScore();
    const previous = records[game.puzzle.id];
    const isBest = !previous || score > previous.score;
    records[game.puzzle.id] = {
      cleared: true,
      score: Math.max(score, previous?.score || 0),
      bestTime: Math.min(game.elapsed, previous?.bestTime ?? Infinity),
      clearedAt: new Date().toISOString()
    };
    saveRecords();
    renderResultArt(game.puzzle, ui.resultArt);
    ui.resultName.textContent = game.puzzle.name;
    ui.resultScore.textContent = score.toLocaleString("ja-JP");
    ui.resultTime.textContent = formatTime(game.elapsed);
    ui.resultMiss.textContent = String(game.mistakes);
    ui.resultHint.textContent = String(game.hintsUsed);
    ui.newBest.classList.toggle("show", isBest);
    buildConfetti();
    showScreen("result");
    playSfx("clear");
  }

  function renderResultArt(puzzle, target) {
    target.replaceChildren();
    target.style.gridTemplateColumns = `repeat(${puzzle.size}, 1fr)`;
    target.style.gridTemplateRows = `repeat(${puzzle.size}, 1fr)`;
    puzzle.rows.join("").split("").forEach(char => {
      const cell = document.createElement("i");
      cell.style.background = isFilledChar(char) ? puzzle.palette[char] : puzzle.palette.bg;
      target.append(cell);
    });
  }

  function buildConfetti() {
    ui.confetti.replaceChildren();
    const colors = ["#ffd35c", "#5de2ae", "#ff645f", "#6ccff6", "#b87be2"];
    for (let i = 0; i < 32; i++) {
      const bit = document.createElement("i");
      bit.style.left = `${Math.random() * 100}%`;
      bit.style.setProperty("--c", colors[i % colors.length]);
      bit.style.setProperty("--d", `${2.4 + Math.random() * 2}s`);
      bit.style.setProperty("--wait", `${-Math.random() * 3}s`);
      bit.style.setProperty("--drift", `${-50 + Math.random() * 100}px`);
      ui.confetti.append(bit);
    }
  }

  function gameOver() {
    if (!game || game.finished) return;
    game.finished = true;
    clearInterval(timerId);
    stopMusic();
    ui.overModal.classList.add("open");
    ui.overModal.setAttribute("aria-hidden", "false");
    playSfx("over");
  }

  function pauseGame() {
    if (!game || game.finished || !ui.play.classList.contains("active")) return;
    game.pausedAt = performance.now();
    ui.pauseModal.classList.add("open");
    ui.pauseModal.setAttribute("aria-hidden", "false");
    stopMusic();
  }

  function resumeGame() {
    if (!game?.pausedAt) return;
    game.pauseTotal += performance.now() - game.pausedAt;
    game.pausedAt = 0;
    ui.pauseModal.classList.remove("open");
    ui.pauseModal.setAttribute("aria-hidden", "true");
    startMusic();
  }

  function returnToTitle() {
    clearInterval(timerId);
    stopMusic();
    ui.pauseModal.classList.remove("open");
    ui.overModal.classList.remove("open");
    renderPuzzleList();
    showScreen("title");
    ui.pause.disabled = true;
  }

  function nextPuzzle() {
    selection.index = (selection.index + 1) % PUZZLES[selection.mode].length;
    startGame();
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  }

  function cellFromPoint(x, y) {
    const element = document.elementFromPoint(x, y);
    const cell = element?.closest?.(".cell");
    return cell && ui.board.contains(cell) ? Number(cell.dataset.index) : -1;
  }

  function beginPointer(event) {
    if (!game || game.finished) return;
    const index = Number(event.target.closest(".cell")?.dataset.index);
    if (!Number.isFinite(index)) return;
    event.preventDefault();
    const mode = event.button === 2 ? "mark" : game.mode;
    const targetValue = mode === "fill" ? 1 : 2;
    drag = { pointerId: event.pointerId, mode, targetValue, visited: new Set() };
    ui.board.setPointerCapture?.(event.pointerId);
    drag.visited.add(index);
    applyCell(index, mode, false);
  }

  function movePointer(event) {
    if (!drag || event.pointerId !== drag.pointerId || !game || game.finished) return;
    const index = cellFromPoint(event.clientX, event.clientY);
    if (index < 0 || drag.visited.has(index)) return;
    drag.visited.add(index);
    applyCell(index, drag.mode, true);
  }

  function endPointer(event) {
    if (drag && event.pointerId === drag.pointerId) drag = null;
  }

  function handleKeyboard(event) {
    if (!game || !ui.play.classList.contains("active") || game.finished || game.pausedAt) return;
    const { size } = game.puzzle;
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
      event.preventDefault();
      const row = Math.floor(game.cursor / size);
      const col = game.cursor % size;
      const nextRow = event.key === "ArrowUp" ? Math.max(0, row - 1) : event.key === "ArrowDown" ? Math.min(size - 1, row + 1) : row;
      const nextCol = event.key === "ArrowLeft" ? Math.max(0, col - 1) : event.key === "ArrowRight" ? Math.min(size - 1, col + 1) : col;
      game.cursor = nextRow * size + nextCol;
      updateCursor();
    } else if (event.key === "Enter") {
      event.preventDefault(); applyCell(game.cursor);
    } else if (event.code === "Space") {
      event.preventDefault(); setDrawMode(game.mode === "fill" ? "mark" : "fill");
    } else if (event.key.toLowerCase() === "z") {
      event.preventDefault(); undo();
    } else if (event.key.toLowerCase() === "f") setDrawMode("fill");
    else if (event.key.toLowerCase() === "x") setDrawMode("mark");
  }

  function initAudio() {
    if (audio) {
      if (audio.ctx.state === "suspended") audio.ctx.resume();
      return;
    }
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const master = ctx.createGain();
    master.gain.value = .2;
    master.connect(ctx.destination);
    audio = { ctx, master, enabled: true, timer: 0, step: 0, sources: new Set() };
  }

  function tone(freq, duration = .1, type = "sine", volume = .1, delay = 0) {
    if (!audio?.enabled) return;
    const start = audio.ctx.currentTime + delay;
    const osc = audio.ctx.createOscillator();
    const gain = audio.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, start);
    gain.gain.setValueAtTime(.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + .01);
    gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
    osc.connect(gain); gain.connect(audio.master);
    osc.start(start); osc.stop(start + duration + .03);
    audio.sources.add(osc); osc.onended = () => audio.sources.delete(osc);
  }

  function playSfx(name) {
    if (!audio?.enabled) return;
    const sounds = {
      tap: () => tone(440,.06,"sine",.06),
      mode: () => { tone(360,.055,"square",.035); tone(520,.07,"triangle",.045,.04); },
      start: () => [392,523,659].forEach((f,i)=>tone(f,.22,"triangle",.08,i*.08)),
      fill: () => { tone(520,.055,"square",.045); tone(780,.08,"sine",.055,.025); },
      mark: () => tone(240,.06,"triangle",.045),
      wrong: () => { tone(170,.14,"sawtooth",.07); tone(110,.2,"square",.05,.07); },
      undo: () => { tone(520,.07,"triangle",.05); tone(360,.09,"triangle",.05,.04); },
      hint: () => [659,784,988].forEach((f,i)=>tone(f,.18,"sine",.06,i*.07)),
      reveal: () => [392,523,659,784,1047].forEach((f,i)=>tone(f,.35,"triangle",.095,i*.12)),
      clear: () => [523,659,784,1047,1319].forEach((f,i)=>tone(f,.3,"triangle",.085,i*.08)),
      over: () => { tone(220,.25,"sawtooth",.06); tone(165,.35,"triangle",.06,.15); }
    };
    sounds[name]?.();
  }

  function startMusic() {
    if (!audio?.enabled || audio.timer) return;
    const notes = [261.63,329.63,392,329.63,293.66,349.23,440,349.23,246.94,293.66,392,293.66,220,261.63,329.63,392];
    audio.step = 0;
    audio.timer = setInterval(() => {
      const note = notes[audio.step++ % notes.length];
      tone(note,.16,"triangle",.025);
      if (audio.step % 2) tone(note / 2,.19,"sine",.018);
    }, 245);
  }

  function stopMusic() {
    if (!audio) return;
    clearInterval(audio.timer);
    audio.timer = 0;
  }

  function toggleSound() {
    initAudio();
    if (!audio) return;
    audio.enabled = !audio.enabled;
    ui.sound.textContent = audio.enabled ? "♪" : "×";
    ui.sound.setAttribute("aria-label", audio.enabled ? "音を切る" : "音を出す");
    if (!audio.enabled) stopMusic();
    else if (ui.play.classList.contains("active") && !game?.finished && !game?.pausedAt) startMusic();
  }

  ui.modeButtons.forEach(button => button.addEventListener("click", () => selectMode(button.dataset.mode)));
  ui.start.addEventListener("click", startGame);
  ui.drawButtons.forEach(button => button.addEventListener("click", () => setDrawMode(button.dataset.draw)));
  ui.undo.addEventListener("click", undo);
  ui.hint.addEventListener("click", useHint);
  ui.pause.addEventListener("click", pauseGame);
  ui.resume.addEventListener("click", resumeGame);
  ui.quit.addEventListener("click", returnToTitle);
  ui.overRetry.addEventListener("click", () => { ui.overModal.classList.remove("open"); startGame(); });
  ui.overTitle.addEventListener("click", returnToTitle);
  ui.next.addEventListener("click", nextPuzzle);
  ui.retry.addEventListener("click", startGame);
  ui.titleButton.addEventListener("click", returnToTitle);
  ui.sound.addEventListener("click", toggleSound);
  ui.board.addEventListener("pointerdown", beginPointer);
  ui.board.addEventListener("pointermove", movePointer);
  ui.board.addEventListener("pointerup", endPointer);
  ui.board.addEventListener("pointercancel", endPointer);
  ui.board.addEventListener("contextmenu", event => event.preventDefault());
  document.addEventListener("keydown", handleKeyboard);
  document.addEventListener("visibilitychange", () => { if (document.hidden && game && !game.finished) pauseGame(); });

  buildTitlePreview();
  renderPuzzleList();
  ui.pause.disabled = true;

  if (TEST_MODE) {
    window.__colorLogicDebug = {
      puzzles: PUZZLES,
      start(mode = "normal", index = 0) { selection = { mode, index }; startGame(); },
      solve() {
        if (!game) return;
        game.puzzle.rows.join("").split("").forEach((char, index) => {
          game.cells[index] = isFilledChar(char) ? 1 : 0;
          updateCell(index);
        });
        refreshAllLines();
        updateHud();
        completePuzzle();
      },
      state() { return game; }
    };
  }
})();
