# Inconsistency register — new.express.adobe.com/webpage/qCZXJyTGNbO7p replica

Everything not listed here is frozen; any design delta found by the gate is a defect, not an improvement.

## R-01 — Viewer-drawn custom scrollbar replaced by the native page scrollbar

- **Evidence:** live `.wp-scrollbar.vertical` — 16px wide strip, bg rgba(255,255,255,.8), thumb rgba(0,0,0,.5), painted over the right edge of every section (gates/home-1440/live.png, gates/home-360/live.png, x ≥ W−16). It exists only because the Express viewer virtualises scrolling (document height = viewport; sections moved via translate3d).
- **Finding:** the scrollbar is a platform artifact of the Express JS virtual scroller, not part of the page design; on a normally scrolling EDS page it is redundant with the browser's own scrollbar.
- **Minimal change:** use native document scrolling + native scrollbar; no other change (content keeps full-width layout as live — the live strip overlays content, it does not reserve space).
- **Status:** applied
- **Where:** all sections, right 16px strip. Gate: the x ≥ W−16 strip is an exempt zone (≈4.3% of the 360 page, ≈1.1% at 1440).
