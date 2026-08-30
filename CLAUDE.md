# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository. See [
`AGENTS.md`](AGENTS.md) for the broader, tool-agnostic conventions that also apply here — documentation conventions, git
workflow, the release checklist, and tracking complex tasks with a todo list.

## Project Overview

HPSC Web is the React/TypeScript frontend for the Hartbeespoortdam Practical Shooting Club (HPSC) website — an
informational and content-driven site covering club news, events, history, venues, and membership information. There is
no backend in this repository; contact-form email delivery and reCAPTCHA verification are the only server-side
dependencies, both handled by third-party services called directly from the client.

- **Dev server**: `http://localhost:5173/` (or `http://hpsc.local/` via `npm run host`)
- **Routing**: React Router 8, driven by data (`PageMapping` instances), not static JSX route trees

## Working on Complex Tasks

For multistep or non-trivial tasks, use the TodoWrite tool to create and maintain a todo list, updating it as work
progresses — this keeps progress visible and keeps the work on track, per AGENTS.md's Git Workflow Conventions.

## Build & Run Commands

```bash
# Install dependencies (requires NPM_TOKEN_READ — see Environment Variables below)
npm install

# Run the dev server bound to hpsc.local instead of localhost
npm run host

# Generate TypeDoc API documentation (outputs to /target/docs/)
npm run docs

# Regenerate public/sitemap.xml from route metadata
npm run sitemap
```

## Environment Variables

| Variable                | Used in                                     | Purpose                                                                             |
|-------------------------|---------------------------------------------|-------------------------------------------------------------------------------------|
| `NPM_TOKEN_READ`        | `.npmrc`                                    | Read-only GitHub Packages token to install the `@tahoni` scope (`tahoni-lib-react`) |
| `GOOGLE_MAPS_API_KEY`   | `.env.local` → `VITE_GOOGLE_MAPS_API_KEY`   | Google Maps API key; without it the venue map does not render                       |
| `RECAPTCHA_V2_SITE_KEY` | `.env.local` → `VITE_RECAPTCHA_V2_SITE_KEY` | reCAPTCHA v2 site key for the Contact Us form's `Captcha` component                 |

`.env.production` only sets `VITE_SHOW_BREAKPOINTS=false` (a debug overlay toggle); it carries no secrets.

## Code Quality & CI

- **CodeQL**: security analysis, runs on push/PR to `main` and weekly. Config: `.github/workflows/codeql.yml`.
- **ESLint**: flat config (`eslint.config.js`) — TypeScript, React Hooks, and `react-refresh` rules. `.eslintrc.cjs` is
  a legacy mirror kept for tooling that hasn't migrated to flat config; keep the two in sync when changing lint rules.
- There is currently no CI workflow that runs `npm run lint`, `npm run build`, or `npm test` — only CodeQL runs
  automatically. Run these locally before opening a PR.

## Architecture

The application is organised by feature, with shared infrastructure centralised under `src/shared/`:

```
Route (React Router)
    → Feature page   (src/features/<Feature>/<Feature>Page.tsx)
    → Feature content (…Content.tsx, and .mdx for content-heavy pages)
    → Shared components / layouts (src/shared/components/, src/shared/layouts/)
```

### Key directories (`src/`)

| Directory            | Role                                                                                                                                                                                                                                                                                    |
|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `features/`          | One folder per page/domain (`Home`, `AboutUs`, `ContactUs`, `Events`, `History`, `Links`, `Members`, `News`, `Venues`), each self-contained with a `…Page.tsx`, content component(s), optional `.mdx`, styles, and a barrel `index.ts`                                                  |
| `shared/routes/`     | Data-driven routing: `BaseRoutes.ts` (route metadata as `PageMapping`s), `RouteAliases.tsx` (maps mappings to lazy-loaded components), `AppRoutes.tsx` (renders `Routes`/`Route` from the mappings)                                                                                     |
| `shared/layouts/`    | `Layout`, `Header`, `Body`, `Footer`, `Content`, `Breakpoints` — the page chrome every route renders inside                                                                                                                                                                             |
| `shared/components/` | Reusable UI: `Captcha`, `Map`, `Sidebar`, `Section`, `Text`, `Title`, `Video`, `Content`                                                                                                                                                                                                |
| `shared/pages/`      | `Page` — the base wrapper feature pages compose                                                                                                                                                                                                                                         |
| `models/`            | TypeScript interfaces/classes grouped by domain: `email/`, `pages/`, `sitemap/`, `venues/`                                                                                                                                                                                              |
| `helpers/`           | Application-specific helpers with routing/UI context (`routeHelpers.tsx`, `menuHelpers.tsx`) — see [`documentation/recommendations/standard-utils-vs-helpers.md`](documentation/recommendations/standard-utils-vs-helpers.md) for the `utils/` vs `helpers/` split this project follows |
| `utils/`             | Framework-agnostic pure functions (`htmlUtils.ts`)                                                                                                                                                                                                                                      |
| `constants/`         | Grouped by domain (`about/`, `content/`, `images/`) plus `commonConstants.ts`                                                                                                                                                                                                           |
| `enums/`             | `email/EmailType`                                                                                                                                                                                                                                                                       |
| `vendors/bootstrap/` | Bootstrap 5 SCSS overrides — the club's colour palette (Butterscotch, etc.) is applied here, not by editing Bootstrap itself                                                                                                                                                            |
| `assets/`            | Bundler-processed assets: `images/`, `styles/` (global SCSS, using `@use`, not `@import`)                                                                                                                                                                                               |

`builders/RoutesSitemap.ts` reuses the same `BaseRoutes` metadata to generate `public/sitemap.xml` at build time
(`npm run sitemap`).

### Component/layout folder shape

Each non-trivial component or layout gets its own PascalCase folder (matching [
`documentation/recommendations/standard-component-naming.md`](documentation/recommendations/standard-component-naming.md)):

```
Header/
├── Header.tsx              # Component
├── Header.module.scss      # Sass Module — scoped styles
├── HeaderContent.tsx        # Content/sub-component, where the component has one
├── HeaderConstants.ts       # Component-local constants, where needed
└── index.ts                 # Barrel export
```

## Testing

Vitest is configured (`npm test`) but the project currently has no test files — establishing test coverage is tracked
in [`documentation/roadmap/improvement-plan-tasks.md`](documentation/roadmap/improvement-plan-tasks.md). When adding
tests:

- Co-locate `*.test.ts`/`*.test.tsx` next to the file under test, matching the naming table in [
  `documentation/recommendations/standard-component-naming.md`](documentation/recommendations/standard-component-naming.md).
- For component tests, add `@testing-library/react` and configure a `jsdom` environment (not yet set up) rather than
  reaching for a full browser runner.
