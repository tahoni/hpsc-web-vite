# HPSC Website

## 🧾 Release Notes

### [4.0.1] - 2025-10-27

**Theme:** Bootstrap Icons & reCAPTCHA v3

**Key Highlights:**

- Upgraded the Bootstrap integration to Bootstrap Icons; upgraded Vite `6.3.5` → `6.4.1` for security fixes
- Added `react-google-recaptcha-v3`; refactored conditional rendering across components for readability

#### ➕ Added

##### Documentation

- Added JSDoc comments for better documentation

##### Dependencies

- Added `bootstrap-icons` for icon library support
- Added `react-google-recaptcha-v3` and `@types/react-google-recaptcha-v3` for reCAPTCHA integration

#### 🔄 Changed

##### Build & Tooling

- Upgraded Bootstrap framework integration with Bootstrap Icons
- Applied `fs.strict` checking to HTML files (via the Vite upgrade)
- Improved the `GeneratePrDescription.ts`/`GenerateReleaseNotes.ts` builder scripts
- Improved code readability, maintainability and type safety; resolved outstanding project errors and warnings

##### Components

- Refactored conditional rendering logic across components for improved readability and maintainability
- Improved error handling and type annotations

#### 🔐 Security

##### Dependencies

- Fixed security vulnerabilities in dependencies; **Vite** upgraded `6.3.5` → `6.3.6` → `6.4.1` (security fixes and
  improvements)
