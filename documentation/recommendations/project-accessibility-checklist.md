# Accessibility Baseline Checklist for This Project

## Table of Contents

- [🧰 Automated: `eslint-plugin-jsx-a11y`](#-automated-eslint-plugin-jsx-a11y)
- [☑️ Manual WCAG AA Baseline](#-manual-wcag-aa-baseline)
- [🔍 SEO-Adjacent Checks](#-seo-adjacent-checks)
- [👍 Recommendation](#-recommendation)

---

This site is public-facing and content-driven, with no backend of its own — accessibility gaps here (colour
contrast, focus order, ARIA landmarks) directly affect real visitors, not just internal code quality. This document
is the project-specific WCAG AA baseline that `eslint-plugin-jsx-a11y` alone can't fully verify (contrast, focus
order and heading structure need a human or a browser check, not just static analysis).

---

## 🧰 Automated: `eslint-plugin-jsx-a11y`

`eslint.config.js`/`.eslintrc.cjs` enable `eslint-plugin-jsx-a11y`'s `recommended` rule set at its native severity
(mostly `"error"`, not downgraded to `"warn"` — the codebase was already clean against it when added). `npm run
lint` catches the mechanically-checkable half of this baseline automatically: missing `alt` text, invalid ARIA
attributes/roles, non-interactive elements with click handlers and no keyboard equivalent, and similar.

What it **can't** catch — the manual checklist below covers these instead:

- Actual colour contrast ratios (it can't render the page to measure pixels)
- Whether a heading hierarchy is semantically sensible (`h1` → `h2` → `h3`, not skipping levels)
- Whether focus order and visible focus outlines make sense when tabbing through a real page
- Whether link/button text is meaningful out of context ("Learn more" vs. "Learn more about membership")

---

## ☑️ Manual WCAG AA Baseline

Run through this list when adding or substantially changing a page, and periodically across the whole site:

- [ ] **Semantic headings** — one `<h1>`-equivalent concept per page (this project's `PageTitle` renders an `<h2>`,
  since the visual page title sits below the site's own header), headings never skip a level, and heading text
  describes the section it introduces rather than being purely decorative.
- [ ] **Focus outlines** — every interactive element (`<a>`, `<button>`, form control) has a visible focus indicator
  when tabbed to; don't remove `:focus`/`:focus-visible` outlines in custom CSS without replacing them with an
  equally visible alternative.
- [ ] **Colour contrast** — text against its background meets WCAG AA (4.5:1 for normal text, 3:1 for large text/UI
  components); check any new colour pairing from
  [`../../src/assets/styles/_colors.scss`](../../src/assets/styles/_colors.scss)'s Palette Token Map against a
  contrast checker before shipping it.
- [ ] **ARIA landmarks** — page regions use semantic HTML (`<nav>`, `<main>`, `<header>`, `<footer>`) or an explicit
  `role` where semantic HTML isn't practical, so assistive technology can jump between regions.
- [ ] **Link/button purpose** — link and button text makes sense read out of context (a screen reader user can
  navigate by a list of links alone); avoid bare "click here"/"read more" with no surrounding context in the
  accessible name.
- [ ] **Images** — every `<img>` has meaningful `alt` text, or `alt=""` when it's purely decorative (enforced by
  `jsx-a11y/alt-text`, but the *quality* of the text still needs a human read).
- [ ] **Keyboard navigation** — every interactive flow (menus, the Contact Us form, Captcha) is fully operable
  without a mouse.

---

## 🔍 SEO-Adjacent Checks

Closely related to accessibility, and validated as part of the same pass (per the improvement plan's Gap #5):

- [x] **Unique page titles/descriptions/canonical URLs** — `src/shared/pages/Page.tsx` sets `document.title`, the
  `<meta name="description">` tag and the `<link rel="canonical">` tag per route (sourced from each route's
  `PageMapping.description` in `src/shared/routes/BaseRoutes.ts`), instead of every route sharing `index.html`'s one
  static set of tags.
- [x] **`robots.txt`/`sitemap.xml`** — `public/robots.txt` allows all crawling and points at `sitemap.xml`;
  `public/sitemap.xml` is generated from the same route metadata via `npm run sitemap` (see `AGENTS.md`'s Build &
  Run Commands) — regenerate it whenever a route's path, dates or set of live routes changes, since it isn't
  regenerated automatically at build time.

---

## 👍 Recommendation

Treat the automated `jsx-a11y` rules as a floor, not a ceiling — they catch obvious mistakes, but genuine
accessibility needs the manual checklist above run against a real page, ideally with a screen reader or keyboard-only
pass, before a significant UI change ships.
