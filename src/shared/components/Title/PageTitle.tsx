import React, { ReactElement } from "react";
import classes from "./PageTitle.module.scss";

interface PageTitleProps {
  title: string;
}

/**
 * PageTitle is a React functional component designed to display a page title with styling.
 * It renders a stylised div containing a level 2 heading for the title text and a horizontal rule.
 * The component is memoised using React.memo for performance optimisation to prevent unnecessary re-renders.
 *
 * @param {PageTitleProps} props - The property object containing necessary data for the component.
 * @returns {ReactElement} The rendered JSX representation of the page title.
 */
const PageTitle = React.memo((props: PageTitleProps): ReactElement => {
  return (
    <div className={classes.pageTitle}>
      <h2>{props.title}</h2>
      <hr className="border-0 bg-secondary" style={{ height: "1px" }} />
    </div>
  );
});

export default PageTitle;
