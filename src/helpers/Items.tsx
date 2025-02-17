import React from "react";
import { PageMapping } from "../model/PageMapping.ts";
import HomePage from "../pages/Home/HomePage.tsx";
import PageNotFound from "../pages/NotFound/PageNotFound.tsx";

const MembersPage = React.lazy(() => import("../pages/Members/MembersPage.tsx"));
const LinksPage = React.lazy(() => import("../pages/Links/LinksPage.tsx"));
const HistoryPage = React.lazy(() => import("../pages/History/HistoryPage.tsx"));
const ContactUsPage = React.lazy(() => import("../pages/ContactUs/ContactUsPage.tsx"));
const AboutUsPage = React.lazy(() => import("../pages/AboutUs/AboutUsPage.tsx"));

export const Home: PageMapping = {
  name: "Home",
  path: "/",
  element: <HomePage />
};
export const NotFound: PageMapping = {
  name: "Not Found",
  path: "*",
  element: <PageNotFound />
};

export const Members: PageMapping = {
  name: "Members",
  path: "/members",
  element: <MembersPage />
};
export const Links: PageMapping = {
  name: "Links",
  path: "/links",
  element: <LinksPage />
};
export const History: PageMapping = {
  name: "History",
  path: "/history",
  element: <HistoryPage />
};
export const AboutUs: PageMapping = {
  name: "About Us",
  path: "/about",
  element: <AboutUsPage />
};
export const ContactUs: PageMapping = {
  name: "Contact Us",
  path: "/contact",
  element: <ContactUsPage />
};
