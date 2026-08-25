# AGENTS.md

Conventions for any AI coding agent working in this repository. [`CLAUDE.md`](CLAUDE.md) remains the Claude-Code-specific quick reference (build/run commands, environment variables, architecture overview); this file holds the broader, tool-agnostic documentation and workflow conventions below. Some content (documentation conventions, icon reuse) is intentionally restated in both this file and the per-file docs it governs, since not every agent tool reads `AGENTS.md`.

## Table of Contents

- [⚙️ Tech Stack](#-tech-stack)
- [📝 Documentation Conventions](#-documentation-conventions)
- [🗺️ Documentation File Map](#-documentation-file-map)
- [🧪 Test Conventions](#-test-conventions)
- [📁 Directory Tree Maintenance](#-directory-tree-maintenance)
- [🔀 Git Workflow](#-git-workflow)
- [🚢 Release Checklist](#-release-checklist)
- [🌲 Evergreen Documentation](#-evergreen-documentation-readmemd--architecturemd)

---

## ⚙️ Tech Stack

- **Language:** TypeScript (strict mode)
- **Framework:** React 19
- **Build tool:** Vite 6, via `npm run build` / `npm run dev`
- **Routing:** React Router 7 (data-driven — see `ARCHITECTURE.md`)
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
- **Testing:** Vitest (configured; no tests written yet — see [🧪 Test Conventions](#-test-conventions))
- **Linting:** ESLint 9 (flat config), `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `eslint-plugin-tsdoc`
- **API documentation:** TypeDoc (`npm run docs`, output to `tsdocs/`)
- **Sitemap generation:** custom `builders/RoutesSitemap.ts` script, run via `tsx`

Exact pinned versions are not listed here — they drift with every dependency bump. Check `package.json` for the versions currently in use.

---

## 📝 Documentation Conventions

### British English

All documentation prose and code comments use British English spelling (e.g. "licence", "organisation", "colour", "initialise"), not American English.

**Exceptions:**

- Standard legal or licence boilerplate. The `LICENSE.md` file itself (name and content) is a fixed legal term in American English and must not be altered; any other doc that names or links to it (headings, tables, ToC entries) also spells it "License" for consistency.
- Third-party product, library, and API names.
- Code identifiers (component, function, and variable names) — these follow the codebase's existing naming, not spelling conventions.

### TSDoc

- Use British English conventions (spelling, grammar, punctuation), consistent with the rest of this project's documentation — not American English.
- `eslint-plugin-tsdoc`'s `tsdoc/syntax` rule is enabled (see `.eslintrc.cjs`); doc comments must be syntactically valid TSDoc, not JSDoc-only syntax.
- Document exported components, hooks, and utility functions with a summary line and `@param`/`@returns` where the signature isn't self-explanatory from its types.
- Don't restate what strict TypeScript types already make obvious (e.g. don't write `@param name - The name` for `name: string`) — reserve prose for behaviour, side effects, and non-obvious constraints.

### Contributors

When documentation credits contributors or authors (e.g. README.md's Author section, a release PR description), source the list from actual git/GitHub history — never assume or guess who contributed. Run `git log --format='%an <%ae>' | sort -u` (or check the repository's GitHub Contributors view) and include every account found, bots (e.g. `dependabot[bot]`, `ImgBotApp`) included.

### Standard structure

Every documentation file in this repository follows the same shape:

- An `H1` title, followed by a short introductory sentence or two.
- A Table of Contents for any document with more than roughly four sections.
- `##` sections, separated by a `---` horizontal rule between major sections.
- GFM tables for structured or tabular information (technology lists, directory overviews, file maps).
- Fenced code blocks for directory trees and flow diagrams.

### Icons in headings

Every heading listed in a Table of Contents is prefixed with an emoji, and its ToC entry uses the same emoji. Reuse an icon already established for a concept rather than inventing a new one; only pick a new emoji when introducing a genuinely new concept. Icons already established in this repository's documentation:

| Icon | Concept                                 |
|------|-----------------------------------------|
| 📖   | Introduction / overview                 |
| 🔗   | Repository / links                      |
| ⚙️   | Technology / configuration              |
| ✨   | Features / enhancements                 |
| 🚀   | Instructions / getting started          |
| 🔧   | Installation / setup / technical change |
| 🧰   | Available scripts / tooling             |
| 📁   | Project / directory structure           |
| 🎯   | Core concepts / theme overview          |
| 🧭   | Routing / navigation                    |
| 🧩   | Feature-based organisation              |
| 📝   | Content strategy / documentation        |
| 🎨   | Styling and theming / design            |
| 🛠️   | Development guidelines                  |
| 📐   | Layout structure                        |
| 🔝   | Header                                  |
| 📄   | Body / page content                     |
| ⬇️   | Footer                                  |
| 📱   | Responsive design                       |
| 💻   | Technical implementation                |
| 🏛️   | Architecture                            |
| 🖥️   | User interface                          |
| 📜   | License / licence and documentation     |
| 👤   | Author / changes by                     |
| 🧾   | Change log / release notes              |
| 🐛   | Bug fixes                               |
| ♻️   | General code improvements               |
| 📦   | Dependencies                            |
| 🧪   | Testing                                 |
| 🔀   | Git workflow                            |
| 🚢   | Release process                         |
| 🗺️   | Documentation map                       |
| 🌲   | Evergreen documentation                 |
| 🔍   | Current state / inspection              |
| 📤   | Output                                  |
| ➕   | Added items                             |
| 🔄   | Changed items                           |
| ⚠️   | Deprecated items                        |
| 🗑️   | Removed items                           |
| 🔐   | Security                                |
| 📋   | Version policy / prerequisites          |
| 🤝   | Contributing                            |
| ✅   | Checklist                               |
| 💬   | Support                                 |
| 📅   | Historical timeline / dates             |
| 💡   | Philosophy / insight                    |
| 📚   | Key learnings                           |
| 🎓   | Conclusion / retrospective              |

---

## 🗺️ Documentation File Map

Root-level documentation, and the goal of each file (`README.md` links out to `ARCHITECTURE.md`, `UI.md`, and `LICENSE.md` individually rather than via a single documentation index — `README.md` is the canonical version if the two ever drift):

| File               | Purpose                                                                       |
|--------------------|-------------------------------------------------------------------------------|
| `README.md`        | Project overview, setup, and links to the rest of the documentation           |
| `ARCHITECTURE.md`  | Detailed architectural design, directory structure, and core concepts         |
| `UI.md`            | User interface layout, navigation, and design overview                        |
| `CLAUDE.md`        | Guidance for Claude Code specifically when working in this repository         |
| `AGENTS.md`        | Cross-tool agent conventions (this file)                                      |
| `CONTRIBUTING.md`  | Contributor-facing setup, git workflow, and pull request checklist            |
| `IMPROVEMENT_PLAN.md` | Executive-level synthesis of project goals, constraints, and improvement themes, linking out to `documentation/roadmap/` for detail |
| `CHANGELOG.md`     | Notable changes per released version, in Keep a Changelog format              |
| `HISTORY.md`       | Narrative history of the project's evolution across all versions              |
| `RELEASE_NOTES.md` | Detailed release notes for the current/latest version only                    |
| `PACKAGES.md`      | Generated funding-tree manifest listing dependencies seeking sponsorship      |
| `LICENSE.md`       | MIT License                                                                   |

These documentation-only folders supplement it:

- **`documentation/history/`** holds one of each of the following files per released version, archived once the release is finalised:

  | File                       | Purpose                                                     |
  |-----------------------------|--------------------------------------------------------------|
  | `RELEASE_NOTES_vX.Y.Z.md`  | Archived snapshot of `RELEASE_NOTES.md` at release time      |
  | `PR_DESCRIPTION_vX.Y.Z.md` | The release pull request's body, archived for that version   |
- **`documentation/recommendations/`** holds general React/TypeScript convention reference notes (naming, directory structure, CSS, MDX placement, templates, `utils/` vs `helpers/`) used to steer this project's own conventions — read alongside `ARCHITECTURE.md`, not as a replacement for it.
- **`documentation/roadmap/`** holds `plan.md` (themed improvement plan with rationale) and `tasks.md` (a flat, checkable task backlog derived from it) — check both before assuming a gap (missing CI pipeline, no tests, no `CONTRIBUTING.md`) is unintentional; it may already be tracked there.

---

## 🧪 Test Conventions

Vitest is configured (`npm test`) but no test files exist yet in this repository — see `documentation/roadmap/tasks.md` items on establishing CI and initial test coverage. When adding tests:

- Co-locate `<Name>.test.ts` / `<Name>.test.tsx` next to the file under test.
- For component tests, use `@testing-library/react` with a `jsdom` environment (add as a dev dependency and configure `test.environment` in a `vitest.config.ts` — neither exists yet).
- Prefer testing behaviour and rendered output over implementation details; avoid snapshot tests of large component trees.
- Don't write tests whose sole purpose is verifying that TypeScript's type system or a trivial pass-through prop works — test logic, not the compiler.

---

## 📁 Directory Tree Maintenance

- Whenever a root-level directory or a top-level `src/` directory is added or removed, `ARCHITECTURE.md`'s Project Structure tree must be updated in the same change.
- Directories covered by `.gitignore` (e.g. `.idea/`, `.run/`, `node_modules/`, `dist/`, `target/`, `tsdocs/`) must never appear in that tree.
- When adding a path alias to `vite.config.ts`, add the matching entry to `tsconfig.app.json`'s `paths` in the same change — the two must stay in sync (see `CLAUDE.md`'s Path Aliases section).

---

## 🔀 Git Workflow

### Branching Model (GitFlow)

This repository follows the [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/) branching model:

- **`develop`** is the current development branch — all day-to-day work lands here first.
- **`main`** is the production branch. It is only ever updated by promoting `develop` after a `release/vX.Y.Z` branch has merged into it, or directly from a `hotfix/*` branch — never any other source.
- **`feature/<short-description>`** — day-to-day feature and bug-fix work (e.g. `feature/redesign`). Branch from, and PR back into, `develop`.
- **`release/vX.Y.Z`** branches are cut from `develop` once it's ready to ship — they carry the release-prep changes (version bump, `CHANGELOG.md`/`RELEASE_NOTES.md`, etc.; see the Release Checklist below) and are opened as a PR against `develop`. Once that merges, a second PR promotes `develop` into `main` (see Merging below).
- **`hotfix/<short-description>`** — urgent fixes for a defect already in production. Branch from, and PR directly into, `main`, bypassing `develop` and any in-progress `release/vX.Y.Z` branch so the fix ships immediately. Also, merge/PR the same fix into `develop` so it isn't lost when the next release is cut.

**All branches are committed to `develop` first, never `main`.** `hotfix/*` is the sole, deliberate exception, and even then the same fix still lands on `develop` immediately afterwards (see Merging below). Every other branch — `feature/*` and `release/*` included — must never open a PR directly against `main`.

### Merging

- **`feature/*` → `develop`:** once the PR is approved and CI passes, merge with a standard merge commit (matching this repo's existing history — no squashing or rebasing) and delete the branch afterwards.
- **`hotfix/*` → `main` and `develop`:** merge the PR into `main` first so the fix ships immediately. Then open a second PR carrying the same commit(s) from the `hotfix/*` branch into `develop`, referencing the original `main` PR in its description — only delete the branch once both merges have landed, so the fix isn't lost when the next `release/vX.Y.Z` branch is cut.
- **`release/vX.Y.Z` → `develop`:** merge once the Release Checklist below is complete and all tests pass, with a standard merge commit, and delete the branch afterwards.
- **`develop` → `main`:** immediately after, open a second PR promoting `develop` into `main` and merge it; tag the resulting commit on `main` as `version-X.Y.Z` (this project's tag format — not `vX.Y.Z`, matching the links already used in `CHANGELOG.md`/`HISTORY.md`).

### Conventions

- **Commit in logical chunks.** One concern per commit — do not bundle unrelated changes (e.g. a dependency bump, a documentation update, and a bug fix) into a single commit.
- **Track complex work with a todo list.** For multistep or non-trivial tasks, maintain a tracked todo list and keep it updated as work progresses, so progress stays visible and the work stays on track.
- **Update `CHANGELOG.md` in the same change.** Every notable change gets an entry under `### 🧪 [Unreleased]`, in the matching Keep a Changelog category (`➕ Added`, `🔄 Changed`, `🐛 Fixed`, `⚠️ Deprecated`, `🗑️ Removed`, `🔐 Security`) and, within it, the relevant `##### <Area>` sub-heading — as part of the change that makes it, not batched into a later, separate change.
- Commit messages are plain, imperative-mood descriptions of the change (e.g. "Refactor email-related models: remove `EmailContent`, merge functionality into `EmailMessage`"); this repository does not use a Conventional Commits prefix (`feat:`, `fix:`, etc.).

---

## 🚢 Release Checklist

When cutting a new version, work through these steps **in order** — the version number and date must be final before anything downstream references them:

1. **Bump `package.json`.** Update the `version` field to the new `X.Y.Z`.
2. **Promote `### 🧪 [Unreleased]` to a dated version entry.** Rename it `### 🧾 [X.Y.Z] - YYYY-MM-DD`, keeping only the Keep a Changelog categories that actually have entries (`➕ Added`, `🔄 Changed`, `🐛 Fixed`, `⚠️ Deprecated`, `🗑️ Removed`, `🔐 Security` — omit any that are empty) and their `##### <Area>` sub-headings. Add the new version to the Table of Contents, move the "← Current" marker onto it, then start a fresh, fully-empty `### 🧪 [Unreleased]` section above it (six empty category headings: `➕ Added`, `🔄 Changed`, `🐛 Fixed`, `⚠️ Deprecated`, `🗑️ Removed`, `🔐 Security`).
3. **Replace `RELEASE_NOTES.md`.** Unlike `CHANGELOG.md`, this file holds only the *current* release. Follow this section order: **Theme** (one line naming the release's focus, matching the Theme that will go into `HISTORY.md`'s Historical Timeline entry for this version) → **Key Highlights** (a short bullet list of the release's most notable points, matching that entry's Key Focus bullets) → the categorised change list (same categories and Area sub-headings as the `CHANGELOG.md` entry, without the Table of Contents). Replace the previous version's content outright rather than appending to it.
4. **Verify links and dates.** Confirm the `version-X.Y.Z` tag slug and the `YYYY-MM-DD` date match between `CHANGELOG.md` and `RELEASE_NOTES.md`.
5. **Extend `HISTORY.md`.** Add a new entry to the Historical Timeline (Theme + Key Focus bullets, at the same depth as the existing entries, placed at the top to keep reverse chronological order). If the release is significant enough to have shifted the project's trajectory, also thread it through the other sections that track version-by-version state (Evolution Overview's Phases, Major Milestones, Architectural Evolution, Feature Timeline, Project Philosophy Evolution, Key Learnings, Future Roadmap Implications, Conclusion) — use how the immediately preceding version was woven into those sections as the template. A routine patch release may only need the Historical Timeline entry.
6. **Archive `RELEASE_NOTES.md`.** Once finalised, copy it byte-for-byte (no edits, no trimming) to `documentation/history/RELEASE_NOTES_vX.Y.Z.md`.
7. **Write `documentation/history/PR_DESCRIPTION_vX.Y.Z.md`.** The body text for the release pull request. Keep it small — a PR body, not a second `RELEASE_NOTES.md`: a few bullets per section, high-level only, no line-by-line detail. Structure:
   - `## 🎯 Summary` — two to four bullets on what the release is and why
   - `## 📦 Key Changes` — condensed from the `CHANGELOG.md` entry's categories, high-level rather than exhaustive
   - `## 🧪 Test Plan` — checklist of what was verified (`npm run lint`, `npm run build`, `npm test`, manual checks)
   - `## 🔗 Related Documentation` — links to `RELEASE_NOTES.md`, `CHANGELOG.md`, `HISTORY.md`

Commit these in logical chunks per the Git Workflow rule above — the version bump, the CHANGELOG/HISTORY/RELEASE_NOTES documentation, and the archived `documentation/history/` files are separate concerns unless trivially small.

This project's `CHANGELOG.md` covers the current Version 4.x line only; `HISTORY.md` narrates the full project history, including the legacy Version 3.x line that predates `CHANGELOG.md`'s Keep a Changelog structure. `documentation/history/` archives each version's `RELEASE_NOTES.md` snapshot and PR description once released — `HISTORY.md`'s narrative, `CHANGELOG.md`'s version history, and that per-version archive together are the durable record.

---

## 🌲 Evergreen Documentation (README.md & ARCHITECTURE.md)

`README.md`, `ARCHITECTURE.md`, and `UI.md` describe the durable structure and purpose of the project, not its current-version implementation details. They must:

- **Never contain references to specific versions** — neither exact version numbers (e.g. `5.0.0`) nor version ranges of this project. Defer to `package.json` for the exact version currently in use and to `CHANGELOG.md`/`HISTORY.md` for release history.
- **Never contain counts that drift as the codebase grows** (e.g. "Eight features are implemented"). List items by name in a table instead, without a leading count.
- **Never carry narrative tightly coupled to the current version's implementation.** That belongs in `CHANGELOG.md` or `RELEASE_NOTES.md`.

**Reverse sync rule:** When generating or updating `RELEASE_NOTES.md` or `CHANGELOG.md`, check whether any of the changes being documented are relevant to `README.md` (goal, tech stack, quick start), `ARCHITECTURE.md` (project structure, core concepts, build/tooling), or `UI.md` (layout, navigation, design) and update those files too if so. Don't let them fall out of sync with what the release docs describe — while still keeping them release-agnostic per the rules above.
