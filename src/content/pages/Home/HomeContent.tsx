import React, { ReactElement } from "react";
import History from "../History/History.mdx";

/**
 * HomeContent is a memoised React functional component that renders the main content for the home page.
 * This component wraps the displayed content inside an article element.
 * It uses React.memo to improve performance by preventing unnecessary re-renders.
 */
const HomeContent = React.memo((): ReactElement => {
  return (
    <article>
      <History />
    </article>
  );
});

export default HomeContent;
