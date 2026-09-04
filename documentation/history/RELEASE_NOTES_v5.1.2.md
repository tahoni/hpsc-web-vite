# Release Notes – Version 5.1.2

**Release Date:** September 4, 2026 **Status:** ✨ Stable

## 🎯 Theme

**Release-History Backfill & the Legacy `ARCHIVE.md`**

Version 5.1.2 is a pure documentation-archival release, closing a gap left when `documentation/history/` was
introduced in `5.0.0`: only `4.2.3` had been backfilled into the new archive format at the time, leaving `4.0.0`
through `4.2.2` without their own `RELEASE_NOTES_vX.Y.Z.md` snapshots. This release adds those twelve, and goes a
step further with a new `documentation/archive/ARCHIVE.md` — a read-only legacy release archive reproducing
GitHub's own release notes for the Version 3.x line (`3.0.0` through `3.6.9`), plus commit-history summaries for
the three pre-`3.0.0` tags (`1.0.0` through `2.1.0`) that never had release notes generated at all. Along the way,
a stale `AGENTS.md` instruction claiming this project still tags releases as `version-X.Y.Z` (true only through
`4.2.2`) is corrected to the `vX.Y.Z` format actually used since `4.2.3`, and `CONTRIBUTING.md` now states
explicitly what was previously only implied — that `AGENTS.md` is this repository's ultimate source of truth.

## ⭐ Key Highlights

### 📚 Release-History Backfill

- Backfilled `documentation/history/RELEASE_NOTES_vX.Y.Z.md` for versions `4.0.0` through `4.2.2`, derived from
  `CHANGELOG.md`'s existing entries and matching `RELEASE_NOTES_v4.2.3.md`'s Theme/Key Highlights lead-in format

### 🚢 New Legacy Release Archive

- Added `documentation/archive/ARCHIVE.md`, reproducing GitHub's original Release notes for the Version 3.x line
  (`3.0.0` through `3.6.9`), with `1.0.0` through `2.1.0` summarised from their commit history since no release
  notes were ever generated for those three
- Notes that `1.0.0` through `2.1.0` used a legacy, non-semantic versioning scheme, while `3.0.0` onward already
  followed SemVer, per `CHANGELOG.md`'s own Version Policy

### 🐛 Documentation Fix

- Fixed `AGENTS.md`'s Merging section pointing to the outdated `version-X.Y.Z` tag format; every release from
  `4.2.3` onward actually tags as `vX.Y.Z`

### ✍️ `AGENTS.md` as Ultimate Source of Truth

- `CONTRIBUTING.md`'s intro now states explicitly that `AGENTS.md` wins if any other documentation ever
  contradicts it

## 📦 What's New

### ➕ Added

#### Release Process

- Backfilled `documentation/history/RELEASE_NOTES_vX.Y.Z.md` archives for versions `4.0.0` through `4.2.2`
  (`4.2.3` onward already had theirs), derived from `CHANGELOG.md`'s existing entries and matching
  `RELEASE_NOTES_v4.2.3.md`'s Theme/Key Highlights lead-in format
- Added `documentation/archive/ARCHIVE.md`, a read-only legacy release archive covering every version predating
  `CHANGELOG.md`/`HISTORY.md`'s Keep a Changelog structure introduced in `4.0.0` — `1.0.0` through `3.6.9`. Versions
  `3.0.0` onward reproduce GitHub's own release notes for the legacy Version 3.x line; `1.0.0` through `2.1.0`
  predate any release notes being generated, so those three are instead summarised from their commit history (the
  project's first Vite/React scaffold, the migration onto the `tahoni` component library and follow-up polish).
  Notes that `1.0.0`–`2.1.0` used a legacy, non-semantic versioning scheme, while `3.0.0` onward already followed
  SemVer, per `CHANGELOG.md`'s own Version Policy. Documented in `AGENTS.md`'s Documentation File Map

### 🔄 Changed

#### Documentation

- `CHANGELOG.md`'s legacy-Version-3.x-line note now also points to the new `documentation/archive/ARCHIVE.md`
  alongside `HISTORY.md`
- Added `documentation/archive/ARCHIVE.md` to `README.md`'s Documentation section, matching the existing
  `documentation/history/`/`documentation/recommendations/` entries
- Expanded `CONTRIBUTING.md`'s intro paragraph to state explicitly that `AGENTS.md` is this repository's ultimate
  source of truth — if any other documentation ever contradicts it, `AGENTS.md` wins

### 🐛 Fixed

#### Documentation

- Fixed `AGENTS.md`'s Merging section stating the release tag format is `version-X.Y.Z`, two majors behind actual
  practice: every release from `4.2.3` onward has tagged as `vX.Y.Z` (confirmed against this repository's GitHub
  releases), with `version-X.Y.Z` only used for the legacy Version 3.x/early 4.x line

## 🔄 Migration Guide

### For Deployers

- **No schema, environment variable or deployment changes in this release** — documentation only.

### For Developers

- **No code changes.** This release only adds/corrects documentation files; `npm install` is not required beyond
  what you already have.
- If any local tooling or scripts reference the old `version-X.Y.Z` tag format, update them to `vX.Y.Z` — that's
  been this project's actual tag format since `4.2.3`.

## 📊 Statistics

- **Total Commits:** 14
- **Files Changed:** 22 (+1,852 / −151 lines)

## 🧭 Design Notes

- **Treat the pre-`4.0.0` archive as two distinct provenance types, not one.** GitHub actually generated real
  release notes for `3.0.0`–`3.6.9`, so `ARCHIVE.md` reproduces them (lightly normalised for line wrapping, typos
  and Serial Commas); `1.0.0`–`2.1.0` never had any, so those three entries are explicitly labelled as
  commit-history summaries rather than implying equivalent original text exists.
- **Keep `documentation/history/`'s per-release granularity even for backfilled versions.** Rather than one
  combined "pre-`5.0.0` catch-up" file, each of the twelve versions from `4.0.0`–`4.2.2` gets its own
  `RELEASE_NOTES_vX.Y.Z.md`, matching the shape every future release already produces.

## 🧪 Testing

- `npm run lint` — 0 errors; 288 pre-existing warnings (264 `tsdoc/syntax`, tracked as Gap #11, plus 24 unrelated),
  unchanged by this release
- `npm run build` — passes
- `npm test` — no test files exist yet in this repository (tracked in
  `documentation/roadmap/improvement-plan-tasks.md`)
- Manually reviewed `documentation/archive/ARCHIVE.md` and all twelve backfilled
  `documentation/history/RELEASE_NOTES_vX.Y.Z.md` files for line-wrap compliance, British English spelling and
  accurate dates against `HISTORY.md`'s existing Historical Timeline

## 🐛 Known Issues

- No CI workflow runs `npm run lint`/`npm run build`/`npm test` automatically — only CodeQL runs on push/PR
  (`documentation/roadmap/improvement-plan-tasks.md` → Gap #1)
- `News` isn't wired into routing, and the Contact Us route's `dateCreated`/`dateUpdated` metadata is inverted
  (`documentation/roadmap/improvement-plan-tasks.md` → Gap #2)
- No automated test coverage exists yet — `npm test` has no test files
  (`documentation/roadmap/improvement-plan-tasks.md` → Gap #3)
- `HISTORY.md` doesn't have the "Future Roadmap Implications" section this plan and `AGENTS.md`'s Release Checklist
  reference (`documentation/roadmap/improvement-plan-tasks.md` → Gap #9)
- 264 `tsdoc/syntax` warnings remain unfixed — the rule is `"warn"`, not `"error"`, so they don't fail a lint run
  (`documentation/roadmap/improvement-plan-tasks.md` → Gap #11)

## 🔮 Future Enhancements

- Add a CI workflow (`.github/workflows/build.yml`) that runs `npm run lint`, `npm run build` and `npm test` on
  push/PR
- Wire `News` into routing (or remove it) and fix the Contact Us route's inverted dates
- Establish initial Vitest test coverage with a `jsdom` environment
- Clear the 264 `tsdoc/syntax` warnings and escalate the rule from `"warn"` to `"error"`
- Decide whether `HISTORY.md` gains a "Future Roadmap Implications" section or the references to it are removed

## 👥 Contributors

Leoni Lubbinge

## 📝 Notes

This release is entirely documentation and archival work — no source code, configuration or dependency changes.
It closes out the release-history backfill left incomplete when `documentation/history/` was introduced in `5.0.0`,
and gives every version back to the project's very first commit a documented home, either as reproduced GitHub
release notes or, where none ever existed, an accurate commit-history summary.

---

**For detailed change history, see [CHANGELOG.md](/CHANGELOG.md)**

**For previous releases, see the [history folder](/documentation/history)**
