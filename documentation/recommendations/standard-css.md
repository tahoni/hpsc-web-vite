# Standard CSS Stylesheet Names in React

The most common names for the main CSS stylesheet in React applications are:

## **1. `index.css`** (Most Common)

This is the **most widely used convention**, especially with:

- Create React App (CRA)
- Vite React templates
- Modern React projects

```typescript
// main.tsx or index.tsx
import './index.css'
import App from './App'
```

## **2. `App.css`**

Used for component-level styles for the root App component:

```typescript
// App.tsx
import './App.css'
```

## **3. `main.css`**

Sometimes used in Vite projects where the entry point is `main.tsx`:

```typescript
// main.tsx
import './main.css'
```

## **4. `styles.css` or `global.css`**

Used when you want to be more explicit:

```typescript
import './styles/global.css'
```

---

## **Most Popular Convention**

```
src/
├── index.css          ← Global styles (resets, variables, base styles)
├── App.css            ← App component-specific styles
├── main.tsx           ← Entry point (imports index.css)
└── App.tsx            ← Root component (imports App.css)
```

**In `main.tsx`:**

```typescript jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'  // ← Global styles

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
```

---

## **Modern Alternatives**

### **SCSS/SASS:**

```
src/
├── index.scss
└── App.scss
```

### **CSS Modules:**

```
src/
├── index.module.css
└── App.module.css
```

### **Styled Components / CSS-in-JS:**

No main stylesheet needed—styles are defined in JavaScript.

---

## **Recommendation**

Use **`index.css`** for global styles—it's the de facto standard in the React ecosystem and what most developers expect
to see.