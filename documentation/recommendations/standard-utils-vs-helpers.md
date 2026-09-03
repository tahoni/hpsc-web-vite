# Difference Between `helpers/` and `utils/`

## Table of Contents

- [🧰 `utils/` (Utilities)](#-utils-utilities)
- [🗂️ `helpers/` (Helpers)](#-helpers-helpers)
- [🎓 Key Differences Summary](#-key-differences-summary)
- [🗂️ Common Organisation Patterns](#-common-organisation-patterns)
- [👍 Recommendation](#-recommendation)
- [🎯 Practical Rule of Thumb](#-practical-rule-of-thumb)

---

While the terms are often used interchangeably, there are semantic differences in how they're typically organised in
React projects.

---

## 🧰 `utils/` (Utilities)

**Purpose:** Pure, generic utility functions that are framework-agnostic and have no dependencies on React or
application-specific logic.

**Characteristics:**

- Pure functions (same input → same output)
- No side effects
- No React dependencies
- Could be extracted to a npm package
- General-purpose, reusable across any project

**Examples:**

```typescript
// utils/formatters.ts
export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
};

export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US');
};

// utils/validators.ts
export const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isValidUrl = (url: string): boolean => {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
};

// utils/strings.ts
export const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const truncate = (str: string, length: number): string => {
    return str.length > length ? str.slice(0, length) + '...' : str;
};

// utils/arrays.ts
export const chunk = <T>(array: T[], size: number): T[][] => {
    return Array.from(
        {length: Math.ceil(array.length / size)},
        (_, i) => array.slice(i * size, i * size + size)
    );
};
```

---

## 🗂️ `helpers/` (Helpers)

**Purpose:** Application-specific functions that support business logic and may have dependencies on React, app context,
or domain models.

**Characteristics:**

- Application/domain-specific
- May use React hooks, context or state
- May have side effects (API calls, localStorage)
- Business logic orchestration
- Tightly coupled to your application

**Examples:**

```typescript
// helpers/authHelper.ts
import {User} from '@/models/User';

export const getUserDisplayName = (user: User): string => {
    return user.preferredName || `${user.firstName} ${user.lastName}`;
};

export const hasPermission = (user: User, permission: string): boolean => {
    return user.roles.some(role =>
        role.permissions.includes(permission)
    );
};

// helpers/routeHelper.ts
import {Route} from '@/models/Route';

export const buildBreadcrumbs = (route: Route): string[] => {
    const crumbs: string[] = [];
    let current = route;

    while (current) {
        crumbs.unshift(current.title);
        current = current.parent;
    }

    return crumbs;
};

// helpers/formHelper.ts
import {FormState} from '@/models/forms';

export const prepareFormData = (formState: FormState): FormData => {
    const formData = new FormData();

    Object.entries(formState).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
            formData.append(key, String(value));
        }
    });

    return formData;
};

// helpers/dataHelper.ts
import {ApiResponse} from '@/models/api';
import {Post} from '@/models/Post';

export const transformApiPost = (data: ApiResponse): Post => {
    return {
        id: data.id,
        title: data.title,
        content: data.content,
        createdAt: new Date(data.created_at),
        author: {
            id: data.author.id,
            name: data.author.full_name
        }
    };
};
```

---

## 🎓 Key Differences Summary

| Aspect       | `utils/`                             | `helpers/`                          |
|--------------|--------------------------------------|-------------------------------------|
| Scope        | Generic, framework-agnostic          | Application-specific                |
| Dependencies | No React/app dependencies            | May use React, models, services     |
| Reusability  | Any project                          | This project only                   |
| Side Effects | Pure functions                       | May have side effects               |
| Examples     | String manipulation, date formatting | Business logic, data transformation |
| Testing      | Simple unit tests                    | May need mocks/context              |

---

## 🗂️ Common Organisation Patterns

**Pattern 1 — Separate folders:**

```text
src/
├── utils/                  # Pure utilities
│   ├── formatters.ts
│   ├── validators.ts
│   └── strings.ts
│
└── helpers/                # Application helpers
    ├── authHelper.ts
    ├── routeHelper.ts
    └── formHelper.ts
```

**Pattern 2 — Single `utils/` folder (simpler):**

```text
src/
└── utils/
    ├── formatters.ts       # Pure utilities
    ├── validators.ts       # Pure utilities
    ├── authHelper.ts       # App-specific helpers
    └── routeHelper.ts      # App-specific helpers
```

**Pattern 3 — Feature-based:**

```text
src/
├── features/
│   └── auth/
│       └── helpers/        # Auth-specific helpers
│
└── shared/
    └── utils/              # Shared utilities
```

---

## 👍 Recommendation

**For most projects:** use one folder (`utils/`) and organise by category:

```text
src/utils/
├── format/
│   ├── currency.ts
│   └── date.ts
├── validation/
│   ├── email.ts
│   └── url.ts
├── auth/                   # App-specific
│   └── permissions.ts
└── routes/                 # App-specific
    └── breadcrumbs.ts
```

**For large projects:** keep them separate:

```text
src/
├── utils/                  # Generic, reusable utilities
└── helpers/                # Business logic helpers
```

---

## 🎯 Practical Rule of Thumb

Ask yourself: *"Could I copy this function into a completely different project and use it as-is?"*

- Yes → `utils/`
- No (needs app context/models) → `helpers/`

However, many teams simply use `utils/` for everything to avoid confusion. Choose consistency over strict semantic
separation.
