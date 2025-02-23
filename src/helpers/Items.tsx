import React from "react";
import { PageMapping } from "../model/PageMapping.ts";
import HomePage from "../pages/Home/HomePage.tsx";
import PageNotFound from "../pages/NotFound/PageNotFound.tsx";
import Page from "../pages/Page.tsx";

const MembersPage = React.lazy(() => import("../pages/Members/MembersPage.tsx"));
const LinksPage = React.lazy(() => import("../pages/Links/LinksPage.tsx"));
const HistoryPage = React.lazy(() => import("../pages/History/HistoryPage.tsx"));
const ContactUsPage = React.lazy(() => import("../pages/ContactUs/ContactUsPage.tsx"));
const AboutUsPage = React.lazy(() => import("../pages/AboutUs/AboutUsPage.tsx"));

export const Home: PageMapping = {
  name: "Home",
  path: "/",
  element: <Page keyValue={"homePage"} title={""}><HomePage /></Page>
};
export const NotFound: PageMapping = {
  name: "Not Found",
  path: "*",
  element: <Page keyValue={"notFoundPage"}
                 title={"Not Fond"}><PageNotFound /></Page>
};

export const Members: PageMapping = {
  name: "Members",
  path: "/members",
  element: <Page keyValue={"membersPage"}
                 title={"Members"}><MembersPage /></Page>
};
export const Links: PageMapping = {
  name: "Links",
  path: "/links",
  element: <Page keyValue={"linksPage"} title={"Links"}><LinksPage /></Page>
};
export const History: PageMapping = {
  name: "History",
  path: "/history",
  element: <Page keyValue={"historyPage"}
                 title={"History"}><HistoryPage /></Page>
};
export const AboutUs: PageMapping = {
  name: "About Us",
  path: "/about",
  element: <Page keyValue={"aboutUsPage"}
                 title={"About Us"}><AboutUsPage /></Page>
};
export const ContactUs: PageMapping = {
  name: "Contact Us",
  path: "/contact",
  element: <Page keyValue={"contactUsPage"}
                 title={"Contact Us"}><ContactUsPage /></Page>
};
