---
name: scaffold-integration-tests
description: Scaffold full-tree route/page rendering tests for a feature page, exercising the real component tree through React Router, following this project's testing conventions. Use whenever the user asks to add/scaffold/write integration tests for one or more routes or pages.
user-invocable: true
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - Bash(npm install:*)
  - Bash(npx vitest run:*)
  - Bash(npm run lint:*)
---

# Scaffold Integration Tests

The target route/page name(s) (one or more, space- or comma-separated — as they appear in
`src/shared/routes/BaseRoutes.ts`, or feature folder names under `src/features/`) are passed as `args`.

Read `AGENTS.md` in full before starting.

## 🚀 Instructions

Read and strictly follow **all conventions defined in AGENTS.md** — in particular its **Test Conventions** section
and its **Architecture Overview** section (routing, feature/shared layering). Treat it as the single source of truth;
do not reinterpret or contradict its rules.

This project has no service/repository/database layer to wire up for a "real" integration test the way a backend
project would. The equivalent boundary here is **the full composed component tree** — Route → `Layout` → feature
`Page` → content components → shared components — rendered through a real `MemoryRouter`, as opposed to the isolated,
dependency-mocked component tests `scaffold-unit-tests` produces. Only mock at genuine **external-service
boundaries**: Google Maps, FullCalendar's own network calls, reCAPTCHA's script and the actual `fetch`/email delivery
in `EmailService`. Never mock this project's own components.

1. **Check test infrastructure exists first** (`vitest.config.ts` with `jsdom`, `@testing-library/react`/
   `@testing-library/user-event`/`@testing-library/jest-dom`) — see the `scaffold-unit-tests` skill's step 1 for
   exactly what to add if it's missing; don't duplicate the setup if it's already there.
2. **Resolve `args` to one or more targets.** Each token names a route/page — look it up in
   `src/shared/routes/BaseRoutes.ts` (its `PageMapping` path and component) and cross-reference
   `src/shared/routes/RouteAliases.tsx` for the lazy-loaded component it resolves to. If a bare feature folder name is
   given instead (e.g. `ContactUs`), resolve it to `src/features/ContactUs/ContactUsPage.tsx`. If `args` is empty, ask
   the user which route(s)/page(s) to scaffold rather than guessing. Repeat steps 3–8 independently for each resolved
   target — a failure or ambiguity on one target must not block scaffolding the others; report it and move on.
3. **Create `<Feature>Page.integration.test.tsx`**, co-located next to `<Feature>Page.tsx` in its feature folder (the
   `.integration.test.tsx` suffix distinguishes it from a plain `.test.tsx` unit test of the same page, if one exists
   from `scaffold-unit-tests`).
4. **Render through the real tree**, not the isolated page component alone:
    - Wrap in `MemoryRouter` (or `createMemoryRouter` + `RouterProvider` if the target relies on data-router
      features) with `initialEntries` set to the route's real path from `BaseRoutes.ts`.
    - Render the actual routing surface (`AppRoutes`, or the specific `Route`/`PageMapping` under test) inside
      `Layout`, so `Header`, `Footer` and `Body` all mount for real, not the bare page component in isolation.
    - Let the feature's own content components, `.mdx` content and shared components (`Section`, `Sidebar`, `Text`,
      `Title`, etc.) render for real.
5. **Mock only genuine external-service boundaries**, using a shared helper if more than one target needs the same
   mock (create it under `src/shared/testUtils/` alongside any helper already added by `scaffold-unit-tests`, reusing
   it rather than duplicating):
    - `@vis.gl/react-google-maps` — the Venues page's `Map`.
    - `@fullcalendar/*` — the Events page's calendar.
    - `react-google-recaptcha-v3` — the Contact Us page's `Captcha`.
    - `EmailService`'s network call — assert it was invoked with the right payload on form submission, without
      hitting a real endpoint.
6. **Cover, per target**: the route renders without throwing and shows the expected page title/heading; primary
   navigation elements from `Header`/`Footer` are present and link to the right paths; any interactive flow specific
   to the page works end-to-end through real components (e.g. Contact Us form fill-in → submit → `EmailService`
   called, with the reCAPTCHA/EmailService boundary mocked per step 5); and, where relevant, that the rendered content
   matches what `BaseRoutes.ts`/the sitemap builder expect for that route (title, path).
7. **Don't duplicate a paired unit test's isolated-component coverage** (from `scaffold-unit-tests`, if one exists for
   the same page) — this skill's job is the full-tree, real-wiring sweep, not re-testing an individual child
   component's own prop/variant behaviour.
8. **Match the existing style** — mirror the closest sibling `*.integration.test.tsx` already scaffolded by this
   skill, or `scaffold-unit-tests`' component test style where none exists yet, for import style (path aliases, not
   relative chains) and Arrange-Act-Assert structure.
9. **Run each new/extended test file as it's finished**, then run the full suite once at the end and confirm
   everything passes before finishing:
   ```bash
   npx vitest run <path/to/Feature.integration.test.tsx>
   npx vitest run
   ```
   Also run `npm run lint` once at the end.
10. **Update `CHANGELOG.md`** under `### 🧪 [Unreleased]` in the same change, per AGENTS.md's Git Workflow
    conventions — one entry per target if their scope differs, or a single combined entry if they're closely related
    — only if the change is notable enough to warrant an entry.
11. **Do not run `git add`, `git commit` or `git push` yourself** — this skill only scaffolds and verifies; leave the
    new/changed files for the user to review and commit.

## 📤 Output

For each target: which test file(s) were created or extended and a one-line summary of what each covers (or, if the
target couldn't be resolved/scaffolded, why). Note whether test infrastructure or a shared external-service mock
helper was newly added this run. Finish with the overall `npx vitest run` result (pass/fail counts) and the
`npm run lint` result. Do not commit anything — say so if asked.
