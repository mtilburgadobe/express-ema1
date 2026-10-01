# Dynamic features — https://new.express.adobe.com/webpage/qCZXJyTGNbO7p

Discovered by crawl `--dynamics` + DOM/semantic probes (stardust/.work/replica/semantic-check.mjs).

| # | Feature | Kind | Host-bound? | Disposition |
|---|---|---|---|---|
| D-01 | Luca virtual scroller (animator-driven sections) | client runtime | yes (Express viewer) | **re-implement natively** — document scroll + CSS (R-01) |
| D-02 | Hero bg zoom + title parallax | scroll motion | no | **re-implement** — small rAF scroll handler in hero block |
| D-03 | Window sections (viewport-fixed image reveal) | scroll motion | no | **re-implement** — CSS `position: fixed` + `clip-path: inset(0)` |
| D-04 | Back-to-top button (show at ≥1 viewport) | UI widget | no | **re-implement** — delayed/global JS |
| D-05 | "Report Abuse" modal form (posts to Express) | form | yes | **interim link** — link to the original Express page where the form lives |
| D-06 | "View Screen Reader-Friendly Version" (`?page-mode=static`) | alt-render link | yes | **drop** — subsumed: EDS output is already static semantic HTML |
| D-07 | Per-heading "Copy link" / "Copy link to section" + toast | UI affordance | yes (viewer chrome) | **drop** — viewer chrome, hover-only; headings keep ids for deep links |
| D-08 | Next / Previous (presentation mode) | viewer nav | yes | **drop** — viewer presentation mode only |
| D-09 | OneTrust cookie-preferences anchor (empty) | consent | yes | **drop** — empty on capture; spacing preserved in footer CSS |
| D-10 | 15 same-site data endpoints (viewer analytics, branding, publication JSON) | data | yes | **no port** — not content-bearing; content captured statically |
| D-11 | "Made in Adobe Express" floating badge → template picker | link | no | **replicate** as captured (static link) |
