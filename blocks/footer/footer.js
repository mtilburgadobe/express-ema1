import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

const BADGE_ICON = `${window.hlx?.codeBasePath || ''}/icons/adobe-express.svg`;
const BACK_TO_TOP_ICON = `${window.hlx?.codeBasePath || ''}/icons/back-to-top.svg`;

function isExternal(a) {
  try {
    return new URL(a.href, window.location).origin !== window.location.origin;
  } catch {
    return false;
  }
}

/**
 * Footer fragment section 2: the floating "Made in …" badge link.
 * @param {Element} section
 */
function decorateBadge(section) {
  const link = section.querySelector('a');
  if (!link) return;
  section.classList.add('footer-badge');
  link.classList.add('footer-badge-link');
  const btn = document.createElement('span');
  btn.className = 'footer-badge-btn';
  let icon = link.querySelector('.icon');
  if (!icon) {
    icon = document.createElement('span');
    icon.className = 'icon icon-adobe-express';
    const img = document.createElement('img');
    img.src = BADGE_ICON;
    img.alt = '';
    img.width = 25;
    img.height = 25;
    icon.append(img);
  }
  const text = document.createElement('span');
  text.className = 'footer-badge-text';
  text.textContent = link.textContent.trim();
  btn.append(icon, text);
  link.replaceChildren(btn);
}

function buildBackToTop() {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'back-to-top';
  button.setAttribute('aria-label', 'Back to top');
  button.title = 'Back to top';
  const img = document.createElement('img');
  img.src = BACK_TO_TOP_ICON;
  img.alt = '';
  img.width = 18;
  img.height = 18;
  button.append(img);

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduced.matches ? 'auto' : 'smooth' });
  });
  const update = () => button.classList.toggle('show', window.scrollY >= window.innerHeight);
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
  return button;
}

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  const [links, badge] = footer.querySelectorAll(':scope > .section');
  if (links) links.classList.add('footer-links');
  if (badge) decorateBadge(badge);
  footer.querySelectorAll('a[href]').forEach((a) => {
    if (isExternal(a)) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
  });

  block.append(footer, buildBackToTop());
}
