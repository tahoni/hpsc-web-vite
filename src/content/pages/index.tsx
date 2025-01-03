import { ReactElement } from "react";
import Home from "./Home.mdx";
import History from "./History.mdx";
import { HistoryProps } from "../../model/content/pages/HistoryProps.ts";

export const HomeContent = (): ReactElement => {
  return <Home />;
};

export const HistoryContent = (props: HistoryProps): ReactElement => {
  return <History {...props} />;
};
