import { ReactElement } from "react";
import { ReCAPTCHA } from "react-google-recaptcha";
import { reCaptchaV2SiteKey } from "../../constants/CaptchaConstants.ts";

export const ReCaptcha = (): ReactElement => {
  return <ReCAPTCHA sitekey={reCaptchaV2SiteKey} />;
};
