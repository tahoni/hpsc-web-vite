# Contributing

This guide covers everything you need to set up the HPSC Website — the React/TypeScript frontend for the
Hartbeespoortdam Practical Shooting Club (HPSC) — and start contributing. See [`README.md`](README.md) for a project
overview and [`ARCHITECTURE.md`](ARCHITECTURE.md) for the detailed design; for the full set of conventions AI coding
agents (and, by extension, contributors) follow in this repository, see [`AGENTS.md`](AGENTS.md) — this file
summarises the parts most relevant to opening a pull request.

## Table of Contents

- [📋 Prerequisites](#-prerequisites)
- [🚀 Getting Started](#-getting-started)
- [🧰 Development Scripts](#-development-scripts)
- [🧪 Testing](#-testing)
- [🏛️ Architecture at a Glance](#-architecture-at-a-glance)
- [🛠️ Claude Code Skills](#-claude-code-skills)
- [✍️ Documentation Conventions](#-documentation-conventions)
- [🗺️ Roadmap](#-roadmap)
- [🔀 Git Workflow](#-git-workflow)
- [🔍 CI/CD & Quality Gates](#-cicd--quality-gates)
- [☑️ Pull Request Checklist](#-pull-request-checklist)
- [🚢 Cutting a Release](#-cutting-a-release)
- [💬 Questions & Support](#-questions--support)

---

## 📋 Prerequisites

- **Node.js** — download from [nodejs.org](https://nodejs.org/)
- **NPM registry access** — a read-only npm token for the `@tahoni` GitHub Packages scope, set in the
  `NPM_TOKEN_READ` environment variable (see `AGENTS.md`'s Environment Variables table for the full list;
  `GOOGLE_MAPS_API_KEY` and `RECAPTCHA_V2_SITE_KEY` are optional locally but needed for the venue map and Contact Us
  captcha to render)
- **Git**

---

## 🚀 Getting Started

1. Clone the repository from [GitHub](https://github.com/tahoni/hpsc-web-vite).
2. Set the environment variables listed under Prerequisites above.
3. Install dependencies: `npm install`.
4. Start the dev server: `npm run dev` (or `npm run host` to bind to `http://hpsc.local/` instead of `localhost`).

---

## 🧰 Development Scripts

The following scripts are most relevant while contributing:

| Script            | Purpose                                       |
|-------------------|-----------------------------------------------|
| `npm run dev`     | Run the dev server with HMR                   |
| `npm run lint`    | Lint with ESLint                              |
| `npm test`        | Run the Vitest test suite                     |
| `npm run build`   | Type-check and build for production (`dist/`) |
| `npm run preview` | Preview the production build locally          |

See `README.md`'s Available Scripts section for the complete list, including `npm run docs` and `npm run sitemap`.

---

## 🧪 Testing

Vitest is configured (`npm test`) but this project currently has no test files — see
`documentation/roadmap/improvement-plan-tasks.md` for the tracked task on establishing initial coverage. When adding
tests, per `AGENTS.md`'s Test Conventions:

- Co-locate `<Name>.test.ts` / `<Name>.test.tsx` next to the file under test.
- For component tests, use `@testing-library/react` with a `jsdom` environment.
- Prefer testing behaviour and rendered output over implementation details; avoid snapshot tests of large component
  trees.
- Don't write tests whose sole purpose is verifying that TypeScript's type system or a trivial pass-through prop works.

---

## 🏛️ Architecture at a Glance

The application is organised by feature, with shared infrastructure centralised under `src/shared/` — see
`ARCHITECTURE.md` for full detail:

```
Route (React Router)
    → Feature page → Feature content → Shared components / layouts
```

**Conventions enforced by review, not the compiler:**

- Each non-trivial component or layout gets its own PascalCase folder — see `AGENTS.md`'s Component/layout folder
  shape subsection.
- Routing is data-driven via `PageMapping` instances (`BaseRoutes.ts`), not static JSX route trees.
- Framework-agnostic pure functions belong in `utils/`; anything with routing/UI context belongs in `helpers/` — see
  `documentation/recommendations/standard-utils-vs-helpers.md` for the split this project follows.

---

## 🛠️ Claude Code Skills

If you're using [Claude Code](https://claude.com/claude-code), this repository ships skills under `.claude/skills/`
that automate parts of the workflow below — `generate-commit-message` before committing, `scaffold-unit-tests`/
`scaffold-integration-tests` when adding tests and `sync-unreleased-changes` to check `CHANGELOG.md`'s Unreleased
section before opening a PR. See `AGENTS.md`'s Claude Code Skills section for the full list; every skill follows the
conventions documented there and summarised in this file, so using one doesn't skip any of the steps below.

---

## ✍️ Documentation Conventions

See `AGENTS.md`'s Documentation Conventions section for the full rules. The essentials:

- All documentation prose and code comments use **British English** spelling (e.g. "licence", "colour", "initialise"),
  not American English.
- Lists of three or more items don't take a comma before the final `and`/`or` (e.g. "clone, install and run", not
  "clone, install, and run").
- Doc comments must be syntactically valid **TSDoc**, not JSDoc-only syntax (`eslint-plugin-tsdoc`'s `tsdoc/syntax` rule
  is enforced).
- Wrap prose lines in Markdown files to between 100 and 120 characters; tables are exempt and stay on a single line per
  row.
- When crediting contributors or authors in documentation, source the list from actual git/GitHub history rather than
  assuming — see `AGENTS.md`'s Contributors convention.

---

## 🗺️ Roadmap

Full detail lives in `AGENTS.md`'s Roadmap Planning section.

| File                        | Purpose                                                                                                          |
|-----------------------------|--------------------------------------------------------------------------------------------------------------------|
| `improvement-plan.md`       | Synthesised goals/constraints from this project's own docs and configuration, and the resulting gaps and roadmap |
| `improvement-plan-tasks.md` | Concrete, checkbox-level task list broken out from `improvement-plan.md`'s gaps                                  |

Both live in `documentation/roadmap/`, kept separate from the standard documentation set. Unlike `README.md`/
`ARCHITECTURE.md`, these files are explicitly **not evergreen** — a point-in-time reading of the project, revisited
only when a gap closes, progresses or a new one is identified.

---

## 🔀 Git Workflow

This repository follows [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/); see `AGENTS.md`'s Git
Workflow section for the full branching model, merge rules and rationale. In short:

- Branch from, and open your PR against, **`develop`** — not `main`. Use `feature/<short-description>` for day-to-day
  work.
- Only urgent production fixes use `hotfix/<short-description>`, branched from and PR'd into `main` directly.
- Commit in logical chunks — one concern per commit — and write plain, imperative-mood commit messages (e.g. "Fix venue
  map marker not rendering on Safari"). This project does not use Conventional Commits prefixes (`feat:`, `fix:`, etc.).
- Update `CHANGELOG.md` in the same change that makes the change, under `### 🧪 [Unreleased]`, in the matching category
  and `##### <Area>` sub-heading.

---

## 🔍 CI/CD & Quality Gates

See `AGENTS.md`'s Code Quality & CI section for the current CodeQL/ESLint setup. There is no CI workflow that runs
`npm run lint`, `npm run build` or `npm test` automatically yet — run them locally before opening a PR (tracked as a
gap in `documentation/roadmap/improvement-plan-tasks.md`).

---

## ☑️ Pull Request Checklist

Before opening a pull request, confirm:

- [ ] `npm run lint` passes with no errors.
- [ ] `npm run build` succeeds (this project has no CI workflow that runs it automatically — see `AGENTS.md`'s Code
  Quality & CI section).
- [ ] `npm test` passes, and any new logic has co-located tests where applicable.
- [ ] A `CHANGELOG.md` entry has been added under `### 🧪 [Unreleased]`, in the correct Keep a Changelog category and
  `##### <Area>` sub-heading.
- [ ] Any affected documentation (`README.md`, `ARCHITECTURE.md`, `UI.md`, `CLAUDE.md`, `AGENTS.md`) has been updated to
  match — see `AGENTS.md`'s Reverse Sync rule.
- [ ] The branch follows the GitFlow naming and merge-target conventions above.
- [ ] Commit messages are plain, imperative-mood, with no Conventional Commits prefix.
- [ ] New or changed prose uses British English spelling and skips the serial comma.

---

## 🚢 Cutting a Release

Releasing a new version follows a fixed, ordered checklist (roadmap check → version bump → CHANGELOG → RELEASE_NOTES
→ HISTORY → CONTRIBUTING/ARCHITECTURE verification → archive → PR description) — see `AGENTS.md`'s Release Checklist
for the full, current procedure rather than duplicating it here, so the two never drift out of sync.

---

## 💬 Questions & Support

Feature requests, suggestions and bug reports are tracked on this
project's [Issues](https://github.com/tahoni/hpsc-web-vite/issues) page. For anything else, see `README.md`'s Author
section for contact details.
