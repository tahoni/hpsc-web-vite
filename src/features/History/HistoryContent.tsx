import React, { ReactElement } from "react";
import History from "./History.mdx";

/**
 * A React functional component wrapped with `React.memo` for memoization.
 * The `HistoryContent` component renders an article containing the `History` component.
 *
 * The memoization ensures that the component only re-renders when its props change,
 * optimizing performance in React applications.
 *
 * @constant
 * @type {React.MemoExoticComponent<() => ReactElement>}
 */
const HistoryContent = React.memo((): ReactElement => {
  return (
    <article>
      <History />
    </article>
  );
});

export default HistoryContent;
