# Project Directory Structure in This Project

## Table of Contents

- [🗂️ `src/features/<Feature>/`: One Folder per Page/Domain](#-srcfeaturesfeature-one-folder-per-pagedomain)
- [🏗️ `src/shared/`: Cross-Feature Infrastructure](#-srcshared-cross-feature-infrastructure)
- [🧱 Component/Layout Folder Shape](#-componentlayout-folder-shape)
- [🗂️ `src/models/`, `src/constants/`, `src/enums/`: Grouped by Domain](#-srcmodels-srcconstants-srcenums-grouped-by-domain)
- [⚖️ `src/helpers/` vs `src/utils/`: The Split Is Actually Enforced Here](#-srchelpers-vs-srcutils-the-split-is-actually-enforced-here)
- [📦 `src/vendors/<library>/`: Overrides, Not Forks](#-srcvendorslibrary-overrides-not-forks)
- [🔧 `builders/`: Build-Time Scripts, Outside `src/`](#-builders-build-time-scripts-outside-src)
- [🧭 Path Aliases Mirror This Structure](#-path-aliases-mirror-this-structure)
- [👍 Recommendation](#-recommendation)

---

[`standard-directory-structure.md`](standard-directory-structure.md) describes a generic React/Vite layout — a flat
`components/`, `pages/`, `hooks/`, `services/`, `types/`, `store/` split. This project doesn't follow that shape. It
organises by **feature** for anything page-shaped, and by **domain** for anything data-shaped, with cross-feature
infrastructure consolidated under one `shared/` root. This document records the actual structure and the reasoning
behind it, so new folders get added consistently rather than drifting toward the generic shape.

---

## 🗂️ `src/features/<Feature>/`: One Folder per Page/Domain

Every top-level page/domain (`Home`, `AboutUs`, `ContactUs`, `Events`, `History`, `Links`, `Members`, `News`, `Venues`)
is a single self-contained folder:

```text
src/features/Home/
├── Home.mdx           ← content-heavy pages author copy in MDX
├── HomeContent.tsx    ← the feature's content component
├── HomePage.tsx       ← the routed page component
└── index.ts           ← barrel export
```

The generic structure splits a page across `pages/Home/`, `components/features/home/` and `services/`. This project
keeps a feature's page, content and (where present) `.mdx` copy in one folder instead, so working on a feature never
means hunting across three top-level directories for its parts.

---

## 🏗️ `src/shared/`: Cross-Feature Infrastructure

Everything more than one feature depends on lives under `src/shared/`, itself split by role rather than dumped into one
flat `components/`:

| Folder               | Role                                                                                                                                           |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| `shared/routes/`     | Data-driven routing: `BaseRoutes.ts` (route metadata), `RouteAliases.tsx` (lazy component mapping), `AppRoutes.tsx` (renders `Routes`/`Route`) |
| `shared/layouts/`    | Page chrome every route renders inside: `Layout`, `Header`, `Body`, `Footer`, `Content`, `Breakpoints`                                         |
| `shared/components/` | Reusable UI with no page-chrome role: `Captcha`, `Map`, `Sidebar`, `Section`, `Text`, `Video`, `Content`                                       |
| `shared/pages/`      | `Page` — the base wrapper every feature page composes                                                                                          |

The generic structure's `components/common/`, `components/layout/` and a separate top-level `pages/` map roughly onto
`shared/components/`, `shared/layouts/` and `shared/pages/` — but nested under one `shared/` root instead of living at
`src/`'s top level. This way `src/` itself only ever contains folders that are either a feature or explicitly shared,
never a third, ambiguous category.

---

## 🧱 Component/Layout Folder Shape

Every non-trivial component or layout gets its own PascalCase folder, following [
`standard-component-naming.md`](standard-component-naming.md):

```text
Header/
├── Header.tsx              # Component
├── Header.module.scss      # Sass Module — scoped styles
├── HeaderContent.tsx       # Content/sub-component, where the component has one
├── HeaderConstants.ts      # Component-local constants, where needed
└── index.ts                # Barrel export
```

This applies uniformly across `features/`, `shared/components/` and `shared/layouts/` — there's no separate naming rule
per directory.

---

## 🗂️ `src/models/`, `src/constants/`, `src/enums/`: Grouped by Domain

The generic structure puts all interfaces in one flat `types/`. This project groups each of these three folders by
domain once there's more than one related file, rather than by structural kind alone:

```text
src/models/
├── email/      (Email, EmailAttachment, EmailMessage)
├── pages/      (PageAlias, PageMapping)
├── sitemap/    (SitemapChangeFrequency, SitemapMappings)
└── venues/     (Venue, VenueEvent, VenueType)

src/constants/
├── about/      (associationConstants, clubConstants, venueConstants)
├── content/    (contentConstants)
├── images/     (contentImageConstants, layoutImageConstants)
└── commonConstants.ts

src/enums/
└── email/      (EmailType)
```

A domain only gets its own subfolder once it has enough related files to justify one — `commonConstants.ts` stays flat
at `src/constants/` because it doesn't belong to a single domain.

---

## ⚖️ `src/helpers/` vs `src/utils/`: The Split Is Actually Enforced Here

[`standard-utils-vs-helpers.md`](standard-utils-vs-helpers.md) notes that "many teams simply use `utils/` for
everything." This project doesn't — it keeps the two folders separate and enforces the semantic split:

- **`src/utils/`** — framework-agnostic pure functions with no routing/UI context (`htmlUtils.ts`).
- **`src/helpers/`** — application-specific helpers that *do* carry routing/UI context (`routeHelpers.tsx`,
  `menuHelpers.tsx` — both `.tsx`, since they work with route/menu React types).

The file extension is a useful tell: a `helpers/` file that needs `.tsx` (JSX or React-specific types) is exactly the
kind of app-coupled code `utils/` is meant to exclude.

---

## 📦 `src/vendors/<library>/`: Overrides, Not Forks

Third-party library overrides live in their own `vendors/<library>/` folder rather than touching the library's own
source or `node_modules`:

```text
src/vendors/bootstrap/styles/
├── index.scss
└── _custom.scss
```

See [`project-css-naming.md`](project-css-naming.md)'s Vendor Overrides section for how this folder's Sass is wired into
`App.scss` and themed. The pattern generalises: a new vendored library gets its own `src/vendors/<library>/styles/` (or
`<library>/` for non-style overrides) rather than being patched in place.

---

## 🔧 `builders/`: Build-Time Scripts, Outside `src/`

`builders/RoutesSitemap.ts` reuses `BaseRoutes`'s route metadata to generate `public/sitemap.xml` at build time
(`npm run sitemap`). It lives at the repo root, outside `src/`, because it's a Node build-time script that never ships
to the browser — not application runtime code. `tsconfig.app.json`'s `include` lists `["src", "builders"]` explicitly so
this script still gets type-checked against the same path aliases as the app, without Vite ever bundling it into the
client build.

---

## 🧭 Path Aliases Mirror This Structure

Every folder decision above has a matching alias, configured in both `vite.config.ts` (runtime resolution) and
`tsconfig.app.json` (type-checking):

| Alias                               | Resolves to                              |
|-------------------------------------|------------------------------------------|
| `@`                                 | `src/`                                   |
| `@assets`, `@images`, `@styles`     | `src/assets/*`                           |
| `@vendors`, `@bootstrap`            | `src/vendors/*`                          |
| `@features`                         | `src/features/`                          |
| `@shared`                           | `src/shared/`                            |
| `@helpers`                          | `src/helpers/`                           |
| `@utils`                            | `src/utils/`                             |
| `@models`                           | `src/models/`                            |
| `@constants`                        | `src/constants/`                         |
| `@pages`, `@components`, `@layouts` | `src/shared/{pages,components,layouts}/` |

**Known inconsistency:** both config files also define a `@routes` alias pointing at `src/routes/` — a directory that
doesn't exist. Routing actually lives at `src/shared/routes/`, reached via `@shared/routes`. It's already flagged with a
`TODO: remove` comment in both `vite.config.ts` and `tsconfig.app.json` — don't copy it as a precedent when adding a new
alias; treat `@shared/routes` as the real one.

---

## 👍 Recommendation

- Organise anything page-shaped as a self-contained `src/features/<Feature>/` folder (page + content + `.mdx`), not
  split across separate `pages/`/`components/`/`services/` trees.
- Put cross-feature infrastructure under `src/shared/`, split by role (`routes/`, `layouts/`, `components/`, `pages/`) —
  never directly at `src/`'s top level.
- Give every non-trivial component/layout its own PascalCase folder, per [`standard-component-naming.md`](standard-component-naming.md), 
  regardless of which directory it lives in.
- Group `models/`, `constants/` and `enums/` by domain once a domain has more than one related file; leave single-file,
  cross-domain content (like `commonConstants.ts`) flat.
- Keep `helpers/` and `utils/` genuinely separate, per [`standard-utils-vs-helpers.md`](standard-utils-vs-helpers.md) —
  `.tsx`/React-context code goes in `helpers/`, framework-agnostic pure functions in `utils/`.
- Put vendor overrides in their own `src/vendors/<library>/`, per [`project-css-naming.md`](project-css-naming.md) —
  never edit the vendored library's own source.
- Keep build-time-only scripts (like `builders/RoutesSitemap.ts`) outside `src/`, adding their directory to
  `tsconfig.app.json`'s `include` rather than moving them into the app source tree.
- When adding a path alias, update both `vite.config.ts` and `tsconfig.app.json` together, and point it at a folder that
  actually exists.
