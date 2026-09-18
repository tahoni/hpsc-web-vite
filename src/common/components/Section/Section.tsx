import { memo, ReactElement } from "react";

export interface SectionProps {
  content: ReactElement[];
  collapsed?: boolean;
}

export const Section = memo((props: SectionProps): ReactElement => {
  return (
    <>
      {props.content.map((item) => (
        <div>{item}</div>
      ))}
    </>
  );
});
