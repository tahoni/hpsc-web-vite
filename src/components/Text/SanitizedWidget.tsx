import { BaseInputTemplateProps, ErrorSchema } from "@rjsf/utils";
import { getDefaultRegistry } from "@rjsf/core";
import { sanitizeValue } from "../../utils/HtmlUtils.ts";
import { SanitizedWidgetTypes } from "./SanitizedWidgetTypes.ts";
import TextWidget from "@rjsf/core/lib/components/widgets/TextWidget";
import TextareaWidget from "@rjsf/core/lib/components/widgets/TextareaWidget";

interface SanitizedWidgetProps extends BaseInputTemplateProps {
  type: SanitizedWidgetTypes;
}

const SanitizedWidget = (props: SanitizedWidgetProps) => {
  const { onChange, onBlur } = props;

  const handleChange = (
    value: any,
    es?: ErrorSchema | undefined,
    id?: string,
  ): void => {
    let trimmedValue: string = value;
    if (value) {
      trimmedValue = value.trimStart();
    }

    onChange(trimmedValue, es, id);
  };

  const handleBlur = (id: string, value: any): void => {
    const sanitizedValue: string = sanitizeValue(value);
    const trimmedValue: string = sanitizedValue.trim();
    if (trimmedValue !== value) {
      handleChange(trimmedValue, undefined, id);
    }
    onBlur(id, trimmedValue);
  };

  switch (props.type) {
    case SanitizedWidgetTypes.TEXT_AREA:
      return (
        <TextareaWidget
          {...props}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      );
    case SanitizedWidgetTypes.TEXT:
      return (
        <TextWidget {...props} onChange={handleChange} onBlur={handleBlur} />
      );
    case SanitizedWidgetTypes.TEMPLATE:
    default:
      const OldBaseInputTemplate =
        getDefaultRegistry().templates.BaseInputTemplate;
      return (
        <OldBaseInputTemplate
          {...props}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      );
  }
};

export default SanitizedWidget;
