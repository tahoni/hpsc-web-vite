import React, { ReactElement } from "react";
import History from "./History.mdx";

/**
 * A React functional component wrapped with `React.memo` for memoisation.
 * The `HistoryContent` component renders an article containing the `History` component.
 *
 * The memoisation ensures that the component only re-renders when its props change,
 * optimising performance in React applications.
 *
 * @type {React.MemoExoticComponent<() => ReactElement>}
 */
const HistoryContent: React.MemoExoticComponent<() => ReactElement> =
  React.memo((): ReactElement => {
    return (
      <article>
        <History />
      </article>
    );
  });

export default HistoryContent;
