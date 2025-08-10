import React from "react";
import HistoryContent from "../../content/pages/History/HistoryContent.tsx";

/**
 * HomePage is a functional React component wrapped with React.memo to optimize rendering by memoizing the component.
 * This component serves as a container for displaying the HistoryContent component.
 *
 * It ensures that the component only re-renders if its props change, improving performance in certain scenarios.
 */
const HomePage = React.memo(() => {
  return (
    <>
      <HistoryContent />
    </>
  );
});

export default HomePage;
