import React, { ReactElement } from "react";
import HistoryContent from "../History/HistoryContent";

/**
 * HomePage is a functional React component wrapped with React.memo to optimise rendering by memoising the component.
 * This component serves as a container for displaying the HistoryContent component.
 *
 * It ensures that the component only re-renders if its props change, improving performance in certain scenarios.
 *
 * @returns {ReactElement} The rendered output of the HomePage component, which includes the HomeContent component.
 */
const HomePage: React.MemoExoticComponent<() => ReactElement> = React.memo(
  () => {
    return (
      <>
        <HistoryContent />
      </>
    );
  },
);

export default HomePage;
