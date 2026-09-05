## 🎯 Summary

- Fixes `index.html`, `public/robots.txt` and `README.md` to point at `https://www.hpsc.co.za` instead of the bare
  `https://hpsc.co.za` — a `3.6.5`-era choice the site's server no longer honours (a live `curl -I` check confirms
  the bare domain now 301-redirects to `www`), matching the `baseUrl` constant already used elsewhere
- Corrects `AGENTS.md`'s British English exceptions note and icon table, which had the `LICENSE.md` naming
  convention backwards
- Adds a secret-free `.env.example` documenting `.env.local`'s exact `VITE_`-prefixed variable names; `AGENTS.md`,
  `README.md` and `CONTRIBUTING.md` now point to it instead of each separately naming those variables, and
  `.env.local`/`.env.production` themselves are removed from version control in favour of it
- One line of production code touched (`index.html`); everything else is documentation/config

## 📦 Key Changes

### ➕ Added

- `.env.example`, documenting `VITE_GOOGLE_MAPS_API_KEY` and `VITE_RECAPTCHA_V2_SITE_KEY` (plus guidance for
  `NPM_TOKEN_READ`, which isn't read from a `.env` file)

### 🔄 Changed

- `AGENTS.md`'s Environment Variables table, `README.md`'s Environment Variables subsection and
  `CONTRIBUTING.md`'s Prerequisites/Getting Started steps no longer name `.env.local`'s exact variable names —
  all three now point to `.env.example` instead

### 🗑️ Removed

- `.env.local` and `.env.production` from version control — both are covered by `.gitignore`'s `.env`/`.env.*`
  rule (with only `.env.example` excluded) but had been tracked from before that rule existed

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
- [x] Manually verified `npm install` still succeeds against the `@tahoni` registry (relevant since `.npmrc` was
  briefly and accidentally removed mid-prep, then restored, before this PR was opened for review)

## 🔗 Related Documentation

- [RELEASE_NOTES.md](../../RELEASE_NOTES.md)
- [CHANGELOG.md](../../CHANGELOG.md)
- [HISTORY.md](../../HISTORY.md)
