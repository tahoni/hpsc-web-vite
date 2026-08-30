# Project CSS/SCSS Naming in This Project

## Table of Contents

- [🌐 Global Styles: `App.scss`](#-global-styles-appscss)
- [🎨 Shared/Personal Styles: `src/assets/styles/`](#-sharedpersonal-styles-srcassetsstyles)
- [📦 Vendor Overrides: `src/vendors/bootstrap/styles/`](#-vendor-overrides-srcvendorsbootstrapstyles)
- [🧩 Component/Layout Styles: CSS Modules](#-componentlayout-styles-css-modules)
- [✅ Recommendation](#-recommendation)

---

[`standard-css-naming.md`](standard-css-naming.md) recommends `index.css` as the global stylesheet — the de facto
React/Vite convention, imported from `main.tsx`. This project doesn't follow that shape. It uses **SCSS**, not plain
CSS, and aggregates all global styles through `App.scss` (imported once by `App.tsx`) instead of an `index.css`/
`main.tsx`-level import. Component-level styles use CSS Modules (`*.module.scss`) instead. This document records the
actual structure and the reasoning behind it, so new stylesheets get added consistently rather than drifting toward the
generic convention.

---

## 🌐 Global Styles: `App.scss`

`src/App.scss` is the single global stylesheet, imported once by `src/App.tsx`. It uses Sass `@use` to pull in
everything global, grouped by origin:

```scss
// App.scss
@use "sweetalert2/dist/sweetalert2.css" as *;
// package-styles
@use "@tahoni/tahoni-lib-react/dist/index.css" as *;
// library-styles
@use "assets/styles/styles" as *;
// personal-styles
@use "vendors/bootstrap/styles/index" as *; // vendor-styles
```

```typescript jsx
// App.tsx
import "./App.scss";
```

There is no `index.scss`, `index.css`, or `main.tsx`-level style import anywhere in the codebase — `App.scss` is the
single entry point for global styles. Do not introduce an `index.scss`; it would only split global styles across two
files that both claim to be "the global stylesheet."

---

## 🎨 Shared/Personal Styles: `src/assets/styles/`

Project-wide SCSS (colours, fonts, theme, icons, forms, shared base rules, variables) lives under `src/assets/styles/`
as partials, forwarded through a barrel file:

```text
src/assets/styles/
├── _colors.scss
├── _fonts.scss
├── _theme.scss
├── _icons.scss
├── _forms.scss
├── _standard.scss
├── _variables.scss
└── styles.scss      ← forwards/uses the partials above
```

`styles.scss` is the only file in this folder consumed directly (via `App.scss`'s `@use "assets/styles/styles" as *`);
the underscore-prefixed files are Sass partials, not imported individually elsewhere.

---

## 📦 Vendor Overrides: `src/vendors/bootstrap/styles/`

Bootstrap 5 overrides (colour palette, etc.) live here rather than editing Bootstrap itself, and are pulled into
`App.scss` the same way:

```text
src/vendors/bootstrap/styles/
├── index.scss
└── _custom.scss
```

`_custom.scss` maps HPSC fonts/colours onto Bootstrap's Sass variables (`$primary`, `$body-color`, `$border-color`,
etc.). `index.scss` follows Bootstrap's own documented customization recipe — `functions` → `custom` → the full
`bootstrap/scss/bootstrap` entry point — so every component partial (buttons, cards, forms, nav, …) compiles using the
club's overrides instead of Bootstrap's defaults:

```scss
// vendors/bootstrap/styles/index.scss
@import "bootstrap/scss/functions";
@import "custom";
@import "bootstrap/scss/bootstrap";
```

**Any other file that needs Bootstrap's Sass variables or mixins must load them through this module** —
`@use "@bootstrap/styles/index" as *;` — rather than `@use`/`@import`ing a raw `bootstrap/scss/...` partial directly.
Sass's `@use` module system only compiles a given module once per build, so routing every consumer through this one,
themed entry point guarantees a single, correctly themed Bootstrap compilation instead of a second, unthemed one.

`src/assets/styles/_forms.scss` does exactly this (`@use "@bootstrap/styles/index" as *;`) to reach `$primary`,
`$danger`, etc. This used to instead do `@use "bootstrap/scss/bootstrap" as *;` directly — a separate, independently
configured compilation that never saw `_custom.scss`'s overrides, so `.btn`, `.card`, and other Bootstrap component
classes silently rendered with stock Bootstrap colours (`#0d6efd`) instead of the club's palette. Watch for this pattern
regressing if a new file needs Bootstrap variables — always go through `@bootstrap/styles/index`, never
`bootstrap/scss/bootstrap` (or `.../variables`, `.../mixins`, etc.) directly.

The one accepted exception is `bootstrap/scss/bootstrap-grid`, used directly (unthemed) by a handful of layout
`*.module.scss` files (`Layout`, `Body`, `Footer`, `ImageSidebar`, `LinkWithLogoAndDescription`) purely for
grid/breakpoint mixins — `_custom.scss` doesn't override any grid variables, so there's no theming to lose there.

---

## 🧩 Component/Layout Styles: CSS Modules

Every non-trivial component or layout gets its own scoped `*.module.scss` file, colocated in its component folder (see [
`standard-component-naming.md`](standard-component-naming.md)):

```text
Header/
├── Header.tsx
├── Header.module.scss   ← scoped styles for this component
└── index.ts
```

Examples already in the codebase: `Header.module.scss`, `Footer.module.scss`, `Body.module.scss`, `Content.module.scss`,
`Layout.module.scss`, `Captcha.module.scss`, and each feature page's own `*.module.scss` (e.g. `AboutUs.module.scss`,
`Venues.module.scss`).

---

## ✅ Recommendation

- Keep `App.scss` as the single global stylesheet aggregator. Do not add an `index.scss`.
- Put project-wide SCSS (colours, fonts, theme, variables, shared base styles) in `src/assets/styles/` as partials,
  forwarded through `styles.scss`.
- Put Bootstrap/vendor overrides in `src/vendors/bootstrap/styles/` (or a similarly named `vendors/<library>/styles/`
  folder for other vendored libraries).
- When any file needs Bootstrap's Sass variables/mixins, `@use "@bootstrap/styles/index" as *;` — never `@use`/`@import`
  a raw `bootstrap/scss/...` partial directly, or it will compile Bootstrap a second time with stock (unthemed) defaults
  instead of the club's palette.
- Give every non-trivial component/layout its own `*.module.scss` for scoped styles, following 
  [`standard-component-naming.md`](standard-component-naming.md).
