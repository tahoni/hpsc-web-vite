# AGENTS.md

Conventions for any AI coding agent working in this repository — project overview, tech stack, build/run commands,
environment variables, architecture, code quality & CI, documentation conventions, roadmap planning, Claude Code
skills, testing, git workflow and the release checklist all live here. [`CLAUDE.md`](CLAUDE.md) is a thin pointer to
this file, kept only because Claude Code specifically looks for a file by that name. Some content (documentation
conventions, icon reuse) is intentionally restated in both this file and the per-file docs it governs, since not
every agent tool reads `AGENTS.md`.

## Table of Contents

- [📖 Project Overview](#-project-overview)
- [⚙️ Tech Stack](#-tech-stack)
- [🧰 Build & Run Commands](#-build--run-commands)
- [🔧 Environment Variables](#-environment-variables)
- [🏛️ Architecture Overview](#-architecture-overview)
- [🔬 Code Quality & CI](#-code-quality--ci)
- [✍️ Documentation Conventions](#-documentation-conventions)
- [🗺️ Documentation File Map](#-documentation-file-map)
- [🛤️ Roadmap Planning](#-roadmap-planning)
- [🛠️ Claude Code Skills](#-claude-code-skills)
- [🧪 Test Conventions](#-test-conventions)
- [📁 Directory Tree Maintenance](#-directory-tree-maintenance)
- [🔀 Git Workflow](#-git-workflow)
- [🚢 Release Checklist](#-release-checklist)
- [🌲 Evergreen Documentation](#-evergreen-documentation-readmemd--architecturemd)

---

## 📖 Project Overview

HPSC Web is the React/TypeScript frontend for the Hartbeespoortdam Practical Shooting Club (HPSC) website — an
informational and content-driven site covering club news, events, history, venues and membership information. There is
no backend in this repository; contact-form email delivery and reCAPTCHA verification are the only server-side
dependencies, both handled by third-party services called directly from the client.

- **Dev server:** `http://localhost:5173/` (or `http://hpsc.local/` via `npm run host`)
- **Routing:** React Router 8, driven by data (`PageMapping` instances), not static JSX route trees

---

## ⚙️ Tech Stack

- **Language:** TypeScript (strict mode)
- **Framework:** React 19
- **Build tool:** Vite 8, via `npm run build` / `npm run dev`
- **Routing:** React Router 8 (data-driven — see [`ARCHITECTURE.md`](ARCHITECTURE.md))
- **UI components:** React Bootstrap 2 (Bootstrap 5)
- **Styling:** SCSS (Sass) with Sass Modules and `@use`-based global styles
- **Content:** MDX for content-heavy pages (`@mdx-js/rollup`, `@mdx-js/react`)
- **Forms:** `@rjsf` (React JSON Schema Form) with the AJV8 validator
- **Email:** `@react-email/components` / `react-email` for transactional email templates
- **Maps:** `@vis.gl/react-google-maps`
- **Calendars:** FullCalendar (`@fullcalendar/*`)
- **Icons:** FontAwesome (`@fortawesome/*`)
- **Sanitisation:** `sanitize-html`
- **Bot protection:** `react-google-recaptcha-v3`
- **Alerts/dialogs:** `sweetalert2`
- **Testing:** Vitest with `@testing-library/react` and a `jsdom` environment (see [🧪 Test Conventions](#-test-conventions))
- **Linting:** ESLint 9 (flat config), `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`,
  `eslint-plugin-tsdoc`, `eslint-plugin-jsx-a11y` (see
  [`documentation/recommendations/project-accessibility-checklist.md`](documentation/recommendations/project-accessibility-checklist.md)
  for the manual WCAG AA checks it can't catch)
- **API documentation:** TypeDoc (`npm run docs`, output to `/target/docs`)
- **Sitemap generation:** custom `builders/RoutesSitemap.ts` script, run via `tsx`

Exact pinned versions are not listed here — they drift with every dependency bump. Check `package.json` for the
versions currently in use.

---

## 🧰 Build & Run Commands

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

See [`README.md`'s Available Scripts section](README.md#-available-scripts) for the complete script list, including
the standard `dev`/`build`/`preview`/`lint`/`test` scripts.

---

## 🔧 Environment Variables

| Variable         | Used in  | Purpose                                                                             |
|------------------|----------|---------------------------------------------------------------------------------------|
| `NPM_TOKEN_READ` | `.npmrc` | Read-only GitHub Packages token to install the `@tahoni` scope (`tahoni-lib-react`) |

`.env.local` also holds API keys the venue map and the Contact Us form's captcha need to render — see the
secret-free `.env.example` for the exact `VITE_`-prefixed variable names, as a copy-to-`.env.local` starting point.

---

## 🏛️ Architecture Overview

The application is organised by feature, with shared infrastructure centralised under `src/shared/`:

```
Route (React Router)
    → Feature page   (src/features/<Feature>/<Feature>Page.tsx)
    → Feature content (…Content.tsx and .mdx for content-heavy pages)
    → Shared components / layouts (src/shared/components/, src/shared/layouts/)
```

See [`ARCHITECTURE.md`](ARCHITECTURE.md) for the full architectural design; the summary below orients an agent
quickly.

### Key directories (`src/`)

| Directory            | Role                                                                                                                                                                                                                                                                                    |
|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `features/`          | One folder per page/domain (`Home`, `AboutUs`, `ContactUs`, `Events`, `History`, `Links`, `Members`, `News`, `Venues`), each self-contained with a `…Page.tsx`, content component(s), optional `.mdx`, styles and a barrel `index.ts`                                                   |
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

Each non-trivial component or layout gets its own PascalCase folder, matching the shape documented in
[`standard-component-naming.md`](documentation/recommendations/standard-component-naming.md):

```
Header/
├── Header.tsx              # Component
├── Header.module.scss      # Sass Module — scoped styles
├── HeaderContent.tsx        # Content/sub-component, where the component has one
├── HeaderConstants.ts       # Component-local constants, where needed
└── index.ts                 # Barrel export
```

---

## 🔬 Code Quality & CI

- **CodeQL**: security analysis, runs on push/PR to `main` and weekly. Config: `.github/workflows/codeql.yml`.
- **ESLint**: flat config (`eslint.config.js`) — TypeScript, React Hooks and `react-refresh` rules. `.eslintrc.cjs` is
  a legacy mirror kept for tooling that hasn't migrated to flat config; keep the two in sync when changing lint rules.
- **Build**: `.github/workflows/build.yml` runs `npm run lint`, `npm run build` and `npm run test:run` on push/PR to
  `main` and `develop`, gating merges on all three passing.

---

## ✍️ Documentation Conventions

### British English

All documentation prose and code comments use British English spelling (e.g. "licence", "organisation", "colour",
"initialise"), not American English.

**Exceptions:**

- Standard legal or licence boilerplate. The `LICENSE.md` file itself (name and content) is a fixed legal term in
  American English and must not be altered; every other doc that names or links to it (headings, tables, ToC entries)
  spells it "Licence" instead, per the British English convention above.
- Third-party product, library and API names.
- Code identifiers (component, function and variable names) — these follow the codebase's existing naming, not
  spelling conventions.

### Serial commas

Lists of three or more items don't take a comma before the final `and`/`or` (e.g. "news, events and venues", not
"news, events, and venues") — consistent with the British English convention above. This doesn't apply to a comma
joining two independent clauses (e.g. "the build passed, and the release was tagged"), only to the last item of a list.

### TSDoc

- Use British English conventions (spelling, grammar, punctuation), consistent with the rest of this project's
  documentation — not American English.
- `eslint-plugin-tsdoc`'s `tsdoc/syntax` rule is enabled (see `eslint.config.js`); doc comments must be syntactically
  valid TSDoc, not JSDoc-only syntax.
- Document exported components, hooks and utility functions with a summary line and `@param`/`@returns` where the
  signature isn't self-explanatory from its types.
- Don't restate what strict TypeScript types already make obvious (e.g. don't write `@param name - The name` for
  `name: string`) — reserve prose for behaviour, side effects and non-obvious constraints.

### Contributors

When documentation credits contributors or authors (e.g. README.md's Author section, a release PR description), source
the list from actual git/GitHub history — never assume or guess who contributed. Run
`git log --format='%an <%ae>' | sort -u` (or check the repository's GitHub Contributors view) and include every account
found, bots (e.g. `dependabot[bot]`, `ImgBotApp`) included.

### Standard structure

Every documentation file in this repository follows the same shape:

- An `H1` title, followed by a short introductory sentence or two.
- A Table of Contents for any document with more than roughly four sections.
- `##` sections, separated by a `---` horizontal rule between major sections.
- GFM tables for structured or tabular information (technology lists, directory overviews, file maps).
- Fenced code blocks for directory trees and flow diagrams.

### Line wrapping

Wrap prose lines in Markdown files to between 100 and 120 characters. Tables are exempt — keep each row on a single
line regardless of length, since wrapping breaks GFM table syntax.

### Icons in headings

Every heading listed in a Table of Contents is prefixed with an emoji, and its ToC entry uses the same emoji. Reuse an
icon already established for a concept rather than inventing a new one; only pick a new emoji when introducing a
genuinely new concept. Icons already established in this repository's documentation, ordered by where each is first
used — `README.md`/`ARCHITECTURE.md`, then `AGENTS.md`/`CONTRIBUTING.md`, then `CHANGELOG.md`/`HISTORY.md`, then
`RELEASE_NOTES.md`/`PR_DESCRIPTION_vX.Y.Z.md` — with icons used only elsewhere in the repository listed last:

| Icon | Concept                                             |
|------|-----------------------------------------------------|
| 📖   | Introduction / overview                             |
| 🔗   | Repository / links                                  |
| ⚙️   | Technology / configuration                          |
| 🚀   | Instructions / getting started                      |
| 🔧   | Installation / setup / technical change             |
| 🧰   | Available scripts / tooling                         |
| 📁   | Project / directory structure                       |
| 🎯   | Core concepts / theme overview                      |
| 🛣️   | Routing / navigation                                |
| 🗂️   | Feature-based organisation                          |
| ✍️   | Content strategy / documentation conventions        |
| 🎨   | Styling and theming / design                        |
| 🛠️   | Development guidelines                              |
| 👤   | Author / changes by                                 |
| 🗺️   | Documentation map                                   |
| 🛤️   | Roadmap                                             |
| 📋   | Version policy / prerequisites                      |
| 📚   | Documentation / key learnings                       |
| 🏛️   | Architecture                                        |
| 🧪   | Testing                                             |
| 🔀   | Git workflow                                        |
| 🚢   | Release process                                     |
| 🌲   | Evergreen documentation                             |
| 🔍   | Current state / inspection                          |
| 🔬   | CI/CD & quality gates                               |
| ☑️   | Checklist                                           |
| 💬   | Support                                             |
| ✨   | Features / enhancements                             |
| 🧾   | Change log / release notes                          |
| 🐛   | Bug fixes / known issues                            |
| ➕   | Added items                                         |
| 🔄   | Changed items                                       |
| ⚠️   | Deprecated items                                    |
| 🗑️   | Removed items                                       |
| 🔐   | Security                                            |
| 🤝   | Contributing                                        |
| 📅   | Historical timeline / dates                         |
| 💡   | Philosophy / insight                                |
| 🎓   | Conclusion / retrospective                          |
| 📦   | Dependencies / what's new                           |
| ⭐   | Key highlights                                      |
| 📊   | Statistics                                          |
| 🔮   | Future enhancements                                 |
| 👥   | Contributors                                        |
| 📝   | Notes                                               |
| 🧩   | Tooling / automation                                |
| 📐   | Layout structure                                    |
| 🔝   | Header                                              |
| 📄   | Body / page content                                 |
| ⬇️   | Footer                                              |
| 📱   | Responsive design                                   |
| 💻   | Technical implementation                            |
| 🖥️   | User interface                                      |
| 📜   | Licence and documentation                           |
| ♻️   | General code improvements                           |
| 💰   | Funding / sponsorship                               |
| 📤   | Output                                              |
| 👍   | Recommendation / best practices                     |
| ✅   | Quality attributes / completed (roadmap gap status) |
| 🟡   | Partially completed (roadmap gap status)            |
| ⚪   | Open / not started (roadmap gap status)             |
| 🌐   | Presentation / API layer                            |
| 🏗️   | Layered architecture                                |
| 🧭   | Design notes                                        |
| 🌊   | Global scope / cascading styles                     |
| 🧵   | Shared / cross-feature infrastructure               |
| 🧱   | Component/layout folder shape                       |
| 🌳   | Decision tree / quick reference                     |
| 🏆   | Most popular / prevailing convention                |
| 🗝️   | Key principles                                      |
| ⏭️    | Next / upcoming                                     |
| ⏳   | Later / pending                                     |
| 🔁   | Ongoing / recurring                                 |
| 🏷️   | Naming conventions                                  |
| ⚖️   | Comparison / trade-offs                             |

Icons reserved from the sibling `hpsc-web-springboot` repository's registry for concepts specific to that project (a
Java/Spring Boot backend) — not used here, kept reserved so they're never accidentally repurposed for an unrelated
concept in this project:

| Icon | Reserved for (Spring Boot)        |
|------|-----------------------------------|
| ⚡   | Service layer                     |
| 📈   | Request-response flow             |
| 📥   | Inbound / import flow             |
| 🔓   | Optional / relaxed constraint     |
| 🔢   | Numbering / sequence              |
| 🗄️   | Database / persistence            |
| 🛡️   | Robustness / validation hardening |
| 🤔   | Reasoning                         |
| 🧬   | Data model / DTOs                 |

---

## 🗺️ Documentation File Map

Root-level documentation and the goal of each file (see `README.md`'s own [📚 Documentation](README.md#-documentation)
section — `README.md` is the canonical version if the two ever drift):

| File               | Purpose                                                                        |
|--------------------|--------------------------------------------------------------------------------|
| `README.md`        | Project overview, setup and links to the rest of the documentation             |
| `ARCHITECTURE.md`  | Detailed architectural design, directory structure and core concepts           |
| `UI.md`            | User interface layout, navigation and design overview                          |
| `CLAUDE.md`        | Thin pointer to `AGENTS.md`, kept for tools that specifically read `CLAUDE.md` |
| `AGENTS.md`        | Cross-tool agent conventions — the full guidance (this file)                   |
| `CONTRIBUTING.md`  | Contributor-facing setup, git workflow and pull request checklist              |
| `CHANGELOG.md`     | Notable changes per released version, in Keep a Changelog format               |
| `HISTORY.md`       | Narrative history of the project's evolution across all versions               |
| `RELEASE_NOTES.md` | Detailed release notes for the current/latest version only                     |
| `PACKAGES.md`      | Generated funding-tree manifest listing dependencies seeking sponsorship       |
| `LICENSE.md`       | All Rights Reserved                                                            |

These documentation-only folders supplement it:

- **`documentation/history/`** holds one of each of the following files per released version, archived once the release
  is finalised:

  | File                       | Purpose                                                    |
    |----------------------------|------------------------------------------------------------|
  | `RELEASE_NOTES_vX.Y.Z.md`  | Archived snapshot of `RELEASE_NOTES.md` at release time    |
  | `PR_DESCRIPTION_vX.Y.Z.md` | The release pull request's body, archived for that version |
- **`documentation/recommendations/`** holds general React/TypeScript convention reference notes (naming, directory
  structure, CSS, MDX placement, templates, `utils/` vs `helpers/`, accessibility) used to steer this project's own
  conventions —
  read alongside `ARCHITECTURE.md`, not as a replacement for it.
- **`documentation/archive/ARCHIVE.md`** is the legacy release archive covering every version predating the
  `CHANGELOG.md`/`HISTORY.md` Keep a Changelog structure introduced in `4.0.0` — `1.0.0` through `3.6.9`. Versions
  `3.0.0` onward reproduce GitHub's own release notes for the legacy Version 3.x line; `1.0.0` through `2.1.0`
  predate any release notes being generated, so those three are instead summarised from their commit history. It is
  a historical record only and is not maintained going forward.

---

## 🛤️ Roadmap Planning

Unlike the folders above, `documentation/roadmap/` isn't reference material — it's the project's active improvement
backlog, kept separate from the standard documentation files:

- **`improvement-plan.md`** — a synthesis of this project's own goals/constraints into numbered, evidence-backed gaps
  (each with its Evidence, Why it matters and Proposed improvement), a Roadmap table and Success Criteria.
- **`improvement-plan-tasks.md`** — the checkbox-level task breakdown of those gaps, organised by the plan's
  Now/Next/Later/Ongoing phasing (each item tags its originating gap number).

Check both files before assuming a gap (missing CI pipeline, no tests, no `CONTRIBUTING.md`) is unintentional; it may
already be tracked there.

---

## 🛠️ Claude Code Skills

`.claude/skills/` holds project-specific Claude Code skills that turn this file's conventions into ready-to-invoke
workflows, available to any Claude Code session in this repository:

| Skill                          | Purpose                                                                                                                                                                 |
|--------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `generate-commit-message`      | Draft a commit message and matching `CHANGELOG.md` entry for the current working tree changes                                                                           |
| `generate-pr-summary`          | Condense a version's `PR_DESCRIPTION.md`/`RELEASE_NOTES.md` into a short Bitbucket-style PR summary                                                                     |
| `prep-version-release`         | Prepare a new version release — `RELEASE_NOTES.md`, `CHANGELOG.md`, `HISTORY.md`, reverse-synced docs and a draft PR description, following the Release Checklist below |
| `scaffold-integration-tests`   | Scaffold full-tree route/page rendering tests for a feature page                                                                                                        |
| `scaffold-unit-tests`          | Scaffold Vitest unit tests for a component, layout, hook, util, helper or model                                                                                         |
| `sync-improvement-plan-gaps`   | Check the current branch's changes against `improvement-plan.md`'s tracked gaps and mark any closed/progressed                                                          |
| `sync-unreleased-changes`      | Audit the current branch's diff and ensure every notable change is reflected in `CHANGELOG.md`'s Unreleased section                                                     |
| `update-improvement-plan-gaps` | Audit the codebase against `improvement-plan.md`/`improvement-plan-tasks.md` and record any newly identified gaps                                                       |

Every skill reads this file in full before acting and treats it as the single source of truth for the conventions it
automates — a skill's own instructions must never drift from what's documented here; fix this file first, then update
the skill to match. AI coding agents without Claude Code's skill support should follow this file's conventions
directly rather than relying on the skills existing.

---

## 🧪 Test Conventions

Vitest is configured, with `vitest.config.ts` setting `test.environment` to `jsdom` and `@testing-library/react`/
`@testing-library/user-event` available as dev dependencies. Run `npm test` for watch mode locally, or
`npm run test:run` (used by [`.github/workflows/build.yml`](.github/workflows/build.yml)) for a single CI-friendly run.
Coverage is still thin — see `documentation/roadmap/improvement-plan-tasks.md` for what's next. When adding tests:

- Co-locate `<Name>.test.ts` / `<Name>.test.tsx` next to the file under test.
- For component tests, use `@testing-library/react` with the configured `jsdom` environment.
- Prefer testing behaviour and rendered output over implementation details; avoid snapshot tests of large component
  trees.
- Don't write tests whose sole purpose is verifying that TypeScript's type system or a trivial pass-through prop
  works — test logic, not the compiler.

---

## 📁 Directory Tree Maintenance

- Whenever a root-level directory or a top-level `src/` directory is added or removed, `ARCHITECTURE.md`'s Project
  Structure tree must be updated in the same change.
- Directories covered by `.gitignore` (e.g. `.idea/`, `.run/`, `node_modules/`, `dist/`, `target/`) must never appear in
  that tree.
- Tracked tooling directories — `.claude/` and `.github/` — do belong in the tree, even though they sit alongside
  gitignored directories at the repository root: they hold version-controlled configuration (Claude Code skills,
  GitHub Actions workflows) rather than local machine state.
- Directory comments in the tree describe purpose generically and must never enumerate the individual features or files
  inside — features are added, renamed and removed far more often than the directories that hold them, so a listed
  feature name goes stale quickly while the generic description keeps the tree evergreen.
- When adding a path alias to `vite.config.ts`, add the matching entry to `tsconfig.app.json`'s `paths` in the same
  change — the two must stay in sync.

---

## 🔀 Git Workflow

### Branching Model (GitFlow)

This repository follows the [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/) branching model:

- **`develop`** is the current development branch — all day-to-day work lands here first.
- **`main`** is the production branch. It is only ever updated by promoting `develop` after a `release/vX.Y.Z` branch
  has merged into it, or directly from a `hotfix/*` branch — never any other source.
- **`feature/<short-description>`** — day-to-day feature and bug-fix work (e.g. `feature/redesign`). Branch from,
  and PR back into, `develop`.
- **`release/vX.Y.Z`** branches are cut from `develop` once it's ready to ship — they carry the release-prep changes
  (version bump, `CHANGELOG.md`/`RELEASE_NOTES.md`, etc.; see the Release Checklist below) and are opened as a PR
  against `develop`. Once that merges, a second PR promotes `develop` into `main` (see Merging below).
- **`hotfix/<short-description>`** — urgent fixes for a defect already in production. Branch from, and PR directly
  into, `main`, bypassing `develop` and any in-progress `release/vX.Y.Z` branch so the fix ships immediately. Also,
  merge/PR the same fix into `develop` so it isn't lost when the next release is cut.

**All branches are committed to `develop` first, never `main`.** `hotfix/*` is the sole, deliberate exception, and
even then the same fix still lands on `develop` immediately afterwards (see Merging below). Every other branch —
`feature/*` and `release/*` included — must never open a PR directly against `main`.

### Merging

- **`feature/*` → `develop`:** once the PR is approved and CI passes, merge with a standard merge commit (matching
  this repo's existing history — no squashing or rebasing) and delete the branch afterwards.
- **`hotfix/*` → `main` and `develop`:** merge the PR into `main` first so the fix ships immediately. Then open a
  second PR carrying the same commit (s) from the `hotfix/*` branch into `develop`, referencing the original `main`
  PR in its description — only delete the branch once both merges have landed; so the fix isn't lost when the next
  `release/vX.Y.Z` branch is cut.
- **`release/vX.Y.Z` → `develop`:** merge once the Release Checklist below is complete and all tests pass, with a
  standard merge commit and delete the branch afterwards.
- **`develop` → `main`:** immediately after, open a second PR promoting `develop` into `main` and merge it; tag the
  resulting commit on `main` as `vX.Y.Z` — this project's current tag format for every release from `4.2.3` onward
  (the legacy Version 3.x/early 4.x line used `version-X.Y.Z`; see `documentation/archive/ARCHIVE.md`'s and
  `documentation/history/`'s own tag links for that distinction).

### Conventions

- **Commit in logical chunks.** One concern per commit — do not bundle unrelated changes (e.g. a dependency bump, a
  documentation update and a bug fix) into a single commit.
- **Track complex work with a todo list.** For multistep or non-trivial tasks, maintain a tracked todo list and keep it
  updated as work progresses, so progress stays visible and the work stays on track.
- **Update `CHANGELOG.md` in the same change.** Every notable change gets an entry under `### 🧪 [Unreleased]`, in the
  matching Keep a Changelog category (`➕ Added`, `🔄 Changed`, `🐛 Fixed`, `⚠️ Deprecated`, `🗑️ Removed`, `🔐 Security`)
  and, within it, the relevant `##### <Area>` sub-heading — as part of the change that makes it, not batched into a
  later, separate change.
- Commit messages are plain, imperative-mood descriptions of the change (e.g. "Refactor email-related models: remove
  `EmailContent`, merge functionality into `EmailMessage`"); this repository does not use a Conventional Commits prefix
  (`feat:`, `fix:`, etc.).

---

## 🚢 Release Checklist

When cutting a new version, work through these steps **in order** — the version number and date must be final before
anything downstream references them:

1. **Check `documentation/roadmap/improvement-plan.md`/`improvement-plan-tasks.md`.** Before starting any
   version-specific work, check whether this release has closed, progressed or newly revealed any of the gaps
   tracked there, and update them accordingly.
2. **Bump `package.json`.** Update the `version` field to the new `X.Y.Z`.
3. **Promote `### 🧪 [Unreleased]` to a dated version entry.** Cross-check every commit and any uncommitted diff on the
   release branch against its entries first — don't assume it's already accurate just because entries were added along
   the way; fill in anything missing. Then rename it `### 🧾 [X.Y.Z] - YYYY-MM-DD`, keeping only the Keep a Changelog
   categories that actually have entries (`➕ Added`, `🔄 Changed`, `🐛 Fixed`, `⚠️ Deprecated`, `🗑️ Removed`,
   `🔐 Security` — omit any that are empty) and their `##### <Area>` subheadings. Add the new version to the Table of
   Contents, move the "← Current" marker onto it, then start a fresh, fully-empty `### 🧪 [Unreleased]` section above
   it (six empty category headings: `➕ Added`, `🔄 Changed`, `🐛 Fixed`, `⚠️ Deprecated`, `🗑️ Removed`, `🔐 Security`).
4. **Replace `RELEASE_NOTES.md`.** Unlike `CHANGELOG.md`, this file holds only the *current* release. Follow this
   section order: **Theme** (a one-line focus, expanded into a short paragraph, matching the Theme that will go into
   `HISTORY.md`'s Historical Timeline entry for this version) → **Key Highlights** (grouped under a few named `###`
   subheadings, each with a short bullet list, matching that entry's Key Focus bullets) → **What's New** (the
   categorised change list — same categories and Area subheadings as the `CHANGELOG.md` entry) → **Migration Guide**
   (For Deployers / For Developers) → **Statistics** (commit count and files-changed/lines-changed for the release, from
   `git log`/`git diff --stat` against the previous release) → **Design Notes** (a couple of short rationale bullets for
   the release's notable decisions) → **Testing** (what was run/verified) → **Known Issues** → **Future Enhancements** →
   **Contributors** (sourced per the Contributors convention above) → **Notes** (a short closing summary). Cover
   **everything** that changed for this version, not just the most recent commit — diff the release branch against the
   previous release tag (`git log <prev-tag>..HEAD`, `git diff --stat <prev-tag>...HEAD`) to confirm full coverage
   before finalising. Replace the previous version's content outright rather than appending to it.
5. **Verify links and dates.** Confirm the `version-X.Y.Z` tag slug and the `YYYY-MM-DD` date match between
   `CHANGELOG.md` and `RELEASE_NOTES.md`.
6. **Extend `HISTORY.md`.** Add a new entry to the Historical Timeline (Theme and Key Focus bullets, at the same depth
   as the existing entries, placed at the top to keep reverse chronological order). If the release is significant enough
   to have shifted the project's trajectory, also thread it through the other sections that track version-by-version
   state: (Evolution Overview's Phases, Major Milestones, Architectural Evolution, Feature Timeline, Project Philosophy
   Evolution, Key Learnings, Future Roadmap Implications, Conclusion). Use how the immediately preceding version was
   woven into those sections as the template. A routine patch release may only need the Historical Timeline entry.
7. **Update `CONTRIBUTING.md`** only if this version's changes affect developer setup, environment variables,
   development scripts, git workflow or testing conventions documented there.
8. **Verify `ARCHITECTURE.md`'s Project Structure tree against disk.** Per-change Directory Tree Maintenance (above)
   still lets drift slip through, so treat every release as a backstop: cross-check the tree against the actual
   repository structure and correct any directory that's missing, renamed or gone stale, including tracked tooling
   directories (`.claude/`, `.github/`) — not just `src/`.
9. **Archive `RELEASE_NOTES.md`.** Once finalised, copy it byte-for-byte (no edits, no trimming) to
   `documentation/history/RELEASE_NOTES_vX.Y.Z.md`.
10. **Write `documentation/history/PR_DESCRIPTION_vX.Y.Z.md`.** The body text for the release pull request. Keep it
   small — a PR body, not a second `RELEASE_NOTES.md`: a few bullets per section, high-level only, no line-by-line
   detail. Structure:
    - `## 🎯 Summary` — two to four bullets on what the release is and why
    - `## 📦 Key Changes` — condensed from the `CHANGELOG.md` entry's categories, high-level rather than exhaustive
    - `## 🧪 Test Plan` — checklist of what was verified (`npm run lint`, `npm run build`, `npm test`, manual checks)
    - `## 🔗 Related Documentation` — links to `RELEASE_NOTES.md`, `CHANGELOG.md`, `HISTORY.md`

Commit these in logical chunks per the Git Workflow rule above — the version bump, the CHANGELOG/HISTORY/RELEASE_NOTES
documentation and the archived `documentation/history/` files are separate concerns unless trivially small.

This project's `CHANGELOG.md` covers the current Version 4.x line only; `HISTORY.md` narrates the full project history,
including the legacy Version 3.x line that predates `CHANGELOG.md`'s Keep a Changelog structure.
`documentation/history/` archives each version's `RELEASE_NOTES.md` snapshot and PR description once released —
`HISTORY.md`'s narrative, `CHANGELOG.md`'s version history and that per-version archive together are the durable
record.

---

## 🌲 Evergreen Documentation (README.md & ARCHITECTURE.md)

`README.md`, `ARCHITECTURE.md` and `UI.md` describe the durable structure and purpose of the project, not its
current-version implementation details. They must:

- **Never contain references to specific versions** — neither exact version numbers (e.g. `5.0.0`) nor version ranges of
  this project. Defer to `package.json` for the exact version currently in use and to `CHANGELOG.md`/`HISTORY.md` for
  release history.
- **Never contain counts that drift as the codebase grows** (e.g. "Eight features are implemented"). List items by name
  in a table instead, without a leading count.
- **Never carry narrative tightly coupled to the current version's implementation.** That belongs in `CHANGELOG.md` or
  `RELEASE_NOTES.md`.

**Reverse sync rule:** When generating or updating `RELEASE_NOTES.md` or `CHANGELOG.md`, check whether any of the
changes being documented are relevant to `README.md` (goal, tech stack, quick start), `ARCHITECTURE.md` (project
structure, core concepts, build/tooling) or `UI.md` (layout, navigation, design) and update those files too if so.
Don't let them fall out of sync with what the release docs describe — while still keeping them release-agnostic per the
rules above.
