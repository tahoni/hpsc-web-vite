import React, { ReactElement, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import { Breakpoints, Layout } from "./layout";
import HomePage from "./pages/Home/HomePage.tsx";
import PageNotFound from "./pages/NotFound/PageNotFound.tsx";
import {
  ImageWithSourceAndDescription,
  Loader
} from "@tahoni/tahoni-lib-react";
import {
  leftShooter,
  rightShooter
} from "./constants/images/LayoutImageConstants.ts";
import "./App.scss";

const MembersPage = React.lazy(() => import("./pages/Members/MembersPage.tsx"));
// const NewsPage = React.lazy(() => import("./pages/News/NewsPage.tsx"));
// const EventsPage = React.lazy(() => import("./pages/Events/EventsPage.tsx"));
// const VenuesPage = React.lazy(() => import("./pages/Venues/VenuesPage.tsx"));
const LinksPage = React.lazy(() => import("./pages/Links/LinksPage.tsx"));
const HistoryPage = React.lazy(() => import("./pages/History/HistoryPage.tsx"));
// const ContactUsPage = React.lazy(() => import("./pages/ContactUs/ContactUsPage.tsx"));
const AboutUsPage = React.lazy(() => import("./pages/AboutUs/AboutUsPage.tsx"));

function App(): ReactElement {
  const leftSidebarImage: ImageWithSourceAndDescription = leftShooter;
  const rightSidebarImage: ImageWithSourceAndDescription = rightShooter;

  return (
    <Suspense fallback={<Loader isLoading={true} key={"app"} />}>
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
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/members" element={<MembersPage />} />
          {/*<Route path="/news" element={<NewsPage />} />*/}
          {/*<Route path="/matches" element={<EventsPage />} />*/}
          {/*<Route path="/ranges" element={<VenuesPage />} />*/}
          <Route path="/links" element={<LinksPage />} />
          <Route path="/history" element={<HistoryPage />} />
          {/*<Route path="/contact_us" element={<ContactUsPage />} />*/}
          {/*<Route path="/contact" element={<ContactUsPage />} />*/}
          <Route path="/about_us" element={<AboutUsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/page_not_found" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/page_not_found" />} />
        </Route>
      </Routes>
      <Breakpoints />
    </Suspense>
  );
}

export default App;
