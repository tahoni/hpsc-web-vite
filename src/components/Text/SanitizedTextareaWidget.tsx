import { JSX } from "react";
import { BaseInputTemplateProps } from "@rjsf/utils";
import { SanitizedWidgetTypes } from "./SanitizedWidgetTypes.ts";
import SanitizedWidget from "./SanitizedWidget.tsx";

const TrimmedTextareaWidget = (props: BaseInputTemplateProps): JSX.Element => {
  return <SanitizedWidget type={SanitizedWidgetTypes.TEXT_AREA} {...props} />;
};

export default TrimmedTextareaWidget;
