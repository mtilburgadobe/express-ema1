# Dynamic features — plan

- D-01/D-03: global CSS + `window` block (fixed media inside clipped section). Status: implemented in prototype; port to EDS.
- D-02: `hero` block JS — scale = 1 + 0.1·min(y/vh,1); title translateY = −cap·min(y/(vh/2),1), cap 81px (>767) / 141.5px (≤767); honours prefers-reduced-motion.
- D-04: `scripts/delayed.js`-independent: built in `scripts.js` decorate (needs to be present before 1 viewport scroll) — toggles `.show` at scrollY ≥ innerHeight.
- D-05: footer fragment link "Report Abuse" → https://new.express.adobe.com/webpage/qCZXJyTGNbO7p (interim; follow-up: real form needs a forms backend).
- D-06…D-10: dropped / no port (see dynamic-features.md).
- D-11: badge authored in footer fragment, positioned fixed by footer CSS.
