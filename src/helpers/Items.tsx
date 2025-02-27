import { PageMapping } from "../model/PageMapping.ts";
import HomePage from "../pages/Home/HomePage.tsx";
import PageNotFound from "../pages/NotFound/PageNotFound.tsx";
import Page from "../pages/Page.tsx";
import VenuesPage from "../pages/Venues/VenuesPage.tsx";
import MembersPage from "../pages/Members/MembersPage.tsx";
import LinksPage from "../pages/Links/LinksPage.tsx";
import HistoryPage from "../pages/History/HistoryPage.tsx";
import AboutUsPage from "../pages/AboutUs/AboutUsPage.tsx";
import ContactUsPage from "../pages/ContactUs/ContactUsPage.tsx";

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

export const Venues: PageMapping = {
  name: "Shooting Ranges",
  path: "/venues",
  element: <Page keyValue={"venuesPage"}
                 title={"Shooting Ranges"}><VenuesPage /></Page>
};