import React from "react";

const HistoryContent = React.lazy(() => import("../../content/pages/History/HistoryContent.tsx"));

const HistoryPage = React.memo(() => {
  return (
    <>
      <HistoryContent />
    </>
  );
});

export default HistoryPage;
