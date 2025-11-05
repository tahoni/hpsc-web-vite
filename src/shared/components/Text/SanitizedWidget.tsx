import { BaseInputTemplateProps, ErrorSchema } from "@rjsf/utils";
import { getDefaultRegistry } from "@rjsf/core";
import { sanitizeValue } from "@/utils/htmlUtils";
import { SanitizedWidgetTypes } from "./SanitizedWidgetTypes";
import TextWidget from "@rjsf/core/lib/components/widgets/TextWidget";
import TextareaWidget from "@rjsf/core/lib/components/widgets/TextareaWidget";

interface SanitizedWidgetProps extends BaseInputTemplateProps {
  type: SanitizedWidgetTypes;
}

/**
 * SanitizedWidget is a functional component that wraps and enhances input widgets
 * with additional sanitation and validation logic. It processes input values to
 * ensure there are no unnecessary leading whitespaces or unclean data before
 * passing them to the provided `onChange` and `onBlur` handlers.
 *
 * The component supports multiple input models such as `TEXT_AREA`, `TEXT`, and
 * a default or custom template. Based on the specified input type, SanitizedWidget
 * renders the appropriate widget while maintaining consistency and ensuring sanitized values.
 *
 * The `handleChange` method trims leading whitespaces from the input value and
 * passes the sanitized value to the `onChange` handler.
 *
 * The `handleBlur` method performs additional sanitization by trimming the entire
 * value, ensuring that it is clean before invoking the `onBlur` handler.
 *
 * SanitizedWidget provides a seamless way to enforce input cleanliness and prevent
 * invalid or poorly formatted data from being propagated downstream.
 *
 * @param {SanitizedWidgetProps} props - The properties for configuring the widget,
 * including `onChange`, `onBlur`, and `type`, which determines the widget type.
 *
 * @returns {JSX.Element} A sanitized input widget determined by the `type` property,
 * incorporating custom `onChange` and `onBlur` behaviour.
 */
const SanitizedWidget = (props: SanitizedWidgetProps) => {
  const { onChange, onBlur } = props;

  const handleChange = (
    value: string,
    es?: ErrorSchema | undefined,
    id?: string,
  ): void => {
    let trimmedValue: string = value;
    if (value) {
      trimmedValue = value.trimStart();
    }

    onChange(trimmedValue, es, id);
  };

  const handleBlur = (id: string, value: string): void => {
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
    default: {
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
  }
};

export default SanitizedWidget;
