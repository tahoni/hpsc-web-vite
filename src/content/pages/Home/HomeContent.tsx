import React, { ReactElement } from "react";
import History from "../History/History.mdx";

const HomeContent = React.memo((): ReactElement => {
  return (
    <article>
      <History />
    </article>
  );
});

export default HomeContent;
