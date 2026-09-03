# HPSC Website Architecture

This document describes the architectural design, directory structure and core concepts of the Hartbeespoortdam
Practical Shooting Club (HPSC) website.

## Table of Contents

- [⚙️ Technology Stack](#-technology-stack)
- [📁 Project Structure](#-project-structure)
- [🎯 Core Concepts](#-core-concepts)
    - [🧭 Data-Driven Routing](#-data-driven-routing)
    - [🧩 Feature-Based Organisation](#-feature-based-organisation)
    - [📝 Content Strategy (MDX)](#-content-strategy-mdx)
    - [🎨 Styling and Theming](#-styling-and-theming)
- [🧰 Build and Tooling](#-build-and-tooling)
- [🛠️ Development Guidelines](#-development-guidelines)

---

## ⚙️ Technology Stack

The application is built using modern web technologies:

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Routing**: [React Router](https://reactrouter.com/)
- **UI Components**: [React Bootstrap 2](https://react-bootstrap.github.io/) (Bootstrap 5)
- **Styling**: [SCSS (Sass)](https://sass-lang.com/) with Sass Modules
- **Content**: [MDX](https://mdxjs.com/) for content-heavy pages

---

## 📁 Project Structure

The project follows a modular structure, separating shared infrastructure from feature-specific logic.

```text
├───.claude             # Claude Code configuration (custom skills)
├───.github             # GitHub configuration (Actions workflows)
├───builders            # Build-time scripts (e.g., sitemap generation)
├───documentation       # Project documentation, release history archive and planning notes
├───public              # Static assets (robots.txt, sitemap.xml, favicon)
│   └───assets          # Externalised images (club, content, layout, logos)
├───src                 # Main source code
│   ├───assets          # Internal assets (icons, global stylesheets)
│   ├───constants       # Global constants
│   ├───enums           # Domain enums (e.g. email content type)
│   ├───features        # Domain-specific features (Home, AboutUs, Events, etc.)
│   ├───helpers         # Logic and routing helpers
│   ├───models          # TypeScript interfaces and classes
│   ├───shared          # Reusable core infrastructure
│   │   ├───components  # Shared UI components (Captcha, Map, Sidebar, etc.)
│   │   ├───layouts     # Application layout components (Header, Footer, Body)
│   │   ├───pages       # Base Page wrapper components
│   │   └───routes      # Routing definitions and configuration
│   ├───utils           # Low-level utility functions
│   ├───vendors         # Third-party library overrides (Bootstrap)
│   └───main.tsx        # Application entry point
└───vite.config.ts      # Vite configuration
```

---

## 🎯 Core Concepts

### 🧭 Data-Driven Routing

Routing is handled through a data-driven approach rather than static JSX routes. This allows the same route definitions
to be used for both the React application and the sitemap builder.

- **`PageMapping` (Model)**: Defines a page's metadata (name, path, timestamps) and its React element.
- **`BaseRoutes.ts`**: Contains the core `PageMapping` instances for all main pages.
- **`RouteAliases.tsx`**: Maps mappings to their respective components, often using `React.lazy` for code-splitting.
- **`AppRoutes.tsx`**: Renders the `Routes` and `Route` components from React Router by iterating over the configured
  aliases.

### 🧩 Feature-Based Organisation

Code is organised by "features" under `src/features`. Each feature folder is self-contained and typically includes:

- The main page component (e.g., `HomePage.tsx`).
- Content components (e.g., `HomeContent.tsx`).
- Feature-specific MDX content.
- Feature-specific styles (Sass Modules).
- An `index.ts` for clean exports.

### 📝 Content Strategy (MDX)

For pages with significant text content (like History or Home), the project uses **MDX**. This allows writing content in
Markdown while embedding React components where necessary.

- MDX files are imported as React components.
- The Vite config uses `@mdx-js/rollup` to process these files.

### 🎨 Styling and Theming

The project uses a combination of Bootstrap and custom SCSS:

- **Sass Modules**: Used for component-specific styles (e.g., `Layout.module.scss`) to prevent selector collisions.
- **Global Styles**: Defined in `src/assets/stylesheets`, using the `@use` syntax for modularity.
- **Bootstrap Overrides**: Custom variables and overrides are located in `src/vendors/bootstrap/styles/_custom.scss`.
  This allows the club's colour palette (Butterscotch, etc.) to be applied to standard Bootstrap components.

---

## 🧰 Build and Tooling

- **Vite**: Handles the build process, including HMR during development and optimised bundling for production.
- **Manual Chunking**: Large dependencies (e.g. FontAwesome, FullCalendar) are split into separate vendor chunks to
  improve caching and load times.
- **Sitemap Generation**: A custom script (`builders/RoutesSitemap.ts`) uses the routing metadata to generate
  `sitemap.xml`.
- **Bundle Visualisation**: `rollup-plugin-visualizer` generates a report in`target/bundle-visualization.html` after
  every build to monitor bundle size.

---

## 🛠️ Development Guidelines

Refer to the [README.md](README.md) for detailed instructions on local setup, commands and coding standards.
