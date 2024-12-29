import { RJSFSchema, UiSchema } from "@rjsf/utils";

export const contactUsJsonSchema: RJSFSchema = {
  title: "Contact Us",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name",
      description: "The name of the sender",
      minLength: 3,
      maxLength: 100,
    },
    email: {
      type: "string",
      title: "E-mail address",
      description: "The e-mail of the sender",
      minLength: 5,
      maxLength: 100,
    },
    subject: {
      type: "string",
      title: "Subject",
      description: "The subject of the e-mail",
      enum: ["General", "Suggestions", "Complaints", "Website"],
      default: "General",
      minLength: 5,
      maxLength: 100,
    },
    content: {
      type: "string",
      title: "Message",
      description: "The e-mail content",
      minLength: 5,
      maxLength: 1000,
    },
  },
  required: ["name", "email", "subject", "content"],
};

export const contactUsUiSchema: UiSchema = {
  "ui:classNames": "ContactUs",
  name: {
    "ui:autofocus": true,
    "ui:autocomplete": "full-name",
  },
  email: {
    "ui:autocomplete": "email",
    "ui:options": {
      inputType: "email",
    },
  },
  content: {
    "ui:widget": "textarea",
    "ui:options": {
      rows: 5,
    },
  },
};
