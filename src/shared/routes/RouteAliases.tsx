/**
 * Provides a mapping between abstract route definitions and their concrete React implementations.
 *
 * This module is responsible for:
 * 1. Associating `BaseRoutes` with specific feature components.
 * 2. Implementing code-splitting via `React.lazy`.
 * 3. Wrapping components in the {@link Page} container to provide consistent layout and
 *   metadata (keys, titles).
 */

import React from "react";
import { PageMapping } from "@/models/pages/PageMapping.ts";
import { Page } from "@shared/pages";
import HomePage from "@features/Home/HomePage.tsx";
import {
  coreAboutUsRoute,
  coreContactUsRoute,
  coreEventsRoute,
  coreHistoryRoute,
  coreHomeRoute,
  coreLinksRoute,
  coreMembersRoute,
  coreNewsRoute,
  coreVenuesRoute,
} from "./BaseRoutes.ts";

const MembersPage = React.lazy(() => import("@features/Members"));

const LinksPage = React.lazy(() => import("@features/Links/LinksPage.tsx"));

const HistoryPage = React.lazy(() => import("@features/History"));

const ContactUsPage = React.lazy(
  () => import("@features/ContactUs/ContactUsPage.tsx"),
);

const AboutUsPage = React.lazy(() => import("@features/AboutUs"));

const EventsPage = React.lazy(() => import("@features/Events"));

const VenuesPage = React.lazy(() => import("@features/Venues"));

const NewsPage = React.lazy(() => import("@features/News"));

export const home: PageMapping = new PageMapping({
  ...coreHomeRoute,
  element: (
    <Page
      keyValue={"homePage"}
      title={""}
      path={coreHomeRoute.path}
      description={coreHomeRoute.description}
    >
      <HomePage />
    </Page>
  ),
});

export const members: PageMapping = {
  ...coreMembersRoute,
  element: (
    <Page
      keyValue={"membersPage"}
      title={"Members"}
      path={coreMembersRoute.path}
      description={coreMembersRoute.description}
    >
      <MembersPage />
    </Page>
  ),
};

export const links: PageMapping = {
  ...coreLinksRoute,
  element: (
    <Page
      keyValue={"linksPage"}
      title={"Links"}
      path={coreLinksRoute.path}
      description={coreLinksRoute.description}
    >
      <LinksPage />
    </Page>
  ),
};

export const history: PageMapping = {
  ...coreHistoryRoute,
  element: (
    <Page
      keyValue={"historyPage"}
      title={"History"}
      path={coreHistoryRoute.path}
      description={coreHistoryRoute.description}
    >
      <HistoryPage />
    </Page>
  ),
};

export const aboutUs: PageMapping = {
  ...coreAboutUsRoute,
  element: (
    <Page
      keyValue={"aboutUsPage"}
      title={"About Us"}
      path={coreAboutUsRoute.path}
      description={coreAboutUsRoute.description}
    >
      <AboutUsPage />
    </Page>
  ),
};

export const contactUs: PageMapping = {
  ...coreContactUsRoute,
  element: (
    <Page
      keyValue={"contactUsPage"}
      title={"Contact Us"}
      path={coreContactUsRoute.path}
      description={coreContactUsRoute.description}
    >
      <ContactUsPage />
    </Page>
  ),
};

export const events: PageMapping = {
  ...coreEventsRoute,
  element: (
    <Page
      keyValue={"eventsPage"}
      title={"Events"}
      path={coreEventsRoute.path}
      description={coreEventsRoute.description}
    >
      <EventsPage />
    </Page>
  ),
};

export const venues: PageMapping = {
  ...coreVenuesRoute,
  element: (
    <Page
      keyValue={"venuesPage"}
      title={"Shooting Ranges"}
      path={coreVenuesRoute.path}
      description={coreVenuesRoute.description}
    >
      <VenuesPage />
    </Page>
  ),
};

export const news: PageMapping = {
  ...coreNewsRoute,
  element: (
    <Page
      keyValue={"newsPage"}
      title={"News"}
      path={coreNewsRoute.path}
      description={coreNewsRoute.description}
    >
      <NewsPage />
    </Page>
  ),
};
