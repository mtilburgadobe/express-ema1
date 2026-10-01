/**
 * Reads an optional "Focal point | <x% y%>" row and removes it from the block.
 * @param {Element} block
 * @returns {string|null} CSS object-position value
 */
export function readFocalPoint(block) {
  const row = [...block.children].find((r) => r.children.length === 2
    && /^focal\s*point$/i.test(r.children[0].textContent.trim()));
  if (!row) return null;
  const value = row.children[1].textContent.trim();
  row.remove();
  return /^-?[\d.]+%?\s+-?[\d.]+%?$/.test(value) ? value : null;
}

const MOBILE = window.matchMedia('(width <= 767px)');
const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)');

/**
 * Scroll motion observed on the source: background zooms 1 → 1.1 over the first
 * viewport; title block rises over the first half viewport (81px, 141.5px on mobile).
 */
function bindMotion(media, view) {
  let ticking = false;
  const update = () => {
    ticking = false;
    if (REDUCED_MOTION.matches) {
      media.style.transform = '';
      view.style.transform = '';
      return;
    }
    const y = window.scrollY;
    const vh = window.innerHeight;
    const zoom = Math.min(Math.max(y / vh, 0), 1);
    const rise = Math.min(Math.max(y / (vh / 2), 0), 1);
    const cap = MOBILE.matches ? 141.5 : 81;
    media.style.transform = `scale(${1 + 0.1 * zoom})`;
    view.style.transform = `translate3d(0, ${-cap * rise}px, 0)`;
  };
  const request = () => {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  };
  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
  update();
}

/**
 * Hero: full-viewport cover image with a bottom-left title block.
 * Authoring: row 1 image · row 2 heading + subtitle · optional "Focal point" row.
 * @param {Element} block
 */
export default function decorate(block) {
  const focal = readFocalPoint(block);
  const picture = block.querySelector('picture');
  const heading = block.querySelector('h1, h2');

  const media = document.createElement('div');
  media.className = 'hero-media';
  if (picture) {
    const pictureParent = picture.parentElement;
    media.append(picture);
    if (pictureParent && pictureParent.tagName === 'P' && !pictureParent.textContent.trim()) {
      pictureParent.remove();
    }
    const img = picture.querySelector('img');
    if (img) {
      img.loading = 'eager';
      img.fetchPriority = 'high';
      if (focal) img.style.objectPosition = focal;
    }
  }

  const header = document.createElement('div');
  header.className = 'hero-header';
  const view = document.createElement('div');
  view.className = 'hero-view';
  const overlay = document.createElement('span');
  overlay.className = 'hero-overlay';
  overlay.setAttribute('aria-hidden', 'true');
  view.append(overlay);

  // move (never rebuild) authored text so editor indices survive
  const textCell = heading ? heading.parentElement : null;
  if (textCell) {
    [...textCell.children].forEach((el) => {
      if (el.tagName === 'P' && !el.querySelector('picture')) el.classList.add('hero-subtitle');
      view.append(el);
    });
  }
  header.append(view);

  block.replaceChildren(media, header);
  bindMotion(media, view);
}
