import React, { ReactElement } from "react";
import { reCaptchaV2SiteKey } from "../../constants/CaptchaConstants.ts";
import classes from "./Captcha.module.scss";

interface SimpleCaptchaProps {
  onChange?: (token?: string) => void;
}

const ReCAPTCHA = React.lazy(() => import("react-google-recaptcha"));

export const SimpleCaptcha = React.memo(
  (props: SimpleCaptchaProps): ReactElement => {
    const onChange = (token: string | null) => {
      const value: string | undefined = token !== null ? token : undefined;

      if (props.onChange !== undefined) {
        props.onChange(value);
      }
    };

    return (
      <ReCAPTCHA
        className={classes.simpleCaptcha}
        sitekey={reCaptchaV2SiteKey}
        onChange={onChange}
        hl="en"
      />
    );
  }
);
