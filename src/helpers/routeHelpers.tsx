/**
 * Helper functions and constants for application routing.
 * Defines the structure and content of the main router paths.
 */

import { Navigate } from "react-router";
import { PageAlias } from "@/models/pages/PageAlias.ts";
import {
  aboutUs,
  contactUs,
  events,
  history,
  home,
  links,
  members,
  news,
  venues,
} from "@shared/routes/RouteAliases.tsx";

/**
 * Represents an array of route configurations for the application.
 * The array contains a selection of specific pages that are included in the
 * main router paths.
 *
 * Each item in the array corresponds to a {@link PageAlias} object, which defines
 * the path and the component to render for that path.
 * This array serves as the central source of metadata and behaviour for the
 * respective page in the navigation system.
 */
export const routes: PageAlias[] = [
  { mapping: home },
  { path: "/home", mapping: home, element: <Navigate to={"/"} /> },
  { path: "/index.html", mapping: home, element: <Navigate to={"/"} /> },

  { mapping: members },
  { mapping: links },
  { mapping: history },

  { mapping: contactUs },
  { path: "/contact_us", mapping: contactUs },
  { mapping: aboutUs },
  { path: "/about_us", mapping: aboutUs },

  { mapping: events },
  { mapping: venues },

  { mapping: news },
];
