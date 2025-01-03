import React, { ReactElement } from "react";
import { ReCaptchaV2, TReCaptchaV2Callback } from "react-recaptcha-x";

interface SimpleCaptchaProps {
  onChange?: (token?: string) => void;
}

export const SimpleCaptcha = React.memo(
  (props: SimpleCaptchaProps): ReactElement => {
    const v2Callback: TReCaptchaV2Callback = (
      token: string | false | Error,
    ): void => {
      let value: string = "";
      if (typeof token === "string") {
        value = token;
      }

      if (props.onChange !== undefined) {
        props.onChange(value);
      }
    };

    return (
      <ReCaptchaV2
        className="simpleCaptcha"
        callback={v2Callback}
        tabindex={0}
      />
    );
  },
);
