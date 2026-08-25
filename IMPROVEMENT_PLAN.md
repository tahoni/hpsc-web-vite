# HPSC Website Improvement Plan

Generated: 2026-08-25

This plan synthesises key goals and constraints from the repository's documentation and configuration (`README.md`, `ARCHITECTURE.md`, `UI.md`, `CLAUDE.md`, `AGENTS.md`, `package.json`, `vite.config.ts`) into a single high-level view of where the project stands and where it should go next. It is the executive-level companion to [`documentation/roadmap/plan.md`](documentation/roadmap/plan.md) — the detailed, themed plan with concrete actions, rationale, and impact per item — and [`documentation/roadmap/tasks.md`](documentation/roadmap/tasks.md), the flat, checkable backlog derived from it. Read this first for the big picture, then follow the links in [🔗 Related Documentation](#-related-documentation) for the specifics.

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

A condensed view of the eleven themed sections in `documentation/roadmap/plan.md`, with current status:

| # | Theme                              | Focus                                                                  | Status                                                                                          |
|---|--------------------------------------|--------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| 1 | Architecture & Code Quality          | Strict TS, stable component exports, naming-convention audits            | Not started                                                                                         |
| 2 | Build, Tooling & Performance         | Vite chunk hygiene, CI-safe visualiser, MDX integration checks           | Not started                                                                                         |
| 3 | Styling & Theming                    | Centralised Bootstrap overrides, `@use`-only Sass, form consistency      | Partially — legacy `@import` remains in `src/vendors/bootstrap/styles/index.scss`                   |
| 4 | Content, Routing & Sitemap           | Route metadata integrity, base URL source of truth, MDX guidance         | Two concrete bugs filed (`tasks.md` #51–52): the `News` route is unwired, and Contact Us has an inverted `dateCreated`/`dateUpdated` |
| 5 | Accessibility (a11y) & SEO           | a11y baseline (contrast, ARIA, focus), SEO essentials                    | Not started                                                                                         |
| 6 | Testing Strategy                     | Vitest unit tests, component testing with jsdom                          | Not started — no test files exist yet                                                               |
| 7 | CI/CD & Release Hygiene              | Lint/build/test gated in CI                                              | Release checklist done (`AGENTS.md`); CI gating still missing                                       |
| 8 | Security & Secrets Management        | Env var documentation, dependency audits                                 | Not started                                                                                         |
| 9 | Observability & Error Handling       | Top-level error boundary, optional logging                               | Not started                                                                                          |
| 10| Developer Experience & Documentation | Contributor guide, architecture doc upkeep                               | Contributor guide done (`CONTRIBUTING.md`)                                                          |
| 11| Performance Budget & Media           | Route-level code splitting, image optimisation                           | Partially — all non-Home routes already lazy-load via `React.lazy`                                  |

---

## 🗺️ Roadmap & Prioritisation

- **Short-term (0–2 weeks):** CI gating for lint/build/test, an `.env.example`, the two filed route-metadata fixes (`tasks.md` #51–52), a top-level `ErrorBoundary`, and initial unit tests.
- **Mid-term (2–6 weeks):** Accessibility baseline automation, a sourcemap/logging strategy, an MDX authoring guide, and performance budgets.
- **Long-term (6+ weeks):** Broader component tests with jsdom, automated dependency-audit policy, extended docs and demos, and a periodic architecture review.

---

## 🔗 Related Documentation

- [`documentation/roadmap/plan.md`](documentation/roadmap/plan.md) — the themed improvement plan with concrete actions, rationale, and impact per item.
- [`documentation/roadmap/tasks.md`](documentation/roadmap/tasks.md) — the flat, checkable task backlog derived from the plan above.
- [`ARCHITECTURE.md`](ARCHITECTURE.md) — the durable architectural design this plan must respect.
- [`AGENTS.md`](AGENTS.md) — cross-tool conventions (documentation, git workflow, release checklist) every change here must follow.
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — contributor-facing setup and pull request checklist.
