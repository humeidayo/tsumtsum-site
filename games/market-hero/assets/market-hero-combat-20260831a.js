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
    state.incomeBonus = (state.incomeBonus || 0) + 0.003;
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
    const bucket = (buckets.get(key) || []).filter(entry => entry.life > 0);
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
    state.damageNumbers = state.damageNumbers.filter(entry => entry.life > 0);
    if (state.damageBuckets) {
      for (const [key, entries] of state.damageBuckets) {
        const active = entries.filter(entry => entry.life > 0);
        if (active.length) state.damageBuckets.set(key, active);
        else state.damageBuckets.delete(key);
      }
    }
  }

  function color(entry) {
    if (entry.player) return '#ff5268';
    if (entry.poison || entry.kind === 'poison') return '#c86cff';
    return { macd: '#55cfff', focus: '#ff4b55', chart: '#ffe45e', ultimate: '#0a0b0f' }[entry.kind] || '#fffaf0';
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
      const progress = Math.min(1, (entry.age || 0) * 5);
      ctx.globalAlpha = Math.min(1, entry.life * 2.6);
      if (entry.critical && !entry.player) {
        ctx.save();
        ctx.globalAlpha *= BURST_OPACITY;
        const pulse = 1 + 0.12 * Math.sin(Math.min(1, entry.age * 7) * Math.PI);
        const height = Math.max(size * 0.5, 24 * scale) * BURST_SCALE / FONT_SCALE;
        ctx.beginPath();
        for (let point = 0; point < 24; point++) {
          const angle = point / 24 * Math.PI * 2;
          const radius = point % 2 ? 0.58 : 1;
          const px = x + Math.cos(angle) * burstWidth * radius * pulse;
          const py = entry.y + 2 * scale + Math.sin(angle) * height * radius * pulse;
          if (point) ctx.lineTo(px, py); else ctx.moveTo(px, py);
        }
        ctx.closePath();
        ctx.fillStyle = '#c41420';
        ctx.strokeStyle = '#71000b';
        ctx.lineWidth = 3 * scale;
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }
      ctx.font = `900 ${size}px "Arial Black",Impact,sans-serif`;
      for (let digit = 0; digit < text.length; digit++) {
        const bounce = Math.sin(Math.max(0, Math.min(1, progress - digit * 0.045)) * Math.PI) * (entry.critical ? 13 : 9) * scale;
        const dx = x - width / 2 + digit * spacing;
        const dy = entry.y - bounce;
        ctx.lineWidth = (ultimate ? 4 : entry.critical ? 13 : 10) * scale;
        ctx.strokeStyle = ultimate ? '#d79b20' : '#21091d';
        ctx.strokeText(text[digit], dx, dy);
        ctx.lineWidth = (ultimate ? 1 : entry.critical ? 4.5 : 3) * scale;
        ctx.strokeStyle = fill;
        ctx.strokeText(text[digit], dx, dy);
        ctx.fillStyle = fill;
        ctx.fillText(text[digit], dx, dy);
      }
      if (entry.hits > 1) {
        ctx.font = `900 ${17 * scale}px Arial,sans-serif`;
        ctx.lineWidth = 4 * scale;
        ctx.strokeStyle = '#10151e';
        ctx.fillStyle = '#ffffff';
        ctx.strokeText('x' + entry.hits, x + width / 2 + size * 0.42, entry.y + size * 0.55);
        ctx.fillText('x' + entry.hits, x + width / 2 + size * 0.42, entry.y + size * 0.55);
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
    ultimateConfig, normalHpMultiplier, anchor, damage, updateDamage, drawDamage, drawBarrier, drawChain, color, debug };
});
