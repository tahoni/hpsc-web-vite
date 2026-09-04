# Naming Structure for React `.ts` and `.tsx` Files

## Table of Contents

- [📄 File Extension Rules](#-file-extension-rules)
- [🏷️ Naming Conventions](#-naming-conventions)
    - [1. React Components](#1-react-components)
    - [2. Pages/Routes](#2-pagesroutes)
    - [3. Hooks](#3-hooks)
    - [4. Utilities & Helpers](#4-utilities--helpers)
    - [5. Types & Interfaces](#5-types--interfaces)
    - [6. Services & API](#6-services--api)
    - [7. Context Providers](#7-context-providers)
    - [8. Constants & Configuration](#8-constants--configuration)
    - [9. Models & Schemas](#9-models--schemas)
    - [10. Test Files](#10-test-files)
- [📚 Complete Naming Reference](#-complete-naming-reference)
- [👍 Best Practices](#-best-practices)
- [🌳 Quick Decision Tree](#-quick-decision-tree)
- [🎯 Recommended Standard](#-recommended-standard)

---

This document lays out the standard file-extension and naming conventions used across a typical React/TypeScript codebase.

---

## 📄 File Extension Rules

`.tsx` is for files that contain JSX/React components:

```typescript jsx
// Button.tsx
export const Button = () => {
    return <button>Click me</button>;
};
```

`.ts` is for files with no JSX (pure TypeScript):

```typescript
// validators.ts
export const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
```

---

## 🏷️ Naming Conventions

### 1. React Components

**PascalCase for component files:**

```text
src/components/
├── Button.tsx              ✅ Component
├── UserProfile.tsx         ✅ Component
├── NavigationMenu.tsx      ✅ Component
└── DataTable.tsx           ✅ Component
```

**Component with related files:**

```text
src/components/Button/
├── Button.tsx              # Component (PascalCase)
├── Button.module.scss      # Styles
├── Button.test.tsx         # Tests
├── Button.types.ts         # Type definitions
└── index.ts                # Barrel export
```

### 2. Pages/Routes

**PascalCase for page components:**

```text
src/pages/
├── Home.tsx               ✅ Page component
├── About.tsx              ✅ Page component
├── UserProfile.tsx        ✅ Page component
└── NotFound.tsx           ✅ Page component
```

**Or organised by folder:**

```text
src/pages/
├── Home/
│   ├── Home.tsx           # Page component
│   ├── Home.module.scss
│   └── index.ts
└── About/
    ├── About.tsx
    └── index.ts
```

### 3. Hooks

**camelCase with `use` prefix:**

```text
src/hooks/
├── useAuth.ts             ✅ Custom hook
├── useLocalStorage.ts     ✅ Custom hook
├── useFetch.ts            ✅ Custom hook
└── useDebounce.ts         ✅ Custom hook
```

With types:

```text
src/hooks/
├── useAuth/
│   ├── useAuth.ts         # Hook implementation
│   ├── useAuth.types.ts   # Type definitions
│   └── index.ts
```

### 4. Utilities & Helpers

**camelCase for utility files:**

```text
src/utils/
├── formatters.ts          ✅ Utility functions
├── validators.ts          ✅ Utility functions
├── dateUtils.ts           ✅ Utility functions
└── stringHelpers.ts       ✅ Utility functions
```

Or group by category:

```text
src/utils/
├── format/
│   ├── currency.ts
│   ├── date.ts
│   └── index.ts
└── validation/
    ├── email.ts
    ├── url.ts
    └── index.ts
```

### 5. Types & Interfaces

**PascalCase for type files:**

```text
src/types/
├── User.ts                ✅ or User.types.ts
├── Api.types.ts           ✅
├── Common.types.ts        ✅
└── index.ts
```

Co-located types:

```typescript jsx
// Button.types.ts
export interface ButtonProps {
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
}

export type ButtonVariant = ButtonProps['variant'];
```

### 6. Services & API

**camelCase for service files:**

```text
src/services/
├── authService.ts         ✅
├── apiClient.ts           ✅
├── userService.ts         ✅
└── analyticsService.ts    ✅
```

Or PascalCase (alternative):

```text
src/services/
├── AuthService.ts         ✅ (Alternative)
├── ApiClient.ts           ✅ (Alternative)
└── UserService.ts         ✅ (Alternative)
```

### 7. Context Providers

**PascalCase with `Context` suffix:**

```text
src/context/
├── AuthContext.tsx        ✅
├── ThemeContext.tsx       ✅
└── UserContext.tsx        ✅
```

```typescript jsx
// AuthContext.tsx
import {createContext} from 'react';

interface AuthContextValue {
    user: User | null;
    login: (credentials: Credentials) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({children}: { children: React.ReactNode }) => {
    // ... implementation
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
```

### 8. Constants & Configuration

**camelCase or UPPER_SNAKE_CASE:**

```text
src/constants/
├── apiEndpoints.ts        ✅ File: camelCase
├── routes.ts              ✅ File: camelCase
└── config.ts              ✅ File: camelCase
```

```typescript
// apiEndpoints.ts
export const API_BASE_URL = 'https://api.example.com';  // ✅ Constant: UPPER_SNAKE_CASE
export const API_TIMEOUT = 5000;

// routes.ts
export const ROUTES = {                                  // ✅ Object: UPPER_SNAKE_CASE
    HOME: '/',
    ABOUT: '/about',
    PROFILE: '/profile'
} as const;
```

### 9. Models & Schemas

**PascalCase for model files:**

```text
src/models/
├── User.ts                ✅
├── Post.ts                ✅
├── Comment.ts             ✅
└── index.ts
```

```typescript
// User.ts
export interface User {
    id: string;
    name: string;
    email: string;
}

export class UserModel {
    constructor(private data: User) {
    }

    getFullName(): string {
        return this.data.name;
    }
}
```

### 10. Test Files

**Match source file name with `.test` or `.spec`:**

```text
src/components/Button/
├── Button.tsx
├── Button.test.tsx        ✅ Test file
└── Button.spec.tsx        ✅ Alternative

src/utils/
├── formatters.ts
└── formatters.test.ts     ✅ Test file
```

---

## 📚 Complete Naming Reference

| File Type        | Extension      | Naming Convention       | Example           |
|------------------|----------------|-------------------------|-------------------|
| React Component  | `.tsx`         | PascalCase              | `Button.tsx`      |
| Page Component   | `.tsx`         | PascalCase              | `HomePage.tsx`    |
| Custom Hook      | `.ts`          | camelCase with `use`    | `useAuth.ts`      |
| Utility Function | `.ts`          | camelCase               | `formatters.ts`   |
| Service          | `.ts`          | camelCase or PascalCase | `authService.ts`  |
| Context          | `.tsx`         | PascalCase + `Context`  | `AuthContext.tsx` |
| Type Definitions | `.ts`          | PascalCase + `.types`   | `User.types.ts`   |
| Constants        | `.ts`          | camelCase               | `config.ts`       |
| Model/Schema     | `.ts`          | PascalCase              | `User.ts`         |
| Test File        | `.test.tsx/ts` | Match source + `.test`  | `Button.test.tsx` |
| Barrel Export    | `.ts`          | Always `index`          | `index.ts`        |

---

## 👍 Best Practices

**Consistency is key.** Choose a convention and stick to it across your project — all components PascalCase, all utilities camelCase, all services camelCase or PascalCase (pick one).

**Use index files for clean imports:**

```typescript jsx
// src/components/Button/index.ts
export {Button} from './Button';
export type {ButtonProps} from './Button.models';

// Then import like this:
import {Button} from '@/components/Button';
```

**Avoid generic names** — `utils.ts`, `helpers.ts` and `component.tsx` don't say what they contain; prefer `dateFormatters.ts`, `authHelpers.ts`, `UserProfile.tsx`.

**Match the file name to its primary export:**

```typescript jsx
// Button.tsx
// Correct:
export const Button = () => { /* ... */
};

// Not:
export const MyButton = () => { /* ... */
};
```

**Separate concerns with multiple files:**

```text
Button/
├── Button.tsx           # Component implementation
├── Button.types.ts      # Type definitions
├── Button.styles.ts     # Styled components (if using)
├── Button.utils.ts      # Component-specific utilities
├── Button.test.tsx      # Tests
└── index.ts             # Exports
```

---

## 🌳 Quick Decision Tree

```text
Does the file contain JSX?
├─ Yes → Use .tsx
│   ├─ Is it a component? → PascalCase (Button.tsx)
│   └─ Is it a test? → Match source + .test.tsx
│
└─ No → Use .ts
    ├─ Is it a hook? → camelCase with 'use' (useAuth.ts)
    ├─ Is it a type? → PascalCase + .types.ts (User.types.ts)
    ├─ Is it a service? → camelCase (authService.ts)
    └─ Is it a utility? → camelCase (formatters.ts)
```

---

## 🎯 Recommended Standard

```text
src/
├── components/
│   └── Button/
│       ├── Button.tsx              # PascalCase, .tsx
│       ├── Button.types.ts         # PascalCase, .ts
│       └── Button.test.tsx         # PascalCase, .test.tsx
│
├── hooks/
│   └── useAuth.ts                  # camelCase, use prefix, .ts
│
├── utils/
│   └── formatters.ts               # camelCase, .ts
│
├── services/
│   └── authService.ts              # camelCase, .ts
│
├── types/
│   └── User.types.ts               # PascalCase, .types.ts
│
└── constants/
    └── routes.ts                   # camelCase, .ts
```

This structure provides clear, predictable naming that scales well across teams and project sizes.
