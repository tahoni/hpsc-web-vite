import { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router";
import { Breakpoints, Layout } from "./layout";
import { ImageWithSourceAndDescription } from "@tahoni/tahoni-lib-react";
import {
  leftShooter,
  rightShooter,
} from "./constants/images/LayoutImageConstants.ts";
import {
  AboutUsPage,
  ContactUsPage,
  HistoryPage,
  HomePage,
  LinksPage,
  MembersPage,
  PageNotFound,
} from "./pages";
import "./App.scss";

function App(): ReactElement {
  const leftSidebarImage: ImageWithSourceAndDescription = leftShooter;
  const rightSidebarImage: ImageWithSourceAndDescription = rightShooter;

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
          <Route path="/members" element={<MembersPage />} />
          {/*<Route path="/news" element={<NewsPage />} />*/}
          {/*<Route path="/matches" element={<EventsPage />} />*/}
          {/*<Route path="/ranges" element={<VenuesPage />} />*/}
          <Route path="/links" element={<LinksPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/contact_us" element={<ContactUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/about_us" element={<AboutUsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/page_not_found" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/page_not_found" />} />
        </Route>
      </Routes>
      <Breakpoints />
    </>
  );
}

export default App;
