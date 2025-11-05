import { RJSFSchema, UiSchema } from "@rjsf/utils";
import { CaptchaField } from "@components/Captcha";
import { SanitizedTextareaWidget } from "@components/Text";

/**
 * @packageDocumentation
 *
 * Contains schema definitions and UI configurations for the Contact Us form.
 *
 * This module provides:
 * - JSON Schema definition for the contact form fields (name, email, subject, content, captcha)
 * - UI Schema configuration for field rendering and behaviour
 * - Custom field and widget mappings for specialised components
 *
 * The form includes validation rules such as length restrictions and pattern matching
 * for email addresses, along with required field specifications. The UI schema defines
 * field ordering, autocomplete behaviour, and connects specialised components like
 * the sanitised text area and CAPTCHA verification field.
 */

export const contactUsJsonFields = {
  captchaField: CaptchaField,
};
export const contactUsJsonWidgets = {
  sanitizedTextareaWidget: SanitizedTextareaWidget,
};

export const contactUsJsonSchema: RJSFSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name",
      minLength: 3,
      maxLength: 100,
    },
    email: {
      type: "string",
      title: "E-mail address",
      minLength: 5,
      maxLength: 100,
      pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]+$",
    },
    subject: {
      type: "string",
      title: "Subject",
      enum: ["General", "Suggestions", "Complaints", "Website"],
      default: "General",
      minLength: 5,
      maxLength: 100,
    },
    content: {
      type: "string",
      title: "Message",
      minLength: 5,
      maxLength: 1000,
    },
    captcha: {
      type: "boolean",
    },
  },
  required: ["name", "email", "subject", "content"],
};

export const contactUsUiSchema: UiSchema = {
  "ui:classNames": "contactUs",
  name: {
    "ui:autofocus": true,
    "ui:autocomplete": "given-name",
  },
  email: {
    "ui:autocomplete": "email",
    "ui:options": {
      inputType: "email",
    },
  },
  content: {
    "ui:widget": "sanitizedTextareaWidget",
    "ui:options": {
      rows: 5,
    },
  },
  captcha: {
    "ui:field": "captchaField",
  },
  "ui:order": ["name", "email", "subject", "content", "captcha"],
};
