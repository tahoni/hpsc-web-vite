import {
  BaseInputTemplateProps,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
} from "@rjsf/utils";
import { SanitizedWidgetTypes } from "./SanitizedWidgetTypes";
import SanitizedWidget from "./SanitizedWidget";

/**
 * SanitizedBaseInputTemplate is a functional component that acts as a base input template.
 * It utilizes {@link SanitizedWidget} with the type set to TEMPLATE and passes all received props
 * to the SanitizedWidget component to render the sanitised input template.
 *
 * @param props - The properties to be passed to the SanitizedWidget component.
 * @returns A rendered SanitizedWidget with the type TEMPLATE and provided properties.
 */
const SanitizedBaseInputTemplate = <
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(
  props: BaseInputTemplateProps<T, S, F>,
) => {
  return <SanitizedWidget type={SanitizedWidgetTypes.TEMPLATE} {...props} />;
};

export default SanitizedBaseInputTemplate;
