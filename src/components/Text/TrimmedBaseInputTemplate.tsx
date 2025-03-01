import { BaseInputTemplateProps, ErrorSchema } from "@rjsf/utils";
import { getDefaultRegistry } from "@rjsf/core";
import { sanitizeValue } from "../../utils/HtmlUtils.ts";

const TrimmedBaseInputTemplate = (props: BaseInputTemplateProps) => {
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

  const OldBaseInputTemplate = getDefaultRegistry().templates.BaseInputTemplate;
  return (
    <OldBaseInputTemplate
      {...props}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default TrimmedBaseInputTemplate;
