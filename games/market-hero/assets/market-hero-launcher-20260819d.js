import { i as reactFactory, t as reactDomFactory } from './framework-DjPHiq1u.js';
import MarketHero from './page-CJ1fWM3F-20260819c.js';

const React = reactFactory();
const ReactDOM = reactDomFactory();
const root = document.getElementById('market-hero-root');

if (!root) {
  throw new Error('マーケット勇者の起動領域が見つかりません。');
}

const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
const emptyTextNodes = [];
while (walker.nextNode()) {
  if (!walker.currentNode.nodeValue.trim()) emptyTextNodes.push(walker.currentNode);
}
emptyTextNodes.forEach((node) => node.remove());

ReactDOM.hydrateRoot(root, React.createElement(MarketHero));
