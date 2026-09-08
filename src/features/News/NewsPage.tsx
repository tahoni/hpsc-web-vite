import React, { ReactElement } from "react";
import NewsContent from "./NewsContent";

/**
 * NewsPage is a React functional component wrapped with React.memo for performance optimisation.
 * It renders the NewsContent component as part of its JSX structure.
 * React.memo ensures that the component only re-renders when its props change.
 *
 * @returns The rendered output of the NewsPage component, which includes the NewsContent component.
 */
const NewsPage: React.MemoExoticComponent<() => ReactElement> = React.memo(
  () => {
    return (
      <>
        <NewsContent />
      </>
    );
  },
);

export default NewsPage;
