(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.MarketHeroCombat = api;
})(typeof window === 'object' ? window : {}, function () {
  'use strict';

  const FONT_SCALE = 0.6;
  const RISE_SPEED = 164;
  const RISE_DISTANCE_SCALE = 0.75;
  const BURST_SCALE = 0.768;
  const BURST_OPACITY = 0.9;
  const DAMAGE_COLORS = { macd: '#55cfff', focus: '#ff4b55', chart: '#ffe45e', ultimate: '#0a0b0f' };
  const glyphCache = new Map();
  const burstCache = new Map();
  const macdImpactCache = new Map();
  const GLYPHS = '0123456789-x';

  function compactLiving(entries) {
    let count = 0;
    for (const entry of entries) if (entry.life > 0) entries[count++] = entry;
    entries.length = count;
    return entries;
  }

  function surface(width, height) {
    if (typeof OffscreenCanvas === 'function') return new OffscreenCanvas(width, height);
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }

  function remember(cache, key, value, limit) {
    if (cache.size >= limit) cache.delete(cache.keys().next().value);
    cache.set(key, value);
    return value;
  }

  // Rasterize outlined glyphs once at 2x resolution; keep the per-digit bounce unchanged.
  function glyphs(size, fill, outline, stroke) {
    const key = [size, fill, outline, stroke].join(':');
    if (glyphCache.has(key)) return glyphCache.get(key);
    const width = Math.ceil(size + stroke * 2 + 6);
    const height = Math.ceil(size * 1.5 + stroke * 2 + 6);
    const canvas = surface(width * GLYPHS.length * 2, height * 2);
    if (!canvas) return remember(glyphCache, key, null, 64);
    const ctx = canvas.getContext('2d');
    if (!ctx) return remember(glyphCache, key, null, 64);
    ctx.scale(2, 2);
    ctx.font = `700 ${size}px Arial,sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineJoin = 'round';
    ctx.lineWidth = stroke;
    ctx.strokeStyle = outline;
    ctx.fillStyle = fill;
    for (let i = 0; i < GLYPHS.length; i++) {
      ctx.strokeText(GLYPHS[i], (i + .5) * width, height / 2);
      ctx.fillText(GLYPHS[i], (i + .5) * width, height / 2);
    }
    return remember(glyphCache, key, { canvas, width, height }, 64);
  }

  function drawGlyph(ctx, atlas, text, x, y, size, fill, outline, stroke) {
    const index = GLYPHS.indexOf(text);
    if (atlas && index >= 0) {
      const { canvas, width, height } = atlas;
      ctx.drawImage(canvas, index * width * 2, 0, width * 2, height * 2,
        x - width / 2, y - height / 2, width, height);
    } else {
      ctx.font = `700 ${size}px Arial,sans-serif`;
      ctx.lineWidth = stroke;
      ctx.strokeStyle = outline;
      ctx.fillStyle = fill;
      ctx.strokeText(text, x, y);
      ctx.fillText(text, x, y);
    }
  }

  function burstPath(ctx, x, y, width, height) {
    ctx.beginPath();
    for (let point = 0; point < 24; point++) {
      const angle = point / 24 * Math.PI * 2;
      const radius = point % 2 ? .58 : 1;
      const px = x + Math.cos(angle) * width * radius;
      const py = y + Math.sin(angle) * height * radius;
      if (point) ctx.lineTo(px, py); else ctx.moveTo(px, py);
    }
    ctx.closePath();
  }

  function burstImage(width, height, stroke) {
    const key = [width, height, stroke].join(':');
    if (burstCache.has(key)) return burstCache.get(key);
    const w = Math.ceil(width * 2 + stroke * 2 + 4);
    const h = Math.ceil(height * 2 + stroke * 2 + 4);
    const canvas = surface(w * 2, h * 2);
    if (!canvas) return remember(burstCache, key, null, 64);
    const ctx = canvas.getContext('2d');
    if (!ctx) return remember(burstCache, key, null, 64);
    ctx.scale(2, 2);
    burstPath(ctx, w / 2, h / 2, width, height);
    ctx.fillStyle = '#c41420';
    ctx.strokeStyle = '#71000b';
    ctx.lineWidth = stroke;
    ctx.fill();
    ctx.stroke();
    return remember(burstCache, key, { canvas, width: w, height: h }, 64);
  }

  function renderFrame(state, now, draw) {
    const timing = state.renderTiming || (state.renderTiming = {
      last: -Infinity, average: 0, fps: 60, fastFrames: 0, frames: 0,
      sampleStart: now, sampleFrames: 0,
      diagnostics: typeof location !== 'undefined' && ['127.0.0.1', 'localhost'].includes(location.hostname)
        && new URLSearchParams(location.search).get('debugPerformance') === '1'
    });
    const interval = 1000 / timing.fps;
    if (now - timing.last < interval - .6) return false;
    timing.last = now;
    const start = performance.now();
    draw(state);
    const cost = performance.now() - start;
    timing.frames++;
    timing.sampleFrames++;
    timing.average = timing.frames === 1 ? cost : timing.average * .92 + cost * .08;
    // Only the render cadence adapts. Simulation, enemy counts and hit timing stay untouched.
    if (timing.average > 11) {
      timing.fps = 30;
      timing.fastFrames = 0;
    } else if (timing.fps === 30) {
      timing.fastFrames = timing.average < 6 ? timing.fastFrames + 1 : 0;
      if (timing.fastFrames >= 90) timing.fps = 60;
    }
    if (timing.diagnostics && now - timing.sampleStart >= 1000) {
      let output = document.getElementById('market-hero-perf');
      if (!output) {
        output = document.createElement('output');
        output.id = 'market-hero-perf';
        output.style.cssText = 'position:fixed;left:8px;bottom:8px;z-index:9999;background:#fff;color:#000;font:12px Arial;padding:6px;pointer-events:none';
        document.body.append(output);
      }
      output.textContent = `描画 ${(timing.sampleFrames * 1000 / (now - timing.sampleStart)).toFixed(1)} FPS / CPU ${timing.average.toFixed(2)} ms / 上限 ${timing.fps}`;
      timing.sampleStart = now;
      timing.sampleFrames = 0;
    }
    return true;
  }

  function incomeRate(state) {
    return (state.incomeGainLevel || 0) * 0.003 + (state.unrealizedGainLevel || 0) * 0.001 + (state.incomeBonus || 0);
  }

  function upgradeUnrealizedGain(state) {
    const previousMaxHp = state.maxHp;
    state.unrealizedGainLevel = (state.unrealizedGainLevel || 0) + 1;
    state.maxHp = Math.round(previousMaxHp * 1.04);
    state.hp = Math.min(state.maxHp, state.hp + state.maxHp - previousMaxHp);
    state.attack *= 1.04;
    state.defense *= 1.04;
    state.moveSpeed *= 1.03;
    state.attackSpeed *= 1.03;
    state.criticalDamage *= 1.05;
  }

  function weightedUpgradeOrder(choices, random = Math.random) {
    const remaining = choices.slice();
    const ordered = [];
    const weight = choice => choice.key === 'unrealizedGain' ? 0.8 : 1;
    while (remaining.length) {
      let draw = random() * remaining.reduce((sum, choice) => sum + weight(choice), 0);
      let index = 0;
      while (index < remaining.length - 1 && draw >= weight(remaining[index])) {
        draw -= weight(remaining[index++]);
      }
      ordered.push(remaining.splice(index, 1)[0]);
    }
    return ordered;
  }

  function encounterHpMultiplier(state, boss) {
    if (boss === undefined) return state.activeBoss >= 2 || state.bossesDefeated >= 3 ? 1.5 : 1;
    return boss >= 2 && boss <= 4 ? 2 : 1;
  }

  function focusEdge(bounds, x, y, dx, dy) {
    const length = Math.hypot(dx, dy);
    if (length < 0.0001) { dx = 0; dy = -1; }
    else { dx /= length; dy /= length; }
    const tx = dx > 0 ? (bounds.maxX - x) / dx : dx < 0 ? (bounds.minX - x) / dx : Infinity;
    const ty = dy > 0 ? (bounds.maxY - y) / dy : dy < 0 ? (bounds.minY - y) / dy : Infinity;
    const distance = Math.max(0, Math.min(tx, ty));
    return { x: x + dx * distance, y: y + dy * distance };
  }

  function focusHit(enemy, path) {
    const dx = path.x2 - path.x1, dy = path.y2 - path.y1;
    const length2 = dx * dx + dy * dy;
    const along = length2 ? Math.max(0, Math.min(1, ((enemy.x - path.x1) * dx + (enemy.y - path.y1) * dy) / length2)) : 0;
    const x = enemy.x - path.x1 - along * dx, y = enemy.y - path.y1 - along * dy;
    return x * x + y * y <= ((enemy.radius || 0) + 13) ** 2;
  }

  function updateFocus(state, bounds, dt) {
    const focus = state.focusBeamState ||= { paths: [], hits: new Map(), heat: new Map(), mode: null, maxMultiplier: 1 };
    focus.paths.length = 0;
    focus.hits.clear();
    focus.maxMultiplier = 1;
    const count = Math.min(5, Math.max(0, state.focusLevel || 0));
    if (!count) { focus.heat.clear(); focus.mode = null; return focus; }
    const nearest = [];
    let boss = null, bossDistance = Infinity;
    for (const enemy of state.enemies) {
      if (!(enemy.hp > 0)) continue;
      const distance = (enemy.x - state.player.x) ** 2 + (enemy.y - state.player.y) ** 2;
      let index = nearest.findIndex(entry => entry.distance > distance);
      if (index < 0) index = nearest.length;
      if (index < count) { nearest.splice(index, 0, { enemy, distance }); if (nearest.length > count) nearest.pop(); }
      if (enemy.boss !== undefined) {
        const main = enemy.boss === state.activeBoss;
        const previousMain = boss && boss.boss === state.activeBoss;
        if (!boss || (main && !previousMain) || (main === !!previousMain && distance < bossDistance)) {
          boss = enemy; bossDistance = distance;
        }
      }
    }
    const mode = boss ? boss.id : null;
    if (focus.mode !== mode) { focus.heat.clear(); focus.mode = mode; }
    for (let index = 0; index < nearest.length; index++) {
      const target = nearest[index].enemy;
      const { x, y } = state.player;
      const canReflect = boss && target !== boss && target.x >= bounds.minX && target.x <= bounds.maxX && target.y >= bounds.minY && target.y <= bounds.maxY;
      const end = canReflect ? target : focusEdge(bounds, x, y, target.x - x, target.y - y);
      focus.paths.push({ x1: x, y1: y, x2: end.x, y2: end.y, target, beamIndex: index, reflected: false });
      if (canReflect) {
        const end = focusEdge(bounds, target.x, target.y, boss.x - target.x, boss.y - target.y);
        focus.paths.push({ x1: target.x, y1: target.y, x2: end.x, y2: end.y, target: boss, beamIndex: index, reflected: true });
      }
    }
    for (const path of focus.paths) for (const enemy of state.enemies) {
      if (enemy.hp > 0 && !focus.hits.has(enemy.id) && focusHit(enemy, path))
        focus.hits.set(enemy.id, { enemy, mult: 1, hitX: path.x1 });
    }
    const now = state.time;
    for (const [id, heat] of focus.heat) if (now - heat.lastHit > 0.5) focus.heat.delete(id);
    for (const [id, hit] of focus.hits) {
      if (boss && id !== boss.id) continue;
      let heat = focus.heat.get(id);
      if (!heat) { heat = { seconds: 0, lastHit: now }; focus.heat.set(id, heat); }
      else if (now > heat.lastHit) heat.seconds = Math.min(3, heat.seconds + Math.max(0, Math.min(dt, now - heat.lastHit)));
      heat.lastHit = now;
      hit.mult = 1 + 0.4 * heat.seconds;
    }
    const bossMultiplier = boss ? focus.hits.get(boss.id)?.mult || 1 : null;
    for (const hit of focus.hits.values()) {
      if (boss) hit.mult = bossMultiplier;
      focus.maxMultiplier = Math.max(focus.maxMultiplier, hit.mult);
    }
    for (const path of focus.paths) path.mult = focus.hits.get(path.target.id)?.mult || 1;
    return focus;
  }

  function drawFocus(ctx, state) {
    const focus = state.focusBeamState;
    if (!focus?.paths.length) return;
    const impacts = new Map();
    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowBlur = 0;
    for (const path of focus.paths) {
      const heat = Math.max(0, (path.mult - 1) / 1.2);
      const dx = path.x2 - path.x1, dy = path.y2 - path.y1, length = Math.hypot(dx, dy);
      if (length < 0.001) continue;
      const nx = -dy / length, ny = dx / length;
      ctx.globalAlpha = .96;
      ctx.beginPath(); ctx.moveTo(path.x1, path.y1); ctx.lineTo(path.x2, path.y2);
      for (const [color, width] of [['#201029', 40], ['#ff6245', 26], ['#ffe578', 12], ['#fffde9', 5]]) {
        ctx.strokeStyle = color; ctx.lineWidth = width * (1 + heat * .2); ctx.stroke();
      }
      for (let strand = 0; strand < 2; strand++) {
        ctx.beginPath();
        for (let step = 0; step <= 40; step++) {
          const progress = step / 40;
          const phase = progress * Math.PI * 10 - state.time * (11 + heat * 9) + path.beamIndex * 1.7 + strand * Math.PI;
          const offset = Math.sin(phase) * (14 + heat * 4 + Math.sin(progress * Math.PI) * 4);
          const x = path.x1 + dx * progress + nx * offset, y = path.y1 + dy * progress + ny * offset;
          if (step) ctx.lineTo(x, y); else ctx.moveTo(x, y);
        }
        ctx.globalAlpha = .8; ctx.strokeStyle = strand ? '#ff75c9' : '#86f4ff'; ctx.lineWidth = 5 + heat; ctx.stroke();
      }
      if (path.target.hp > 0 && focus.hits.has(path.target.id)) impacts.set(path.target.id, path);
    }
    for (const path of impacts.values()) {
      const target = path.target, heat = Math.max(0, (path.mult - 1) / 1.2);
      const dx = target.x - path.x1, dy = target.y - path.y1, length = Math.max(1, Math.hypot(dx, dy));
      const x = target.x - dx / length * target.radius * .55, y = target.y - dy / length * target.radius * .55;
      const size = (65 + Math.min(30, target.radius * .2)) * (1 + heat * .45);
      const impact = macdImpactImage(heat > .66 ? '#fff1a3' : '#ff7750');
      ctx.globalAlpha = .9;
      if (impact) ctx.drawImage(impact, x - size / 2, y - size / 2, size, size);
      ctx.strokeStyle = '#fff3a3'; ctx.lineWidth = 3 + heat * 2;
      ctx.beginPath(); ctx.arc(x, y, size * (.2 + Math.sin(state.time * 18) * .025), 0, Math.PI * 2); ctx.stroke();
    }
    ctx.restore();
  }

  function drawFocusLabel(ctx, state) {
    const focus = state.focusBeamState;
    const path = focus?.paths.find(p => p.target.hp > 0 && focus.hits.has(p.target.id) &&
      (focus.mode === p.target.id || (focus.mode === null && p.beamIndex === 0)));
    if (!path) return;
    const point = anchor(state, path.target, path.x1);
    ctx.save();
    ctx.font = '700 28px Arial,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
    ctx.lineWidth = 5; ctx.strokeStyle = '#271124'; ctx.fillStyle = path.mult >= 2.19 ? '#fff1a3' : '#ffffff';
    const label = 'FOCUS x' + path.mult.toFixed(1);
    ctx.strokeText(label, point.x, point.y - 30); ctx.fillText(label, point.x, point.y - 30);
    ctx.restore();
  }

  function financeInfo(state, formatMoney) {
    const gain = state.unrealizedIncome - state.marketLoss;
    const multiplier = state.assetMult * (state.time < state.limitUntil ? 2 : 1);
    return [
      `総資産 × ${multiplier.toFixed(1)}`,
      formatMoney(state.assets),
      `元本 ${formatMoney(state.principal)}`,
      `${gain >= 0 ? '含み益 ＋' : '含み損 −'}${formatMoney(Math.abs(gain))}`,
      `次回複利 ${Math.max(0, Math.ceil(state.interval - state.compoundClock))}秒`
    ];
  }

  function drawFinanceBackground(ctx, state, formatMoney) {
    const clientWidth = ctx.canvas.clientWidth || 390;
    const unit = 1000 / clientWidth;
    const width = Math.max(110, Math.min(216, clientWidth - 144));
    const height = 90;
    const dark = state.activeBoss >= 0;
    let cache = state.financeBackdrop;
    if (!cache || cache.width !== width || cache.viewportHeight !== state.viewportHeight) {
      let safeBottom = 0;
      if (typeof getComputedStyle === 'function') safeBottom = parseFloat(getComputedStyle(ctx.canvas).getPropertyValue('--hud-safe-bottom')) || 0;
      cache = state.financeBackdrop = { width, viewportHeight: state.viewportHeight, safeBottom, nextUpdate: -Infinity,
        canvas: surface(Math.ceil(width * 2), height * 2) };
    }
    if (!cache.canvas) return;
    if (state.time >= cache.nextUpdate || cache.dark !== dark) {
      cache.nextUpdate = state.time + .25;
      const lines = financeInfo(state, formatMoney);
      const key = lines.join('|');
      if (cache.key !== key || cache.dark !== dark) {
        const ink = cache.canvas.getContext('2d');
        if (!ink) return;
        ink.setTransform(2, 0, 0, 2, 0, 0);
        ink.clearRect(0, 0, width, height);
        ink.textAlign = 'left';
        ink.textBaseline = 'top';
        const sizes = [10, 26, 10, 10, 10], tops = [0, 14, 47, 61, 76];
        for (let i = 0; i < lines.length; i++) {
          let size = sizes[i];
          ink.font = `${i === 1 ? 700 : 600} ${size}px Arial,"Yu Gothic",Meiryo,sans-serif`;
          const measured = ink.measureText(lines[i]).width;
          if (measured > width) {
            size *= width / measured;
            ink.font = `${i === 1 ? 700 : 600} ${size}px Arial,"Yu Gothic",Meiryo,sans-serif`;
          }
          ink.fillStyle = dark ? (i === 1 ? '#ffedbd' : '#e0eeeb') : (i === 1 ? '#574013' : '#274637');
          if (i === 3 && state.unrealizedIncome < state.marketLoss) ink.fillStyle = dark ? '#ffacb8' : '#812d41';
          ink.fillText(lines[i], 0, tops[i]);
        }
        cache.key = key;
        cache.dark = dark;
      }
    }
    ctx.save();
    ctx.globalAlpha = dark ? .76 : .72;
    ctx.shadowBlur = 0;
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(cache.canvas, 12 * unit, state.viewportHeight - (36 + 12 + height + cache.safeBottom) * unit,
      width * unit, height * unit);
    ctx.restore();
  }

  function nextMacdTarget(enemies, lane, reserved) {
    let preferred = null, fallback = null, nearest = Infinity, fallbackDistance = Infinity;
    for (const enemy of enemies) {
      if (lane.visited.has(enemy.id)) continue;
      const dx = enemy.x - lane.x, dy = enemy.y - lane.y;
      const distance = dx * dx + dy * dy;
      if (distance < fallbackDistance) { fallback = enemy; fallbackDistance = distance; }
      if (!reserved.has(enemy.id) && distance < nearest) { preferred = enemy; nearest = distance; }
    }
    return preferred || fallback;
  }

  function macdImpactImage(color) {
    if (macdImpactCache.has(color)) return macdImpactCache.get(color);
    const canvas = surface(256, 256);
    if (!canvas) return null;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.scale(2, 2);
    ctx.translate(64, 64);
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(0, 0, 27, 0, Math.PI * 2);
    for (let ray = 0; ray < 6; ray++) {
      const angle = ray * Math.PI / 3;
      ctx.moveTo(Math.cos(angle) * 12, Math.sin(angle) * 12);
      ctx.lineTo(Math.cos(angle) * 47, Math.sin(angle) * 47);
    }
    // The glow is baked once per color, never blurred on the live game canvas.
    ctx.shadowColor = color;
    ctx.shadowBlur = 10;
    ctx.strokeStyle = color;
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.strokeStyle = '#f4ffff';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(0, 0, 6, 0, Math.PI * 2);
    ctx.fill();
    return remember(macdImpactCache, color, canvas, 16);
  }

  function drawMacdImpact(ctx, x, y, color, size, rotation) {
    const sprite = macdImpactImage(color);
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    if (sprite) ctx.drawImage(sprite, -size, -size, size * 2, size * 2);
    else {
      ctx.strokeStyle = color;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(0, 0, size * .5, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawMacdHit(ctx, hit) {
    const progress = 1 - hit.life / hit.maxLife;
    ctx.save();
    ctx.shadowBlur = 0;
    ctx.globalAlpha = Math.min(1, hit.life * 4);
    ctx.imageSmoothingEnabled = true;
    drawMacdImpact(ctx, hit.x, hit.y, hit.color, hit.size * (.32 + progress * 1.05), progress * 1.8);
    ctx.restore();
  }

  function drawMacd(ctx, state, mobile) {
    const transform = ctx.getTransform();
    const left = -transform.e / transform.a - 100;
    const right = (ctx.canvas.width - transform.e) / transform.a + 100;
    const top = -transform.f / transform.d - 100;
    const bottom = (ctx.canvas.height - transform.f) / transform.d + 100;
    ctx.save();
    ctx.shadowBlur = 0;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.imageSmoothingEnabled = true;
    for (const line of state.techLines) {
      if (line.kind !== 'macd' || line.delay > 0 || line.life <= 0) continue;
      if (Math.max(line.x1, line.x2) < left || Math.min(line.x1, line.x2) > right
        || Math.max(line.y1, line.y2) < top || Math.min(line.y1, line.y2) > bottom) continue;
      const dx = line.x2 - line.x1, dy = line.y2 - line.y1;
      const length = Math.hypot(dx, dy), nx = length ? -dy / length : 0, ny = length ? dx / length : 0;
      const count = mobile ? 7 : Math.min(18, Math.max(8, Math.floor(length / 38)));
      const tick = Math.floor(state.time * 30), seed = line.seed || 0;
      let shape = line.macdShape;
      if (!shape || shape.count !== count) shape = line.macdShape = { count, points: new Float64Array((count + 1) * 2) };
      if (shape.tick !== tick || shape.x1 !== line.x1 || shape.y1 !== line.y1 || shape.x2 !== line.x2 || shape.y2 !== line.y2) {
        const amplitude = Math.max(10, Math.min(26, length * .06));
        for (let point = 0; point <= count; point++) {
          const fraction = point / count;
          const offset = point === 0 || point === count ? 0
            : (point % 2 ? 1 : -1) * amplitude * (.62 + .38 * Math.sin(point * 4.7 + seed + tick / 30 * 42));
          shape.points[point * 2] = line.x1 + dx * fraction + nx * offset;
          shape.points[point * 2 + 1] = line.y1 + dy * fraction + ny * offset;
        }
        Object.assign(shape, { tick, x1: line.x1, y1: line.y1, x2: line.x2, y2: line.y2 });
      }
      const alpha = Math.min(1, line.life * 2.6);
      ctx.beginPath();
      for (let point = 0; point <= count; point++) {
        const x = shape.points[point * 2], y = shape.points[point * 2 + 1];
        if (point) ctx.lineTo(x, y); else ctx.moveTo(x, y);
      }
      ctx.globalAlpha = alpha * .18;
      ctx.strokeStyle = line.color;
      ctx.lineWidth = line.width + 32;
      ctx.stroke();
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = '#07112f';
      ctx.lineWidth = line.width + 14;
      ctx.stroke();
      ctx.strokeStyle = line.color;
      ctx.lineWidth = line.width;
      ctx.stroke();
      ctx.strokeStyle = '#f4ffff';
      ctx.lineWidth = Math.max(3, line.width * .3);
      ctx.stroke();
      ctx.beginPath();
      for (let point = 2; point < count; point += 3) {
        const x = shape.points[point * 2], y = shape.points[point * 2 + 1];
        const fork = (point % 2 ? 1 : -1) * 36;
        ctx.moveTo(x, y);
        ctx.lineTo(x + nx * fork + ny * 9, y + ny * fork - nx * 9);
      }
      ctx.strokeStyle = line.color;
      ctx.lineWidth = Math.max(3, line.width * .24);
      ctx.stroke();
      const progress = 1 - line.life / (line.maxLife || .9);
      drawMacdImpact(ctx, line.x2, line.y2, line.color, 48 + progress * 22, seed);
    }
    ctx.restore();
  }

  function income(state) {
    state.enemyDefeats = (state.enemyDefeats || 0) + 1;
    const rate = incomeRate(state);
    if (rate <= 0) return 0;
    if (state.hp >= state.maxHp) {
      state.barrierCharges = 1;
      return 0;
    }
    const healed = Math.min(state.maxHp - state.hp, Math.max(1, Math.ceil(state.maxHp * rate)));
    state.hp += healed;
    return healed;
  }

  function bossRecovery(state, count = 1) {
    if (!(state.hp > 0) || count <= 0) return 0;
    const rate = 0.1 + incomeRate(state);
    // Gauge credit follows the same milestones, even when health is already full.
    state.ultimate = Math.min(100, (state.ultimate || 0) + rate * 100 * count);
    const perStep = Math.ceil(state.maxHp * rate);
    const healed = Math.max(0, Math.min(state.maxHp - state.hp, perStep * count));
    state.hp += healed;
    return healed;
  }

  function bossDamageRecovery(state, target, damage) {
    if (target.boss === undefined || !(target.maxHp > 0) || !(damage > 0)) return 0;
    if (state.finalBossStage >= 2 && target.boss < 5 && !target.tierBoss) return 0;
    target.recoveryDamage = Math.min(target.maxHp, (target.recoveryDamage || 0) + damage);
    // Each threshold is paid once, even for simultaneous, multi-hit or lethal attacks.
    const steps = Math.min(10, Math.floor(target.recoveryDamage / target.maxHp * 10 + 1e-9));
    const newlyReached = Math.max(0, steps - (target.recoverySteps || 0));
    target.recoverySteps = steps;
    return bossRecovery(state, newlyReached);
  }

  function bossReward(state, summoned = false) {
    state.bossDefeats = (state.bossDefeats || 0) + 1;
    if (summoned) {
      bossRecovery(state);
      return;
    }
    state.attack *= 1.05;
    state.incomeBonus = (state.incomeBonus || 0) + 0.00025;
  }

  function block(state) {
    if (!(state.barrierCharges > 0)) return false;
    state.barrierCharges = 0;
    state.barrierFlashUntil = state.time + 0.3;
    return true;
  }

  function ultimateConfig(state) {
    const ticksTotal = Math.max(1, Math.round(10 * Math.max(0.1, state.attackSpeed || 1)));
    return { ticksTotal, ticksLeft: ticksTotal, tickInterval: 3 / ticksTotal, tickClock: 0 };
  }

  function normalHpMultiplier(state) {
    return state.activeBoss < 0 && state.bossesDefeated >= 1 ? 0.75 : 1;
  }

  function anchor(state, target, hitX) {
    const boss = target.boss !== undefined;
    const phase = target.phase || 0;
    const scale = state.damageSpriteScale || 1;
    const pulse = 1 + Math.sin(state.time * 8 + phase) * 0.035;
    const bob = Math.sin(state.time * (boss ? 2.5 : 6 + (target.type || 0)) + phase) * (boss ? 5 : 3);
    const height = target.boss === 6 ? 500 : target.boss === 7 ? 400 : boss ? 142 * (target.tierBoss ? 3.6 : 1.5) : 78;
    let localX = 0;
    let localY = -height * (target.boss === 6 || target.boss === 7 ? 0.58 : 0.72);
    if (target.boss === 7) {
      const side = (hitX === undefined ? state.player.x : hitX) < target.x ? -1 : 1;
      localX = side * (170 + Math.sin(state.time * 1.1 + phase) * 55);
      localY -= side * Math.cos(state.time * 0.9 + phase) * 90;
    }
    const rotation = Math.sin(state.time * (3 + (target.type || 0)) + phase) * 0.07;
    const sx = localX * scale / pulse;
    const sy = localY * scale * pulse;
    return {
      x: target.x + sx * Math.cos(rotation) - sy * Math.sin(rotation),
      y: target.y + bob + sx * Math.sin(rotation) + sy * Math.cos(rotation) - 12
    };
  }

  // Keep a small stack per target/source, not a global last-N list that hides other enemies.
  function damage(state, target, amount, options = {}) {
    if (!Number.isFinite(amount) || amount <= 0) return;
    const kind = options.kind || 'other';
    const critical = !!options.critical;
    const key = target.id + ':' + kind + ':' + critical;
    const buckets = state.damageBuckets || (state.damageBuckets = new Map());
    const bucket = compactLiving(buckets.get(key) || []);
    const delay = Math.max(0, options.delay || 0);
    const last = bucket[bucket.length - 1];
    const canMerge = last && Math.abs(last.delay - delay) < 0.05 &&
      (last.age < (options.continuous ? 0.25 : 0.08) || bucket.length >= 3);
    if (canMerge) {
      last.value += amount;
      if (!options.continuous) last.hits++;
      return;
    }
    const pos = anchor(state, target, options.hitX);
    target.damageSequence = (target.damageSequence || 0) + 1;
    const entry = {
      targetId: target.id, x: pos.x + ((target.damageSequence % 3) - 1) * 8, y: pos.y,
      value: amount, kind, critical, poison: kind === 'poison', hits: 1,
      life: critical ? 1.05 : kind === 'poison' ? 0.8 : 0.9, age: 0, delay
    };
    state.damageNumbers.push(entry);
    bucket.push(entry);
    buckets.set(key, bucket);
  }

  function updateDamage(state, dt) {
    for (const entry of state.damageNumbers) {
      let elapsed = dt;
      if (entry.delay > 0) {
        elapsed = Math.max(0, dt - entry.delay);
        entry.delay = Math.max(0, entry.delay - dt);
      }
      // Shorten the travel by ending sooner, without slowing the upward motion.
      elapsed = Math.min(elapsed, Math.max(0, entry.life) * RISE_DISTANCE_SCALE);
      entry.age = (entry.age || 0) + elapsed;
      entry.life = Math.max(0, entry.life - elapsed / RISE_DISTANCE_SCALE);
      entry.y -= RISE_SPEED * elapsed;
    }
    compactLiving(state.damageNumbers);
    if (state.damageBuckets) {
      for (const [key, entries] of state.damageBuckets) {
        if (!compactLiving(entries).length) state.damageBuckets.delete(key);
      }
    }
  }

  function color(entry) {
    if (entry.player) return '#ff5268';
    if (entry.poison || entry.kind === 'poison') return '#c86cff';
    return DAMAGE_COLORS[entry.kind] || '#fffaf0';
  }

  function drawDamage(ctx, state, mobile) {
    const transform = ctx.getTransform();
    const left = -transform.e / transform.a;
    const right = (ctx.canvas.width - transform.e) / transform.a;
    const top = -transform.f / transform.d;
    const bottom = (ctx.canvas.height - transform.f) / transform.d;
    const scale = (mobile ? 1 : 0.72) * FONT_SCALE;
    ctx.save();
    ctx.shadowBlur = 0;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineJoin = 'round';
    for (const entry of state.damageNumbers) {
      if (entry.delay > 0) continue;
      if (entry.x < left - 40 || entry.x > right + 40 || entry.y < top - 40 || entry.y > bottom + 60) continue;
      const text = (entry.player ? '-' : '') + Math.max(1, Math.round(entry.value));
      const size = (entry.player ? 44 : entry.critical ? 58 : entry.poison ? 38 : 42) * scale;
      const spacing = size * 0.68;
      const width = (text.length - 1) * spacing;
      const burstWidth = Math.max(size * 0.92, width + size * 0.86) * 0.62 * BURST_SCALE / FONT_SCALE;
      const margin = entry.critical ? Math.max(width / 2 + size * 0.5, burstWidth) : width / 2 + size * 0.5;
      const x = Math.max(left + margin, Math.min(right - margin, entry.x));
      const fill = color(entry);
      const ultimate = entry.kind === 'ultimate';
      const outline = ultimate ? '#d79b20' : '#21091d';
      const stroke = (ultimate ? 2.5 : entry.critical ? 4 : 3) * scale;
      const atlas = glyphs(size, fill, outline, stroke);
      const progress = Math.min(1, (entry.age || 0) * 5);
      ctx.globalAlpha = Math.min(1, entry.life * 2.6);
      if (entry.critical && !entry.player) {
        ctx.save();
        ctx.globalAlpha *= BURST_OPACITY;
        const pulse = 1 + 0.12 * Math.sin(Math.min(1, entry.age * 7) * Math.PI);
        const height = Math.max(size * 0.5, 24 * scale) * BURST_SCALE / FONT_SCALE;
        const burst = burstImage(burstWidth, height, 3 * scale);
        if (burst) {
          ctx.drawImage(burst.canvas, x - burst.width * pulse / 2,
            entry.y + 2 * scale - burst.height * pulse / 2, burst.width * pulse, burst.height * pulse);
        } else {
          burstPath(ctx, x, entry.y + 2 * scale, burstWidth * pulse, height * pulse);
          ctx.fillStyle = '#c41420';
          ctx.strokeStyle = '#71000b';
          ctx.lineWidth = 3 * scale;
          ctx.fill();
          ctx.stroke();
        }
        ctx.restore();
      }
      for (let digit = 0; digit < text.length; digit++) {
        const bounce = Math.sin(Math.max(0, Math.min(1, progress - digit * 0.045)) * Math.PI) * (entry.critical ? 13 : 9) * scale;
        const dx = x - width / 2 + digit * spacing;
        const dy = entry.y - bounce;
        drawGlyph(ctx, atlas, text[digit], dx, dy, size, fill, outline, stroke);
      }
      if (entry.hits > 1) {
        const count = 'x' + entry.hits;
        const countSize = 17 * scale;
        const countAtlas = glyphs(countSize, '#ffffff', '#10151e', 2 * scale);
        for (let digit = 0; digit < count.length; digit++) {
          drawGlyph(ctx, countAtlas, count[digit],
            x + width / 2 + size * .42 + (digit - (count.length - 1) / 2) * countSize * .62,
            entry.y + size * .55, countSize, '#ffffff', '#10151e', 2 * scale);
        }
      }
    }
    ctx.restore();
  }

  function drawBarrier(ctx, state, spriteScale) {
    const charges = Math.min(1, state.barrierCharges || 0);
    const flash = Math.max(0, (state.barrierFlashUntil || 0) - state.time);
    if (!charges && !flash) return;
    ctx.save();
    ctx.translate(state.player.x, state.player.y);
    ctx.scale(spriteScale, spriteScale);
    ctx.lineJoin = 'miter';
    for (let layer = 0; layer < 3; layer++) {
      const size = 1.18 - layer * 0.15 + flash * 0.35;
      ctx.beginPath();
      ctx.moveTo(-46 * size, 26);
      for (let point = 0; point <= 16; point++) {
        const angle = Math.PI - point / 16 * Math.PI;
        const flicker = Math.sin(state.time * 12 + point * 2.9 + layer) * 9;
        const spike = point % 2 ? 0.78 : 1.15;
        ctx.lineTo(Math.cos(angle) * (54 + flicker) * size * spike,
          18 - Math.sin(angle) * (126 + flicker * 2) * size * spike);
      }
      ctx.lineTo(46 * size, 26);
      ctx.closePath();
      ctx.fillStyle = ['rgba(18,188,65,0.16)', 'rgba(42,238,110,0.18)', 'rgba(196,255,112,0.1)'][layer];
      ctx.strokeStyle = ['#22d679', '#aaff7b', '#e3ffd0'][layer];
      ctx.lineWidth = layer === 0 ? 5 : 2.5;
      ctx.fill();
      ctx.stroke();
    }
    ctx.fillStyle = charges ? '#c4ff89' : '#143f2e';
    ctx.fillRect(-8.5, 37, 17, 6);
    ctx.restore();
  }

  function drawChain(ctx, state) {
    const elapsed = state.time - state.macdChainStartedAt;
    const max = state.macdChainMax || 0;
    const delay = state.macdChainDelay || 0.16;
    if (!max || !(elapsed >= 0 && elapsed < max * delay + 0.72)) return;
    const count = Math.min(max, Math.floor(elapsed / delay) + 1);
    const unit = 1000 / Math.max(1, ctx.canvas.clientWidth);
    const width = 148 * unit;
    const height = 38 * unit;
    const top = (state.activeBoss >= 0 ? 118 : 54) + 51 + 31;
    ctx.save();
    ctx.translate(1000 - 12 * unit - width, top * unit);
    ctx.fillStyle = 'rgba(5,25,33,0.9)';
    ctx.strokeStyle = '#80edff';
    ctx.lineWidth = 2 * unit;
    ctx.fillRect(0, 0, width, height);
    ctx.strokeRect(0, 0, width, height);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `900 ${23 * unit}px Arial,sans-serif`;
    ctx.fillStyle = '#c9f7ff';
    ctx.fillText(count + ' CHAIN!', width / 2, height / 2);
    ctx.restore();
  }

  function debug(state) {
    if (typeof location === 'undefined' || !['127.0.0.1', 'localhost'].includes(location.hostname)) return;
    if (new URLSearchParams(location.search).get('debugFocusOnly') === '1' && !state.debugFocusOnlyApplied) {
      state.debugFocusOnlyApplied = true;
      state.focusLevel = 5;
      state.macdLevel = state.podLevel = state.chartAttack = state.capitalGainLevel = state.marginCallLevel = 0;
      state.ultimate = state.bollingerLevel = 0;
      state.hp = state.maxHp = 99999;
      state.defense = 10000;
      state.activeBoss = state.bossIndex = 2;
      state.earlyUpgradeIndex = 999;
      state.player.x = 500; state.player.y = 400;
      state.enemies = [[250, 280], [700, 300], [550, 700], [350, 600], [500, -100]].map(([x, y], index) => ({
        id: -100 - index, x, y, hp: 1e8, maxHp: 1e8, boss: index === 4 ? 2 : undefined, tierBoss: false,
        type: 0, speed: 0, radius: index === 4 ? 78 : 20, damage: 0, damageClock: 99,
        podHitClock: 0, poisonUntil: 0, poisonDps: 0, poisonNumberClock: 0, stunnedUntil: 0,
        phase: index, skillClock: 99, superDashUntil: 0, superDashVx: 0, superDashVy: 0
      }));
    }
    if (new URLSearchParams(location.search).get('debugBarrier') !== '1' || state.debugBarrierApplied) return;
    state.debugBarrierApplied = true;
    state.barrierCharges = 1;
    state.incomeGainLevel = 1;
    state.attackSpeed = 2;
  }

  return { FONT_SCALE, RISE_SPEED, RISE_DISTANCE_SCALE, BURST_SCALE, BURST_OPACITY, incomeRate, upgradeUnrealizedGain, weightedUpgradeOrder, encounterHpMultiplier, income, bossRecovery, bossDamageRecovery, bossReward, block,
    ultimateConfig, normalHpMultiplier, anchor, damage, updateDamage, drawDamage, drawBarrier, drawChain, renderFrame,
    updateFocus, drawFocus, drawFocusLabel, focusHit, nextMacdTarget, drawMacd, drawMacdHit, financeInfo, drawFinanceBackground, color, debug };
});
