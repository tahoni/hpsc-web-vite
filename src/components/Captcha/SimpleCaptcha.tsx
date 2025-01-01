import { ReactElement } from "react";
import {
  EReCaptchaV2Size,
  EReCaptchaV2Theme,
  ReCaptchaV2,
  TReCaptchaV2Callback,
} from "react-recaptcha-x";

export const SimpleCaptcha = (): ReactElement => {
  const v2Callback: TReCaptchaV2Callback = (
    token: string | false | Error,
  ): void => {
    if (typeof token === "string") {
      console.log("this is the token", token);
    } else if (typeof token === "boolean" && !token) {
      console.log("token has expired, user must check the checkbox again");
    } else {
      console.log("error. please check your network connection");
    }
  };

  return (
    <ReCaptchaV2
      callback={v2Callback}
      theme={EReCaptchaV2Theme.Light}
      size={EReCaptchaV2Size.Normal}
      id="my-id"
      data-test-id="my-test-id"
      tabindex={0}
    />
  );
};
