# HPSC Website Improvement Plan

Generated: 2026-08-25 (originally generated 2025-08-09; merged from `documentation/roadmap-old/plan.md`, now archived, on this date)

This plan synthesises key goals and constraints from the repository's documentation and configuration (`README.md`, `ARCHITECTURE.md`, `UI.md`, `CLAUDE.md`, `AGENTS.md`, `package.json`, `vite.config.ts`) into a single view of where the project stands and where it should go next, organised by theme with rationale and expected impact for each item. It supersedes the former `documentation/roadmap/plan.md`, whose content is fully merged in below. The flat, checkable backlog derived from it lives in [`documentation/roadmap-old/tasks.md`](documentation/roadmap-old/tasks.md).

## Table of Contents

- [🎯 Goals](#-goals)
- [📋 Constraints](#-constraints)
- [✨ Improvement Themes](#-improvement-themes)
- [🗺️ Roadmap & Prioritisation](#️-roadmap--prioritisation)
- [🔗 Related Documentation](#-related-documentation)

---

## 🎯 Goals

- Deliver an informative, accessible, fast, and maintainable club website for members and visitors. There is no backend in this repository — contact-form email delivery and reCAPTCHA verification are the only server-side dependencies, both handled by third-party services called directly from the client.
- Keep the codebase organised by feature, with shared infrastructure centralised under `src/shared/`, and routing driven by data (`PageMapping` instances) rather than static JSX route trees.
- Maintain strict TypeScript and consistent, discoverable documentation across every root doc, so both contributors and AI coding agents can work from the same source of truth.
- Ship predictable, well-documented releases following the GitFlow branching model and the formal Release Checklist.

---

## 📋 Constraints

- **No backend.** Any proposed change that needs persistent state or server-side logic is out of scope, beyond the two existing third-party integrations (contact-form email, reCAPTCHA v2).
- **Fixed tech stack.** React 19, Vite 6, TypeScript 5 (strict mode), and React Router 7's data-driven routing are the target — tooling or dependency proposals should work within these, not replace them.
- **No CI beyond CodeQL.** Only security analysis runs automatically on push/PR to `main` and weekly; `npm run lint`, `npm run build`, and `npm test` must currently be run locally before opening a PR.
- **Documentation conventions are load-bearing.** `AGENTS.md` governs British English spelling, icon-headed sections, GFM tables, and the root Documentation File Map — any new root doc (this one included) must be added to that map.
- **GitFlow and Keep a Changelog govern every change.** Branching follows `develop`/`main`/`feature/*`/`release/*`/`hotfix/*`, and every notable change needs a `CHANGELOG.md` entry in the same commit that makes it.
- **Dependency surface is already sizeable.** `package.json` currently pins around 30 runtime and 21 dev dependencies at version `4.2.3` — improvements should favour tightening or consolidating this surface over expanding it further.

---

## ✨ Improvement Themes

### 1. Architecture and Code Quality

**Status:** Not started.

#### 1.1 Enforce and extend strict TypeScript usage

- Actions:
    - Maintain strict mode across `tsconfig` and fix outstanding `any`/implicit types as found.
    - Introduce stricter lint rules where appropriate (`no-floating-promises` via `typescript-eslint`, `consistent-type-imports`).
    - Add types for external JSON/MDX data where used, leveraging module declarations if needed.
- Rationale: The project already runs strict TS with bundler `moduleResolution`. Tightening types reduces runtime bugs and improves IntelliSense.
- Impact: Fewer regressions, clearer contracts, easier refactors.

#### 1.2 Stabilise component exports

- Actions:
    - Prefer named exports for React components and keep the export surface stable per ESLint's `react-refresh` guidance.
    - Add index files for barrel exports where folders contain multiple components.
- Rationale: Hot refresh and tree-shaking work better with predictable exports.
- Impact: Better DX during dev and smaller bundles.

#### 1.3 Directory and naming conventions audit

- Actions:
    - Validate adherence to conventions in `ARCHITECTURE.md` (PascalCase leaf directories, snake_case CSS classes, camelCase variables).
    - Add lint-staged or a custom script to flag deviations (optional).
- Rationale: Consistency speeds onboarding and reduces cognitive load.
- Impact: Uniform codebase; easier navigation.

### 2. Build, Tooling, and Performance

**Status:** Not started.

#### 2.1 Vite build optimisations and manual chunk hygiene

- Actions:
    - Review `vite.config.ts`'s `manualChunks` switching; verify major vendors are properly grouped and update if new heavy dependencies are added.
    - Keep `rollup-plugin-visualizer` but gate auto-open in CI by environment variable (e.g. `VISUALIZER_OPEN=false`) or set `open: false` in CI.
- Rationale: Stable vendor chunking improves cacheability; avoiding auto-open prevents CI flakiness.
- Impact: Faster loads, reliable CI builds.

#### 2.2 Sourcemap strategy

- Actions:
    - Consider enabling hidden sourcemaps in production for error tracking (hidden to users) if error monitoring is introduced.
- Rationale: Useful stack traces without exposing code maps in the web UI.
- Impact: Faster debugging of production issues.

#### 2.3 MDX integration checks

- Actions:
    - Verify `@mdx-js/rollup` pre-enforcement is applied consistently; document authoring guidance for MDX content (frontmatter, allowed components).
- Rationale: Content authors need clear rules; ensures build consistency.
- Impact: Fewer MDX content build issues.

### 3. Styling and Theming (SCSS, Bootstrap)

**Status:** Partially addressed — legacy `@import` still remains in `src/vendors/bootstrap/styles/index.scss` (see 3.2).

#### 3.1 Centralise Bootstrap overrides

- Actions:
    - Keep overrides in `src/vendors/bootstrap/stylesheets/_custom.scss`.
    - Document commonly changed variables and their mapping to CSS custom properties.
- Rationale: Predictable theming changes with minimal risk.
- Impact: Easier theme adjustments.

#### 3.2 Sass module usage (`@use`)

- Actions:
    - Ensure all new stylesheets use `@use` with namespacing; avoid `@import`.
    - Maintain colours/variables in `src/assets/stylesheets`; provide a palette token map and usage examples in docs.
- Rationale: The modern Sass module system prevents global leakage.
- Impact: Fewer style collisions and faster compiles.
- Status: `src/vendors/bootstrap/styles/index.scss` still uses legacy `@import` — not yet migrated.

#### 3.3 Forms styling consistency

- Actions:
    - Audit `_forms.scss` and form components for consistent spacing, focus states, and validation styles matching Bootstrap 5.
- Rationale: Accessibility and UX consistency across forms.
- Impact: Better usability and visual consistency.

### 4. Content, Routing, and Sitemap

**Status:** Two concrete bugs filed as `documentation/roadmap-old/tasks.md` items 51–52 (see 4.1); base URL still hardcoded (see 4.2).

#### 4.1 Route metadata integrity

- Actions:
    - Ensure `coreRoutes` (`BaseRoutes.ts`) maintain the correct `dateCreated`/`dateUpdated` for the sitemap.
    - Add a lightweight script or unit test that scans route metadata and warns on missing dates.
    - Wire `src/features/News` into `coreRoutes` (`BaseRoutes.ts`) and `RouteAliases.tsx`/`AppRoutes.tsx` — the feature folder exists but isn't referenced by any route mapping, so it's unreachable and absent from the sitemap; alternatively remove the folder if the feature isn't ready to ship.
    - Fix `coreContactUsRoute`'s inverted dates in `BaseRoutes.ts`: `dateCreated` is currently `2025-12-26`, which postdates its own `dateUpdated` of `2025-03-03`.
- Rationale: Sitemap priority and freshness rely on accurate metadata.
- Impact: Better SEO signals.

#### 4.2 Base URL source of truth

- Actions:
    - Confirm `baseUrl` lives in a single constants module. Expose it as a single constant used by the sitemap builder and any canonical link tags — currently `src/constants/commonConstants.ts` hardcodes it rather than sourcing it from an environment variable.
- Rationale: Avoid mismatched hostnames in generated outputs.
- Impact: Correct links in sitemap and metadata.

#### 4.3 MDX authoring guidance

- Actions:
    - Add a contributor note on how to add content under feature MDX files, including directory structure and date conventions.
- Rationale: Lower barrier for content updates.
- Impact: Faster content iteration with less PR back-and-forth.

### 5. Accessibility (a11y) and SEO

**Status:** Not started.

#### 5.1 Accessibility baseline

- Actions:
    - Define a checklist: semantic headings, focus outlines, colour contrast compliance (WCAG AA), ARIA landmarks, link purpose clarity.
    - Integrate an automated a11y check in dev (optional: `axe-core` in dev-only tests, or Playwright/`axe` in CI later).
- Rationale: Inclusive design and better UX.
- Impact: Reduced accessibility issues; improved usability.

#### 5.2 SEO essentials

- Actions:
    - Ensure pages have unique titles, meta descriptions, and canonical URLs.
    - Validate `robots.txt` and `sitemap.xml` generation via `npm run sitemap`; document the redirect to `public/sitemap.xml`.
- Rationale: Improve search visibility and avoid duplicate content issues.
- Impact: Better discoverability and crawl efficiency.

### 6. Testing Strategy

**Status:** Not started — no test files exist yet in this repository.

#### 6.1 Adopt Vitest for unit tests

- Actions:
    - Add minimal smoke tests for critical utilities and helpers.
    - Create a CI-friendly `npx vitest run` command and document its usage.
- Rationale: Catch regressions early with low overhead.
- Impact: Confidence in changes without heavy setup.

#### 6.2 Component testing (optional, phased)

- Actions:
    - When adding component tests, use `@testing-library/react` with a `jsdom` environment. Introduce a `vitest.config.ts` with `test.environment = 'jsdom'` if component testing expands.
- Rationale: React 19 compatibility and testing best practices.
- Impact: Reliable UI behaviour validation.

### 7. CI/CD and Release Hygiene

**Status:** Release checklist done (see 7.2); CI gating still missing (see 7.1).

#### 7.1 Lint and test in CI

- Actions:
    - Ensure a CI pipeline runs `npm ci`, ESLint, and `npx vitest run`.
    - Disable visualiser auto-open during CI (env gate).
- Rationale: Prevents regressions and CI noise.
- Impact: Stable pipeline and consistent code quality.

#### 7.2 Release checklist

- Actions:
    - Done — the release checklist lives in `AGENTS.md`'s Release Checklist section.
- Rationale: Repeatable, low-risk releases.
- Impact: Fewer missed steps during releases.

### 8. Security and Secrets Management

**Status:** Not started.

#### 8.1 Environment variables

- Actions:
    - Document required env vars (`NPM_TOKEN_READ`, `GOOGLE_MAPS_API_KEY`, `RECAPTCHA_V2_SITE_KEY`) in README and a `.env.example` without secrets — `CLAUDE.md` already documents these; README still doesn't.
    - Validate at app startup: log non-sensitive warnings if env-dependent features are disabled.
- Rationale: Clear setup for contributors; avoid silent feature failures.
- Impact: Faster setup, fewer bug reports stemming from missing keys.

#### 8.2 Dependency audits

- Actions:
    - Run `npm audit` in CI (advisory-only; fail on high/critical where possible).
    - Track heavy or risky packages (e.g. `sanitize-html`) and pin versions thoughtfully.
- Rationale: Reduce known vulnerabilities.
- Impact: Improved security posture.

### 9. Observability and Error Handling

**Status:** Not started.

#### 9.1 Error boundaries

- Actions:
    - Add a top-level React error boundary around routes to catch rendering errors and show a friendly fallback.
- Rationale: Prevents white screens and aids diagnosis.
- Impact: Better resilience in production.

#### 9.2 Optional logging integration

- Actions:
    - Evaluate lightweight client-side logging (console suppression in prod, optional remote logging). If adopted, enable hidden source maps.
- Rationale: Faster production issue triage.
- Impact: Shorter mean time to resolution.

### 10. Developer Experience and Documentation

**Status:** Contributor guide done (see 10.1); architecture doc upkeep is ongoing (see 10.2).

#### 10.1 Contributor guide

- Actions:
    - Done — `CONTRIBUTING.md` covers setup, branching, lint/test/build expectations, and the PR checklist.
- Rationale: Onboarding acceleration and consistent PR quality.
- Impact: Less review churn.

#### 10.2 Architecture doc updates

- Actions:
    - Update `ARCHITECTURE.md` to reflect any new builders or routing changes, and ensure screenshots/demos are referenced from `documentation/`.
- Rationale: Keep docs truthful and useful.
- Impact: Reduced confusion and outdated guidance.

### 11. Performance Budget and Media

**Status:** Partially addressed — route-level code splitting is already in place (see 11.1).

#### 11.1 Bundle and route-level performance

- Actions:
    - Use route-level code splitting where possible (`lazy()` + Suspense) for pages not critical to initial paint.
    - Monitor `target/bundle-visualization.html` after each release for growth; document thresholds.
- Rationale: Maintain a fast initial load and time-to-interactive.
- Impact: Better perceived performance.
- Status: Done — every non-Home route in `RouteAliases.tsx` is already `React.lazy`-loaded.

#### 11.2 Images and assets

- Actions:
    - Audit images under `public/assets/images`; convert large static images to modern formats (WebP/AVIF) where supported.
    - Ensure responsive images and `width`/`height` attributes to avoid layout shift.
- Rationale: Reduce bytes over the wire and layout shifts.
- Impact: Faster loads and improved Core Web Vitals.

---

## 🗺️ Roadmap & Prioritisation

- **Short-term (0–2 weeks):** CI gating for lint/build/test and the visualiser, an `.env.example`, the two filed route-metadata fixes (`documentation/roadmap-old/tasks.md` items 51–52), a top-level `ErrorBoundary`, initial unit tests, image audit kickoff.
- **Mid-term (2–6 weeks):** Accessibility baseline automation, sourcemap strategy and optional logging, MDX authoring guide, performance budgets.
- **Long-term (6+ weeks):** Broader component tests with jsdom, dependency audit automation with a documented policy, extended docs and demos, periodic architecture review.

---

## 🔗 Related Documentation

- [`documentation/roadmap-old/tasks.md`](documentation/roadmap-old/tasks.md) — the flat, checkable task backlog derived from this plan.
- [`ARCHITECTURE.md`](ARCHITECTURE.md) — the durable architectural design this plan must respect.
- [`AGENTS.md`](AGENTS.md) — cross-tool conventions (documentation, git workflow, release checklist) every change here must follow.
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — contributor-facing setup and pull request checklist.
