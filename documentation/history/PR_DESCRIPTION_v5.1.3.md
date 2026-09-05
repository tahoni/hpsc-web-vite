## 🎯 Summary

- Fixes `index.html`, `public/robots.txt` and `README.md` to point at `https://www.hpsc.co.za` instead of the bare
  `https://hpsc.co.za` — a `3.6.5`-era choice the site's server no longer honours (a live `curl -I` check confirms
  the bare domain now 301-redirects to `www`), matching the `baseUrl` constant already used elsewhere
- Corrects `AGENTS.md`'s British English exceptions note and icon table, which had the `LICENSE.md` naming
  convention backwards
- Adds a secret-free `.env.example`, linked from `README.md`/`AGENTS.md`/`CONTRIBUTING.md`
- One line of production code touched (`index.html`); everything else is documentation/config

## 📦 Key Changes

### ➕ Added

- `.env.example`, documenting `NPM_TOKEN_READ`, `VITE_GOOGLE_MAPS_API_KEY` and `VITE_RECAPTCHA_V2_SITE_KEY`

### 🔄 Changed

- `README.md`'s Environment Variables subsection, `AGENTS.md`'s Environment Variables section and
  `CONTRIBUTING.md`'s Getting Started step now all point to `.env.example`

### 🐛 Fixed

- `index.html`'s `<link rel="canonical">`, `public/robots.txt`'s `Sitemap` line and `README.md`'s introductory link
  now point at `https://www.hpsc.co.za`
- `AGENTS.md`'s British English exceptions note and icon table now correctly say "Licence" instead of "License"
  when referring to every other doc that links to `LICENSE.md`

## 🧪 Test Plan

- [x] `npm run lint` — 0 errors; 288 pre-existing warnings, unchanged by this release
- [x] `npm run build` — passes
- [x] `npm test` — no test files exist yet in this repository (tracked gap)
- [x] Manually verified `index.html`/`public/robots.txt`/`README.md`'s canonical domain matches
  `src/constants/commonConstants.ts`'s `baseUrl`, and confirmed via `curl -I` that `https://hpsc.co.za`
  301-redirects to `https://www.hpsc.co.za`

## 🔗 Related Documentation

- [RELEASE_NOTES.md](../../RELEASE_NOTES.md)
- [CHANGELOG.md](../../CHANGELOG.md)
- [HISTORY.md](../../HISTORY.md)
