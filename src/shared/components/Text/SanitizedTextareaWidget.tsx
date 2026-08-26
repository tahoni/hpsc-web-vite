import { JSX } from "react";
import {
  BaseInputTemplateProps,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
} from "@rjsf/utils";
import { SanitizedWidgetTypes } from "./SanitizedWidgetTypes";
import SanitizedWidget from "./SanitizedWidget";

/**
 * TrimmedTextareaWidget is a React functional component that creates a textarea input field.
 * It uses the SanitizedWidget component with the type set to TEXT_AREA.
 * This widget inherits its properties from the BaseInputTemplateProps and passes them to the SanitizedWidget.
 *
 * @param {BaseInputTemplateProps} props - The properties passed to the component.
 * @returns {JSX.Element} - A JSX element representing a sanitized textarea widget.
 */
const TrimmedTextareaWidget = <
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(
  props: BaseInputTemplateProps<T, S, F>,
): JSX.Element => {
  return <SanitizedWidget type={SanitizedWidgetTypes.TEXT_AREA} {...props} />;
};

export default TrimmedTextareaWidget;
