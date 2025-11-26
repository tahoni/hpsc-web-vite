import React from "react";

const HistoryContent = React.lazy(() => import("./HistoryContent"));

/**
 * HistoryPage is a React memoized functional component.
 * It serves as a wrapper for rendering the HistoryContent component.
 *
 * This component is optimised to prevent unnecessary re-renders by using React.memo,
 * which ensures it only re-renders when its props change.
 *
 * This component does not accept any props.
 *
 * @constant
 * @type {React.MemoExoticComponent<React.FC>}
 */
const HistoryPage = React.memo(() => {
  return (
    <>
      <HistoryContent />
    </>
  );
});

export default HistoryPage;
