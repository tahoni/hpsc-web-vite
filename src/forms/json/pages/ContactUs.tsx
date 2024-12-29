import { ReactElement } from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import {
  contactUsJsonSchema,
  contactUsUiSchema,
} from "../schema/ContactUsSchema.ts";
import "./ContactUs.scss";

export const ContactUs = (): ReactElement => {
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
