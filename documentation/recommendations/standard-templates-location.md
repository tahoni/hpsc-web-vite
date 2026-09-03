# Where to Store Templates (Email, etc.) in React Directory Structure

## Table of Contents

- [1. Email Templates (React Email Components)](#1-email-templates-react-email-components)
- [2. Alternative: Backend/API Context](#2-alternative-backendapi-context)
- [3. HTML Email Templates (Static)](#3-html-email-templates-static)
- [4. Document Templates (PDFs, Invoices, Reports)](#4-document-templates-pdfs-invoices-reports)
- [5. UI Component Templates (Reusable Layouts)](#5-ui-component-templates-reusable-layouts)
- [6. Content Templates (MDX, Markdown)](#6-content-templates-mdx-markdown)
- [7. Configuration Templates](#7-configuration-templates)
- [📐 Complete Structure Example](#-complete-structure-example)
- [👍 Best Practices](#-best-practices)
- [🎯 Recommendation for Email Templates](#-recommendation-for-email-templates)

---

The location depends on the type of template and where it's rendered.

---

## 1. Email Templates (React Email Components)

**`src/templates/email/`** (recommended):

```text
src/
└── templates/
    └── email/
        ├── WelcomeEmail.tsx
        ├── PasswordResetEmail.tsx
        ├── NotificationEmail.tsx
        └── layouts/
            └── EmailLayout.tsx
```

**When to use:**

- React Email components (`@react-email/components`)
- Email templates rendered server-side or in API routes
- Transactional emails

**Example:**

```typescript jsx
// src/templates/email/WelcomeEmail.tsx
import {Html, Head, Body, Container, Text, Button} from '@react-email/components';

interface WelcomeEmailProps {
    name: string;
    confirmUrl: string;
}

export const WelcomeEmail = ({name, confirmUrl}: WelcomeEmailProps) => (
    <Html>
        <Head/>
        <Body>
            <Container>
                <Text>Welcome, {name}!</Text>
                <Button href={confirmUrl}>Confirm Your Email</Button>
            </Container>
        </Body>
    </Html>
);
```

---

## 2. Alternative: Backend/API Context

If emails are sent from a separate backend or API routes:

**Node.js/Express backend:**

```text
server/
└── templates/
    └── email/
        ├── welcome.tsx
        └── password-reset.tsx
```

**Next.js API routes:**

```text
src/
├── app/
│   └── api/
│       └── email/
│           └── templates/
│               ├── WelcomeEmail.tsx
│               └── PasswordResetEmail.tsx
```

---

## 3. HTML Email Templates (Static)

For static HTML email templates (not React components), use **`public/templates/email/`**:

```text
public/
└── templates/
    └── email/
        ├── welcome.html
        ├── password-reset.html
        └── styles.css
```

**When to use:**

- Legacy HTML email templates
- Third-party email services requiring HTML strings
- No build step required

---

## 4. Document Templates (PDFs, Invoices, Reports)

**`src/templates/documents/`:**

```text
src/
└── templates/
    └── documents/
        ├── InvoiceTemplate.tsx
        ├── ReportTemplate.tsx
        └── CertificateTemplate.tsx
```

**When to use:**

- PDF generation (react-pdf, puppeteer)
- Printable documents
- Dynamic document generation

**Example:**

```typescript jsx
// src/templates/documents/InvoiceTemplate.tsx
import {Document, Page, Text, View} from '@react-pdf/renderer';

export const InvoiceTemplate = ({invoice}) => (
    <Document>
        <Page>
            <View>
                <Text>Invoice #{invoice.number}</Text>
                <Text>Total: ${invoice.total}</Text>
            </View>
        </Page>
    </Document>
);
```

---

## 5. UI Component Templates (Reusable Layouts)

**`src/components/templates/`:**

```text
src/
└── components/
    └── templates/
        ├── PageTemplate.tsx
        ├── DashboardTemplate.tsx
        └── FormTemplate.tsx
```

**When to use:**

- Page layout templates
- Consistent UI structures
- Atomic design pattern (template layer)

**Example:**

```typescript jsx
// src/components/templates/PageTemplate.tsx
interface PageTemplateProps {
    title: string;
    children: React.ReactNode;
}

export const PageTemplate = ({title, children}: PageTemplateProps) => (
    <div className="page-template">
        <header>
            <h1>{title}</h1>
        </header>
        <main>{children}</main>
    </div>
);
```

---

## 6. Content Templates (MDX, Markdown)

**`src/content/templates/`:**

```text
src/
└── content/
    └── templates/
        ├── blog-post.mdx
        ├── landing-page.mdx
        └── documentation.mdx
```

**When to use:**

- MDX page templates
- Content structure definitions
- CMS-like content management

---

## 7. Configuration Templates

**`templates/`** (project root):

```text
project-root/
└── templates/
    ├── component.template.tsx
    ├── page.template.tsx
    └── test.template.ts
```

**When to use:**

- Code generation templates (Plop.js, Hygen)
- Scaffolding templates
- Project boilerplate

---

## 📐 Complete Structure Example

```text
project-root/
├── src/
│   ├── components/
│   │   └── templates/          # UI layout templates
│   │       ├── PageTemplate.tsx
│   │       └── DashboardTemplate.tsx
│   │
│   ├── templates/
│   │   ├── email/               # Email templates (React Email)
│   │   │   ├── WelcomeEmail.tsx
│   │   │   ├── PasswordResetEmail.tsx
│   │   │   └── layouts/
│   │   │       └── BaseEmailLayout.tsx
│   │   │
│   │   └── documents/           # PDF/printable templates
│   │       ├── InvoiceTemplate.tsx
│   │       └── ReportTemplate.tsx
│   │
│   └── content/
│       └── templates/           # Content templates (MDX)
│           └── blog-post.mdx
│
├── public/
│   └── templates/
│       └── email/                # Static HTML email templates
│           └── legacy-email.html
│
└── templates/                    # Code generation templates
    └── component.template.tsx
```

---

## 👍 Best Practices

**Organise by purpose:**

```text
src/templates/
├── email/           # Transactional emails
├── documents/       # PDFs, invoices
├── notifications/   # Push notifications, SMS
└── print/           # Printable layouts
```

**Share common layouts:**

```text
src/templates/email/
├── layouts/
│   ├── BaseLayout.tsx
│   └── TransactionalLayout.tsx
├── components/
│   ├── EmailButton.tsx
│   └── EmailHeader.tsx
└── WelcomeEmail.tsx
```

**Type your templates:**

```typescript
// src/templates/email/models.ts
export interface EmailTemplateProps {
    recipientName: string;
    subject: string;
}

// src/templates/email/WelcomeEmail.tsx
import {EmailTemplateProps} from './models';

export const WelcomeEmail = (props: EmailTemplateProps) => {
    // ...
};
```

**Preview/development mode:**

```typescript jsx
// src/templates/email/preview.tsx
import {WelcomeEmail} from './WelcomeEmail';

// Preview in browser during development
export const EmailPreview = () => (
    <div>
        <h1>Email Preview</h1>
        <WelcomeEmail name="John Doe" confirmUrl="#"/>
    </div>
);
```

---

## 🎯 Recommendation for Email Templates

Use `src/templates/email/` for React Email components:

```text
src/
└── templates/
    └── email/
        ├── WelcomeEmail.tsx
        ├── PasswordResetEmail.tsx
        ├── OrderConfirmationEmail.tsx
        ├── layouts/
        │   └── BaseEmailLayout.tsx
        ├── components/
        │   ├── EmailButton.tsx
        │   └── EmailFooter.tsx
        └── index.ts              # Export all templates
```

This keeps them separate from UI components, easy to find and maintain, co-located with email-specific logic and testable and previewable.
