# HPSC Website

## Release Notes

### [Version 4.2.3](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-4.2.3) - _2026-05-04_

Updated office-bearer details and fixed a case-sensitive import path.

#### Enhancements and Updates

- Updated club office-bearer names:
  - Chairman: Jan Kleynhans → Jan Lubbinge
  - Secretary: Albert van Herk → Engela Lubbinge

#### Bug Fixes

- Fixed case-sensitive import path in `WorldShootConstants` — the `worldShoot2025` component directory was referenced with incorrect casing, causing build failures on case-sensitive file systems.

#### General Technical Changes

- Removed `.idea` (JetBrains IDE) and `.junie` directories from version control.
- Added `.idea` to the VCS ignore list.

#### Dependencies

- Fixed security vulnerabilities in dependencies (`lodash-es`, `brace-expansion`, `minimatch`, `picomatch`).
- Updated `eslint-plugin-tsdoc` from 0.4.0 to 0.5.2 and related dependencies.

#### Changes by

@tahoni
