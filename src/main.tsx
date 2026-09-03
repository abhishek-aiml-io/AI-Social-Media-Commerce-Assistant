import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

function isBoltBadge(el: Element) {
  const text = el.textContent?.replace(/\s+/g, ' ').trim().toLowerCase() ?? '';
  const href = el instanceof HTMLAnchorElement ? el.href : '';
  return text.includes('made in bolt') || href.includes('bolt.new');
}

function removeBoltBadge() {
  document.querySelectorAll('a, button, div, span').forEach((el) => {
    const text = el.textContent?.replace(/\s+/g, ' ').trim().toLowerCase() ?? '';
    if (text === 'made in bolt' || (isBoltBadge(el) && !document.getElementById('root')?.contains(el))) {
      el.remove();
    }
  });
}

removeBoltBadge();
new MutationObserver(removeBoltBadge).observe(document.documentElement, {
  childList: true,
  subtree: true,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
