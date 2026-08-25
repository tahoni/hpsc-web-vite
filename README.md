# HPSC Website

The official repository for the Hartbeespoortdam Practical Shooting Club (HPSC) website.

## Table of Contents

- [📖 Introduction](#-introduction)
- [🔗 Repository](#-repository)
- [⚙️ Technology](#-technology)
- [🚀 Instructions](#-instructions)
    - [📋 Prerequisites](#-prerequisites)
    - [🔧 Installation and Execution](#-installation-and-execution)
    - [🧰 Available Scripts](#-available-scripts)
        - [⚙️ Environment Variables](#-environment-variables)
- [📚 Documentation](#-documentation)
    - [🗺️ Roadmap](#-roadmap)
- [👤 Author](#-author)

## 📖 Introduction

The [HPSC website](https://hpsc.co.za) uses modern web technologies to provide an informative and user-friendly platform for members and visitors.

The primary technologies used in this project include TypeScript, SCSS and MDX.

## 🔗 Repository

The repository for this project is located at [GitHub](https://github.com/tahoni/hpsc-web-vite).

Feature requests, suggestions for improvements and bugs can be logged using the project's [Issues](https://github.com/tahoni/hpsc-web-vite/issues) page.

## ⚙️ Technology

This is a React project bootstrapped using Vite with the TypeScript React template.

It is written in TypeScript and uses both JSX and MDX components.

Bootstrap and React Bootstrap are used for the UI/UX.
Styling is done by SCSS stylesheets.

React Router is used for page routing.

## 🚀 Instructions

### 📋 Prerequisites

- **Node.js**: Download from [nodejs.org](https://nodejs.org/)
- **NPM registry access**: A read-only npm token for the `@tahoni` GitHub Packages scope, set in the `NPM_TOKEN_READ` environment variable (see [⚙️ Environment Variables](#-environment-variables))

### 🔧 Installation and Execution

1. **Clone the repository**:
   ```bash
   git clone https://github.com/tahoni/hpsc-web-vite.git
   cd hpsc-web-vite
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the dev server**:
   ```bash
   npm run dev
   ```
   The app loads at `http://localhost:5173/` and reloads automatically if you make edits.

4. **Build for production**:
   ```bash
   npm run build
   ```
   Output is written to the `dist` directory.

5. **Preview the production build**:
   ```bash
   npm run preview
   ```
   Use this to check if the production build looks OK in your local environment.

### 🧰 Available Scripts

The following commands are available in this project.

#### `npm install`

This installs the dependencies.

#### `npm run dev`

This runs the app in development mode.
The page will reload if you make edits.

#### `npm run host`

This runs the app in development mode, bound to `http://hpsc.local/` instead of `localhost`.

#### `npm run build`

This builds the app for production to the `dist` directory.
Your app is ready to be deployed!

#### `npm run preview`

This previews the app locally in the `dist` directory.
Use this to check if the production build looks OK in your local environment.

#### `npm run lint`

Runs ESLint to check for code quality issues.

#### `npm test`

Runs the Vitest test suite.

#### `npm run docs`

Generates technical documentation using TypeDoc to the `tsdocs` directory.

#### `npm run sitemap`

Regenerates `public/sitemap.xml` from the route metadata.

#### ⚙️ Environment Variables

A npm read key to @tahoni on GitHub needs to be set in the ````NPM_TOKEN_READ```` environment variable to load the ````tahoni-lib-react```` npm package.

The Google Maps API key from Google Cloud Services needs to be set in the ````GOOGLE_MAPS_API_KEY```` environment variable, otherwise, the map will not be available.

The reCAPTCHA v2 site key needs to be set in the ````RECAPTCHA_V2_SITE_KEY```` environment variable, otherwise, the Contact Us form's captcha will not be available.

## 📚 Documentation

This project's documentation is spread across a few files, each with a distinct purpose:

| File                                   | Purpose                                                                                                  |
|----------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`README.md`](README.md)               | Project overview, setup, and links to the rest of the documentation (this file)                          |
| [`ARCHITECTURE.md`](ARCHITECTURE.md)   | Detailed architectural design, directory structure, and core concepts                                    |
| [`UI.md`](UI.md)                       | User interface layout, navigation, and design overview                                                   |
| [`CLAUDE.md`](CLAUDE.md)               | Guidance for Claude Code (AI assistant) when working in this repository                                  |
| [`AGENTS.md`](AGENTS.md)               | Cross-tool conventions for AI coding agents working in this repository                                   |
| [`CONTRIBUTING.md`](CONTRIBUTING.md)   | Contributor-facing setup, git workflow, and pull request checklist                                       |
| [`CHANGELOG.md`](CHANGELOG.md)         | Notable changes per released version, in [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format |
| [`HISTORY.md`](HISTORY.md)             | Narrative history of the project's evolution across all versions                                         |
| [`RELEASE_NOTES.md`](RELEASE_NOTES.md) | Detailed release notes for the current/latest version only                                               |
| [`PACKAGES.md`](PACKAGES.md)           | Generated funding-tree manifest listing dependencies seeking sponsorship                                 |
| [`LICENSE.md`](LICENSE.md)             | MIT License                                                                                              |

[`documentation/history/`](documentation/history) holds one of each of the following files per released version, so past releases stay individually referenceable as `RELEASE_NOTES.md` and the release PR moves on to the next version:

| File                       | Purpose                                                    |
|----------------------------|------------------------------------------------------------|
| `RELEASE_NOTES_vX.Y.Z.md`  | Archived snapshot of `RELEASE_NOTES.md` at release time    |
| `PR_DESCRIPTION_vX.Y.Z.md` | The release pull request's body, archived for that version |

[`documentation/recommendations/`](documentation/recommendations) holds general React/TypeScript convention reference notes (naming, directory structure, CSS, MDX placement, templates, `utils/` vs `helpers/`) used to steer this project's own conventions — read alongside `ARCHITECTURE.md`, not as a replacement for it.

### 🗺️ Roadmap

[`documentation/roadmap/`](documentation/roadmap) holds in-progress planning documents — not part of the standard documentation set above, and not required reading to work in this repository:

| File                  | Purpose                                                                                                          |
|-----------------------|------------------------------------------------------------------------------------------------------------------|
| `IMPROVEMENT_PLAN.md` | Synthesised goals/constraints from this project's own docs and configuration, and the resulting gaps and roadmap |
| `TASKS.md`            | Concrete, checkbox-level task list broken out from `IMPROVEMENT_PLAN.md`'s gaps                                  |

This project follows [Semantic Versioning 2.0.0](https://semver.org/) (`MAJOR.MINOR.PATCH`) — see [CHANGELOG.md](CHANGELOG.md#-version-policy) for the full version policy.

## 👤 Author

**Leoni Lubbinge**

- [![Website Badge](https://custom-icon-badges.demolab.com/badge/https%3A%2F%2Ftahoni.info-blue?logo=file-code)](https://www.tahoni.info)
- [![Email Badge](https://custom-icon-badges.demolab.com/badge/leonil%40tahoni.info-blue?logo=mail)](mailto:leonil@tahoni.info)


- [![Gmail Badge](https://img.shields.io/badge/tahoni%40gmail.com-blue?logo=gmail)](mailto:tahoni@gmail.com)
- [![GitHub Badge](https://img.shields.io/badge/Leoni_Lubbinge-blue?logo=github)](https://github.com/tahoni)
- [![LinkedIn Badge](https://custom-icon-badges.demolab.com/badge/Leoni_Lubbinge-blue.svg?logoSource=feather&logo=linkedin)](https://www.linkedin.com/in/leoni-lubbinge-06066b16/)
