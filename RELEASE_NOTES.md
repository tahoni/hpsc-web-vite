# Release Notes – Version 5.1.3

**Release Date:** September 5, 2026 **Status:** ✨ Stable

## 🎯 Theme

**Canonical Domain Cleanup & Environment Variable Onboarding**

Version 5.1.3 is a small patch release closing several small drifts. `index.html`'s static `<link rel="canonical">`
tag, `public/robots.txt`'s `Sitemap` line and `README.md`'s introductory link were all still pointing at the bare
`https://hpsc.co.za` — a deliberate choice made back in `3.6.5`, but the site's server configuration has since
changed to redirect that bare domain to `https://www.hpsc.co.za`, matching the `baseUrl` constant the codebase has
used elsewhere (the sitemap builder) since `5.1.0`. All three now point straight at `www`, avoiding an unnecessary
redirect hop. Separately, `AGENTS.md`'s British English exceptions note and icon table had the `LICENSE.md` naming
convention backwards, instructing every other doc that links to it to spell it "License" for consistency when the
project's own British English convention calls for "Licence". Finally, a secret-free `.env.example` now gives a new
contributor every required environment variable in one place: `AGENTS.md`, `README.md` and `CONTRIBUTING.md` no
longer duplicate `.env.local`'s/`.env.production`'s exact variable names or values, and the two files themselves —
tracked from before `.gitignore`'s `.env`/`.env.*` rule existed — are now untracked in favour of `.env.example`.

## ⭐ Key Highlights

### 🐛 Canonical Domain Fix

- Fixed `index.html`, `public/robots.txt` and `README.md` to point at `https://www.hpsc.co.za` instead of the bare
  `https://hpsc.co.za`, matching the site's actual served domain and the existing `baseUrl` constant

### ✍️ British English Consistency

- Corrected `AGENTS.md`'s guidance so every doc linking to `LICENSE.md` spells it "Licence", not "License" —
  the `LICENSE.md` file's own name and content remain the fixed American-English legal term, unaffected

### 🔧 Environment Variable Onboarding

- Added a secret-free `.env.example` documenting the exact `VITE_`-prefixed variable names `.env.local` expects;
  `AGENTS.md`/`README.md`/`CONTRIBUTING.md` now point to it instead of duplicating its content, and
  `.env.local`/`.env.production` themselves are no longer tracked in version control

## 📦 What's New

### ➕ Added

#### Developer Experience

- Added a secret-free `.env.example` documenting `VITE_GOOGLE_MAPS_API_KEY` and `VITE_RECAPTCHA_V2_SITE_KEY` (plus
  guidance for `NPM_TOKEN_READ`, which isn't read from a `.env` file), so a new contributor can see every required
  environment variable in one place without reading `AGENTS.md`/`README.md` first

### 🔄 Changed

#### Documentation

- `AGENTS.md`'s Environment Variables table, `README.md`'s Environment Variables subsection and
  `CONTRIBUTING.md`'s Prerequisites/Getting Started steps no longer name `.env.local`'s/`.env.production`'s exact
  `VITE_`-prefixed variable names or values — all three now point to the new `.env.example` as the single source
  of truth, instead of duplicating (and risking drifting from) its content

### 🗑️ Removed

#### Version Control

- Removed `.env.local` and `.env.production` from version control — both are covered by `.gitignore`'s
  `.env`/`.env.*` rule (with only `.env.example` excluded from it) but had been tracked from before that rule
  existed; `.env.example` now documents every variable they held, secret-free

### 🐛 Fixed

#### Documentation

- Fixed `AGENTS.md`'s British English exceptions note and icon table, which told every other doc linking to
  `LICENSE.md` to spell it "License" for consistency and labelled the 📜 icon "License / licence" — both now
  correctly say "Licence", per the British English convention; the `LICENSE.md` file's own name and content remain
  the fixed American-English legal term

#### SEO

- Fixed `index.html`'s `<link rel="canonical">`, `public/robots.txt`'s `Sitemap` line and `README.md`'s
  introductory link, all still pointing to the bare `https://hpsc.co.za` (a deliberate choice as of `3.6.5`, per
  `documentation/archive/ARCHIVE.md`), to `https://www.hpsc.co.za` instead — confirmed the bare domain now
  301-redirects there, matching the `baseUrl` constant already used elsewhere (e.g. the sitemap builder)

## 🔄 Migration Guide

### For Deployers

- **No schema, environment variable or deployment changes in this release.**

### For Developers

- **No code changes beyond the one-line `index.html` fix.** `npm install` is not required beyond what you already
  have.
- **`.env.local`/`.env.production` are no longer tracked in version control.** If you relied on the committed
  copies, copy `.env.example` to `.env.local` and fill in real values instead — it documents every `VITE_`-prefixed
  variable name you need. `.env.production` only ever held a build-time debug toggle default; no action needed
  unless you had customised it locally.

## 📊 Statistics

- **Total Commits:** 13
- **Files Changed:** 16 (+337 / −105 lines)

## 🧭 Design Notes

- **Fix the symptom, not the whole gap.** `documentation/roadmap/improvement-plan.md`'s Gap #7 also tracks sourcing
  `baseUrl` itself from an environment variable; this release only corrects the drifted static references
  (`index.html`, `robots.txt`, `README.md`) and adds `.env.example`, leaving that broader env-var-sourcing work open.
- **Verify server behaviour before trusting historical docs.** `documentation/archive/ARCHIVE.md` records a `3.6.5`
  decision to prefer the bare domain "since it is served like that by the web server" — before applying the `www`
  fix here, a live check (`curl -I`) confirmed the bare domain now 301-redirects to `www`, so that historical
  rationale no longer holds.
- **One documented source of truth beats three duplicated ones.** Once `.env.example` existed, restating
  `.env.local`'s exact variable names in `AGENTS.md`, `README.md` and `CONTRIBUTING.md` too was redundant and a
  future drift risk — all three now just point to it.

## 🧪 Testing

- `npm run lint` — 0 errors; pre-existing warnings unchanged by this release
- `npm run build` — passes
- `npm test` — no test files exist yet in this repository (tracked in
  `documentation/roadmap/improvement-plan-tasks.md`)
- Manually verified `index.html`/`public/robots.txt`/`README.md`'s canonical domain now matches
  `src/constants/commonConstants.ts`'s `baseUrl`, and confirmed via `curl -I` that `https://hpsc.co.za` 301-redirects
  to `https://www.hpsc.co.za`
- Manually verified `npm install` still succeeds against the `@tahoni` registry after restoring `.npmrc` (briefly
  and accidentally removed mid-release-prep, caught before merge)

## 🐛 Known Issues

- No CI workflow runs `npm run lint`/`npm run build`/`npm test` automatically — only CodeQL runs on push/PR
  (`documentation/roadmap/improvement-plan-tasks.md` → Gap #1)
- `News` isn't wired into routing, and the Contact Us route's `dateCreated`/`dateUpdated` metadata is inverted
  (`documentation/roadmap/improvement-plan-tasks.md` → Gap #2)
- No automated test coverage exists yet — `npm test` has no test files
  (`documentation/roadmap/improvement-plan-tasks.md` → Gap #3)
- `baseUrl` in `src/constants/commonConstants.ts` remains a hardcoded string literal rather than sourced from an
  environment variable (`documentation/roadmap/improvement-plan.md` → Gap #7)
- 264 `tsdoc/syntax` warnings remain unfixed — the rule is `"warn"`, not `"error"`, so they don't fail a lint run
  (`documentation/roadmap/improvement-plan-tasks.md` → Gap #11)

## 🔮 Future Enhancements

- Add a CI workflow (`.github/workflows/build.yml`) that runs `npm run lint`, `npm run build` and `npm test` on
  push/PR
- Wire `News` into routing (or remove it) and fix the Contact Us route's inverted dates
- Establish initial Vitest test coverage with a `jsdom` environment
- Source `baseUrl` from an environment variable with a safe production default
- Clear the 264 `tsdoc/syntax` warnings and escalate the rule from `"warn"` to `"error"`

## 👥 Contributors

Leoni Lubbinge

## 📝 Notes

This release is a small documentation-and-SEO patch — no features, no dependency changes, one line of production
code touched. It closes out a family of small drifts between the site's actual configuration/server behaviour and
what its own documentation/markup claimed, and gives new contributors a single secret-free environment variable
template instead of three duplicated descriptions of it.

---

**For detailed change history, see [CHANGELOG.md](/CHANGELOG.md)**

**For previous releases, see the [history folder](/documentation/history)**
