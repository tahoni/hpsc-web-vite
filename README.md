# HPSC Website

The official repository for the Hartbeespoortdam Practical Shooting Club (HPSC) website.

## Table of Contents

- [📖 Introduction](#-introduction)
- [🔗 Repository](#-repository)
- [⚙️ Technology](#-technology)
- [🚀 Instructions](#-instructions)
    - [🔧 Install the Project](#-install-the-project)
    - [🧰 Available Scripts](#-available-scripts)
    - [⚙️ Environment Variables](#-environment-variables)
- [🏛️ Architecture](#-architecture)
- [🖥️ User Interface](#-user-interface)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [👤 Author](#-author)

---

## 📖 Introduction

The [HPSC website](https://hpsc.co.za) uses modern web technologies to provide an informative and
user-friendly platform for members and visitors.

The primary technologies used in this project include TypeScript, SCSS and MDX.

---

## 🔗 Repository

The repository for this project is located at [GitHub](https://github.com/tahoni/hpsc-web-vite).

Feature requests, suggestions for improvements and bugs can be logged using the project's
[Issues](https://github.com/tahoni/hpsc-web-vite/issues) page.

---

## ⚙️ Technology

This is a React project bootstrapped using Vite with the TypeScript React template.

It is written in TypeScript and uses both JSX and MDX components.

Bootstrap and React Bootstrap are used for the UI/UX.
Styling is done by SCSS stylesheets.

React Router is used for page routing.

---

## 🚀 Instructions

You can download Node.js from [here](https://nodejs.org/).

Clone the project from [GitHub](https://github.com/tahoni/hpsc-web-vite).

### 🔧 Install the project

Install the project using `npm install`.

Run it locally with `npm run dev`.

It will load at http://localhost:5173/.
This page will reload if you make edits.

Build it for production with `npm run build` to the `dist` directory.

The production build can be verified by running `npm run preview`.

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

A npm read key to @tahoni on GitHub needs to be set in the ````NPM_TOKEN_READ````
environment variable, to load the ````tahoni-lib-react```` npm package.

The Google Maps API key from Google Cloud Services needs to be set in the ````GOOGLE_MAPS_API_KEY````
environment variable, otherwise, the map will not be available.

The reCAPTCHA v2 site key needs to be set in the ````RECAPTCHA_V2_SITE_KEY````
environment variable, otherwise, the Contact Us form's captcha will not be available.

---

## 🏛️ Architecture

A detailed explanation of the architecture can be found in the [`ARCHITECTURE.md`](./ARCHITECTURE.md) file.

---

## 🖥️ User Interface

A description of the user interface can be found in the [`UI.md`](./UI.md) file.

---

## 🤝 Contributing

Guidelines for setting up the project, this repository's git workflow, and the pull request checklist can be found in the [`CONTRIBUTING.md`](./CONTRIBUTING.md) file.

---

## 📜 License

The copyright licence can be found in the [`LICENSE.md`](./LICENSE.md) file.

---

## 👤 Author

**Leoni Lubbinge**

- [![Website Badge](https://custom-icon-badges.demolab.com/badge/https%3A%2F%2Ftahoni.info-blue?logo=file-code)](https://www.tahoni.info)
- [![Email Badge](https://custom-icon-badges.demolab.com/badge/leonil%40tahoni.info-blue?logo=mail)](mailto:leonil@tahoni.info)


- [![Gmail Badge](https://img.shields.io/badge/tahoni%40gmail.com-blue?logo=gmail)](mailto:tahoni@gmail.com)
- [![GitHub Badge](https://img.shields.io/badge/Leoni_Lubbinge-blue?logo=github)](https://github.com/tahoni)
- [![LinkedIn Badge](https://custom-icon-badges.demolab.com/badge/Leoni_Lubbinge-blue.svg?logoSource=feather&logo=linkedin)](https://www.linkedin.com/in/leoni-lubbinge-06066b16/)
