## 🎯 Summary

- Renames `src/models/` → `src/model/` and `src/shared/` → `src/common/` for consistent singular directory naming,
  moving `Page` into `common/components/Page/`
- Closes the two gaps that rename left behind: `CONTRIBUTING.md`'s stale "Architecture at a Glance" section (#16)
  and `_forms.scss`'s unexplained `TODO: missing imports` comment (#14)
- Re-derives `BaseRoutes.ts`'s route metadata from each feature's actual git history and regenerates
  `public/sitemap.xml`
- Codifies two new `AGENTS.md` Git Workflow Conventions this release's own prep work needed

## 📦 Key Changes

- **Directory rename:** `src/models` → `src/model`, `src/shared` → `src/common`, `Page` moved into
  `common/components/Page/`; `@model`/`@common` path aliases updated, `@pages` removed
- **Documentation:** `CONTRIBUTING.md`'s Architecture at a Glance section corrected; two new Git Workflow
  Conventions documented in `AGENTS.md` and mirrored into `CONTRIBUTING.md` (release branches diff against `main`;
  `BaseRoutes.ts`'s `dateUpdated` moves with feature changes)
- **Routing & Sitemap:** `BaseRoutes.ts`'s `dateCreated` corrected for Contact Us/Events/Shooting Ranges/News;
  every route's `dateUpdated` refreshed; `public/sitemap.xml` regenerated (fixing a missing `/venues` `<lastmod>`)
- **Styling:** `_forms.scss`'s TODO comment removed, and its Bootstrap import namespaced instead of a wildcard

## 🧪 Test Plan

- [x] `npm run lint` — 0 errors, 26 warnings (unchanged baseline)
- [x] `npm run build` — passes
- [x] `npm test` — 3 test files, 14 tests, all passing
- [x] Manually verified `public/sitemap.xml` regenerates correctly and every route has a `<lastmod>` entry
- [x] Manually confirmed `_forms.scss`'s compiled CSS is unaffected by the TODO removal and namespace change

## 🔗 Related Documentation

- [RELEASE_NOTES.md](../../RELEASE_NOTES.md)
- [CHANGELOG.md](../../CHANGELOG.md)
- [HISTORY.md](../../HISTORY.md)

🤖 Generated with [Claude Code](https://claude.com/claude-code)
