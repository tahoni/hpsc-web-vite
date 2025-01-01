import { ReactElement, useRef, useState } from "react";
import Form, { IChangeEvent } from "@rjsf/core";
import { RJSFValidationError, StrictRJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import Swal from "sweetalert2";
import { sanitizeValue } from "../../utils/HtmlUtils.ts";
import { sendEmail } from "../../services/EmailService.ts";
import { EmailMessage } from "../../model/EmailMessage.ts";
import { ContactUsFormData } from "../../model/ContactUsFormData.ts";
import {
  contactUsJsonFields,
  contactUsJsonSchema,
  contactUsUiSchema,
} from "./ContactUsSchema.ts";
import "./ContactUs.scss";

export const ContactUsForm = (): ReactElement => {
  const [formData, setFormData] = useState<ContactUsFormData | null>(null);

  const formRef = useRef<Form>(null);

  const transformErrors = (
    errors: RJSFValidationError[],
  ): RJSFValidationError[] => {
    errors.map((error: RJSFValidationError) => {
      switch (error.name) {
        case "required": {
          error.message = "Required";
          switch (error.property) {
            case "name":
            case ".name":
              error.stack = "Your name is required";
              break;
            case "email":
            case ".email":
              error.stack = "Your email address is required";
              break;
            case "subject":
            case ".subject":
              error.stack = "Your subject is required";
              break;
            case "content":
            case ".content":
              error.stack = "Your message is required";
              break;
            default:
              error.stack = "This field is required";
              break;
          }
          break;
        }

        case "minLength": {
          error.message = `Minimum length of ${error.params.limit} characters`;
          console.log("property", error.property);
          switch (error.property) {
            case "name":
            case ".name":
              error.stack = `Your name must be at least ${error.params.limit} characters long`;
              break;
            case "email":
            case ".email":
              error.stack = `Your email address must be at least ${error.params.limit} characters long`;
              break;
            case "subject":
            case ".subject":
              error.stack = `Your subject must be at least ${error.params.limit} characters long`;
              break;
            case "content":
            case ".content":
              error.stack = `Your message must be at least ${error.params.limit} characters long`;
              break;
            default:
              error.stack = `This field must be at least ${error.params.limit} characters long`;
              break;
          }
          break;
        }

        case "maxLength": {
          error.message = `Maximum length of ${error.params.limit} characters`;
          switch (error.property) {
            case "name":
            case ".name":
              error.stack = `Your name must not exceed ${error.params.limit} characters long`;
              break;
            case "email":
            case ".email":
              error.stack = `Your email address must not exceed ${error.params.limit} characters long`;
              break;
            case "subject":
            case ".subject":
              error.stack = `Your subject must not exceed ${error.params.limit} characters long`;
              break;
            case "content":
            case ".content":
              error.stack = `Your message must not exceed ${error.params.limit} characters long`;
              break;
            default:
              error.stack = `This field must not exceed ${error.params.limit} characters long`;
              break;
          }
          break;
        }

        case "pattern": {
          error.message = "Invalid format";
          switch (error.property) {
            case "email":
            case ".email":
              error.stack = "Your email address must be in a valid format";
              error.message = "Please enter a valid email address";
              break;
            default:
              error.stack = "This field must have a valid format";
              break;
          }
          break;
        }
      }
    });
    return errors;
  };

  const handleChange = (data: IChangeEvent<any, StrictRJSFSchema>): void => {
    setFormData(data.formData);
  };

  const handleSubmit = (data: IChangeEvent<any, StrictRJSFSchema>): void => {
    // Sanitise the form data
    const name: string | undefined = sanitizeValue(data.formData.name);
    const email: string | undefined = sanitizeValue(data.formData.email);
    const subject: string | undefined = sanitizeValue(data.formData.subject);
    const content: string | undefined = sanitizeValue(data.formData.content);

    // Populate the form with the sanitised data
    const contactUsData: ContactUsFormData = {
      name,
      email,
      subject,
      content,
    };
    setFormData(contactUsData);

    // Validate the form
    const valid: boolean | undefined =
      formRef?.current?.validateFormWithFormData(contactUsData);

    // If the form isn't valid, submit it to display the error messages
    if (!valid) {
      formRef?.current?.submit();
      return;
    }

    // If the form is valid, send the e-mail
    const success: boolean = sendEmail(
      new EmailMessage(
        contactUsData.name ?? "",
        contactUsData.email ?? "",
        contactUsData.subject ?? "",
        contactUsData.content ?? "",
      ),
    );

    // Display a success or error message based on the result of the e-mail send operation
    if (success) {
      Swal.fire({
        text: "E-mail sent successfully",
        icon: "success",
      }).then(() => {});
    } else {
      Swal.fire({
        text: "Failed to send e-mail",
        icon: "error",
      }).then(() => {});
    }
  };

  return (
    <Form
      ref={formRef}
      idPrefix={"contact-us"}
      formData={formData}
      schema={contactUsJsonSchema}
      uiSchema={contactUsUiSchema}
      fields={contactUsJsonFields}
      validator={validator}
      transformErrors={transformErrors}
      showErrorList={false}
      noHtml5Validate={true}
      focusOnFirstError={true}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};
