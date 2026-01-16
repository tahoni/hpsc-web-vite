# HPSC Website Architecture

This document describes the architectural design, directory structure, and core concepts of the
Hartbeespoortdam Practical Shooting Club (HPSC) website.

## Table of Contents

- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Core Concepts](#core-concepts)
    - [Data-Driven Routing](#data-driven-routing)
    - [Feature-Based Organization](#feature-based-organization)
    - [Content Strategy (MDX)](#content-strategy-mdx)
    - [Styling and Theming](#styling-and-theming)
- [Build and Tooling](#build-and-tooling)

## Technology Stack

The application is built using modern web technologies:

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) (Strict mode)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **UI Components**: [React Bootstrap 2](https://react-bootstrap.github.io/) (Bootstrap 5)
- **Styling**: [SCSS (Sass)](https://sass-lang.com/) with Sass Modules
- **Content**: [MDX](https://mdxjs.com/) for content-heavy pages
- **Validation**: [AJV](https://ajv.js.org/) (via RJSF)

## Project Structure

The project follows a modular structure, separating shared infrastructure from feature-specific logic.

```text
├───builders            # Build-time scripts (e.g., sitemap generation)
├───documentation       # Project documentation and templates
├───public              # Static assets (robots.txt, sitemap.xml, favicon)
│   └───assets          # Externalized images (club, content, layout, logos)
├───src                 # Main source code
│   ├───assets          # Internal assets (icons, global stylesheets)
│   ├───features        # Domain-specific features (Home, AboutUs, Events, etc.)
│   ├───shared          # Reusable core infrastructure
│   │   ├───components  # Shared UI components (Captcha, Map, Sidebar, etc.)
│   │   ├───constants   # Global constants
│   │   ├───helpers     # Logic and routing helpers
│   │   ├───layouts     # Application layout components (Header, Footer, Body)
│   │   ├───models      # TypeScript interfaces and classes
│   │   ├───pages       # Base Page wrapper components
│   │   ├───routes      # Routing definitions and configuration
│   │   └───utils       # Low-level utility functions
│   ├───vendors         # Third-party library overrides (Bootstrap)
│   └───main.tsx        # Application entry point
├───target              # Build artifacts and analysis reports
└───vite.config.ts      # Vite configuration
```

## Core Concepts

### Data-Driven Routing

Routing is handled through a data-driven approach. This allows the same route definitions to be used for both
the React application and the sitemap builder script.

- **`PageMapping`**: Defines metadata (name, path) and the associated React element.
- **`BaseRoutes.ts`**: Contains the central definition of all main pages.
- **Code Splitting**: Components are lazily loaded using `React.lazy` within the routing configuration to
  minimize the initial bundle size.

### Feature-Based Organization

Code is organized by "features" under `src/features`. Each feature folder is self-contained, including its
logic, specific components, and MDX content. This improves maintainability as the project scales.

### Content Strategy (MDX)

For pages with significant text content, we use **MDX**. This allows writing content in Markdown while
embedding React components where interactivity is needed (e.g., event lists or contact forms).

### Styling and Theming

- **Sass Modules**: Used for component-specific styles (e.g., `Layout.module.scss`) to prevent selector
  collisions.
- **Bootstrap Overrides**: Custom variables (brand colors, typography) are applied in `src/vendors/bootstrap`
  to maintain club branding.

## Build and Tooling

- **Vite**: Handles the build process and dev server.
- **Manual Chunking**: Large dependencies like `FullCalendar` and `FontAwesome` are split into separate vendor
  chunks for better caching.
- **Sitemap Generation**: A custom script in `builders/` automatically generates the `sitemap.xml` based on
  the defined routes during the build.
- **Bundle Visualization**: `rollup-plugin-visualizer` generates a report in `target/` to monitor the impact
  of dependencies on bundle size.
