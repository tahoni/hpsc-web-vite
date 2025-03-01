import TextareaWidget from "@rjsf/core/lib/components/widgets/TextareaWidget";
import { BaseInputTemplateProps, ErrorSchema } from "@rjsf/utils";
import { sanitizeValue } from "../../utils/HtmlUtils.ts";
import { JSX } from "react";

const TrimmedTextareaWidget = (props: BaseInputTemplateProps): JSX.Element => {
  const handleChange = (
    value: string,
    es?: ErrorSchema | undefined,
    id?: string,
  ): void => {
    let trimmedValue: string = value;
    if (value) {
      trimmedValue = value.trimStart();
    }

    props.onChange(trimmedValue, es, id);
  };

  const handleBlur = (id: string, value: string): void => {
    const sanitizedValue: string = sanitizeValue(value);
    const trimmedValue: string = sanitizedValue.trim();
    if (trimmedValue !== value) {
      handleChange(trimmedValue, undefined, id);
    }
    props.onBlur(id, trimmedValue);
  };

  return (
    <TextareaWidget {...props} onChange={handleChange} onBlur={handleBlur} />
  );
};

export default TrimmedTextareaWidget;
