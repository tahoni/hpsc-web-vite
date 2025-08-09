import { PageMapping } from "../../models/PageMapping.ts";

/**
 * Represents the core route mapping for the Home page in the application.
 * Provides metadata and path information for navigating to the Home page.
 *
 * @type {PageMapping}
 * @property {string} name - The name of the route, corresponding to the Home page.
 * @property {string} path - The URL path associated with the Home route.
 * @property {Date} dateCreated - The date when the route was created.
 * @property {Date} dateUpdated - The date when the route was last updated.
 */
export const coreHomeRoute: PageMapping = new PageMapping({
  name: "Home",
  path: "/",
  dateCreated: new Date("2024-12-14"),
  dateUpdated: new Date("2024-12-16"),
});

/**
 * Represents the route configuration for the core members page.
 *
 * @constant {PageMapping} coreMembersRoute
 * @property {string} name - The name of the page ("Members").
 * @property {string} path - The URL path for the members' page ("/members").
 * @property {Date} dateCreated - The date when the route was created (January 3, 2025).
 * @property {Date} dateUpdated - The date when the route was last updated (January 4, 2025).
 */
export const coreMembersRoute = new PageMapping({
  name: "Members",
  path: "/members",
  dateCreated: new Date("2025-01-03"),
  dateUpdated: new Date("2025-01-04"),
});

/**
 * @packageDocumentation
 */

/**
 * Represents the route configuration for the "Links" page.
 *
 * @constant {PageMapping} coreLinksRoute
 * @property {string} name - The name of the page.
 * @property {string} path - The URL path associated with the page.
 * @property {Date} dateCreated - The date when the route was created.
 * @property {Date} dateUpdated - The date when the route was last updated.
 */
export const coreLinksRoute = new PageMapping({
  name: "Links",
  path: "/links",
  dateCreated: new Date("2025-01-03"),
  dateUpdated: new Date("2025-01-03"),
});

/**
 * Represents the core history route configuration for a page mapping.
 *
 * @type {PageMapping}
 * @property {string} name - The name of the page route.
 * @property {string} path - The URL path associated with the route.
 * @property {Date} dateCreated - The date when the route was created.
 * @property {Date} dateUpdated - The date when the route was last updated.
 */
export const coreHistoryRoute: PageMapping = new PageMapping({
  name: "History",
  path: "/history",
  dateCreated: new Date("2024-12-14"),
  dateUpdated: new Date("2024-12-16"),
});

/**
 * Represents the core route configuration for the "About Us" page.
 *
 * @constant {PageMapping} coreAboutUsRoute
 * @property {string} name - The name of the route, indicating the page's title.
 * @property {string} path - The URL path mapping to the "About Us" page.
 * @property {Date} dateCreated - The date when the route configuration was created.
 * @property {Date} dateUpdated - The last date when the route configuration was updated.
 */
export const coreAboutUsRoute = new PageMapping({
  name: "About Us",
  path: "/about",
  dateCreated: new Date("2024-12-24"),
  dateUpdated: new Date("2024-12-26"),
});

/**
 * Represents the page mapping for the "Contact Us" section of the application.
 *
 * @const {PageMapping} coreContactUsRoute
 * @property {string} name - The name of the route, specified as "Contact Us".
 * @property {string} path - The URL path for the "Contact Us" page, specified as "/contact".
 * @property {Date} dateCreated -
 * The date when this route configuration was created, specified as December 26, 2025.
 * @property {Date} dateUpdated - The date when this route configuration was last updated,
 * specified as March 3, 2025.
 */
export const coreContactUsRoute = new PageMapping({
  name: "Contact Us",
  path: "/contact",
  dateCreated: new Date("2025-12-26"),
  dateUpdated: new Date("2025-03-03"),
});

/**
 * Represents the core route configuration for the "Events" page.
 *
 * @type {PageMapping}
 * @property {string} name The name of the page.
 * @property {string} path The route path associated with the page.
 * @property {Date} dateCreated The date when the route configuration was initially created.
 * @property {Date} dateUpdated The date when the route configuration was last updated.
 */
export const coreEventsRoute: PageMapping = new PageMapping({
  name: "Events",
  path: "/events",
  dateCreated: new Date("2025-04-29"),
  dateUpdated: new Date("2025-05-01"),
});

/**
 * Represents a route mapping for core venues within the application.
 * This variable is an instance of the `PageMapping` class, pre-configured
 * with the name and path associated with the "Shooting Ranges" section.
 *
 * The `coreVenuesRoute` is used to define the navigation path to the venues' page.
 *
 * - `name`: Specifies the human-readable name of the route.
 * - `path`: Defines the URL path of the route.
 *
 * For example, this mapping corresponds to the "/venues" path in the application.
 */
export const coreVenuesRoute = new PageMapping({
  name: "Shooting Ranges",
  path: "/venues",
});

/**
 * An array of core page route mappings for the application.
 *
 * Each element is an instance of `PageMapping` that corresponds to a specific
 * core page route.
 * These routes define the navigation structure for key pages
 * such as home, members, links, history, about us, contact us, events, and venues.
 *
 * The array includes:
 * - coreHomeRoute: Mapping for the home page route.
 * - coreMembersRoute: Mapping for the members' page route.
 * - coreLinksRoute: Mapping for the links' page route.
 * - coreHistoryRoute: Mapping for the history page route.
 * - coreAboutUsRoute: Mapping for the about us page route.
 * - coreContactUsRoute: Mapping for the contact us page route.
 * - coreEventsRoute: Mapping for the events page route.
 * - coreVenuesRoute: Mapping for the venues' page route.
 */
export const coreRoutes: PageMapping[] = [
  coreHomeRoute,
  coreMembersRoute,
  coreLinksRoute,
  coreHistoryRoute,
  coreAboutUsRoute,
  coreContactUsRoute,
  coreEventsRoute,
  coreVenuesRoute,
];
