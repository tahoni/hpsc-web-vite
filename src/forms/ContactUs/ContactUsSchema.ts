import { RJSFSchema, UiSchema } from "@rjsf/utils";
import { SimpleCaptcha } from "../../components/Captcha/SimpleCaptcha.tsx";

export const contactUsJsonFields = { simpleCaptcha: SimpleCaptcha };

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
      pattern: "^[\\w\\-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
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
      type: "object",
    },
  },
  required: ["name", "email", "subject", "content", "captcha"],
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
    "ui:widget": "textarea",
    "ui:options": {
      rows: 5,
    },
  },
  captcha: {
    "ui:field": "simpleCaptcha",
  },
};
