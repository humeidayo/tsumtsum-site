(() => {
  'use strict';
  const overlay = document.getElementById('orientation-lock');
  if (!overlay) return;
  let frame = 0;
  let delayed = 0;

  function updateOrientation() {
    const width = window.innerWidth || document.documentElement.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight;
    const portrait = height > width;
    overlay.style.display = portrait ? 'flex' : 'none';
    overlay.setAttribute('aria-hidden', String(!portrait));
  }

  function scheduleUpdate() {
    updateOrientation();
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(updateOrientation);
    clearTimeout(delayed);
    // iOS can report the previous viewport size during the rotation event.
    delayed = setTimeout(updateOrientation, 200);
  }

  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('orientationchange', scheduleUpdate);
  window.addEventListener('pageshow', scheduleUpdate);
  window.visualViewport?.addEventListener('resize', scheduleUpdate);
  const orientationQuery = window.matchMedia('(orientation: portrait)');
  if (orientationQuery.addEventListener) {
    orientationQuery.addEventListener('change', scheduleUpdate);
  } else if (orientationQuery.addListener) {
    orientationQuery.addListener(scheduleUpdate);
  }
  scheduleUpdate();
})();
