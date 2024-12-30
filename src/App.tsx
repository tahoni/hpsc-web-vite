import { ReactElement } from "react";
import { Route, Routes } from "react-router";
import { Breakpoints, Layout } from "./layout";
import { ImageWithSourceAndDescription } from "@tahoni/tahoni-lib-react";
import {
  imageConstants,
  LEFT_SHOOTER,
  RIGHT_SHOOTER,
} from "./constants/ImageConstants.ts";
import "./App.scss";
import {
  AboutUsPage,
  ContactUsPage,
  EventsPage,
  HistoryPage,
  HomePage,
  NewsPage,
  VenuesPage,
} from "./pages";

function App(): ReactElement {
  const leftSidebarImage: ImageWithSourceAndDescription | undefined =
    imageConstants.get(LEFT_SHOOTER);
  const rightSidebarImage: ImageWithSourceAndDescription | undefined =
    imageConstants.get(RIGHT_SHOOTER);

  return (
    <>
      <Routes>
        <Route
          element={
            <Layout
              leftSideImage={leftSidebarImage}
              rightSideImage={rightSidebarImage}
            />
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/matches" element={<EventsPage />} />
          <Route path="/ranges" element={<VenuesPage />} />
          <Route path="/contact_us" element={<ContactUsPage />} />
          <Route path="/about_us" element={<AboutUsPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <Breakpoints />
    </>
  );
}

export default App;
