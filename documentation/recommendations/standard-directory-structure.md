# Standard Directory Structure for React Applications

## Table of Contents

- [📁 Recommended Structure](#-recommended-structure)
- [🗝️ Key Organisational Principles](#-key-organisational-principles)
    - [🗂️ Feature-Based Organisation (Alternative)](#-feature-based-organisation-alternative)
    - [🧱 Component Organisation](#-component-organisation)
    - [📚 Common Folder Purposes](#-common-folder-purposes)
    - [👍 Best Practices](#-best-practices)
    - [🔗 Configuration for Path Aliases](#-configuration-for-path-aliases)

---

Here's a recommended directory structure for modern React applications (React 18+, TypeScript, Vite).

---

## 📁 Recommended Structure

```text
my-react-app/
├── public/                      # Static assets served as-is
│   ├── favicon.ico
│   ├── robots.txt
│   └── images/                  # Static images
│
├── src/
│   ├── assets/                  # Assets processed by bundler
│   │   ├── images/
│   │   ├── fonts/
│   │   └── styles/              # Global styles
│   │
│   ├── components/              # Reusable UI components
│   │   ├── common/              # Generic components (Button, Input, etc.)
│   │   ├── layout/              # Layout components (Header, Footer, Sidebar)
│   │   └── features/            # Feature-specific components
│   │
│   ├── pages/                   # Page/route components
│   │   ├── Home/
│   │   ├── About/
│   │   └── NotFound/
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── useAuth.ts
│   │   └── useLocalStorage.ts
│   │
│   ├── services/                # API calls and external services
│   │   ├── api/
│   │   │   ├── client.ts        # API client configuration
│   │   │   └── endpoints/       # Organized by resource
│   │   └── analytics/
│   │
│   ├── store/                   # State management (Redux/Zustand/Context)
│   │   ├── slices/              # Redux slices or state modules
│   │   └── index.ts
│   │
│   ├── utils/                   # Utility functions
│   │   ├── formatters.ts
│   │   ├── validators.ts
│   │   └── helpers.ts
│   │
│   ├── types/                   # TypeScript type definitions
│   │   ├── api.types.ts
│   │   └── common.types.ts
│   │
│   ├── constants/                # Application constants
│   │   ├── routes.ts
│   │   └── config.ts
│   │
│   ├── context/                  # React Context providers
│   │   ├── AuthContext.tsx
│   │   └── ThemeContext.tsx
│   │
│   ├── routes/                   # Routing configuration
│   │   └── index.tsx
│   │
│   ├── App.tsx                   # Root component
│   ├── main.tsx                  # Entry point
│   └── vite-env.d.ts            # Vite type declarations
│
├── tests/                        # Test files (or co-located with components)
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .env.local                    # Environment variables (local)
├── .env.production                # Environment variables (production)
├── .gitignore
├── eslint.config.js               # ESLint configuration
├── index.html                     # HTML entry point
├── package.json
├── tsconfig.json                  # TypeScript configuration
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts                 # Vite configuration
```

---

## 🗝️ Key Organisational Principles

### 🗂️ Feature-Based Organisation (Alternative)

For larger applications, consider organizing by feature:

```text
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── index.ts
│   ├── dashboard/
│   └── profile/
├── shared/                      # Shared across features
│   ├── components/
│   ├── hooks/
│   └── utils/
```

### 🧱 Component Organisation

```text
components/
├── Button/
│   ├── Button.tsx
│   ├── Button.test.tsx
│   ├── Button.module.scss       # CSS Modules
│   └── index.ts                 # Re-export
```

### 📚 Common Folder Purposes

- **`assets/`** — Images, fonts, global styles processed by bundler
- **`components/`** — Reusable, presentational components
- **`pages/`** — Route-level components
- **`hooks/`** — Custom React hooks for reusable logic
- **`services/`** — API calls, external integrations
- **`utils/`** — Pure utility functions (not React-specific)
- **`types/`** or **`models/`** — TypeScript interfaces/types
- **`constants/`** — Configuration and constant values
- **`context/`** — React Context providers
- **`store/`** — Global state management

### 👍 Best Practices

- Keep components small and focused.
- Co-locate related files (component + styles + tests).
- Use `index.ts` for clean imports.
- Separate business logic from UI components.
- Keep the `src/` root clean (only essential files).
- Use absolute imports with path aliases (`@/components`, `@/utils`).

### 🔗 Configuration for Path Aliases

Add to `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ],
      "@components/*": [
        "src/components/*"
      ],
      "@utils/*": [
        "src/utils/*"
      ]
    }
  }
}
```

Add to `vite.config.ts`:

```typescript
import path from 'path';

export default {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components')
        }
    }
}
```

This structure scales well from small projects to large enterprise applications while maintaining clarity and
organization.
