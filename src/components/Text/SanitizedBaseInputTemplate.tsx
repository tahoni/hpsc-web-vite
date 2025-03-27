import { BaseInputTemplateProps } from "@rjsf/utils";
import { SanitizedWidgetTypes } from "./SanitizedWidgetTypes.ts";
import SanitizedWidget from "./SanitizedWidget.tsx";

const SanitizedBaseInputTemplate = (props: BaseInputTemplateProps) => {
  return <SanitizedWidget type={SanitizedWidgetTypes.TEMPLATE} {...props} />;
};

export default SanitizedBaseInputTemplate;
