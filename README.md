# HPSC website

## Table of Contents

- [Description](#description)
- [Summary](#summary)
- [Repository](#repository)
- [Technology](#technology)
- [Instructions](#instructions)
- [Architecture](#architecture)
- [Demo](#demo)
- [Screenshots](#screenshots)
- [License](#license)
- [Author](#author)

## Description

This repository contains the source code for the Hartbeespoortdam Practical Shooting Club (HPSC) website.

## Summary

The [HPSC website](https://hpsc.co.za) uses modern web technologies
to provide an informative and user-friendly platform for members and visitors.<br/>
The primary technologies used in this project include TypeScript, SCSS, and MDX.

## Repository

The repository for this project is located at
[GitHub](https://github.com/tahoni/hpsc-web-vite).

Feature requests, suggestions for improvements and bugs can be
logged using the project's [Issues](https://github.com/tahoni/hpsc-web-vite/issues) page.

An overview of the project can be found at
[https://tahoni.info/projects/hpsc-web-vite](https://www.tahoni.info/projects/hpsc-web-vite).

## Technology

This is a React project bootstrapped using Vite with the TypeScript React template.

It is written in TypeScript and uses both JSX and MDX components.

Bootstrap and React Bootstrap are used for the UI/UX.<br/>
Styling is done by SCSS stylesheets.

React Router is used for page routing.

## Instructions

You can download Node.js from [here](https://nodejs.org/).

Clone the project from [GitHub](https://github.com/tahoni/hpsc-web-vite).

Install the project using `npm install`.<br/>

Run it locally with `npm run dev`.<br/> 
It will load at http://localhost:5173/.<br/> 
This page will reload if you make edits.

Build it for production with `npm run build` to the `dist` directory.<br/> 
The production build can be verified by running `npm run preview`.

### Generate a Pull Request Description

To generate a Markdown PR description comparing the current branch to main:

- Run: `npm run pr:desc`
- To compare to a different base (e.g., develop): `npm run pr:desc -- --base=develop`

The script prints Markdown to stdout; you can copy it into your PR description or redirect it to a file:

- `npm run pr:desc > target/pr-description.md`

### Generate Release Notes (this branch → main)

To generate structured release notes comparing the current branch to the main branch:

- Run: `npm run release:notes`
- To compare to a different base (e.g., develop): `npm run release:notes -- --base=develop`

The script prints Markdown to stdout and also writes a file under `target/` named like:

- `target/release-notes-<branch>-to-<base>.md`

You can paste the output into PRs or include in RELEASE_NOTES.md as needed.

## Architecture

A detailed explanation of the architecture can be found
in the [`ARCHITECTURE.md`](./ARCHITECTURE.md) file.

## Demo

<!-- TODO: insert gif or link to demo -->

## Screenshots

<!-- TODO: update screenshots -->

## License

The copyright licence can be found in the [`LICENSE.md`](./LICENSE.md) file.

## Author

**Leoni Lubbinge**

- [![Website Badge](https://custom-icon-badges.demolab.com/badge/https%3A%2F%2Ftahoni.info-blue?logo=file-code)](https://www.tahoni.info)
- [![Email Badge](https://custom-icon-badges.demolab.com/badge/leonil%40tahoni.info-blue?logo=mail)](mailto:leonil@tahoni.info)

- [![Gmail Badge](https://img.shields.io/badge/tahoni%40gmail.com-blue?logo=gmail)](mailto:tahoni@gmail.com)
- [![GitHub Badge](https://img.shields.io/badge/Leoni_Lubbinge-blue?logo=github)](https://github.com/tahoni)
- [![LinkedIn Badge](https://custom-icon-badges.demolab.com/badge/Leoni_Lubbinge-blue.svg?logoSource=feather&logo=linkedin)](https://www.linkedin.com/in/leoni-lubbinge-06066b16/)
