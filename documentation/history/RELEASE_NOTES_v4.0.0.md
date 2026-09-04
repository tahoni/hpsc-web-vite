# HPSC Website

## 🧾 Release Notes

### [4.0.0] - 2025-08-17

**Theme:** Stylesheet Standards & the CHANGELOG/HISTORY Split

**Key Highlights:**

- Adopted `@use`/`@forward` over `@import`, underscore-prefixed partials and a dedicated `vendors/` directory for
  Bootstrap overrides
- Moved the Version 3.x changelog content into a new `HISTORY.md`, and created the `CHANGELOG.md`/`RELEASE_NOTES.md`
  templates — the point at which this project's release documentation took its current shape

#### ➕ Added

##### Assets

- Added the Bosninja logo in black and white

##### Components

- Created new Content components

#### 🔄 Changed

##### Routing & Sitemap

- Updated the sitemap

##### Styling

- Used `@use` and `@forward` instead of `@import` in the stylesheets
- Renamed the partial stylesheets to start with an underscore
- Overrode some default Bootstrap styles and used namespaces in the project stylesheets
- Created a `vendors` subdirectory for Bootstrap overrides

##### Build & Tooling

- Refactored the directory structure
- Updated the build targets to `ES2023`
- Integrated with Junie

##### Documentation

- Improved the `ARCHITECTURE.md` file
- Moved the `CHANGELOG.md` file contents for Version 3 to `HISTORY.md`
- Created templates for `CHANGELOG.md` and `RELEASE_NOTES.md`

#### 🐛 Fixed

##### Forms

- Fixed the e-mail address regular expression

#### 🔐 Security

##### Dependencies

- Updated vulnerable dependencies
