import React, { ReactElement } from "react";
import { FieldProps } from "@rjsf/utils";
import { SimpleCaptcha } from "./SimpleCaptcha";

/**
 * CaptchaField is a React functional component that renders a captcha field wrapped within React.memo for performance optimisation.
 *
 * This component receives properties conforming to the FieldProps interface and renders the SimpleCaptcha component.
 * It handles the captcha change event using the provided `onChange` function from the props and determines if a valid
 * captcha token exists.
 *
 * The handleChange function ensures that `onChange` is invoked with a boolean value depending on the presence of a valid token.
 *
 * Props:
 * - FieldProps: Provides the necessary properties, including an `onChange` function for handling state updates.
 *
 * Returns:
 * - ReactElement: The rendered SimpleCaptcha component.
 */
const CaptchaField = React.memo((props: FieldProps): ReactElement => {
  const handleChange = (token: string) => {
    props.onChange(token);
  };

  return <SimpleCaptcha handleChange={handleChange} />;
});

export default CaptchaField;
