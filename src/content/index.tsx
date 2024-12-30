import { ReactElement } from "react";
import Home from "./pages/Home.mdx";
import News from "./pages/News.mdx";
import Events from "./pages/Events.mdx";
import Venues from "./pages/Venues.mdx";
import ContactUs from "./pages/ContactUs.mdx";
import History from "./pages/History.mdx";
import { HistoryProps } from "./model/HistoryProps.ts";

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

export const ContactUsContent = (): ReactElement => {
  return <ContactUs />;
};

export const HistoryContent = (props: HistoryProps): ReactElement => {
  return <History {...props} />;
};
