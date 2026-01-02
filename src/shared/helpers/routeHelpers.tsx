import { Navigate } from "react-router";
import { PageAlias } from "@models/pages/PageAlias";
import {
  aboutUs,
  events,
  history,
  home,
  links,
  members,
} from "@shared/routes/RouteAliases";

/**
 * @packageDocumentation
 * Module containing route configuration helpers and navigation utilities for the application.
 */

export const routes: PageAlias[] = [
  { mapping: home },
  { path: "/home", mapping: home, element: <Navigate to={"/"} /> },
  { path: "/index.html", mapping: home, element: <Navigate to={"/"} /> },

  { mapping: members },
  { mapping: links },
  { mapping: history },

  // { mapping: contactUs },
  // { path: "/contact_us", mapping: contactUs },
  { mapping: aboutUs },
  { path: "/about_us", mapping: aboutUs },

  { mapping: events },
  // { mapping: venues },
];
