# Contributing

Thank you for your interest in contributing to the HPSC website. This guide covers everything you need to set up the project, follow this repository's workflow, and submit a pull request.

## Table of Contents

- [📖 Introduction](#-introduction)
- [🚀 Getting Started](#-getting-started)
- [🧰 Development Scripts](#-development-scripts)
- [🔀 Git Workflow](#-git-workflow)
- [📝 Documentation Conventions](#-documentation-conventions)
- [🧪 Testing](#-testing)
- [✅ Pull Request Checklist](#-pull-request-checklist)
- [💬 Questions & Support](#-questions--support)

---

## 📖 Introduction

This project is the React/TypeScript frontend for the Hartbeespoortdam Practical Shooting Club (HPSC) website — see [`README.md`](README.md) for a project overview and [`ARCHITECTURE.md`](ARCHITECTURE.md) for the detailed design.

For the full set of conventions AI coding agents (and, by extension, contributors) follow in this repository, see [`AGENTS.md`](AGENTS.md); this file summarises the parts most relevant to opening a pull request.

---

## 🚀 Getting Started

1. Install [Node.js](https://nodejs.org/).
2. Clone the repository from [GitHub](https://github.com/tahoni/hpsc-web-vite).
3. Set the environment variables the project needs — see `CLAUDE.md`'s Environment Variables table for the full list (`NPM_TOKEN_READ` is required just to install dependencies; `GOOGLE_MAPS_API_KEY` and `RECAPTCHA_V2_SITE_KEY` are optional locally but needed for the venue map and Contact Us captcha to render).
4. Install dependencies: `npm install`.
5. Start the dev server: `npm run dev` (or `npm run host` to bind to `http://hpsc.local/` instead of `localhost`).

---

## 🧰 Development Scripts

The scripts most relevant while contributing:

| Script            | Purpose                                       |
|-------------------|-----------------------------------------------|
| `npm run dev`     | Run the dev server with HMR                   |
| `npm run lint`    | Lint with ESLint                              |
| `npm test`        | Run the Vitest test suite                     |
| `npm run build`   | Type-check and build for production (`dist/`) |
| `npm run preview` | Preview the production build locally          |

See `README.md`'s Available Scripts section for the complete list, including `npm run docs` and `npm run sitemap`.

---

## 🔀 Git Workflow

This repository follows [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/); see `AGENTS.md`'s Git Workflow section for the full branching model, merge rules, and rationale. In short:

- Branch from, and open your PR against, **`develop`** — not `main`. Use `feature/<short-description>` for day-to-day work.
- Only urgent production fixes use `hotfix/<short-description>`, branched from and PR'd into `main` directly.
- Commit in logical chunks — one concern per commit — and write plain, imperative-mood commit messages (e.g. "Fix venue map marker not rendering on Safari"). This project does not use Conventional Commits prefixes (`feat:`, `fix:`, etc.).
- Update `CHANGELOG.md` in the same change that makes the change, under `### 🧪 [Unreleased]`, in the matching category and `##### <Area>` sub-heading.

---

## 📝 Documentation Conventions

See `AGENTS.md`'s Documentation Conventions section for the full rules. The essentials:

- All documentation prose and code comments use **British English** spelling (e.g. "licence", "colour", "initialise"), not American English.
- Doc comments must be syntactically valid **TSDoc**, not JSDoc-only syntax (`eslint-plugin-tsdoc`'s `tsdoc/syntax` rule is enforced).
- When crediting contributors or authors in documentation, source the list from actual git/GitHub history rather than assuming — see `AGENTS.md`'s Contributors convention.

---

## 🧪 Testing

Vitest is configured (`npm test`) but this project currently has no test files — see `documentation/roadmap/improvement-plan-tasks.md` for the tracked task on establishing initial coverage. When adding tests, per `AGENTS.md`'s Test Conventions:

- Co-locate `<Name>.test.ts` / `<Name>.test.tsx` next to the file under test.
- For component tests, use `@testing-library/react` with a `jsdom` environment.
- Prefer testing behaviour and rendered output over implementation details; avoid snapshot tests of large component trees.
- Don't write tests whose sole purpose is verifying that TypeScript's type system or a trivial pass-through prop works.

---

## ✅ Pull Request Checklist

Before opening a pull request, confirm:

- [ ] `npm run lint` passes with no errors.
- [ ] `npm run build` succeeds (this project has no CI workflow that runs it automatically — see `CLAUDE.md`'s Code Quality & CI section).
- [ ] `npm test` passes, and any new logic has co-located tests where applicable.
- [ ] A `CHANGELOG.md` entry has been added under `### 🧪 [Unreleased]`, in the correct Keep a Changelog category and `##### <Area>` sub-heading.
- [ ] Any affected documentation (`README.md`, `ARCHITECTURE.md`, `UI.md`, `CLAUDE.md`, `AGENTS.md`) has been updated to match — see `AGENTS.md`'s Reverse Sync rule.
- [ ] The branch follows the GitFlow naming and merge-target conventions above.
- [ ] Commit messages are plain, imperative-mood, with no Conventional Commits prefix.
- [ ] New or changed prose uses British English spelling.

---

## 💬 Questions & Support

Feature requests, suggestions, and bug reports are tracked on this project's [Issues](https://github.com/tahoni/hpsc-web-vite/issues) page. For anything else, see `README.md`'s Author section for contact details.
