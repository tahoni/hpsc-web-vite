import { ReactElement } from "react";
import { ReCaptchaV2, TReCaptchaV2Callback } from "react-recaptcha-x";

interface SimpleCaptchaProps {
  onChange?: (token?: string) => void;
}

export const SimpleCaptcha = (props: SimpleCaptchaProps): ReactElement => {
  const v2Callback: TReCaptchaV2Callback = (
    token: string | false | Error,
  ): void => {
    let value: string = "";
    if (typeof token === "string") {
      console.log("this is the token", token);
      value = token;
    } else if (typeof token === "boolean" && !token) {
      console.log("token has expired, user must check the checkbox again");
    } else {
      console.log("error. please check your network connection");
    }

    if (props.onChange !== undefined) {
      props.onChange(value);
    }
  };

  return (
    <ReCaptchaV2 className="simpleCaptcha" callback={v2Callback} tabindex={0} />
  );
};
