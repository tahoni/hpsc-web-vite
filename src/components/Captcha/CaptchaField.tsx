import React, { ReactElement } from "react";
import { FieldProps } from "@rjsf/utils";
import { SimpleCaptcha } from "./SimpleCaptcha.tsx";

export const CaptchaField = React.memo(
  (props: FieldProps): ReactElement => {
    const handleChange = (token?: string) => {
      props.onChange(token !== undefined && token !== "");
    };

    return <SimpleCaptcha onChange={handleChange} />;
  },
);
