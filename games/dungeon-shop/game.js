(() => {
  "use strict";

  const DAY_SECONDS = 60;
  const MAX_DAY = 6;
  const FRAME_MS = 1000 / 30;
  const SCORE_KEY = "fumeidayo_dungeon_shop_high_score_v1";
  const SOUND_KEY = "fumeidayo_dungeon_shop_sound_v1";
  const CUSTOMER_IMAGE = "../../assets/images/dungeon-shop-customers.png";

  const products = {
    potion: { name: "回復薬", icon: "◆", price: 95, className: "potion" },
    sword: { name: "鋼の剣", icon: "†", price: 190, className: "sword" },
    scroll: { name: "魔法書", icon: "S", price: 250, className: "scroll" },
    food: { name: "携帯食", icon: "●", price: 75, className: "food" }
  };

  const customerTypes = [
    { name: "王都の騎士", index: 0, weights: { sword: 5, potion: 3, food: 1, scroll: 1 } },
    { name: "炎術師", index: 1, weights: { scroll: 5, potion: 3, food: 1, sword: 1 } },
    { name: "影の探索者", index: 2, weights: { food: 4, potion: 3, sword: 2, scroll: 1 } },
    { name: "鉱山ドワーフ", index: 3, weights: { sword: 4, food: 4, potion: 1, scroll: 1 } },
    { name: "森の弓使い", index: 4, weights: { scroll: 4, potion: 3, food: 2, sword: 1 } }
  ];
  const vipType = { name: "竜人の大口客", index: 5, weights: { sword: 3, potion: 2, food: 2, scroll: 3 } };

  const priceModes = {
    sale: { label: "安売り", revenue: .82, patience: .72 },
    fair: { label: "定価", revenue: 1, patience: 1 },
    premium: { label: "強気", revenue: 1.35, patience: 1.35 }
  };

  const dayGoals = [0, 4400, 6500, 8800, 11600, 15000, 19000];

  const upgradeDefs = {
    counter: { icon: "G", name: "黄金カウンター", max: 5, desc: level => `販売額 +${level * 10}%` },
    warehouse: { icon: "箱", name: "拡張倉庫", max: 5, desc: level => `各商品の最大在庫 +${level * 2}` },
    sign: { icon: "旗", name: "名物看板", max: 5, desc: level => `客の待ち時間 +${level * 10}%` },
    combo: { icon: "連", name: "早業の帳簿", max: 5, desc: level => `コンボ受付 +${(level * .25).toFixed(2)}秒` },
    clerk: { icon: "人", name: "凄腕店員", max: 5, desc: level => `${level * 8}%で在庫を消費しない` },
    showcase: { icon: "宝", name: "豪華な展示棚", max: 5, desc: level => `大口客の来店率 +${level * 5}%` },
    wholesale: { icon: "荷", name: "商人ギルド便", max: 5, desc: level => `緊急仕入れ費 -${level * 10}%` },
    bell: { icon: "鈴", name: "呼び込みベル", max: 5, desc: level => `次の客が${level * 6}%早く来店` }
  };

  const ui = {
    shell: document.querySelector("#gameShell"),
    title: document.querySelector("#titleScreen"),
    play: document.querySelector("#playScreen"),
    result: document.querySelector("#resultScreen"),
    start: document.querySelector("#startButton"),
    retry: document.querySelector("#retryButton"),
    home: document.querySelector("#resultHomeButton"),
    sound: document.querySelector("#soundButton"),
    pause: document.querySelector("#pauseButton"),
    pauseModal: document.querySelector("#pauseModal"),
    howModal: document.querySelector("#howModal"),
    upgradeModal: document.querySelector("#upgradeModal"),
    resume: document.querySelector("#resumeButton"),
    quit: document.querySelector("#quitButton"),
    lane: document.querySelector("#customerLane"),
    scene: document.querySelector("#shopScene"),
    sceneMessage: document.querySelector("#sceneMessage"),
    merchantMessage: document.querySelector("#merchantMessage"),
    day: document.querySelector("#dayDisplay"),
    gold: document.querySelector("#goldDisplay"),
    time: document.querySelector("#timeDisplay"),
    reputation: document.querySelector("#reputationDisplay"),
    targetLabel: document.querySelector("#targetLabel"),
    targetFill: document.querySelector("#targetFill"),
    dayRevenue: document.querySelector("#dayRevenueDisplay"),
    combo: document.querySelector("#comboDisplay"),
    comboMultiplier: document.querySelector("#comboMultiplier"),
    comboBanner: document.querySelector("#comboBanner"),
    fever: document.querySelector("#feverBanner"),
    restock: document.querySelector("#restockButton"),
    restockLabel: document.querySelector("#restockLabel"),
    upgradeOptions: document.querySelector("#upgradeOptions"),
    reroll: document.querySelector("#rerollButton"),
    titleHighScore: document.querySelector("#titleHighScore")
  };

  const stockElements = {
    potion: document.querySelector("#stockPotion"),
    sword: document.querySelector("#stockSword"),
    scroll: document.querySelector("#stockScroll"),
    food: document.querySelector("#stockFood")
  };

  let state = null;
  let rafId = 0;
  let audioContext = null;
  let bgmTimer = 0;
  let bgmStep = 0;
  let soundEnabled = loadSoundSetting();

  function loadSoundSetting() {
    try { return localStorage.getItem(SOUND_KEY) !== "off"; } catch { return true; }
  }

  function loadHighScore() {
    try { return Math.max(0, Number(localStorage.getItem(SCORE_KEY)) || 0); } catch { return 0; }
  }

  function saveHighScore(value) {
    try { localStorage.setItem(SCORE_KEY, String(Math.round(value))); } catch { /* local storage may be unavailable */ }
  }

  function setActiveScreen(active) {
    [ui.title, ui.play, ui.result].forEach(screen => screen.classList.toggle("active", screen === active));
    ui.pause.style.visibility = active === ui.play ? "visible" : "hidden";
  }

  function createState() {
    const upgrades = {};
    Object.keys(upgradeDefs).forEach(key => { upgrades[key] = 0; });
    return {
      running: false,
      paused: false,
      day: 1,
      remainingMs: DAY_SECONDS * 1000,
      lastTick: 0,
      lastFrame: 0,
      spawnCooldown: 0,
      customerId: 0,
      customers: [],
      stock: {},
      cash: 1200,
      totalRevenue: 0,
      dayRevenue: 0,
      sales: 0,
      reputation: 100,
      combo: 0,
      maxCombo: 0,
      dayMaxCombo: 0,
      lastSaleAt: 0,
      feverUntil: 0,
      priceMode: "fair",
      restocksLeft: 1,
      upgrades,
      upgradeCount: 0,
      rerollUsed: false
    };
  }

  function startGame() {
    state = createState();
    setActiveScreen(ui.play);
    selectPrice("fair");
    ensureAudio();
    startBgm();
    startDay();
  }

  function maxStock() { return 8 + state.upgrades.warehouse * 2; }
  function restockCost() { return Math.max(90, Math.round(220 * (1 - state.upgrades.wholesale * .1))); }
  function comboWindow() { return 3.2 + state.upgrades.combo * .25; }

  function startDay() {
    closeModal(ui.upgradeModal);
    clearCustomers();
    state.running = true;
    state.paused = false;
    state.remainingMs = DAY_SECONDS * 1000;
    state.lastTick = performance.now();
    state.lastFrame = 0;
    state.spawnCooldown = 450;
    state.dayRevenue = 0;
    state.dayMaxCombo = 0;
    state.combo = 0;
    state.lastSaleAt = 0;
    state.feverUntil = 0;
    state.restocksLeft = 1 + (state.upgrades.wholesale >= 4 ? 1 : 0);
    Object.keys(products).forEach(key => { state.stock[key] = maxStock(); });
    ui.targetLabel.textContent = `本日の目標 ${formatGold(dayGoals[state.day])}`;
    ui.merchantMessage.textContent = `${state.day}日目、元気に開店だ！`;
    showSceneMessage(`DAY ${state.day}　開店！`);
    updateHud();
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(gameLoop);
  }

  function gameLoop(now) {
    if (!state?.running) return;
    rafId = requestAnimationFrame(gameLoop);
    if (state.paused) { state.lastTick = now; return; }
    if (now - state.lastFrame < FRAME_MS) return;
    const dt = Math.min(90, now - state.lastTick || FRAME_MS);
    state.lastTick = now;
    state.lastFrame = now;
    state.remainingMs = Math.max(0, state.remainingMs - dt);
    state.spawnCooldown -= dt;

    if (state.spawnCooldown <= 0 && state.customers.length < 3) {
      spawnCustomer(now);
      state.spawnCooldown = spawnInterval(now);
    }

    updateCustomers(dt);
    if (state.combo && now - state.lastSaleAt > comboWindow() * 1000) state.combo = 0;
    updateHud(now);

    if (state.reputation <= 0) finishGame(false);
    else if (state.remainingMs <= 0) endDay();
  }

  function spawnInterval(now) {
    const base = 1500 - (state.day - 1) * 95;
    const bell = 1 - state.upgrades.bell * .06;
    const fever = now < state.feverUntil ? .58 : 1;
    return Math.max(540, base * bell * fever + Math.random() * 320);
  }

  function chooseWeighted(weights) {
    const entries = Object.entries(weights);
    const total = entries.reduce((sum, entry) => sum + entry[1], 0);
    let roll = Math.random() * total;
    for (const [key, weight] of entries) {
      roll -= weight;
      if (roll <= 0) return key;
    }
    return entries[0][0];
  }

  function spawnCustomer(now) {
    const vipChance = .025 + state.day * .012 + state.upgrades.showcase * .05;
    const vip = Math.random() < vipChance;
    const type = vip ? vipType : customerTypes[Math.floor(Math.random() * customerTypes.length)];
    const multiChance = state.day >= 3 ? .08 + state.day * .025 : 0;
    const requestCount = vip ? 3 : (Math.random() < multiChance ? 2 : 1);
    const requests = Array.from({ length: requestCount }, () => chooseWeighted(type.weights));
    const basePatience = vip ? 15 : Math.max(6.2, 9.6 - state.day * .48);
    const patience = basePatience * (1 + state.upgrades.sign * .1);
    const customer = {
      id: ++state.customerId,
      type,
      vip,
      requests,
      requestIndex: 0,
      patience,
      maxPatience: patience,
      element: null,
      leaving: false,
      bornAt: now
    };
    customer.element = buildCustomerElement(customer);
    state.customers.push(customer);
    ui.lane.appendChild(customer.element);
    playSfx(vip ? "vip" : "arrive");
    if (vip) showSceneMessage("大口客が来店！ 3品注文");
  }

  function buildCustomerElement(customer) {
    const card = document.createElement("div");
    card.className = `customer-card${customer.vip ? " vip" : ""}`;
    card.dataset.customerId = String(customer.id);
    card.innerHTML = `
      <div class="customer-art" aria-hidden="true"><img src="${CUSTOMER_IMAGE}" alt="" style="--customer-index:${customer.type.index}"></div>
      <div class="customer-order"><span class="order-icon"></span><small class="order-text"></small><span class="order-count"></span></div>
      <div class="customer-name">${customer.type.name}</div>
      <div class="patience" aria-label="待ち時間"><i></i></div>`;
    customer.element = card;
    updateCustomerElement(customer);
    return card;
  }

  function currentRequest(customer) { return customer.requests[customer.requestIndex]; }

  function updateCustomerElement(customer) {
    const request = products[currentRequest(customer)];
    const icon = customer.element.querySelector(".order-icon");
    icon.textContent = request.icon;
    icon.className = `order-icon ${request.className}`;
    customer.element.querySelector(".order-text").textContent = request.name;
    const remaining = customer.requests.length - customer.requestIndex;
    const count = customer.element.querySelector(".order-count");
    count.textContent = remaining > 1 ? `×${remaining}` : "";
    count.style.display = remaining > 1 ? "grid" : "none";
  }

  function updateCustomers(dt) {
    const drain = priceModes[state.priceMode].patience;
    state.customers.slice().forEach(customer => {
      if (customer.leaving) return;
      customer.patience -= dt / 1000 * drain;
      const ratio = Math.max(0, customer.patience / customer.maxPatience);
      customer.element.querySelector(".patience i").style.transform = `scaleX(${ratio})`;
      customer.element.classList.toggle("urgent", ratio < .24);
      if (customer.patience <= 0) loseCustomer(customer);
    });
  }

  function sellProduct(productKey) {
    if (!state?.running || state.paused) return;
    const button = document.querySelector(`[data-product="${productKey}"]`);
    if (state.stock[productKey] <= 0) {
      breakCombo();
      state.reputation = Math.max(0, state.reputation - 2);
      flashWrong(button);
      ui.merchantMessage.textContent = `${products[productKey].name}が売り切れだ！`;
      playSfx("miss");
      updateHud();
      return;
    }

    const customer = state.customers
      .filter(item => !item.leaving && currentRequest(item) === productKey)
      .sort((a, b) => a.patience - b.patience)[0];
    if (!customer) {
      breakCombo();
      state.reputation = Math.max(0, state.reputation - 3);
      flashWrong(button);
      ui.merchantMessage.textContent = "その商品を待っている客はいないぞ！";
      playSfx("miss");
      updateHud();
      return;
    }

    const now = performance.now();
    state.combo = state.combo && now - state.lastSaleAt <= comboWindow() * 1000 ? state.combo + 1 : 1;
    state.lastSaleAt = now;
    state.maxCombo = Math.max(state.maxCombo, state.combo);
    state.dayMaxCombo = Math.max(state.dayMaxCombo, state.combo);
    const stockSaved = Math.random() < state.upgrades.clerk * .08;
    if (!stockSaved) state.stock[productKey]--;

    const chainMultiplier = 1 + Math.min(.9, Math.max(0, state.combo - 1) * .05);
    const counterMultiplier = 1 + state.upgrades.counter * .1;
    const feverMultiplier = now < state.feverUntil ? 2 : 1;
    const vipMultiplier = customer.vip ? 1.15 : 1;
    const revenue = Math.round(products[productKey].price * priceModes[state.priceMode].revenue * chainMultiplier * counterMultiplier * feverMultiplier * vipMultiplier);
    state.cash += revenue;
    state.totalRevenue += revenue;
    state.dayRevenue += revenue;
    state.sales++;
    customer.requestIndex++;
    customer.patience = Math.min(customer.maxPatience, customer.patience + 1.15);
    showSalePop(customer, revenue);
    punchCombo();
    ui.merchantMessage.textContent = stockSaved ? `店員の早業！ 在庫を使わず +${formatGold(revenue)}` : `${products[productKey].name}販売！ +${formatGold(revenue)}`;
    playSfx(state.combo % 12 === 0 ? "fever" : "sale", state.combo);

    if (state.combo > 0 && state.combo % 12 === 0) activateFever(now);
    if (customer.requestIndex >= customer.requests.length) completeCustomer(customer);
    else updateCustomerElement(customer);
    updateHud(now);
  }

  function completeCustomer(customer) {
    state.reputation = Math.min(100, state.reputation + (customer.vip ? 2.5 : .6));
    removeCustomer(customer, true);
  }

  function loseCustomer(customer) {
    if (customer.leaving) return;
    state.reputation = Math.max(0, state.reputation - (customer.vip ? 13 : 7));
    breakCombo();
    ui.merchantMessage.textContent = `${customer.type.name}を待たせすぎた…`;
    playSfx("leave");
    removeCustomer(customer, false);
  }

  function removeCustomer(customer, served) {
    customer.leaving = true;
    customer.element.classList.add("leaving");
    if (served) customer.element.classList.remove("urgent");
    setTimeout(() => {
      customer.element?.remove();
      state && (state.customers = state.customers.filter(item => item.id !== customer.id));
    }, 340);
  }

  function clearCustomers() {
    ui.lane.replaceChildren();
    if (state) state.customers = [];
  }

  function breakCombo() {
    state.combo = 0;
    state.lastSaleAt = 0;
  }

  function activateFever(now) {
    state.feverUntil = now + 8000;
    ui.fever.classList.remove("show");
    ui.shell.classList.remove("fever");
    void ui.fever.offsetWidth;
    ui.fever.classList.add("show");
    ui.shell.classList.add("fever");
    showSceneMessage("8秒間、売上2倍！");
    setTimeout(() => ui.shell.classList.remove("fever"), 720);
  }

  function punchCombo() {
    ui.comboBanner.classList.remove("hot");
    void ui.comboBanner.offsetWidth;
    ui.comboBanner.classList.add("hot");
  }

  function showSalePop(customer, revenue) {
    const customerRect = customer.element.getBoundingClientRect();
    const sceneRect = ui.scene.getBoundingClientRect();
    const pop = document.createElement("span");
    pop.className = "sale-pop";
    pop.style.setProperty("--x", `${customerRect.left - sceneRect.left + customerRect.width / 2}px`);
    pop.style.setProperty("--y", `${customerRect.top - sceneRect.top + 65}px`);
    pop.textContent = `+${formatGold(revenue)}`;
    ui.scene.appendChild(pop);
    pop.addEventListener("animationend", () => pop.remove());
  }

  function flashWrong(button) {
    button.classList.remove("wrong");
    void button.offsetWidth;
    button.classList.add("wrong");
    setTimeout(() => button.classList.remove("wrong"), 520);
  }

  function emergencyRestock() {
    if (!state?.running || state.paused || state.restocksLeft <= 0) return;
    const cost = restockCost();
    if (state.cash < cost) {
      ui.merchantMessage.textContent = `仕入れには${formatGold(cost)}必要だ！`;
      playSfx("miss");
      return;
    }
    state.cash -= cost;
    state.restocksLeft--;
    const amount = 4 + Math.floor(state.upgrades.warehouse / 2);
    Object.keys(products).forEach(key => { state.stock[key] = Math.min(maxStock(), state.stock[key] + amount); });
    ui.merchantMessage.textContent = `緊急仕入れ完了！ 各商品 +${amount}`;
    showSceneMessage("商品を補充しました");
    playSfx("restock");
    updateHud();
  }

  function selectPrice(mode) {
    if (!priceModes[mode]) return;
    if (state) state.priceMode = mode;
    document.querySelectorAll("[data-price]").forEach(button => button.classList.toggle("selected", button.dataset.price === mode));
    if (state?.running) ui.merchantMessage.textContent = `${priceModes[mode].label}に変更した！`;
    playSfx("tap");
  }

  function updateHud(now = performance.now()) {
    if (!state) return;
    ui.day.textContent = state.day;
    ui.gold.textContent = formatGold(state.cash);
    const seconds = Math.ceil(state.remainingMs / 1000);
    ui.time.textContent = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
    ui.time.classList.toggle("warning", seconds <= 10);
    ui.reputation.textContent = String(Math.round(state.reputation));
    ui.reputation.classList.toggle("warning", state.reputation <= 25);
    ui.dayRevenue.textContent = formatGold(state.dayRevenue);
    ui.targetFill.style.width = `${Math.min(100, state.dayRevenue / dayGoals[state.day] * 100)}%`;
    ui.combo.textContent = state.combo;
    const comboMultiplier = 1 + Math.min(.9, Math.max(0, state.combo - 1) * .05);
    ui.comboMultiplier.textContent = `×${comboMultiplier.toFixed(2)}`;
    Object.keys(products).forEach(key => {
      stockElements[key].textContent = state.stock[key];
      document.querySelector(`[data-product="${key}"]`).classList.toggle("out", state.stock[key] <= 0);
    });
    ui.restockLabel.textContent = `各商品 +${4 + Math.floor(state.upgrades.warehouse / 2)} / ${formatGold(restockCost())}`;
    ui.restock.disabled = state.restocksLeft <= 0 || state.cash < restockCost();
    ui.restock.querySelector("b").textContent = state.restocksLeft > 0 ? `緊急仕入れ 残り${state.restocksLeft}` : "本日分は終了";
    ui.shell.classList.toggle("fever-active", now < state.feverUntil);
  }

  function endDay() {
    if (!state?.running) return;
    state.running = false;
    cancelAnimationFrame(rafId);
    clearCustomers();
    const achieved = state.dayRevenue >= dayGoals[state.day];
    if (achieved) {
      const bonus = Math.round(dayGoals[state.day] * .12);
      state.cash += bonus;
      ui.merchantMessage.textContent = `目標達成ボーナス ${formatGold(bonus)}！`;
    } else {
      state.reputation = Math.max(1, state.reputation - 8);
    }
    if (state.day >= MAX_DAY) {
      setTimeout(() => finishGame(true), 350);
      return;
    }
    showUpgradeModal(achieved);
  }

  function showUpgradeModal(achieved) {
    document.querySelector("#dayResultTitle").textContent = `${state.day}日目の営業${achieved ? "成功" : "終了"}`;
    document.querySelector("#dayResultRevenue").textContent = formatGold(state.dayRevenue);
    document.querySelector("#dayResultRate").textContent = `${Math.round(state.dayRevenue / dayGoals[state.day] * 100)}%`;
    document.querySelector("#dayResultCombo").textContent = state.dayMaxCombo;
    state.rerollUsed = false;
    ui.reroll.disabled = false;
    renderUpgradeOptions();
    openModal(ui.upgradeModal);
  }

  function renderUpgradeOptions() {
    const available = Object.keys(upgradeDefs).filter(key => state.upgrades[key] < upgradeDefs[key].max);
    shuffle(available);
    const choices = available.slice(0, 3);
    ui.upgradeOptions.replaceChildren();
    if (!choices.length) {
      const button = document.createElement("button");
      button.className = "upgrade-option";
      button.innerHTML = '<span class="upgrade-icon">G</span><span><b>完成された商会</b><small>全強化が最大です。資金1,000Gを獲得。</small></span><em>MAX</em>';
      button.addEventListener("click", () => { state.cash += 1000; nextDay(); });
      ui.upgradeOptions.appendChild(button);
      return;
    }
    choices.forEach(key => {
      const def = upgradeDefs[key];
      const nextLevel = state.upgrades[key] + 1;
      const button = document.createElement("button");
      button.className = "upgrade-option";
      button.type = "button";
      button.innerHTML = `<span class="upgrade-icon">${def.icon}</span><span><b>${def.name}</b><small>${def.desc(nextLevel)}</small></span><em>LV ${state.upgrades[key]} → ${nextLevel}</em>`;
      button.addEventListener("click", () => chooseUpgrade(key));
      ui.upgradeOptions.appendChild(button);
    });
  }

  function chooseUpgrade(key) {
    if (!state || state.upgrades[key] >= upgradeDefs[key].max) return;
    state.upgrades[key]++;
    state.upgradeCount++;
    playSfx("upgrade");
    nextDay();
  }

  function nextDay() {
    state.day++;
    closeModal(ui.upgradeModal);
    startDay();
  }

  function rerollUpgrades() {
    if (state.rerollUsed) return;
    state.rerollUsed = true;
    ui.reroll.disabled = true;
    renderUpgradeOptions();
    playSfx("restock");
  }

  function finishGame(completed) {
    if (!state) return;
    state.running = false;
    state.paused = false;
    cancelAnimationFrame(rafId);
    clearCustomers();
    closeModal(ui.pauseModal);
    closeModal(ui.upgradeModal);
    const previousHigh = loadHighScore();
    const isRecord = state.totalRevenue > previousHigh;
    if (isRecord) saveHighScore(state.totalRevenue);
    const rank = getRank(state.totalRevenue, completed);
    document.querySelector("#resultKicker").textContent = completed ? "6 DAYS COMPLETE" : "SHOP CLOSED";
    document.querySelector("#resultTitle").textContent = completed ? "商会の営業結果" : "評判が尽きて閉店";
    document.querySelector("#rankMedal span").textContent = rank;
    document.querySelector("#resultRevenue").textContent = formatGold(state.totalRevenue);
    document.querySelector("#resultSales").textContent = `${state.sales}個`;
    document.querySelector("#resultCombo").textContent = state.maxCombo;
    document.querySelector("#resultReputation").textContent = Math.round(state.reputation);
    document.querySelector("#resultUpgrades").textContent = `${state.upgradeCount}回`;
    document.querySelector("#newRecordBadge").classList.toggle("show", isRecord);
    setActiveScreen(ui.result);
    updateTitleRecord();
    playSfx(isRecord ? "record" : "finish");
  }

  function getRank(revenue, completed) {
    if (!completed) return "D";
    if (revenue >= 90000) return "S";
    if (revenue >= 70000) return "A";
    if (revenue >= 52000) return "B";
    return "C";
  }

  function returnTitle() {
    if (state) state.running = false;
    cancelAnimationFrame(rafId);
    clearCustomers();
    [ui.pauseModal, ui.howModal, ui.upgradeModal].forEach(closeModal);
    setActiveScreen(ui.title);
    updateTitleRecord();
  }

  function togglePause(force) {
    if (!state?.running) return;
    const next = typeof force === "boolean" ? force : !state.paused;
    state.paused = next;
    if (next) openModal(ui.pauseModal);
    else {
      closeModal(ui.pauseModal);
      state.lastTick = performance.now();
    }
  }

  function openModal(modal) { modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); }
  function closeModal(modal) { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); }

  let messageTimer = 0;
  function showSceneMessage(message) {
    clearTimeout(messageTimer);
    ui.sceneMessage.textContent = message;
    ui.sceneMessage.classList.add("show");
    messageTimer = setTimeout(() => ui.sceneMessage.classList.remove("show"), 1250);
  }

  function formatGold(value) { return `${Math.max(0, Math.round(value)).toLocaleString("ja-JP")} G`; }
  function shuffle(array) {
    for (let index = array.length - 1; index > 0; index--) {
      const swap = Math.floor(Math.random() * (index + 1));
      [array[index], array[swap]] = [array[swap], array[index]];
    }
    return array;
  }

  function ensureAudio() {
    if (!soundEnabled) return null;
    if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === "suspended") audioContext.resume();
    return audioContext;
  }

  function playTone(frequency, duration = .08, type = "square", volume = .035, delay = 0) {
    const context = ensureAudio();
    if (!context || !soundEnabled) return;
    const start = context.currentTime + delay;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + .012);
    gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + .02);
  }

  function playSfx(type, combo = 0) {
    if (!soundEnabled) return;
    const sounds = {
      tap: () => playTone(440, .04, "square", .018),
      arrive: () => playTone(520, .055, "triangle", .018),
      vip: () => [392, 523, 659].forEach((note, i) => playTone(note, .15, "triangle", .03, i * .08)),
      sale: () => { const base = 620 + Math.min(360, combo * 16); playTone(base, .07, "square", .032); playTone(base * 1.5, .08, "triangle", .025, .04); },
      miss: () => { playTone(155, .13, "sawtooth", .032); playTone(112, .16, "square", .02, .08); },
      leave: () => [260, 220, 180].forEach((note, i) => playTone(note, .1, "triangle", .02, i * .065)),
      restock: () => [330, 440, 550].forEach((note, i) => playTone(note, .1, "square", .025, i * .055)),
      fever: () => [523, 659, 784, 1047].forEach((note, i) => playTone(note, .18, "square", .04, i * .07)),
      upgrade: () => [392, 494, 587, 784].forEach((note, i) => playTone(note, .18, "triangle", .038, i * .08)),
      finish: () => [392, 494, 587].forEach((note, i) => playTone(note, .28, "triangle", .035, i * .11)),
      record: () => [523, 659, 784, 1047, 1319].forEach((note, i) => playTone(note, .24, "triangle", .038, i * .09))
    };
    (sounds[type] || sounds.tap)();
  }

  function startBgm() {
    clearInterval(bgmTimer);
    bgmStep = 0;
    const melody = [262, 330, 392, 330, 294, 370, 440, 370, 330, 392, 494, 392, 294, 349, 440, 349];
    bgmTimer = setInterval(() => {
      if (!soundEnabled || !state?.running || state.paused) return;
      const fever = performance.now() < state.feverUntil;
      const note = melody[bgmStep % melody.length] * (fever ? 2 : 1);
      playTone(note, fever ? .11 : .16, "triangle", .012);
      if (bgmStep % 4 === 0) playTone(note / 2, .25, "sine", .012);
      bgmStep++;
    }, 280);
  }

  function toggleSound() {
    soundEnabled = !soundEnabled;
    try { localStorage.setItem(SOUND_KEY, soundEnabled ? "on" : "off"); } catch { /* no-op */ }
    ui.sound.textContent = soundEnabled ? "♪" : "×";
    ui.sound.setAttribute("aria-label", soundEnabled ? "音を切る" : "音を出す");
    if (soundEnabled) { ensureAudio(); playSfx("tap"); }
  }

  function updateTitleRecord() { ui.titleHighScore.textContent = formatGold(loadHighScore()); }

  document.querySelectorAll("[data-product]").forEach(button => button.addEventListener("click", () => sellProduct(button.dataset.product)));
  document.querySelectorAll("[data-price]").forEach(button => button.addEventListener("click", () => selectPrice(button.dataset.price)));
  document.querySelectorAll("[data-close]").forEach(button => button.addEventListener("click", () => closeModal(document.querySelector(`#${button.dataset.close}`))));
  ui.start.addEventListener("click", startGame);
  ui.retry.addEventListener("click", startGame);
  ui.home.addEventListener("click", returnTitle);
  ui.sound.addEventListener("click", toggleSound);
  ui.pause.addEventListener("click", () => togglePause());
  ui.resume.addEventListener("click", () => togglePause(false));
  ui.quit.addEventListener("click", returnTitle);
  ui.restock.addEventListener("click", emergencyRestock);
  ui.reroll.addEventListener("click", rerollUpgrades);
  document.querySelector("#showHowButton").addEventListener("click", () => openModal(ui.howModal));

  document.addEventListener("keydown", event => {
    if (event.repeat) return;
    if (event.key === "Escape") { if (state?.running) togglePause(); else [ui.howModal].forEach(closeModal); return; }
    if (!state?.running || state.paused) return;
    const productKeys = { "1": "potion", "2": "sword", "3": "scroll", "4": "food" };
    const priceKeys = { q: "sale", w: "fair", e: "premium" };
    const key = event.key.toLowerCase();
    if (productKeys[key]) sellProduct(productKeys[key]);
    else if (priceKeys[key]) selectPrice(priceKeys[key]);
    else if (key === "r") emergencyRestock();
  });

  document.addEventListener("visibilitychange", () => { if (document.hidden && state?.running && !state.paused) togglePause(true); });

  ui.sound.textContent = soundEnabled ? "♪" : "×";
  ui.sound.setAttribute("aria-label", soundEnabled ? "音を切る" : "音を出す");
  ui.pause.style.visibility = "hidden";
  updateTitleRecord();
})();
