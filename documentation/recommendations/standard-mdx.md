# Standard Location for MDX Files in React

The standard locations for MDX files depend on their purpose:

## **1. Content/Documentation MDX Files**

### **`src/content/`** (Recommended for CMS-like content)
```
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
- Blog posts, articles, or news
- CMS-like content management
- Documentation that's part of the app
- Content with frontmatter metadata

---

## **2. Component Documentation MDX**

### **Co-located with components**
```
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

## **3. Page-Level MDX Files**

### **`src/pages/`** (if using file-based routing)
```
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

## **4. Documentation Site MDX**

### **Root-level `docs/` or `documentation/`**
```
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

## **Most Common Conventions**

### **For Content-Rich Apps (Blogs, Documentation Sites):**
```
src/
└── content/             ← Primary location
    ├── pages/
    ├── posts/
    └── docs/
```


### **For Component Libraries:**
```
src/
└── components/
    └── ComponentName/
        ├── ComponentName.tsx
        └── ComponentName.mdx  ← Co-located
```


---

## **Best Practices**

### **1. Consistent Naming Conventions**
```
content/
└── posts/
    ├── 2024-01-15-my-post.mdx       # Date prefix for sorting
    └── 2024-02-20-another-post.mdx
```


### **2. Frontmatter for Metadata**
```textmate
---
title: "My Article"
date: "2024-01-15"
author: "John Doe"
tags: ["react", "typescript"]
---

# Content starts here
```


### **3. Type Your MDX Imports**
```typescript
// src/types/mdx.d.ts
declare module '*.mdx' {
  import { ComponentType } from 'react';
  
  export const frontMatter: {
    title: string;
    date: string;
    [key: string]: any;
  };
  
  const MDXComponent: ComponentType;
  export default MDXComponent;
}
```


### **4. Centralized Configuration**
```typescript
// src/config/mdx.ts
export const MDX_CONTENT_PATH = '/src/content';
export const MDX_POSTS_PATH = `${MDX_CONTENT_PATH}/posts`;
```


---

## **Recommendation for Your Project**

Based on common patterns and your existing structure:

```
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
- `src/content/` - Processed by Vite, bundled with app, available at runtime
- `documentation/` - Developer/technical docs, not bundled with the app

This separation keeps content that users see (`src/content/`) distinct from content for developers (`documentation/`).