import React, { ReactElement } from "react";
import History from "./History.mdx";

const HistoryContent = React.memo((): ReactElement => {
  return <History />;
});

export default HistoryContent;
