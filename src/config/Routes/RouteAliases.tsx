import React from "react";
import { PageMapping } from "../../models/PageMapping.ts";
import Page from "../../pages/Page.tsx";
import HomePage from "../../pages/Home/HomePage.tsx";
import {
  coreAboutUsRoute,
  coreContactUsRoute,
  coreVenuesRoute,
  coreHistoryRoute,
  coreHomeRoute,
  coreLinksRoute,
  coreMembersRoute,
  coreEventsRoute,
} from "./BaseRoutes.ts";

const MembersPage = React.lazy(
  () => import("../../pages/Members/MembersPage.tsx"),
);
const LinksPage = React.lazy(() => import("../../pages/Links/LinksPage.tsx"));
const HistoryPage = React.lazy(
  () => import("../../pages/History/HistoryPage.tsx"),
);
const ContactUsPage = React.lazy(
  () => import("../../pages/ContactUs/ContactUsPage.tsx"),
);
const AboutUsPage = React.lazy(
  () => import("../../pages/AboutUs/AboutUsPage.tsx"),
);
const EventsPage = React.lazy(
  () => import("../../pages/Events/EventsPage.tsx"),
);
const VenuesPage = React.lazy(
  () => import("../../pages/Venues/VenuesPage.tsx"),
);

export const home: PageMapping = new PageMapping({
  ...coreHomeRoute,
  element: (
    <Page keyValue={"homePage"} title={""}>
      <HomePage />
    </Page>
  ),
});

export const members: PageMapping = {
  ...coreMembersRoute,
  element: (
    <Page keyValue={"membersPage"} title={"Members"}>
      <MembersPage />
    </Page>
  ),
};
export const links: PageMapping = {
  ...coreLinksRoute,
  element: (
    <Page keyValue={"linksPage"} title={"Links"}>
      <LinksPage />
    </Page>
  ),
};
export const history: PageMapping = {
  ...coreHistoryRoute,
  element: (
    <Page keyValue={"historyPage"} title={"History"}>
      <HistoryPage />
    </Page>
  ),
};

export const aboutUs: PageMapping = {
  ...coreAboutUsRoute,
  element: (
    <Page keyValue={"aboutUsPage"} title={"About Us"}>
      <AboutUsPage />
    </Page>
  ),
};
export const contactUs: PageMapping = {
  ...coreContactUsRoute,
  element: (
    <Page keyValue={"contactUsPage"} title={"Contact Us"}>
      <ContactUsPage />
    </Page>
  ),
};

export const events: PageMapping = {
  ...coreEventsRoute,
  element: (
    <Page keyValue={"eventsPage"} title={"Events"}>
      <EventsPage />
    </Page>
  ),
};
export const venues: PageMapping = {
  ...coreVenuesRoute,
  element: (
    <Page keyValue={"venuesPage"} title={"Shooting Ranges"}>
      <VenuesPage />
    </Page>
  ),
};
