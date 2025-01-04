import { ReactElement } from "react";
import { Route, Routes } from "react-router";
import { ReCaptchaProvider } from "react-recaptcha-x";
import { Breakpoints, Layout } from "./layout";
import { ImageWithSourceAndDescription } from "@tahoni/tahoni-lib-react";
import {
  imageConstants,
  LEFT_SHOOTER,
  RIGHT_SHOOTER,
} from "./constants/ImageConstants.ts";
import { reCaptchaV2SiteKey } from "./constants/CaptchaConstants.ts";
import {
  AboutUsPage,
  ContactUsPage,
  HistoryPage,
  HomePage,
  LinksPage,
  MembersPage,
} from "./pages";
import "./App.scss";

function App(): ReactElement {
  const leftSidebarImage: ImageWithSourceAndDescription | undefined =
    imageConstants.get(LEFT_SHOOTER);
  const rightSidebarImage: ImageWithSourceAndDescription | undefined =
    imageConstants.get(RIGHT_SHOOTER);

  return (
    <>
      <ReCaptchaProvider siteKeyV2={reCaptchaV2SiteKey} langCode="en">
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
            <Route path="/contact_us" element={<ContactUsPage />} />
            <Route path="/about_us" element={<AboutUsPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </ReCaptchaProvider>
      <Breakpoints />
    </>
  );
}

export default App;
