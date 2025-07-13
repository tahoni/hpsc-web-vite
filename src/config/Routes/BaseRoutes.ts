import { PageMapping } from "../../models/PageMapping.ts";

export const coreHomeRoute = new PageMapping({
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
export const coreHistoryRoute = new PageMapping({
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
  dateCreated: new Date("2025-12-26"),
  dateUpdated: new Date("2025-03-03"),
});

export const coreEventsRoute = new PageMapping({
  name: "Events",
  path: "/events",
  dateCreated: new Date("2025-04-29"),
  dateUpdated: new Date("2025-05-01"),
});
export const coreVenuesRoute = new PageMapping({
  name: "Shooting Ranges",
  path: "/venues",
});

export const coreRoutes: PageMapping[] = [
  coreHomeRoute,
  coreMembersRoute,
  coreLinksRoute,
  coreHistoryRoute,
  coreAboutUsRoute,
  // coreContactUsRoute,
  coreEventsRoute,
  // coreVenuesRoute,
];
