import React, { ReactElement } from "react";
import Home from "./Home.mdx";

const HomeContent = React.memo((): ReactElement => {
  return <Home />;
});

export default HomeContent;
