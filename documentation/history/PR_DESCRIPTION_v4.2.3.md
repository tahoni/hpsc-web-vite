## 🎯 Summary

- Updates club office-bearer information (Chairman, Secretary) to reflect current leadership
- Fixes a case-sensitive `WorldShootConstants` import path that broke builds on case-sensitive file systems
- Removes vulnerable and stale repository artefacts, and bumps dependencies to close known security issues

## 📦 Key Changes

- **Content:** Updated Chairman (Jan Kleynhans → Jan Lubbinge) and Secretary (Albert van Herk → Engela Lubbinge)
- **Build & Tooling:** Fixed incorrect casing in the `worldShoot2025` import path used by `WorldShootConstants`
- **Repository Hygiene:** Removed `.idea` and `.junie` from version control; added `.idea` to the VCS ignore list
- **Dependencies:** Updated `eslint-plugin-tsdoc` to 0.5.2 and related dependencies; fixed security vulnerabilities in `lodash-es`, `brace-expansion`, `minimatch`, `picomatch`

## 🧪 Test Plan

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] `npm test`
- [ ] Manual: confirm the app builds cleanly on a case-sensitive file system

## 🔗 Related Documentation

- [CHANGELOG.md — Version 4.2.3](../../CHANGELOG.md#-423---2026-05-04)
- [RELEASE_NOTES.md](../../RELEASE_NOTES.md)
- [HISTORY.md — Version 4.2.3](../../HISTORY.md#version-423-may-4-2026)
