import { ReactElement } from "react";
import Home from "./Home.mdx";
import News from "./News.mdx";
import Events from "./Events.mdx";
import Venues from "./Venues.mdx";
import History from "./History.mdx";
import { HistoryProps } from "../../model/content/pages/HistoryProps.ts";

export const HomeContent = (): ReactElement => {
  return <Home />;
};

export const NewsContent = (): ReactElement => {
  return <News />;
};

export const EventsContent = (): ReactElement => {
  return <Events />;
};

export const VenuesContent = (): ReactElement => {
  return <Venues />;
};

export const HistoryContent = (props: HistoryProps): ReactElement => {
  return <History {...props} />;
};
