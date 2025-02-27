import React, { ReactElement } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { reCaptchaV2SiteKey } from "../../constants/CaptchaConstants.ts";
import classes from "./Captcha.module.scss";

interface SimpleCaptchaProps {
  handleChange?: (token?: string) => void;
}

export const SimpleCaptcha = React.memo(
  (props: SimpleCaptchaProps): ReactElement => {
    const handleChange = (token: string | null) => {
      const value: string | undefined = token !== null ? token : undefined;

      if (props.handleChange !== undefined) {
        props.handleChange(value);
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
  }
);
