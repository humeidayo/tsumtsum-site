(() => {
  const choiceByCode = {
    Digit1: 0,
    Digit2: 1,
    Digit3: 2,
    Numpad1: 0,
    Numpad2: 1,
    Numpad3: 2,
  };

  const choices = () =>
    document.querySelectorAll('.upgrade-modal .upgrade-grid > button');

  const reroll = () =>
    document.querySelector('.upgrade-modal .reroll-button:not(:disabled)');

  document.addEventListener(
    'keydown',
    (event) => {
      if (!window.matchMedia('(min-width: 701px)').matches || event.repeat) return;

      if (event.code === 'Space') {
        const rerollButton = reroll();
        if (!rerollButton) return;

        event.preventDefault();
        event.stopImmediatePropagation();
        rerollButton.click();
        return;
      }

      const index = choiceByCode[event.code];
      const buttons = choices();
      if (index === undefined || buttons.length < 1 || !buttons[index]) return;

      event.preventDefault();
      event.stopImmediatePropagation();
      buttons[index].click();
    },
    true,
  );

  const addKeyboardHints = () => {
    choices().forEach((button, index) => {
      button.setAttribute('aria-keyshortcuts', String(index + 1));
      button.title = `キーボードの${index + 1}で選択`;
    });

    const rerollButton = reroll();
    if (rerollButton) {
      rerollButton.setAttribute('aria-keyshortcuts', 'Space');
      rerollButton.title = 'スペースキーで候補を更新';
    }
  };

  new MutationObserver(addKeyboardHints).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
  addKeyboardHints();
})();
