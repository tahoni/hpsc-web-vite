import React, { ReactElement } from "react";

interface PageTitleProps {
  title: string;
}

export const PageTitle = React.memo((props: PageTitleProps): ReactElement => {
  return (
    <div className="page-title">
      <h5>{props.title}</h5>
      <hr className="border-0 bg-secondary" style={{ height: "1px" }} />
    </div>
  );
});
