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
    return (state.incomeGainLevel || 0) * 0.003 + (state.incomeBonus || 0);
  }

  function income(state) {
    state.enemyDefeats = (state.enemyDefeats || 0) + 1;
    const rate = incomeRate(state);
    if (rate <= 0) return 0;
    if (state.hp >= state.maxHp) {
      state.barrierCharges = Math.min(2, (state.barrierCharges || 0) + 1);
      return 0;
    }
    const healed = Math.min(state.maxHp - state.hp, Math.max(1, Math.ceil(state.maxHp * rate)));
    state.hp += healed;
    return healed;
  }

  function bossReward(state) {
    state.bossDefeats = (state.bossDefeats || 0) + 1;
    state.attack *= 1.05;
    state.incomeBonus = (state.incomeBonus || 0) + 0.00025;
  }

  function block(state) {
    if (!(state.barrierCharges > 0)) return false;
    state.barrierCharges--;
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
    const charges = state.barrierCharges || 0;
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
    for (let charge = 0; charge < 2; charge++) {
      ctx.fillStyle = charge < charges ? '#c4ff89' : '#143f2e';
      ctx.fillRect(-19 + charge * 21, 37, 17, 6);
    }
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
    if (new URLSearchParams(location.search).get('debugBarrier') !== '1' || state.debugBarrierApplied) return;
    state.debugBarrierApplied = true;
    state.barrierCharges = 2;
    state.incomeGainLevel = 1;
    state.attackSpeed = 2;
  }

  return { FONT_SCALE, RISE_SPEED, RISE_DISTANCE_SCALE, BURST_SCALE, BURST_OPACITY, incomeRate, income, bossReward, block,
    ultimateConfig, normalHpMultiplier, anchor, damage, updateDamage, drawDamage, drawBarrier, drawChain, renderFrame, color, debug };
});
