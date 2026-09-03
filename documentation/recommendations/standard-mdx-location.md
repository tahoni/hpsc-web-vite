# Standard Location for MDX Files in React

## Table of Contents

- [1. Content/Documentation MDX Files](#1-contentdocumentation-mdx-files)
- [2. Component Documentation MDX](#2-component-documentation-mdx)
- [3. Page-Level MDX Files](#3-page-level-mdx-files)
- [4. Documentation Site MDX](#4-documentation-site-mdx)
- [🏆 Most Common Conventions](#-most-common-conventions)
- [✅ Best Practices](#-best-practices)
- [🎯 Recommendation for Your Project](#-recommendation-for-your-project)

---

The standard locations for MDX files depend on their purpose.

---

## 1. Content/Documentation MDX Files

**`src/content/`** (recommended for CMS-like content):

```text
src/
├── content/
│   ├── pages/           # MDX page content
│   │   ├── about.mdx
│   │   └── privacy.mdx
│   ├── posts/           # Blog posts
│   │   ├── 2024-01-15-post-name.mdx
│   │   └── 2024-02-20-another-post.mdx
│   └── docs/            # Documentation
│       ├── getting-started.mdx
│       └── api-reference.mdx
```

**When to use:**

- Blog posts, articles or news
- CMS-like content management
- Documentation that's part of the app
- Content with frontmatter metadata

---

## 2. Component Documentation MDX

**Co-located with components:**

```text
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.mdx      # ← Component docs/stories
│   │   └── Button.test.tsx
```

**When to use:**

- Storybook stories
- Component usage examples
- Component-level documentation

---

## 3. Page-Level MDX Files

**`src/pages/`** (if using file-based routing):

```text
src/
├── pages/
│   ├── index.mdx        # Home page
│   ├── about.mdx        # About page
│   └── blog/
│       └── [slug].mdx
```

**When to use:**

- Next.js-style file-based routing
- Pages that are primarily content

---

## 4. Documentation Site MDX

**Root-level `docs/` or `documentation/`:**

```text
docs/                    # ← Outside src/
├── guide/
│   ├── introduction.mdx
│   └── getting-started.mdx
└── api/
    └── reference.mdx
```

**When to use:**

- Standalone documentation site
- Developer documentation (not part of the main app)
- Technical specifications

---

## 🏆 Most Common Conventions

**For content-rich apps (blogs, documentation sites):**

```text
src/
└── content/             ← Primary location
    ├── pages/
    ├── posts/
    └── docs/
```

**For component libraries:**

```text
src/
└── components/
    └── ComponentName/
        ├── ComponentName.tsx
        └── ComponentName.mdx  ← Co-located
```

---

## ✅ Best Practices

**Consistent naming conventions:**

```text
content/
└── posts/
    ├── 2024-01-15-my-post.mdx       # Date prefix for sorting
    └── 2024-02-20-another-post.mdx
```

**Frontmatter for metadata:**

```textmate
---
title: "My Article"
date: "2024-01-15"
author: "John Doe"
tags: ["react", "typescript"]
---

# Content starts here
```

**Type your MDX imports:**

```typescript
// src/models/mdx.d.ts
declare module '*.mdx' {
    import {ComponentType} from 'react';

    export const frontMatter: {
        title: string;
        date: string;
        [key: string]: any;
    };

    const MDXComponent: ComponentType;
    export default MDXComponent;
}
```

**Centralized configuration:**

```typescript
// src/config/mdx.ts
export const MDX_CONTENT_PATH = '/src/content';
export const MDX_POSTS_PATH = `${MDX_CONTENT_PATH}/posts`;
```

---

## 🎯 Recommendation for Your Project

Based on common patterns and your existing structure:

```text
src/
└── content/                    # ← Use this for app content
    ├── pages/                  # Static MDX pages
    ├── posts/                  # Blog posts/articles
    └── docs/                   # User-facing docs

documentation/                  # ← Keep for technical/dev docs
├── architecture.mdx
└── contributing.mdx
```

**Rationale:**

- `src/content/` is processed by Vite, bundled with the app and available at runtime.
- `documentation/` holds developer/technical docs, not bundled with the app.

This separation keeps content that users see (`src/content/`) distinct from content for developers (`documentation/`).
