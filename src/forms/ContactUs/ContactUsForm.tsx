import { ReactElement } from "react";
import Form from "@rjsf/bootstrap-4";
import validator from "@rjsf/validator-ajv8";
import { contactUsJsonSchema, contactUsUiSchema } from "./ContactUsSchema.ts";
import "./ContactUs.scss";

export const ContactUsForm = (): ReactElement => {
  return (
    <>
      <Form
        schema={contactUsJsonSchema}
        uiSchema={contactUsUiSchema}
        validator={validator}
        noHtml5Validate
      />
    </>
  );
};
