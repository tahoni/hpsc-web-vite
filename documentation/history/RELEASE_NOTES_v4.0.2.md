# HPSC Website

## 🧾 Release Notes

### [4.0.2] - 2025-11-26

**Theme:** Path Aliases & Directory Standardisation

**Key Highlights:**

- Adopted `@`-notation path aliases in place of relative imports; refactored the directory structure and stylesheet
  names to industry conventions
- `.env` files are no longer excluded from Git; fixed dependency vulnerabilities

#### ➕ Added

##### Dependencies

- Added the `react-pdf` dependency for PDF rendering

#### 🔄 Changed

##### Build & Tooling

- Configured the resources to use a relative path via the `@` notation
- Refactored the directory structure and renamed the stylesheets to align with industry standards
- `.env` files are no longer ignored when checking into Git

#### 🐛 Fixed

##### Documentation

- Fixed the formatting of the `LICENSE.md` file

#### 🔐 Security

##### Dependencies

- Fixed security vulnerabilities in dependencies
