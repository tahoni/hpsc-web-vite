## 🎯 Summary

- Backfills `documentation/history/RELEASE_NOTES_vX.Y.Z.md` for versions `4.0.0` through `4.2.2`, closing the gap
  left when `documentation/history/` was introduced in `5.0.0` with only `4.2.3` backfilled
- Adds `documentation/archive/ARCHIVE.md`, a read-only legacy release archive reproducing GitHub's own release
  notes for the Version 3.x line (`3.0.0`–`3.6.9`), with `1.0.0`–`2.1.0` summarised from commit history since no
  release notes were ever generated for those three
- Fixes a stale `AGENTS.md` instruction pointing to the outdated `version-X.Y.Z` tag format
- Pure documentation and archival work — no source code, configuration or dependency changes

## 📦 Key Changes

### ➕ Added

- Twelve `documentation/history/RELEASE_NOTES_vX.Y.Z.md` archives (`4.0.0`–`4.2.2`)
- `documentation/archive/ARCHIVE.md`, documented in `AGENTS.md`'s Documentation File Map

### 🔄 Changed

- `CHANGELOG.md`'s legacy-Version-3.x-line note now also points to `documentation/archive/ARCHIVE.md`
- `README.md`'s Documentation section now lists `documentation/archive/ARCHIVE.md`

### 🐛 Fixed

- `AGENTS.md`'s Merging section now correctly states `vX.Y.Z` as the tag format used since `4.2.3`, not
  `version-X.Y.Z`

## 🧪 Test Plan

- [x] `npm run lint` — 0 errors; 288 pre-existing warnings, unchanged by this release
- [x] `npm run build` — passes
- [x] `npm test` — no test files exist yet in this repository (tracked gap)
- [x] Manually reviewed `documentation/archive/ARCHIVE.md` and all twelve backfilled RELEASE_NOTES archives for
  line-wrap compliance, British English spelling and date accuracy against `HISTORY.md`

## 🔗 Related Documentation

- [RELEASE_NOTES.md](../../RELEASE_NOTES.md)
- [CHANGELOG.md](../../CHANGELOG.md)
- [HISTORY.md](../../HISTORY.md)
