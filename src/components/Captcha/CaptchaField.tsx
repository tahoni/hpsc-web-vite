import { ReactElement } from "react";
import { FieldProps } from "@rjsf/utils";
import { SimpleCaptcha } from "./SimpleCaptcha.tsx";

export const CaptchaField = (props: FieldProps): ReactElement => {
  return <SimpleCaptcha onChange={props.onChange} />;
};
