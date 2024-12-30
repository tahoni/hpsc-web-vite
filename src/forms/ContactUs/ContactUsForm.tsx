import { ReactElement } from "react";
import Form from "@rjsf/bootstrap-4";
import validator from "@rjsf/validator-ajv8";
import { contactUsJsonSchema, contactUsUiSchema } from "./ContactUsSchema.ts";
import "./ContactUs.scss";
import { RJSFValidationError } from "@rjsf/utils";

export const ContactUsForm = (): ReactElement => {
  const transformErrors = (
    errors: RJSFValidationError[],
  ): RJSFValidationError[] => {
    errors.map((error) => {
      if (error.name === "required") {
        error.message = "Required";
        switch (error.property) {
          case "name":
            error.stack = "Your name is required";
            break;
          case "email":
            error.stack = "Your email address is required";
            break;
          case "subject":
            error.stack = "Your subject is required";
            break;
          case "content":
            error.stack = "Your message is required";
            break;
          default:
            error.stack = "This field is required";
            break;
        }
      }
    });
    return errors;
  };

  return (
    <Form
      schema={contactUsJsonSchema}
      uiSchema={contactUsUiSchema}
      validator={validator}
      transformErrors={transformErrors}
      focusOnFirstError={true}
      noHtml5Validate
    />
  );
};
