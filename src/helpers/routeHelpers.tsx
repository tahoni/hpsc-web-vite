/**
 * Helper functions and constants for application routing.
 * Defines the structure and content of the main router paths.
 */

import { Navigate } from "react-router";
import { PageAlias } from "@/models/pages/PageAlias.ts";
import { aboutUs, events, history, home, links, members } from "@shared/routes/RouteAliases.tsx";

/**
 * Represents an array of route configurations for the application.
 * Elements for navigation are provided for specific paths to handle redirections.
 *
 *
 * Each route configuration object specifies the mapping for a page,
 * and optionally its path and element for navigation.
 *
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
