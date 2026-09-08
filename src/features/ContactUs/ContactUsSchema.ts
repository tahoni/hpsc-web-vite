import { RegistryFieldsType, RegistryWidgetsType, RJSFSchema, UiSchema } from "@rjsf/utils";
import { CaptchaField } from "@components/Captcha";
import { SanitizedTextareaWidget } from "@components/Text";
import { ContactUsFormData } from "./ContactUsFormData";

/**
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

/**
 * An object representing the fields required for the "Contact Us" form in JSON format.
 */
export const contactUsJsonFields: RegistryFieldsType<ContactUsFormData> = {
  captchaField: CaptchaField,
};
/**
 * A collection of widgets used in the "Contact Us" feature.
 * These widgets are structured as key-value pairs where each key represents
 * a specific widget name and the value represents its corresponding functionality or implementation.
 */
export const contactUsJsonWidgets: RegistryWidgetsType<ContactUsFormData> = {
  sanitizedTextareaWidget: SanitizedTextareaWidget,
};

/**
 * Represents the JSON schema for the "Contact Us" form.
 *
 * This schema defines the structure, validation rules, and constraints for the fields in the form.
 */
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

/**
 * Represents the UI schema configuration for the Contact Us form.
 *
 * This object defines the UI-specific behavior and layout for the form fields.
 *
 * Properties:
 * - `ui:classNames`: A string specifying the CSS class name(s) applied to the root element of the form for styling.
 * - `name`: An object defining UI properties specific to the "name" field, such as autofocus and autocomplete behavior.
 * - `email`: An object defining UI properties for the "email" field including autocomplete and input type options.
 * - `content`: An object specifying UI properties for the "content" field, using a sanitized textarea widget and configuration for rows.
 * - `captcha`: An object defining a custom UI field for the "captcha" element.
 * - `ui:order`: Specifies the order in which the fields appear in the form.
 */
export const contactUsUiSchema: UiSchema<ContactUsFormData> = {
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
