import React, { ReactElement } from "react";
// import { ReCaptchaV2, TReCaptchaV2Callback } from "react-recaptcha-x";
// import classes from "./Captcha.module.scss";

interface SimpleCaptchaProps {
  onChange?: (token?: string) => void;
}

export const SimpleCaptcha = React.memo(
  (props: SimpleCaptchaProps): ReactElement => {
    /*
        const v2Callback: TReCaptchaV2Callback = (
          token: string | false | Error,
        ): void => {
          let value: string = "";
          if (typeof token === "string") {
            value = token;
          }
    
        const value: string = "captcha";
          if (props.onChange !== undefined) {
            props.onChange(value);
          }
        };
    */

    return (
      <></>
      /*
            <ReCaptchaV2
              className={classes.simpleCaptcha}
              callback={v2Callback}
              tabindex={0}
            />
      */
    );
  },
);
