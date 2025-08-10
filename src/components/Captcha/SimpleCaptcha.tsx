import React, { ReactElement } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { reCaptchaV2SiteKey } from "../../constants/CaptchaConstants.ts";
import classes from "./Captcha.module.scss";

interface SimpleCaptchaProps {
  handleChange?: (token: string | null) => void;
}

/**
 * SimpleCaptcha is a React memoised component that renders a ReCAPTCHA V2 widget.
 * It is designed to handle CAPTCHA verification and pass the verification token
 * to the parent component using the provided handleChange callback function.
 *
 * Props:
 * - `handleChange`: A callback function that receives the CAPTCHA token. It is invoked
 *   whenever the CAPTCHA is successfully completed. If the token is null, the callback
 *   receives an undefined value.
 *
 * The component uses the global reCAPTCHA V2 site key and displays the CAPTCHA in the "en" locale.
 */
export const SimpleCaptcha = React.memo(
  (props: SimpleCaptchaProps): ReactElement => {
    const handleChange = (token: string | null) => {
      if (props.handleChange !== undefined) {
        props.handleChange(token !== undefined && token !== "" ? token : null);
      }
    };

    return (
      <ReCAPTCHA
        className={classes.simpleCaptcha}
        sitekey={reCaptchaV2SiteKey}
        onChange={handleChange}
        hl="en"
      />
    );
  },
);
