---
description: Scaffold Vitest unit tests for a component, layout, hook, util, helper, or model, isolated from its heavier/third-party dependencies, following this project's testing conventions.
argument-hint: <component/file name(s) or path(s) to scaffold tests for, space- or comma-separated>
allowed-tools: Read, Write, Edit, Glob, Grep, Bash(npm install:*), Bash(npx vitest run:*), Bash(npm run lint:*)
---

# Scaffold Unit Tests

Scaffold unit tests for: $ARGUMENTS

(one or more component/hook/util/helper/model names, or file paths under `src/` — space- or comma-separated)

Conventions to follow: @AGENTS.md @CLAUDE.md

## 🚀 Instructions

Read and strictly follow **all conventions defined in AGENTS.md and CLAUDE.md** (both loaded above) — in particular AGENTS.md's **Test Conventions** section and CLAUDE.md's **Architecture** and **Path aliases** sections. Treat them as the single source of truth; do not reinterpret or contradict their rules.

1. **Check the test infrastructure exists first** — this repo has Vitest configured but, as of writing, no `vitest.config.ts`, no `jsdom` environment, and no `@testing-library/react`/`@testing-library/user-event`/`@testing-library/jest-dom` dev dependencies (see `../../documentation/roadmap/improvement-plan-tasks.md`'s "Zero test coverage despite a configured test runner" gap, under 🏗️ Next). If any are missing:
   - Add `jsdom`, `@testing-library/react`, `@testing-library/user-event`, and `@testing-library/jest-dom` as dev dependencies.
   - Create `vitest.config.ts` at the repo root that extends `vite.config.ts` (via `mergeConfig`/`defineConfig` from `vitest/config`), setting `test.environment = 'jsdom'`, `test.setupFiles` pointing at a new `src/shared/testUtils/setupTests.ts` (imports `@testing-library/jest-dom`), and reusing the existing `resolve.alias` path aliases from `vite.config.ts` so `@`, `@components`, `@features`, etc. resolve in tests too.
   - This introduces `src/shared/testUtils/` as a new subdirectory under the existing `shared/` folder — not a new top-level `src/` directory, so `ARCHITECTURE.md`'s Project Structure tree only needs updating if you judge it warrants a mention there.
   - Do this once; skip if already present.
2. **Resolve `$ARGUMENTS` to one or more targets.** Split on commas and/or whitespace; each token is a component/layout folder, hook, utility, helper, or model under `src/` — search by name with Glob/Grep if a bare name was given rather than a path. If `$ARGUMENTS` is empty, ask the user which target(s) to scaffold rather than guessing. Repeat steps 3–8 independently for each resolved target — a failure or ambiguity on one target must not block scaffolding the others; report it and move on.
3. **Create the test file co-located with its target**, matching CLAUDE.md's component/layout folder shape and the naming table in `../../documentation/recommendations/standard-component-naming.md`:
   - **Component/layout** (`src/features/<Feature>/…`, `src/shared/components/<Name>/`, `src/shared/layouts/<Name>/`): `<Name>.test.tsx` inside the component's own folder, alongside `<Name>.tsx`.
   - **Utility** (`src/utils/*.ts`): `<name>.test.ts` alongside the source file — pure-function tests, no rendering, no `jsdom` needed.
   - **Helper** (`src/helpers/*.tsx`): `<name>.test.tsx` alongside the source file.
   - **Model** (`src/models/**/*.ts`): `<Name>.test.ts` alongside the source file.
4. **Isolate the target from its heavier/third-party dependencies** — this is what makes it a *unit* test, as opposed to the full-tree rendering `/scaffold-integration-tests` does:
   - Mock true external-service boundaries with `vi.mock(...)`: `@vis.gl/react-google-maps` (`Map`), `@fullcalendar/*`, `react-google-recaptcha-v3`/the `Captcha` component's underlying script, and any `fetch`/email-sending call reached through `EmailService`.
   - Mock sibling **feature** child components the target composes (so failures in a child don't show up as failures in this component's test), but do **not** mock React Router primitives needed just to render (`Link`, `useNavigate`, etc.) — wrap the render in a `MemoryRouter` instead where the target needs router context.
   - Do not mock the target's own direct props/handlers away — test them.
5. **Cover real behaviour**: for components — renders with expected content/roles (query by role/text via `@testing-library/react`, per AGENTS.md's Test Conventions — avoid snapshotting large trees), conditional rendering branches, user interactions via `@testing-library/user-event` (clicks, form input), and prop-driven variants; for hooks — `renderHook` covering each state transition; for utils/helpers/models — valid inputs, edge cases (empty/null/undefined), and error paths.
6. **Don't test the type system or trivial pass-through props** — per AGENTS.md's Test Conventions, test logic and rendered behaviour, not that TypeScript compiles or that a prop is forwarded with no transformation.
7. **Match the existing style** — there are no sibling test files yet in most areas, so this command is establishing the initial pattern; keep it consistent with any test files already scaffolded (by this command or `/scaffold-integration-tests`) in a sibling folder. Use an Arrange-Act-Assert structure, explicit `import { describe, it, expect, vi } from 'vitest'` (no reliance on injected globals), and reference source modules via this project's path aliases (`@components`, `@features`, `@utils`, etc.), not relative `../../..` chains.
8. **Run each new/extended test file as it's finished**, then run the full suite once at the end and confirm everything passes before finishing:
   ```bash
   npx vitest run <path/to/File.test.tsx>
   npx vitest run
   ```
   Also run `npm run lint` once at the end, since the new files must satisfy the flat ESLint config (including `tsdoc/syntax` if doc comments are added).
9. **Update `CHANGELOG.md`** in the same change, per AGENTS.md's Git Workflow conventions — under `### 🧪 [Unreleased]`, `#### ➕ Added` for new test files, with a `##### Testing` (or `##### Build & Tooling` for infrastructure setup like `vitest.config.ts`) Area subheading — only if the change is notable enough to warrant an entry.
10. **Do not run `git add`, `git commit`, or `git push` yourself** — this command only scaffolds and verifies; leave the new/changed files for the user to review and commit.

## 📤 Output

For each target: which test file(s) were created or extended and a one-line summary of what each covers (or, if the target couldn't be resolved/scaffolded, why). Note whether test infrastructure (`vitest.config.ts`, dev dependencies) was newly added this run. Finish with the overall `npx vitest run` result (pass/fail counts) and the `npm run lint` result. Do not commit anything — say so if asked.
