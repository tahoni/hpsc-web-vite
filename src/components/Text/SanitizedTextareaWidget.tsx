import { JSX } from "react";
import { BaseInputTemplateProps } from "@rjsf/utils";
import { SanitizedWidgetTypes } from "./SanitizedWidgetTypes.ts";
import SanitizedWidget from "./SanitizedWidget.tsx";

/**
 * TrimmedTextareaWidget is a React functional component that creates a textarea input field.
 * It uses the SanitizedWidget component with the type set to TEXT_AREA.
 * This widget inherits its properties from the BaseInputTemplateProps and passes them to the SanitizedWidget.
 *
 * @param {BaseInputTemplateProps} props - The properties passed to the component.
 * @returns {JSX.Element} - A JSX element representing a sanitized textarea widget.
 */
const TrimmedTextareaWidget = (props: BaseInputTemplateProps): JSX.Element => {
  return <SanitizedWidget type={SanitizedWidgetTypes.TEXT_AREA} {...props} />;
};

export default TrimmedTextareaWidget;
