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

/**
 * Represents a lazily loaded React component for the Members page.
 *
 * The `MembersPage` component is dynamically imported using React's `React.lazy` method,
 * which allows it to be split into its own chunk for optimised performance.
 * This helps in reducing the initial bundle size and deferring the loading of this component
 * until it is rendered for the first time.
 *
 * Use this component to render the Members page in the application.
 */
const MembersPage = React.lazy(
  () => import("../../pages/Members/MembersPage.tsx"),
);

/**
 * A React component that is lazily loaded using React.lazy.
 *
 * The `LinksPage` variable is assigned to dynamically import the
 * "LinksPage" component from the specified file path.
 * This allows
 * the component to be loaded only when it is necessary, improving
 * the application's performance by reducing the initial load time.
 */
const LinksPage = React.lazy(() => import("../../pages/Links/LinksPage.tsx"));

/**
 * `HistoryPage` is a lazily loaded React component that dynamically imports
 * the `HistoryPage` module.
 * This approach uses React's `React.lazy` to
 * optimise bundle loading by splitting the code and loading the `HistoryPage`
 * component only when it is necessary.
 *
 * The component is dynamically imported from the relative path
 * `"../../pages/History/HistoryPage.tsx"`.
 *
 * It is typically used for rendering the history-related features or content
 * of the application in a modular manner to improve performance.
 */
const HistoryPage = React.lazy(
  () => import("../../pages/History/HistoryPage.tsx"),
);

/**
 * ContactUsPage is a lazily loaded React component for the contact us page.
 * It uses React's lazy function to dynamically import the component from the specified path.
 * This approach helps in code-splitting and reduces the initial load time of the application.
 */
const ContactUsPage = React.lazy(
  () => import("../../pages/ContactUs/ContactUsPage.tsx"),
);

/**
 * The `AboutUsPage` variable is a lazily loaded React component
 * that dynamically imports the `AboutUsPage` module from the specified
 * file path "../../pages/AboutUs/AboutUsPage.tsx".
 * This approach leverages React's lazy loading and code-splitting
 * capabilities to optimise initial load time by deferring the loading
 * of the `AboutUsPage` component until it is actually rendered.
 */
const AboutUsPage = React.lazy(
  () => import("../../pages/AboutUs/AboutUsPage.tsx"),
);

/**
 * The `EventsPage` variable represents a React component that has been loaded lazily
 * using React's `React.lazy` function.
 * It dynamically imports the `EventsPage`
 * component from the specified file path.
 *
 * Lazy loading allows the `EventsPage` component to be split into a separate
 * chunk, which is only loaded when it is necessary.
 * This can improve performance
 * by reducing the initial bundle size.
 *
 * The `React.Suspense` component must be used as a wrapper to handle the loading
 * state while the component is being asynchronously loaded.
 *
 * File Path: ../../pages/Events/EventsPage.tsx
 */
const EventsPage = React.lazy(
  () => import("../../pages/Events/EventsPage.tsx"),
);
const VenuesPage = React.lazy(
  () => import("../../pages/Venues/VenuesPage.tsx"),
);

/**
 * Represents the home page mapping configuration.
 * This configuration is an instance of the `PageMapping` class
 * that defines the route and associated components for the home page.
 *
 * The `home` variable initialises the `PageMapping` with a preset
 * core home route configuration and defines the primary element
 * to display on this page.
 * The element is structured as a `Page`
 * component with unique key/value properties and a nested
 * `HomePage` component representing the core content of the page.
 *
 * @type {PageMapping}
 */
export const home: PageMapping = new PageMapping({
  ...coreHomeRoute,
  element: (
    <Page keyValue={"homePage"} title={""}>
      <HomePage />
    </Page>
  ),
});

/**
 * Represents the mapping for the Members page in the application's routing configuration.
 * This includes core routing members and a specific element to render the Members page.
 *
 * @type PageMapping
 * @property {string} coreMembersRoute - Core configuration for member's route.
 * @property {React.Element} element - A React element to render the Members page, including
 *                                     a key for identification and a title.
 */
export const members: PageMapping = {
  ...coreMembersRoute,
  element: (
    <Page keyValue={"membersPage"} title={"Members"}>
      <MembersPage />
    </Page>
  ),
};

/**
 * Represents the mapping configuration for the "Links" page.
 *
 * This variable defines the routing and rendering logic for the Links page using
 * a combination of core route links and a specified page component.
 *
 * Properties:
 * - `...coreLinksRoute`: Spreads the coreLinksRoute properties into this mapping.
 * - `element`: Contains the React component that renders the Links page.
 * It includes metadata such as `keyValue` and `title`.
 *
 * Used to associate a route path with the corresponding page in the application.
 */
export const links: PageMapping = {
  ...coreLinksRoute,
  element: (
    <Page keyValue={"linksPage"} title={"Links"}>
      <LinksPage />
    </Page>
  ),
};

/**
 * Represents the route configuration for the History page within the application.
 * Combines the core history route with an element that specifies the History page component.
 *
 * @type {PageMapping}
 * @property {Object} coreHistoryRoute - The base configuration for the core history route.
 * @property {React.Element} element - React element that renders the History page.
 */
export const history: PageMapping = {
  ...coreHistoryRoute,
  element: (
    <Page keyValue={"historyPage"} title={"History"}>
      <HistoryPage />
    </Page>
  ),
};

/**
 * Represents the 'About Us' page mapping configuration for the routing system.
 *
 * This variable is used to define how the 'About Us' page is structured and rendered
 * within the application.
 * It includes:
 * - Base routing properties inherited from coreAboutUsRoute.
 * - The wrapped element component that specifies the layout and content for this page.
 *
 * The `element` property includes a Page component that wraps the `AboutUsPage` content,
 * providing additional metadata and layout specifications for the page.
 *
 * @type {PageMapping}
 */
export const aboutUs: PageMapping = {
  ...coreAboutUsRoute,
  element: (
    <Page keyValue={"aboutUsPage"} title={"About Us"}>
      <AboutUsPage />
    </Page>
  ),
};

/**
 * Represents the configuration for the "Contact Us" page route.
 *
 * The `contactUs` variable maps the route configuration for the "Contact Us" page
 * by extending the core contact us route definition (`coreContactUsRoute`)
 * and providing additional specific properties like the page's React element.
 *
 * The `element` property defines the React element to render for the "Contact Us" page,
 * which includes additional attributes like `keyValue` and `title`.
 */
export const contactUs: PageMapping = {
  ...coreContactUsRoute,
  element: (
    <Page keyValue={"contactUsPage"} title={"Contact Us"}>
      <ContactUsPage />
    </Page>
  ),
};

/**
 * Represents the page mapping configuration which includes routing information for the "Events" page.
 * This variable uses the base routing configuration from `coreEventsRoute`
 * and appends the configuration for the events page display.
 *
 * @typedef {Object} PageMapping
 * @property {Object} coreEventsRoute - The base route configuration inherited for the page.
 * @property {Object} element - The React component configuration,
 * rendering the "Events" page structure including its title and content.
 */
export const events: PageMapping = {
  ...coreEventsRoute,
  element: (
    <Page keyValue={"eventsPage"} title={"Events"}>
      <EventsPage />
    </Page>
  ),
};

/**
 * Represents the `venues` route configuration in the application's routing setup.
 *
 * The `venues` object includes:
 * - A spread of core routes from `coreVenuesRoute` for base configurations and shared options.
 * - A React element that renders the `VenuesPage`
 * component within a `Page` wrapper when the route is accessed.
 *
 * This setup is used for defining the page under the "Shooting Ranges" feature in the application.
 */
export const venues: PageMapping = {
  ...coreVenuesRoute,
  element: (
    <Page keyValue={"venuesPage"} title={"Shooting Ranges"}>
      <VenuesPage />
    </Page>
  ),
};
