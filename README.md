# أحمد الطراوي — Marketing Portfolio (Premium Redesign)

A world-class, premium, high-end digital portfolio for **أحمد الطراوي (Ahmed El-Trawy), أخصائي تسويق** (Marketing Specialist), built from a Genspark Design handoff. This is a **complete visual / UI/UX / art-direction redesign** — the original content is preserved 100% (no text, numbers, statistics, names, links, or assets were changed, added, shortened, or rewritten).

## Project Overview
- **Name**: webapp (portfolio)
- **Goal**: Re-skin the existing marketing portfolio into an editorial, premium, art-directed experience while keeping every piece of content identical to the source.
- **Creative direction**: warm bone-paper → espresso-ink editorial system with a clay brand accent, bilingual Arabic (RTL) typography (Alexandria display + IBM Plex Sans Arabic body), grain texture overlays, parallax collage hero, scroll-reveal choreography, and a dark/light section rhythm.

## URLs
- **Production**: _(pending deploy — see Deployment)_
- **Local preview**: http://localhost:3000
- **Design handoff repo**: `designer2-a018a8db-82e7-43e8-8213-12536e6371da` (SB-Git)

## Sections (functional entry points)
Single page, `lang="ar" dir="rtl"`, anchored navigation:

| Anchor | Section | Notes |
|--------|---------|-------|
| `#top` / hero | 01 Hero | Name, role, lead, CTA buttons, `6+ سنوات خبرة` / `3 أسواق` stats, parallax collage (`a08`, `a10`, `a12`) |
| `#about` | 02 Services | Six services in a 3-col rule grid |
| `#clients` | 03 Clients | 8 brand logo tiles + market tags (السعودية / الإمارات / مصر) |
| `#campaigns` | 04 Campaigns | 3 video campaign cards (ٍVodafone/Vaza/Feed'z) with poster + custom play |
| `#content` | 05 Content | Asymmetric editorial content grid (2 images + 1 video), lightbox on images |
| `#results` | 06 Results | Snapchat / TikTok / reach metrics panels, click-to-zoom screenshots |
| `#plan` | 07 Plan | Dreevo marketing plan, checklist, Google Drive link, launch-timeline card |
| `#contact` | 08 Contact | "لنعمل معًا" headline, phone + email, footer with back-to-top |

### Interactions
- Fixed header that condenses + inverts color on scroll; scroll-spy active nav.
- Full-screen mobile drawer menu (hidden ≤1100px, burger toggle).
- Scroll-reveal (`.rv`, `.rv-img`) via IntersectionObserver; rules scale-in.
- Hero parallax collage driven by `scrollY` (disabled under `prefers-reduced-motion`).
- Videos: custom play button → native controls, only one plays at a time.
- Lightbox (`#lb`) for result screenshots and content images; `Esc` closes.

## Data Architecture
- **Data Models**: none — this is a static, content-preserved marketing portfolio. No database.
- **Storage Services**: none (no D1/KV/R2). All media is static binary under `public/assets/`.
- **Data Flow**: Hono Worker renders the single RTL page (JSX) → static assets served from `dist/assets` and `dist/static`.

## Assets
21 handoff binaries copied verbatim from the design repo into `public/assets/`:
`a00–a07.png` (client logos), `a08/a10/a12.jpg` (hero collage + video posters), `a09/a11/a13.mp4` (campaign videos), `a14/a15/a16.jpg` (content posters/images), `a17.mp4` (content video), `a18/a19/a20.jpg` (results screenshots).

## Tech Stack
Hono 4 · TypeScript (JSX via `hono/jsx`) · Vite 8 (`@hono/vite-build`) · Cloudflare Pages / Workers · Google Fonts (Alexandria, IBM Plex Sans Arabic). No client-side framework — vanilla reveal/lightbox script (`public/static/app.js`).

## User Guide
Open the site; scroll through the eight sections via the top nav (or the mobile burger menu). Hover service rows for the underline accent; play campaign videos with the circular play button; click result screenshots or content images to zoom (click again / press Esc to close); use "افتح الملف" to open the Dreevo plan on Google Drive; contact via the phone/email links in the footer.

## Deployment
- **Platform**: Cloudflare Pages
- **Status**: ⏳ Not yet deployed
- **Build**: `npm run build` → `dist/`
- **Preview**: `pm2 start ecosystem.config.cjs` → http://localhost:3000
- **Note**: deploy path to be chosen (BYOK `cf-byok-deploy` vs Genspark-managed `gsk-hosted-deploy`).
- **Last Updated**: 2026-09-29
