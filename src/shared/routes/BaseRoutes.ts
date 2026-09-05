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
});

export const coreMembersRoute = new PageMapping({
  name: "Members",
  path: "/members",
  dateCreated: new Date("2025-01-03"),
  dateUpdated: new Date("2025-01-04"),
});

export const coreLinksRoute = new PageMapping({
  name: "Links",
  path: "/links",
  dateCreated: new Date("2025-01-03"),
  dateUpdated: new Date("2025-01-03"),
});

export const coreHistoryRoute: PageMapping = new PageMapping({
  name: "History",
  path: "/history",
  dateCreated: new Date("2024-12-14"),
  dateUpdated: new Date("2024-12-16"),
});

export const coreAboutUsRoute = new PageMapping({
  name: "About Us",
  path: "/about",
  dateCreated: new Date("2024-12-24"),
  dateUpdated: new Date("2024-12-26"),
});

export const coreContactUsRoute = new PageMapping({
  name: "Contact Us",
  path: "/contact",
  dateCreated: new Date("2025-03-03"),
  dateUpdated: new Date("2025-12-26"),
});

export const coreEventsRoute: PageMapping = new PageMapping({
  name: "Events",
  path: "/events",
  dateCreated: new Date("2025-04-29"),
  dateUpdated: new Date("2025-05-01"),
});

export const coreVenuesRoute = new PageMapping({
  name: "Shooting Ranges",
  path: "/venues",
  dateCreated: new Date("2025-01-03"),
  dateUpdated: new Date("2025-01-04"),
});

export const coreNewsRoute = new PageMapping({
  name: "News",
  path: "/news",
  dateCreated: new Date("2026-09-05"),
  dateUpdated: new Date("2026-09-05"),
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
