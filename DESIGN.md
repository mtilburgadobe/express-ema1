---
_provenance:
  writtenBy: stardust:replica
  writtenAt: 2026-10-01T11:35:58Z
  mode: bounded-single
  synthesizedFrom:
    - stardust/current/pages/webpage-qczxjytgnbo7p.json
    - stardust/replica/lifted-tokens.json
---

# Design — EMA Demo Test 1 (descriptive, lifted)

Every value below traces to `stardust/replica/lifted-tokens.json` (CSS lift of the live theme + runtime CSS + computed styles @1440/@360).

## Palette
| Token | Value | Use |
|---|---|---|
| page-bg | `rgb(185,215,240)` | |
| hero-fallback-bg | `#484848` | |
| heading | `rgb(59,84,46)` | |
| subheading | `rgb(64,96,122)` | |
| body | `rgb(25,60,89)` | |
| title | `rgb(185,215,240)` | |
| subtitle | `rgb(240,255,192)` | |
| accent-lime | `rgb(240,255,192)` | |
| accent-lime-rule | `rgba(240,255,192,0.9)` | |
| button-hover-bg | `rgb(222,255,115)` | |
| button-hover-fg | `rgb(0,0,0)` | |
| footer-bg | `rgb(68,68,68)` | |
| footer-link | `rgb(255,255,255)` | |

## Typography
- **Display** — Vina Sans 400 (OFL, self-hosted): hero title 88px/1.3 (47px ≤767), h2 56px/1.3 uppercase (34px ≤767) with a 120×3 lime rule.
- **Text** — Source Serif 4 (OFL, self-hosted, opsz pinned to 20 = Typekit default cut): subtitle 20px, h3 27px italic 700 (20px ≤767), body 18px/1.6 (17px ≤767).
- **Button** — Poppins 400 16px uppercase, padding 7px 17px (15px / 5px 17px ≤767), radius 0.2em, lime bg → rgb(222,255,115) on hover.
- **Chrome** — adobe-clean (licensed, not rehosted) → metric-adjusted local Helvetica Neue fallback (size-adjust 89.5%).

## Layout
- Hero: 100vh full-bleed cover image (pos 48.95% 0%), bottom-left title block, padding 64px 5% (32px 5% ≤767), view max-width 89% (≥1300: padding 0 20% 0 10%), dark bottom gradient overlay.
- Text sections: page-bg, centered, padding 80px 20% (40px 7% ≤767), 40px flow gap (20px ≤767).
- Window sections: 50vh tall, image fixed to the viewport (reveal), cover.
- Footer: #444, 46px, right-aligned 12px light links.
- Fixed chrome: badge bottom-left (16px / 60px; 20px ≤480), back-to-top bottom-right (56px circle frosted; 44px ≤767).

## Motion
- **heroBgZoom:** scale 1 → 1.1 linearly over first 100vh of scroll
- **heroTitleParallax:** translateY 0 → -81px (desktop) / -141.5px (<=767) over first 50vh of scroll
- **windowSections:** image fixed to viewport (window reveal)
- **backToTop:** fade+8px rise 0.2s ease when scrollY >= 100vh
- prefers-reduced-motion: zoom/parallax disabled.
