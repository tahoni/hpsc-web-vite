import React, { ReactElement } from "react";

const LinksContent = React.lazy(() => import("./LinksContent"));

/**
 * LinksPage is a React functional component that is memoised using React.memo.
 * It renders the LinksContent component, encapsulating its behaviour within
 * a reusable and performance-optimised component.
 *
 * The use of React.memo ensures that the LinksPage component only re-renders
 * when its props change, optimising rendering performance in React applications.
 *
 * @returns {ReactElement} The rendered output of the component, which includes the LinksContent component.
 */
const LinksPage = React.memo((): ReactElement => {
  return (
    <>
      <LinksContent />
    </>
  );
});

export default LinksPage;
