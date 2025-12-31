import React, { ReactElement } from "react";
import classes from "./Header.module.scss";

export interface HeaderTitleProps {
  title: string;
}

export const HeaderTitle = React.memo(
  (props: HeaderTitleProps): ReactElement => {
    return (
      <div className={classes.headerText}>
        <h1>{props.title}</h1>
      </div>
    );
  },
);
