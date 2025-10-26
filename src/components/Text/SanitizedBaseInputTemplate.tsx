import { BaseInputTemplateProps } from "@rjsf/utils";
import { SanitizedWidgetTypes } from "./SanitizedWidgetTypes.ts";
import SanitizedWidget from "./SanitizedWidget.tsx";

/**
 * SanitizedBaseInputTemplate is a functional component that acts as a base input template.
 * It utilizes SanitizedWidget with the type set to TEMPLATE and passes all received props
 * to the SanitizedWidget component to render the sanitized input template.
 *
 * @param {BaseInputTemplateProps} props - The properties to be passed to the SanitizedWidget component.
 * @returns {JSX.Element} A rendered SanitizedWidget with the type TEMPLATE and provided properties.
 */
const SanitizedBaseInputTemplate = (props: BaseInputTemplateProps) => {
  return <SanitizedWidget type={SanitizedWidgetTypes.TEMPLATE} {...props} />;
};

export default SanitizedBaseInputTemplate;
