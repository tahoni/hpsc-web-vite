import React, { ReactElement } from "react";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";

interface SimpleCaptchaProps {
  handleChange?: (token: string) => void;
}

/**
 * A React memoized component that provides a simple CAPTCHA verification mechanism using Google ReCaptcha.
 *
 * This component leverages React.memo to optimise rendering performance by memoising the component and ensuring
 * it only re-renders when props change. It listens for captcha verification tokens using the Google ReCaptcha component
 * and invokes the handleChange callback provided by the parent component when a token is received.
 *
 * The main purpose of this component is to enhance form security by validating that the user is human.
 *
 * Props:
 * - handleChange: A callback function that receives the verification token as a string when the CAPTCHA challenge is completed.
 */
export const SimpleCaptcha = React.memo(
  (props: SimpleCaptchaProps): ReactElement => {
    const handleChange = (token: string) => {
      if (props.handleChange !== undefined) {
        props.handleChange(token);
      }
    };

    return (
      <GoogleReCaptcha
        onVerify={handleChange}
        action={"submit"}
        refreshReCaptcha={true}
      />
    );
  },
);
