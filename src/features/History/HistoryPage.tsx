import React, { ReactElement } from "react";

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
 * @type {React.MemoExoticComponent<() => ReactElement>}
 * @returns {ReactElement} The rendered output of the HistoryPage component, which includes the HistoryContent component.
 */
const HistoryPage: React.MemoExoticComponent<() => ReactElement> = React.memo(
  () => {
    return (
      <>
        <HistoryContent />
      </>
    );
  },
);

export default HistoryPage;
