# Hartbeespoortdam Practical Shooting Club (HPSC) Website

This is the official web application for the Hartbeespoortdam Practical Shooting Club (HPSC), built with
React, Vite, and TypeScript.

## 🚀 Quick Start

### Prerequisites

- **Node.js**: Version 20 or higher (recommended)
- **npm**: Version 10 or higher

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

```

Build
Create an optimized production build in the dist/ folder:``` bash
npm run build
```

The build process includes:

- TypeScript type checking.
- Asset optimization.
- Sitemap generation.
- Bundle visualization report (saved to `target/`).

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **UI Components**: [React Bootstrap 2](https://react-bootstrap.github.io/)
- **Styling**: [Sass (SCSS)](https://sass-lang.com/)
- **Content**: [MDX](https://mdxjs.com/) for rich text and documentation
- **Testing**: [Vitest](https://vitest.dev/)

## 📁 Project Structure

- `src/features`: Domain-specific logic and page components.
- `src/shared`: Reusable components, hooks, models, and utility functions.
- `src/assets`: Global stylesheets, images, and fonts.
- `builders`: Scripts for build-time operations (e.g., sitemap generation).
- `public`: Static assets served directly (robots.txt, etc.).

For a detailed breakdown of the technical design, see [ARCHITECTURE.md](./ARCHITECTURE.md).

## 📜 Scripts

- `npm run dev`: Start dev server.
- `npm run build`: Build for production.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint to check for code quality.
- `npm run test`: Run the test suite using Vitest.
- `npm run docs`: Generate TypeDoc documentation.

## 🤝 Contributing

1. Ensure your code follows the established ESLint and Prettier configurations.
2. Add tests for any new utility or shared logic.
3. Update `CHANGELOG.md` for any significant changes.
