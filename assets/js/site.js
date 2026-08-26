const currentFile = location.pathname.split('/').pop() || 'index.html';
const currentHash = location.hash;
const nav = document.querySelector('.site-nav');

if (nav) {
  const navItems = [
    ['index.html#games', '自作ゲーム', currentFile === 'index.html' && currentHash !== '#lab'],
    ['index.html#lab', 'ラボ', (currentFile === 'index.html' && currentHash === '#lab') || ['gacha-simulator.html', 'compound-simulator.html', 'random-maker.html', 'background-remover.html'].includes(currentFile)],
    ['tsumtsum/latest-news.html', 'ツムツム最新情報', false],
    ['tsumtsum/index.html', 'ツムツム統計', false],
    ['game-dev-notes.html', '制作ノート', currentFile === 'game-dev-notes.html'],
    ['index.html#updates', '更新履歴', false],
    ['about.html', 'このサイトについて', currentFile === 'about.html']
  ];
  nav.innerHTML = navItems.map(([href, label, current]) =>
    `<a href="${href}"${current ? ' aria-current="page"' : ''}>${label}</a>`
  ).join('');
}

const footer = document.querySelector('.site-footer');
if (footer) {
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-intro">
          <div class="footer-brand">ふめいだよラボ</div>
          <p>ツムツムの実測データ、便利な計算ツール、個人制作の無料ブラウザゲームを公開しています。</p>
        </div>
        <div>
          <h2>コンテンツ</h2>
          <div class="footer-link-list">
            <a href="index.html#games">自作ゲーム一覧</a>
            <a href="game-dev-notes.html">ゲーム制作ノート</a>
            <a href="random-maker.html">乱数メーカー</a>
            <a href="background-remover.html">背景透過メーカー</a>
            <a href="compound-simulator.html">複利シミュレーター</a>
            <a href="gacha-simulator.html">ガチャ確率シミュレーター</a>
            <a href="tsumtsum/latest-news.html">ツムツム最新情報</a>
            <a href="tsumtsum/index.html">ツムツム統計・攻略</a>
            <a href="tsumtsum/app.html">コイン記録アプリ</a>
          </div>
        </div>
        <div>
          <h2>サイト情報</h2>
          <a href="about.html">運営者情報</a>
          <a href="contact.html">お問い合わせ</a>
          <a href="privacy.html">プライバシーポリシー</a>
          <a href="terms.html">利用上の注意</a>
        </div>
      </div>
      <div class="footer-bottom">© 2026 ふめいだよラボ. Games and site content are independently created.</div>
    </div>`;
}

if (!document.querySelector('link[rel~="icon"][href*="fumeidayo-lab-mark"]')) {
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/png';
  favicon.href = 'assets/images/fumeidayo-lab-mark.png';
  document.head.append(favicon);
}

const menuButton = document.querySelector('.menu-button');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  });

  nav.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'メニューを開く');
  });
}

document.querySelectorAll('.color-logic-pixels[data-pattern]').forEach((grid) => {
  const palette = Object.fromEntries((grid.dataset.palette || '').split(',').map((entry) => entry.split(':')));
  [...grid.dataset.pattern].forEach((value) => {
    const cell = document.createElement('i');
    cell.style.background = palette[value] || '#eff7f5';
    cell.classList.toggle('filled', value !== '.');
    grid.append(cell);
  });
});
