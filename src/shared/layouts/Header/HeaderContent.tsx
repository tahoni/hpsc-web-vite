import React, { ReactElement } from "react";
import classes from "./Header.module.scss";
import { HeaderTitle } from "@layouts/Header/HeaderTitle.tsx";

interface HeaderContentProps {
  title: string;
}

export const HeaderContent = React.memo(
  (props: HeaderContentProps): ReactElement => {
    return (
      <div className={classes.headerContent}>
        <div className={classes.headerItem}>
          <HeaderTitle title={props.title} />
        </div>
      </div>
    );
  },
);
