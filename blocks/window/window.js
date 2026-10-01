import { readFocalPoint } from '../hero/hero.js';

/**
 * Window: a 50vh band revealing a viewport-fixed cover image as the page scrolls.
 * Authoring: row 1 image · optional "Focal point | <x% y%>" row.
 * @param {Element} block
 */
export default function decorate(block) {
  const focal = readFocalPoint(block);
  const picture = block.querySelector('picture');
  const media = document.createElement('div');
  media.className = 'window-media';
  if (picture) {
    media.append(picture);
    const img = picture.querySelector('img');
    if (img) {
      // the image is position:fixed inside a clipped band; lazy-load heuristics miss it
      img.loading = 'eager';
      if (focal) img.style.objectPosition = focal;
    }
  }
  block.replaceChildren(media);
  block.setAttribute('aria-hidden', 'true');
}
