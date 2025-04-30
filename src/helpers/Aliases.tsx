import React from "react";
import { PageMapping } from "../model/PageMapping.ts";
import Page from "../pages/Page.tsx";
import HomePage from "../pages/Home/HomePage.tsx";

const MembersPage = React.lazy(
  () => import("../pages/Members/MembersPage.tsx"),
);
const LinksPage = React.lazy(() => import("../pages/Links/LinksPage.tsx"));
const HistoryPage = React.lazy(
  () => import("../pages/History/HistoryPage.tsx"),
);
const ContactUsPage = React.lazy(
  () => import("../pages/ContactUs/ContactUsPage.tsx"),
);
const AboutUsPage = React.lazy(
  () => import("../pages/AboutUs/AboutUsPage.tsx"),
);
const EventsPage = React.lazy(() => import("../pages/Events/EventsPage.tsx"));
const VenuesPage = React.lazy(() => import("../pages/Venues/VenuesPage.tsx"));

export const Home: PageMapping = {
  name: "Home",
  path: "/",
  element: (
    <Page keyValue={"homePage"} title={""}>
      <HomePage />
    </Page>
  ),
};

export const Members: PageMapping = {
  name: "Members",
  path: "/members",
  element: (
    <Page keyValue={"membersPage"} title={"Members"}>
      <MembersPage />
    </Page>
  ),
};
export const Links: PageMapping = {
  name: "Links",
  path: "/links",
  element: (
    <Page keyValue={"linksPage"} title={"Links"}>
      <LinksPage />
    </Page>
  ),
};
export const History: PageMapping = {
  name: "History",
  path: "/history",
  element: (
    <Page keyValue={"historyPage"} title={"History"}>
      <HistoryPage />
    </Page>
  ),
};
export const AboutUs: PageMapping = {
  name: "About Us",
  path: "/about",
  element: (
    <Page keyValue={"aboutUsPage"} title={"About Us"}>
      <AboutUsPage />
    </Page>
  ),
};
export const ContactUs: PageMapping = {
  name: "Contact Us",
  path: "/contact",
  element: (
    <Page keyValue={"contactUsPage"} title={"Contact Us"}>
      <ContactUsPage />
    </Page>
  ),
};

export const Events: PageMapping = {
  name: "Events",
  path: "/events",
  element: (
    <Page keyValue={"eventsPage"} title={"Events"}>
      <EventsPage />
    </Page>
  ),
};
export const Venues: PageMapping = {
  name: "Shooting Ranges",
  path: "/venues",
  element: (
    <Page keyValue={"venuesPage"} title={"Shooting Ranges"}>
      <VenuesPage />
    </Page>
  ),
};
