import React, { ReactElement } from "react";
import { SimpleCaptcha } from "./SimpleCaptcha";

const CaptchaField = React.memo(
  (/*props: FieldProps*/): ReactElement => {
    /*
        const handleChange = (token?: string) => {
          props.onChange(token !== undefined && token !== "");
        };
    */

    return <SimpleCaptcha />;
  }
);

export default CaptchaField;
