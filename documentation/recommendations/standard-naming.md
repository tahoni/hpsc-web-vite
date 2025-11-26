# Naming Structure for React `.ts` and `.tsx` Files

## **File Extension Rules**

### **`.tsx` - TypeScript + JSX**

Use for files that contain **JSX/React components**:

```typescript jsx
// Button.tsx ✅
export const Button = () => {
    return <button>Click
        me < /button>;
};
```

### **`.ts` - TypeScript Only**

Use for files with **no JSX** (pure TypeScript):

```typescript
// validators.ts ✅
export const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
```

---

## **Naming Conventions**

### **1. React Components**

#### **PascalCase for Component Files**

```
src/components/
├── Button.tsx              ✅ Component
├── UserProfile.tsx         ✅ Component
├── NavigationMenu.tsx      ✅ Component
└── DataTable.tsx           ✅ Component
```

#### **Component with Related Files**

```
src/components/Button/
├── Button.tsx              # Component (PascalCase)
├── Button.module.scss      # Styles
├── Button.test.tsx         # Tests
├── Button.types.ts         # Type definitions
└── index.ts                # Barrel export
```

---

### **2. Pages/Routes**

#### **PascalCase for Page Components**

```
src/pages/
├── Home.tsx               ✅ Page component
├── About.tsx              ✅ Page component
├── UserProfile.tsx        ✅ Page component
└── NotFound.tsx           ✅ Page component
```

#### **Or Organized by Folder**

```
src/pages/
├── Home/
│   ├── Home.tsx           # Page component
│   ├── Home.module.scss
│   └── index.ts
└── About/
    ├── About.tsx
    └── index.ts
```

---

### **3. Hooks**

#### **camelCase with `use` Prefix**

```
src/hooks/
├── useAuth.ts             ✅ Custom hook
├── useLocalStorage.ts     ✅ Custom hook
├── useFetch.ts            ✅ Custom hook
└── useDebounce.ts         ✅ Custom hook
```

**With Types:**

```
src/hooks/
├── useAuth/
│   ├── useAuth.ts         # Hook implementation
│   ├── useAuth.types.ts   # Type definitions
│   └── index.ts
```

---

### **4. Utilities & Helpers**

#### **camelCase for Utility Files**

```
src/utils/
├── formatters.ts          ✅ Utility functions
├── validators.ts          ✅ Utility functions
├── dateUtils.ts           ✅ Utility functions
└── stringHelpers.ts       ✅ Utility functions
```

#### **Or Group by Category**

```
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

---

### **5. Types & Interfaces**

#### **PascalCase for Type Files**

```
src/types/
├── User.ts                ✅ or User.types.ts
├── Api.types.ts           ✅
├── Common.types.ts        ✅
└── index.ts
```

#### **Co-located Types**

```
src/components/Button/
├── Button.tsx
└── Button.types.ts        ✅ or ButtonProps.ts
```

**Example:**

```typescript jsx
// Button.models.ts
export interface ButtonProps {
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
}

export type ButtonVariant = ButtonProps['variant'];
```

---

### **6. Services & API**

#### **camelCase for Service Files**

```
src/services/
├── authService.ts         ✅
├── apiClient.ts           ✅
├── userService.ts         ✅
└── analyticsService.ts    ✅
```

#### **Or PascalCase (Alternative)**

```
src/services/
├── AuthService.ts         ✅ (Alternative)
├── ApiClient.ts           ✅ (Alternative)
└── UserService.ts         ✅ (Alternative)
```

---

### **7. Context Providers**

#### **PascalCase with `Context` Suffix**

```
src/context/
├── AuthContext.tsx        ✅
├── ThemeContext.tsx       ✅
└── UserContext.tsx        ✅
```

**Example:**

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
    return <AuthContext.Provider value={value}> {children} < /AuthContext.Provider>;
};
```

---

### **8. Constants & Configuration**

#### **camelCase or UPPER_SNAKE_CASE**

```
src/constants/
├── apiEndpoints.ts        ✅ File: camelCase
├── routes.ts              ✅ File: camelCase
└── config.ts              ✅ File: camelCase
```

**File Content:**

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

---

### **9. Models & Schemas**

#### **PascalCase for Model Files**

```
src/models/
├── User.ts                ✅
├── Post.ts                ✅
├── Comment.ts             ✅
└── index.ts
```

**Example:**

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

---

### **10. Test Files**

#### **Match Source File Name with `.test` or `.spec`**

```
src/components/Button/
├── Button.tsx
├── Button.test.tsx        ✅ Test file
└── Button.spec.tsx        ✅ Alternative

src/utils/
├── formatters.ts
└── formatters.test.ts     ✅ Test file
```

---

## **Complete Naming Reference**

| File Type            | Extension      | Naming Convention       | Example           |
|----------------------|----------------|-------------------------|-------------------|
| **React Component**  | `.tsx`         | PascalCase              | `Button.tsx`      |
| **Page Component**   | `.tsx`         | PascalCase              | `HomePage.tsx`    |
| **Custom Hook**      | `.ts`          | camelCase with `use`    | `useAuth.ts`      |
| **Utility Function** | `.ts`          | camelCase               | `formatters.ts`   |
| **Service**          | `.ts`          | camelCase or PascalCase | `authService.ts`  |
| **Context**          | `.tsx`         | PascalCase + `Context`  | `AuthContext.tsx` |
| **Type Definitions** | `.ts`          | PascalCase + `.types`   | `User.types.ts`   |
| **Constants**        | `.ts`          | camelCase               | `config.ts`       |
| **Model/Schema**     | `.ts`          | PascalCase              | `User.ts`         |
| **Test File**        | `.test.tsx/ts` | Match source + `.test`  | `Button.test.tsx` |
| **Barrel Export**    | `.ts`          | Always `index`          | `index.ts`        |

---

## **Best Practices**

### **1. Consistency is Key**

Choose a convention and stick to it across your project:

```
✅ All components: PascalCase
✅ All utilities: camelCase
✅ All services: camelCase or PascalCase (pick one)
```

### **2. Use Index Files for Clean Imports**

```typescript jsx
// src/components/Button/index.ts
export {Button} from './Button';
export type {ButtonProps} from './Button.models';

// Then import like this:
import {Button} from '@/components/Button';
```

### **3. Avoid Generic Names**

```
❌ utils.ts
❌ helpers.ts
❌ component.tsx

✅ dateFormatters.ts
✅ authHelpers.ts
✅ UserProfile.tsx
```

### **4. Match File Name to Primary Export**

```typescript jsx
// Button.tsx
export const Button = () => { /* ... */
};  ✅

// Not:
export const MyButton = () => { /* ... */
};  ❌
```

### **5. Separate Concerns with Multiple Files**

```
Button/
├── Button.tsx           # Component implementation
├── Button.types.ts      # Type definitions
├── Button.styles.ts     # Styled components (if using)
├── Button.utils.ts      # Component-specific utilities
├── Button.test.tsx      # Tests
└── index.ts             # Exports
```

---

## **Quick Decision Tree**

```
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

## **Recommended Standard**

```
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