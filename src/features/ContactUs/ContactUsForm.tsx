import React, {ReactElement, useRef} from "react";
import {renderToStaticMarkup} from "react-dom/server";
import Form, {IChangeEvent} from "@rjsf/core";
import {RJSFValidationError, StrictRJSFSchema} from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import Swal from "sweetalert2";
import {EmailMessage} from "@/models/email/EmailMessage.ts";
import {ContactUsFormData} from "./ContactUsFormData";
import {EmailService} from "./EmailService";
import {
  contactUsJsonFields,
  contactUsJsonSchema,
  contactUsJsonWidgets,
  contactUsUiSchema
} from "./ContactUsSchema";
import {SanitizedBaseInputTemplate} from "@components/Text";
import ContactUsEmailTemplate from "./ContactUsEmailTemplate";
import {clubLogoFilename, clubLogoPath} from "@/constants/about/clubConstants";
import {FormValidation} from "@rjsf/utils/src/types";
import {EmailAttachment} from "@/models/email/EmailAttachment";

/**
 * ContactUsForm is a React functional component wrapped with React.memo for optimisation.
 * This component defines a contact form with validation, error handling, and submission features.
 * It leverages React's `useRef` for direct interaction with the form and integrates with an external
 * EmailService to handle email generation and sending.
 *
 * Key Features:
 * - Custom error transformation for more user-friendly error messages.
 * - Validation of form data with specific rules for required fields, minimum/maximum length, and patterns.
 * - Logic to populate, sanitise, and submit the form data as an email, including attachment support.
 * - Integration with a reCAPTCHA field to prevent spam submissions.
 * - Feedback messages via Swal for success or error states after email submission.
 *
 * Dependencies:
 * - React.memo for performance improvements.
 * - A JSON schema for form definitions (contactUsJsonSchema, contactUsUiSchema).
 * - An external email service for handling email logic.
 * - React JSON Schema Form (RJSF) for rendering, validation, and customisation of form structures.
 *
 * This component does not handle navigation or external side effects, relying on props and
 * external services like Swal and EmailService for enhanced functionality.
 *
 * @returns {ReactElement} The rendered output of the ContactUsPage component, which includes the ContactUsContent component.
 *
 * @type {React.MemoExoticComponent<() => ReactElement>}
 */
const ContactUsForm: React.MemoExoticComponent<() => ReactElement> = React.memo(
    (): ReactElement => {
        const emailService = new EmailService();

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
            errors: FormValidation<ContactUsFormData>,
        ): FormValidation<ContactUsFormData> => {
            if (formData !== undefined) {
                if (formData.captcha && errors.captcha) {
                    errors.captcha.addError("Please solve the CAPTCHA to continue");
                }
            }
            return errors;
        };

        const handleSubmit = async (
            data: IChangeEvent<ContactUsFormData, StrictRJSFSchema>,
        ): Promise<void> => {
            if (!formRef.current) {
                return;
            }

            // Populate the form with the sanitised data
            const contactUsData: ContactUsFormData | undefined = data.formData;

            const emailContent: EmailMessage = new EmailMessage({...contactUsData});

            // If the form is valid, generate and send the e-mail
            let success: boolean = false;

            if (emailContent.isValid()) {
                // Generate the e-mail
                const htmlMessage: string = renderToStaticMarkup(
                    <ContactUsEmailTemplate emailMessage={emailContent}/>,
                );

                // Create the e-mail
                const emailMessage: EmailMessage = new EmailMessage({
                    name: emailContent.name,
                    subject: emailContent.subject,
                    email: emailContent.email,
                    preview: emailContent.preview,
                    content: htmlMessage,
                });
                emailMessage.attachments = [
                    new EmailAttachment({
                        fileName: clubLogoFilename,
                        path: clubLogoPath,
                        cid: "club_logo",
                    }),
                ];

                // Send the e-nail
                success = await emailService.sendEmail(emailMessage).then(
                    (value: boolean): boolean => value,
                    (): boolean => false,
                );
            }

            // Display a success or error message based on the result of the e-mail send operation
            if (success) {
                Swal.fire({
                    text: "E-mail sent successfully",
                    icon: "success",
                }).then(() => {
                    formRef.current?.reset();
                });
            } else {
                Swal.fire({
                    text: "Failed to send e-mail",
                    icon: "error",
                }).then(() => {
                });
            }
        };

        return (
            <Form
                ref={formRef}
                schema={contactUsJsonSchema}
                uiSchema={contactUsUiSchema}
                fields={contactUsJsonFields}
                widgets={contactUsJsonWidgets}
                validator={validator}
                templates={{BaseInputTemplate: SanitizedBaseInputTemplate}}
                customValidate={validateFields}
                transformErrors={transformErrors}
                showErrorList={false}
                noHtml5Validate={true}
                focusOnFirstError={true}
                onSubmit={handleSubmit}
            />
        );
    },
);

export default ContactUsForm;
