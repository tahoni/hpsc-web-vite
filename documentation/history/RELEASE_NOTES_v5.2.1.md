# Release Notes – Version 5.2.1

**Release Date:** September 18, 2026 **Status:** ✨ Stable

## 🎯 Theme

**Directory Consistency & Roadmap Follow-Through**

Version 5.2.1 renames `src/models/` to `src/model/` and `src/shared/` to `src/common/` for consistent singular
directory naming, moving `Page` into `common/components/Page/` alongside the project's other single-component
folders — the `@model`/`@common` path aliases and every dependent import move with it, and the now-redundant
`@pages` alias is removed. The rename's own follow-through work closes out `documentation/roadmap/improvement-plan.md`'s
two remaining `5.2.0`-era gaps: `CONTRIBUTING.md`'s "Architecture at a Glance" section, missed by the rename itself,
now matches `AGENTS.md`/`ARCHITECTURE.md`; and `_forms.scss`'s unexplained `TODO: missing imports` comment is
resolved (its existing imports were already sufficient), with the same pass also namespacing its Bootstrap import
instead of a wildcard `as *`. Separately, `BaseRoutes.ts`'s route metadata was re-derived from each feature's actual
git history: four routes' `dateCreated` values were corrected from wiring dates to genuine creation dates, every
route's `dateUpdated` was refreshed, and `public/sitemap.xml` was regenerated (also fixing a `/venues` entry that
was missing its `<lastmod>` tag entirely). The release closes with two new `AGENTS.md` Git Workflow Conventions this
work itself needed: a `release/vX.Y.Z` branch must be diffed against `main`, not `develop`, to see everything it
actually ships, and `BaseRoutes.ts`'s `dateUpdated` must move in the same change as a `src/features/<Feature>/` edit
— both now enforced by this project's Claude Code skills, and mirrored into `CONTRIBUTING.md`.

## ⭐ Key Highlights

### 🗂️ Directory Rename

- Renamed `src/models/` → `src/model/` and `src/shared/` → `src/common/`, updating the `@model`/`@common` path
  aliases and every dependent import across `src/` and `builders/`
- Moved `Page` from `common/pages/` into `common/components/Page/`, alongside the project's other single-component
  folders; removed the now-unused `@pages` alias

### 📚 Roadmap Follow-Through

- Closed Gap #16: `CONTRIBUTING.md`'s "Architecture at a Glance" section, missed by the rename above, now matches
  `AGENTS.md`/`ARCHITECTURE.md` and the actual source tree
- Closed Gap #14: removed `_forms.scss`'s unexplained `TODO: missing imports` comment — its existing `@use`s already
  covered everything it references

### 🛣️ Routing & Sitemap Accuracy

- Corrected `BaseRoutes.ts`'s `dateCreated` for Contact Us, Events, Shooting Ranges and News, re-derived from each
  feature's actual git history rather than the route's wiring date
- Refreshed every route's `dateUpdated` and regenerated `public/sitemap.xml`, fixing a `/venues` entry that was
  missing its `<lastmod>` tag entirely

### 🔀 New Git Workflow Conventions

- Documented that a `release/vX.Y.Z` branch must be diffed against `main`, not `develop`, to see everything it
  ships; `sync-unreleased-changes`/`sync-improvement-plan-gaps` now auto-detect this
- Documented that `BaseRoutes.ts`'s `dateUpdated` must move with any `src/features/<Feature>/` change; mirrored
  into `CONTRIBUTING.md` and enforced by `generate-commit-message`/`prep-version-release`

### 🎨 Styling

- `_forms.scss` now `@use`s `@bootstrap/styles/index` under an explicit `bootstrap` namespace instead of a
  wildcard `as *`, resolving the IDE's "resolved only by name" warnings on six Bootstrap variables

## 📦 What's New

### 🔄 Changed

#### Components & Helpers

- Renamed `src/models/` to `src/model/` and `src/shared/` to `src/common/` for consistent singular directory naming,
  updating the `@model`/`@common` path aliases (`vite.config.ts`/`tsconfig.app.json`) and every dependent import
  across `src/` and `builders/`
- Moved `Page` and its barrel `index.ts` from `common/pages/` to `common/components/Page/`, alongside the project's
  other single-component folders; removed the now-unused `@pages` alias and updated `RouteAliases.tsx` to import it
  via `@components/Page`
- Renamed `VenueMapProps`'s `center` prop to `centre` (`VenueMap.tsx`), updating every caller
  (`FooterContent.tsx`, `AboutUsContent.tsx`, `WorldShoot2025Content.tsx`) — British English spelling for a
  component's public prop name; the underlying `Venue`/`venueConstants.ts` model field stays `center`, unchanged

#### Documentation

- Updated `AGENTS.md`, `ARCHITECTURE.md`, `documentation/roadmap/improvement-plan.md`,
  `documentation/roadmap/improvement-plan-tasks.md`, `documentation/recommendations/project-directory-structure.md`
  and `documentation/recommendations/project-accessibility-checklist.md` to match the `model`/`common` directory
  renames and `Page`'s new location
- Replaced `project-directory-structure.md`'s stale "Known inconsistency" callout describing a `@routes` alias
  pointing at a nonexistent `src/routes/` with an accurate note that `@routes` is simply redundant with
  `@common/routes`, folded into the path-alias table
- Corrected `CONTRIBUTING.md`'s "Architecture at a Glance" section, missed by the rename above, which still
  described the old `src/shared/` structure and "Shared components / layouts"
- Documented in `AGENTS.md`'s Git Workflow Conventions that a `release/vX.Y.Z` branch's diff must be taken against
  `main`, not `develop`, to see everything it actually ships — its own PR still targets `develop`, but a diff
  against `develop` only shows the branch's own release-prep commits; `sync-unreleased-changes` and
  `sync-improvement-plan-gaps` now auto-detect a `release/vX.Y.Z`/`hotfix/*` branch and default to `main`, and
  `prep-version-release`'s description of invoking `sync-unreleased-changes` was corrected to match
- Documented in `AGENTS.md`'s Git Workflow Conventions, and mirrored into `CONTRIBUTING.md`'s Git Workflow bullets
  and Pull Request Checklist, that `BaseRoutes.ts`'s matching `dateUpdated` must move in the same change as a
  `src/features/<Feature>/` edit; `generate-commit-message` now flags a needed bump and `prep-version-release`
  verifies it while confirming the release branch's diff against `main`

#### Routing & Sitemap

- Corrected `BaseRoutes.ts`'s `coreContactUsRoute`/`coreEventsRoute`/`coreVenuesRoute`/`coreNewsRoute` `dateCreated`
  values, re-derived from each feature's actual git history rather than the route's wiring date: Contact Us
  `2025-03-03` → `2024-12-29`, Events `2025-04-29` → `2024-12-30`, Shooting Ranges `2025-01-03` → `2024-12-30`, News
  `2026-09-05` → `2024-12-30` (News, Events and Venues were originally scaffolded together in one commit; News's old
  date only marked when Gap #2 wired it into `coreRoutes`)
- Refreshed every route's `dateUpdated` to its feature's actual most recent commit and regenerated
  `public/sitemap.xml`, which also fixed the `/venues` entry's `<lastmod>` tag, previously missing entirely

#### Styling

- Removed `_forms.scss`'s unexplained `TODO: missing imports` comment — its existing `@use`s already covered every
  variable the stylesheet references, so no import was actually missing
- `src/assets/styles/_forms.scss` now `@use`s `@bootstrap/styles/index` under an explicit `bootstrap` namespace
  instead of a wildcard `as *`, and prefixes every Bootstrap variable reference (`$primary`, `$focus-ring-color`,
  `$focus-ring-opacity`, `$danger`, `$danger-bg-subtle`, `$white`) with it, resolving the IDE's "resolved only by
  name without use of explicit imports" warnings; compiled CSS is unchanged

## 🔄 Migration Guide

### For Deployers

- **No new environment variables.** `public/sitemap.xml` was regenerated with corrected `<lastmod>` dates only.

### For Developers

- **No dependency changes** — `npm install` isn't required beyond keeping up with `develop`.
- **`@shared`/`@models`/`@pages` path aliases no longer exist.** Use `@common`/`@model` instead, and import `Page`
  via `@components/Page`; check any local branches for stale imports of the old paths.
- **A `release/vX.Y.Z` branch's diff is now taken against `main`, not `develop`.** If you're preparing a release,
  `sync-unreleased-changes`/`sync-improvement-plan-gaps` auto-detect this — no action needed unless invoking them
  with an explicit base branch override.

## 📊 Statistics

- **Total Commits:** 15
- **Files Changed:** 111 (+771 / −532 lines)

## 🧭 Design Notes

- **Rename first, chase drift second.** The `src/models`/`src/shared` rename landed as its own commit; the doc and
  TODO-comment drift it left behind (Gaps #16 and #14) were tracked and closed as separate follow-on work, rather
  than trying to catch every reference in the same sweep.
- **Derive dates from git history, not from whichever commit last touched the field.** `BaseRoutes.ts`'s
  `dateCreated` values had drifted to reflect each route's wiring date rather than its actual origin; re-deriving
  them from the underlying feature files' real history (with a stricter rename-similarity threshold to filter out
  git's false-positive matches) was more work than trusting the existing values, but produced dates that are
  actually correct.
- **Codify a convention the release itself needed.** Both new Git Workflow Conventions (`release` branches diff
  against `main`; `dateUpdated` moves with feature changes) were written because this release's own prep work
  needed them — not speculative process additions.

## 🧪 Testing

- `npm run lint` — 0 errors, 26 warnings (`no-unused-vars`, `react-refresh/only-export-components`), unchanged from
  `5.2.0`'s baseline
- `npm run build` — passes
- `npm run test:run` — 3 test files, 14 tests, all passing
- Manually verified `public/sitemap.xml` regenerates correctly via `npm run sitemap` and every route now has a
  `<lastmod>` entry, including `/venues`
- Manually confirmed the IDE's "resolved only by name" warnings on `_forms.scss` are cleared, and that
  `_forms.scss`'s compiled CSS is unaffected by both the TODO removal and the namespace change
- Re-ran `npm run lint`/`npm run build` after the `VenueMapProps`'s `center`→`centre` rename to confirm every caller
  was updated and the change compiles cleanly

## 🐛 Known Issues

- 26 non-`tsdoc/syntax` lint warnings remain (`no-unused-vars`, `react-refresh/only-export-components`); the rules
  are `"warn"`, not `"error"`, so they don't fail a lint run
- Test coverage is still thin — three test files covering `htmlUtils.ts` and `RoutesSitemap.ts` only; most
  components, hooks and helpers remain untested
- `EmailService.sendEmail()` is a `TODO: call back-end` stub that always reports success without actually sending
  an e-mail — every real Contact Us submission is silently dropped while the visitor is told it succeeded (tracked
  as Gap #17)

## 🔮 Future Enhancements

- Wire `EmailService.sendEmail()` to a real third-party e-mail-delivery service, or correct `AGENTS.md`/
  `ContactUsForm.tsx`'s docblock to stop describing it as a working dependency (Gap #17)
- Expand Vitest coverage beyond the initial `htmlUtils.ts`/`RoutesSitemap.ts` tests to components, hooks and
  helpers
- Run the monthly dependency-review cadence documented in `5.2.0`

## 👥 Contributors

Leoni Lubbinge

## 📝 Notes

This release is smaller in scope than `5.2.0` but closes out its trailing loose ends: a directory rename for naming
consistency, the two gaps that rename left behind, a route-metadata correction pass grounded in actual git history
rather than approximate dates, and two new Git Workflow Conventions this release's own prep work needed. `Gap #17`
(the `EmailService` stub) remains open and is now this project's most significant known gap — the Contact Us form's
core functionality doesn't actually work — and is the clear starting point for the next release.

---

**For detailed change history, see [CHANGELOG.md](/CHANGELOG.md)**

**For previous releases, see the [history folder](/documentation/history)**
