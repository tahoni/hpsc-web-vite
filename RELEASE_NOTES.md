# HPSC Website

## 🧾 Release Notes

### [4.2.3] - 2026-05-04

**Theme:** Office-Bearer Update & Case-Sensitivity Fix

**Key Highlights:**

- Updated club office-bearer names (Chairman, Secretary) and fixed a case-sensitive `WorldShootConstants` import path that broke builds on case-sensitive file systems
- Removed `.idea`/`.junie` from version control; fixed vulnerable dependencies (`lodash-es`, `brace-expansion`, `minimatch`, `picomatch`)

#### 🔄 Changed

##### Content

- Updated club office-bearer names — Chairman: Jan Kleynhans → Jan Lubbinge; Secretary: Albert van Herk → Engela Lubbinge

##### Dependencies

- Updated `eslint-plugin-tsdoc` from 0.4.0 to 0.5.2 and related dependencies

#### 🐛 Fixed

##### Build & Tooling

- Fixed case-sensitive import path in `WorldShootConstants` — the `worldShoot2025` component directory was referenced with incorrect casing, causing build failures on case-sensitive file systems

#### 🗑️ Removed

##### Repository Hygiene

- Removed `.idea` (JetBrains IDE) and `.junie` directories from version control; added `.idea` to the VCS ignore list

#### 🔐 Security

##### Dependencies

- Fixed security vulnerabilities in `lodash-es`, `brace-expansion`, `minimatch`, `picomatch`
