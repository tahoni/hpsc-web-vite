import React, { ReactElement, useRef, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import Form, { IChangeEvent } from "@rjsf/core";
import { RJSFValidationError, StrictRJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import Swal from "sweetalert2";
import { sendEmail } from "../../services/EmailService.ts";
import { EmailMessage } from "../../model/EmailMessage.ts";
import { ContactUsFormData } from "./ContactUsFormData.ts";
import {
  contactUsJsonFields,
  contactUsJsonSchema,
  contactUsJsonWidgets,
  contactUsUiSchema,
} from "./ContactUsSchema.ts";
import ContactUsEmailTemplate from "../../templates/ContactUs/ContactUsEmailTemplate.tsx";
import TrimmedBaseInputTemplate from "../../components/Text/TrimmedBaseInputTemplate.tsx";

const ContactUsForm = React.memo((): ReactElement => {
  const [formData, setFormData] = useState<ContactUsFormData | undefined>();

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

  const validateFields = (
    formData: ContactUsFormData | undefined,
    errors: any,
  ): any => {
    if (formData !== undefined) {
      if (formData.captcha === undefined || !formData.captcha) {
        errors.captcha.addError("Please solve the CAPTCHA to continue");
      }
    }
    return errors;
  };

  const handleSubmit = (data: IChangeEvent<any, StrictRJSFSchema>): void => {
    if (!formRef.current) {
      return;
    }

    // Populate the form with the sanitised data
    const contactUsData: ContactUsFormData = data.formData;

    const emailMessage: EmailMessage = new EmailMessage(
      contactUsData.name,
      contactUsData.email,
      contactUsData.subject,
      contactUsData.content,
    );

    // If the form is valid, generate and send the e-mail
    let success: boolean = false;
    if (emailMessage.isValid()) {
      // Generate the e-mail
      const emailHtml: string = renderToStaticMarkup(
        <ContactUsEmailTemplate {...emailMessage} />,
      );

      // Send the e-mail
      success = sendEmail(emailHtml);
    }

    // Display a success or error message based on the result of the e-mail send operation
    if (success) {
      Swal.fire({
        text: "E-mail sent successfully",
        icon: "success",
      }).then(() => {
        setFormData(undefined);
      });
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
      formData={formData}
      schema={contactUsJsonSchema}
      uiSchema={contactUsUiSchema}
      fields={contactUsJsonFields}
      widgets={contactUsJsonWidgets}
      validator={validator}
      templates={{ BaseInputTemplate: TrimmedBaseInputTemplate }}
      customValidate={validateFields}
      transformErrors={transformErrors}
      showErrorList={false}
      noHtml5Validate={true}
      focusOnFirstError={true}
      onSubmit={handleSubmit}
    />
  );
});

export default ContactUsForm;
