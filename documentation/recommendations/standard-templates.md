# Where to Store Templates (Email, etc.) in React Directory Structure

The location depends on the **type of template** and **where it's rendered**:

---

## **1. Email Templates (React Email Components)**

### **`src/templates/email/`** (Recommended)

```
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

```typescript
// src/templates/email/WelcomeEmail.tsx
import {Html, Head, Body, Container, Text, Button} from '@react-email/components';

interface WelcomeEmailProps {
    name: string;
    confirmUrl: string;
}

export const WelcomeEmail = ({name, confirmUrl}: WelcomeEmailProps) => (
    <Html>
        <Head / >
    <Body>
        <Container>
            <Text>Welcome, {name}! < /Text>
    < Button
href = {confirmUrl} > Confirm
Your
Email < /Button>
< /Container>
< /Body>
< /Html>
)
;
```

---

## **2. Alternative: Backend/API Context**

If emails are sent from a **separate backend** or **API routes**:

### **Node.js/Express Backend:**

```
server/
└── templates/
    └── email/
        ├── welcome.tsx
        └── password-reset.tsx
```

### **Next.js API Routes:**

```
src/
├── app/
│   └── api/
│       └── email/
│           └── templates/
│               ├── WelcomeEmail.tsx
│               └── PasswordResetEmail.tsx
```

---

## **3. HTML Email Templates (Static)**

For **static HTML** email templates (not React components):

### **`public/templates/email/`**

```
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

## **4. Document Templates (PDFs, Invoices, Reports)**

### **`src/templates/documents/`**

```
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

```typescript
// src/templates/documents/InvoiceTemplate.tsx
import {Document, Page, Text, View} from '@react-pdf/renderer';

export const InvoiceTemplate = ({invoice}) => (
    <Document>
        <Page>
            <View>
                <Text>Invoice
#
{
    invoice.number
}
</Text>
< Text > Total
:
$
{
    invoice.total
}
</Text>
< /View>
< /Page>
< /Document>
)
;
```

---

## **5. UI Component Templates (Reusable Layouts)**

### **`src/components/templates/`**

```
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
- Atomic design pattern (templates layer)

**Example:**

```typescript
// src/components/templates/PageTemplate.tsx
interface PageTemplateProps {
    title: string;
    children: React.ReactNode;
}

export const PageTemplate = ({title, children}: PageTemplateProps) => (
    <div className = "page-template" >
        <header>
            <h1>{title} < /h1>
        < /header>
        < main > {children} < /main>
        < /div>
);
```

---

## **6. Content Templates (MDX, Markdown)**

### **`src/content/templates/`**

```
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

## **7. Configuration Templates**

### **`templates/` (Project Root)**

```
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

## **Complete Structure Example**

```
project-root/
├── src/
│   ├── components/
│   │   └── templates/          # UI layout templates
│   │       ├── PageTemplate.tsx
│   │       └── DashboardTemplate.tsx
│   │
│   ├── templates/
│   │   ├── email/              # Email templates (React Email)
│   │   │   ├── WelcomeEmail.tsx
│   │   │   ├── PasswordResetEmail.tsx
│   │   │   └── layouts/
│   │   │       └── BaseEmailLayout.tsx
│   │   │
│   │   └── documents/          # PDF/printable templates
│   │       ├── InvoiceTemplate.tsx
│   │       └── ReportTemplate.tsx
│   │
│   └── content/
│       └── templates/          # Content templates (MDX)
│           └── blog-post.mdx
│
├── public/
│   └── templates/
│       └── email/              # Static HTML email templates
│           └── legacy-email.html
│
└── templates/                  # Code generation templates
    └── component.template.tsx
```

---

## **Best Practices**

### **1. Organize by Purpose**

```
src/templates/
├── email/           # Transactional emails
├── documents/       # PDFs, invoices
├── notifications/   # Push notifications, SMS
└── print/           # Printable layouts
```

### **2. Share Common Layouts**

```
src/templates/email/
├── layouts/
│   ├── BaseLayout.tsx
│   └── TransactionalLayout.tsx
├── components/
│   ├── EmailButton.tsx
│   └── EmailHeader.tsx
└── WelcomeEmail.tsx
```

### **3. Type Your Templates**

```typescript
// src/templates/email/types.ts
export interface EmailTemplateProps {
    recipientName: string;
    subject: string;
}

// src/templates/email/WelcomeEmail.tsx
import {EmailTemplateProps} from './types';

export const WelcomeEmail = (props: EmailTemplateProps) => {
    // ...
};
```

### **4. Preview/Development Mode**

```typescript
// src/templates/email/preview.tsx
import {WelcomeEmail} from './WelcomeEmail';

// Preview in browser during development
export const EmailPreview = () => (
    <div>
        <h1>Email
Preview < /h1>
< WelcomeEmail
name = "John Doe"
confirmUrl = "#" / >
    </div>
)
;
```

---

## **Recommendation for Email Templates**

**Use `src/templates/email/`** for React Email components:

```
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

This keeps them:

- ✅ Separate from UI components
- ✅ Easy to find and maintain
- ✅ Co-located with email-specific logic
- ✅ Testable and previewable