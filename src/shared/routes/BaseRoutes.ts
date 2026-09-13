/**
 * Core route definitions for the application.
 *
 * This module declares the fundamental PageMapping instances (core routes)
 * used across the application.
 * Other modules import these base mappings to compose full route configurations
 * and UI elements.
 */

import { PageMapping } from "@/models/pages/PageMapping.ts";

export const coreHomeRoute: PageMapping = new PageMapping({
  name: "Home",
  path: "/",
  dateCreated: new Date("2024-12-14"),
  dateUpdated: new Date("2024-12-16"),
  description:
    "Hartbeespoortdam Practical Shooting Club affiliated with the Northern Gauteng Practical Shooting Association (NGPSA), SAPSA and IPSC.",
});

export const coreMembersRoute = new PageMapping({
  name: "Members",
  path: "/members",
  dateCreated: new Date("2025-01-03"),
  dateUpdated: new Date("2025-01-04"),
  description:
    "Membership information and how to join the Hartbeespoortdam Practical Shooting Club.",
});

export const coreLinksRoute = new PageMapping({
  name: "Links",
  path: "/links",
  dateCreated: new Date("2025-01-03"),
  dateUpdated: new Date("2025-01-03"),
  description:
    "Links to affiliated shooting associations and related resources for the Hartbeespoortdam Practical Shooting Club.",
});

export const coreHistoryRoute: PageMapping = new PageMapping({
  name: "History",
  path: "/history",
  dateCreated: new Date("2024-12-14"),
  dateUpdated: new Date("2024-12-16"),
  description:
    "The history of the Hartbeespoortdam Practical Shooting Club, founded in 2003.",
});

export const coreAboutUsRoute = new PageMapping({
  name: "About Us",
  path: "/about",
  dateCreated: new Date("2024-12-24"),
  dateUpdated: new Date("2024-12-26"),
  description:
    "About the Hartbeespoortdam Practical Shooting Club and its practical shooting activities.",
});

export const coreContactUsRoute = new PageMapping({
  name: "Contact Us",
  path: "/contact",
  dateCreated: new Date("2025-03-03"),
  dateUpdated: new Date("2025-12-26"),
  description: "Contact details for the Hartbeespoortdam Practical Shooting Club.",
});

export const coreEventsRoute: PageMapping = new PageMapping({
  name: "Events",
  path: "/events",
  dateCreated: new Date("2025-04-29"),
  dateUpdated: new Date("2025-05-01"),
  description:
    "Upcoming practical shooting events and competitions hosted by the Hartbeespoortdam Practical Shooting Club.",
});

export const coreVenuesRoute = new PageMapping({
  name: "Shooting Ranges",
  path: "/venues",
  dateCreated: new Date("2025-01-03"),
  dateUpdated: new Date("2025-01-04"),
  description:
    "Shooting ranges used by the Hartbeespoortdam Practical Shooting Club for practice and competitions.",
});

export const coreNewsRoute = new PageMapping({
  name: "News",
  path: "/news",
  dateCreated: new Date("2026-09-05"),
  dateUpdated: new Date("2026-09-05"),
  description: "Latest news from the Hartbeespoortdam Practical Shooting Club.",
});

export const coreRoutes: PageMapping[] = [
  coreHomeRoute,
  coreMembersRoute,
  coreLinksRoute,
  coreHistoryRoute,
  coreAboutUsRoute,
  coreContactUsRoute,
  coreEventsRoute,
  coreVenuesRoute,
  coreNewsRoute,
];
