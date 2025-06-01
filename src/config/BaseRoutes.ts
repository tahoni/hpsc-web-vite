import { PageMapping } from "../model/PageMapping";

export const coreHomeRoute = new PageMapping({
  name: "Home",
  path: "/",
  dateUpdated: new Date("2025-06-01"),
});

export const coreMembersRoute = new PageMapping({
  name: "Members",
  path: "/members",
  dateUpdated: new Date(),
});
export const coreLinksRoute = new PageMapping({
  name: "Links",
  path: "/links",
});
export const coreHistoryRoute = new PageMapping({
  name: "History",
  path: "/history",
});

export const coreAboutUsRoute = new PageMapping({
  name: "About Us",
  path: "/about",
});

export const coreContactUsRoute = new PageMapping({
  name: "Contact Us",
  path: "/contact",
});

export const coreEventsRoute = new PageMapping({
  name: "Events",
  path: "/events",
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
