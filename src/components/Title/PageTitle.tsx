import React, { ReactElement } from "react";
import classes from "./PageTitle.module.scss";

interface PageTitleProps {
  title: string;
}

export const PageTitle = React.memo((props: PageTitleProps): ReactElement => {
  return (
    <div className={classes.pageTitle}>
      <h2>{props.title}</h2>
      <hr className="border-0 bg-secondary" style={{ height: "1px" }} />
    </div>
  );
});
