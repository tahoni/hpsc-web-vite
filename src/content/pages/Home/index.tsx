import React, { ReactElement } from "react";
import Home from "./Home.mdx";

export const HomeContent = React.memo((): ReactElement => {
  return <Home />;
});
