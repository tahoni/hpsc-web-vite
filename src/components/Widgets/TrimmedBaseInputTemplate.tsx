import { JSX } from "react";
import { BaseInputTemplateProps, ErrorSchema } from "@rjsf/utils";
import { getDefaultRegistry } from "@rjsf/core";
import { clearValue, sanitizeValue } from "../../utils/HtmlUtils.ts";

const {
  templates: { BaseInputTemplate },
} = getDefaultRegistry(); // To get templates from core

const TrimmedBaseInputTemplate = (
  props: BaseInputTemplateProps,
): JSX.Element => {
  const { options, onChange, onBlur } = props;

  const handleChange = (
    value: string,
    es?: ErrorSchema | undefined,
    id?: string,
  ): void => {
    let trimmedValue: string = value ?? options.emptyValue;
    if (value) {
      trimmedValue = clearValue(value.trimStart(), options.emptyValue);
    }
    
    onChange(clearValue(trimmedValue, options.emptyValue), es, id);
  };

  const handleBlur = (id: string, value: any): void => {
    const sanitizedValue = sanitizeValue(value);
    if (sanitizedValue !== value) {
      console.log("Here");
      onChange(sanitizedValue, undefined, id);
    }
    onBlur(id, sanitizedValue);
  };

  return (
    <BaseInputTemplate {...props} onChange={handleChange} onBlur={handleBlur} />
  );
};

export default TrimmedBaseInputTemplate;
