# Customizing Bootstrap for Your Own Project

## Table of Contents

- [1. Why not Just Override the CSS?](#1-why-not-just-override-the-css)
- [2. Set up the Sass Build](#2-set-up-the-sass-build)
- [3. Compile it](#3-compile-it)
- [4. Only Pull in What You Use](#4-only-pull-in-what-you-use)
- [5. Override Variables, Not Rules](#5-override-variables-not-rules)
- [6. Extend Rather than Rewrite](#6-extend-rather-than-rewrite)
- [7. Alternative: CSS Custom Properties (Lighter-Weight Option)](#7-alternative-css-custom-properties-lighter-weight-option)
- [📊 Summary](#-summary)

---

The standard, recommended way to customize Bootstrap is through Sass, not by editing the compiled CSS or overriding everything with `!important`. This keeps your project upgradable and keeps output CSS small.

---

## 1. Why not Just Override the CSS?

Editing `bootstrap.min.css` directly or piling on override rules in a separate stylesheet works short-term but makes upgrading Bootstrap versions painful (your changes get lost or conflict), ships the full Bootstrap CSS *plus* your overrides (bloating file size) and fights Bootstrap's own specificity, leading to `!important` wars.

The Sass approach avoids all of this because you're recompiling Bootstrap with your values baked in from the start.

## 2. Set up the Sass Build

Install Bootstrap's source (Sass) via npm, not just the compiled CSS:

```bash
npm install bootstrap @popperjs/core
```

Create your own entry Sass file, e.g. `scss/custom.scss`:

```scss
// 1. Include functions first (so you can manipulate colors, SVGs, calc, etc.)
@import "../node_modules/bootstrap/scss/functions";

// 2. Include any default variable overrides here
$primary: #7c3aed;
$body-bg: #f8f7ff;
$font-family-sans-serif: "Inter", sans-serif;
$border-radius: .5rem;

// 3. Include remainder of required Bootstrap stylesheets
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/variables-dark";

// 4. Include any default map overrides here
$theme-colors: map-merge($theme-colors, (
        "brand": #14b8a6
));

// 5. Include remainder of required parts
@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// 6. Optionally include any additional Bootstrap components as needed
@import "../node_modules/bootstrap/scss/utilities";
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
@import "../node_modules/bootstrap/scss/containers";
@import "../node_modules/bootstrap/scss/grid";
@import "../node_modules/bootstrap/scss/buttons";
@import "../node_modules/bootstrap/scss/card";
// ...import only the components you actually use

// 7. Optionally include utilities API last to generate classes based on the Sass map in `_utilities.scss`
@import "../node_modules/bootstrap/scss/utilities/api";

// 8. Add additional custom code here
```

This ordering matters — it's the pattern Bootstrap's own docs use. Variables must be set after `functions` but before the main `variables` import, since that's what lets your values replace the `!default` values inside Bootstrap's own source.

## 3. Compile it

Add a build script (using the `sass` npm package, or run it through your bundler — Vite, Webpack, Parcel all support Sass loaders):

```bash
npm install sass --save-dev
npx sass scss/custom.scss dist/css/custom.css
```

Link `dist/css/custom.css` in your HTML instead of the default `bootstrap.min.css`.

## 4. Only Pull in What You Use

Rather than importing all of `bootstrap.scss`, import Bootstrap's partials individually (as shown above) so unused components — modals, toasts, carousels, etc. — never make it into your build. This is the single biggest lever for reducing final CSS size.

## 5. Override Variables, Not Rules

Bootstrap exposes hundreds of Sass variables (colors, spacing scale, font stack, border radii, breakpoints, z-index layers, component-specific variables like `$btn-padding-y`). Check `node_modules/bootstrap/scss/_variables.scss` for the full list. Setting these before the `variables` import is the "correct" way to theme Bootstrap — it cascades through every component automatically instead of you re-styling each one by hand.

Example — changing breakpoints:

```scss
$grid-breakpoints: (
        xs: 0,
        sm: 480px,
        md: 768px,
        lg: 1024px,
        xl: 1280px,
        xxl: 1536px
);
```

## 6. Extend Rather than Rewrite

For anything not covered by a variable (a new utility class, a one-off component variant), add it after the Bootstrap imports in the same `custom.scss`, using Bootstrap's own mixins where possible (`color-yiq()`, `button-variant()`, `media-breakpoint-up()`, etc.) so your additions stay consistent with the framework's behavior.

## 7. Alternative: CSS Custom Properties (Lighter-Weight Option)

Bootstrap 5.3+ also exposes many values as CSS variables (`--bs-primary`, `--bs-body-bg`, etc.) at the `:root` level. For small tweaks where a full Sass pipeline is overkill, you can override these directly in your own stylesheet loaded after Bootstrap's CSS:

```css
:root {
    --bs-primary: #7c3aed;
    --bs-border-radius: .5rem;
}
```

This doesn't recompile components (so things like `.btn-primary`'s hover/focus color mixes won't fully follow), but it's a fast option for theming without a build step.

---

## 📊 Summary

| Approach                                    | Best for                                        |
|---------------------------------------------|-------------------------------------------------|
| Sass variable overrides + selective imports | Production projects, full control, smallest CSS |
| CSS custom property overrides               | Quick theming, no-build-step setups             |
| Editing compiled CSS directly               | Avoid — breaks on upgrade, bloats output        |
