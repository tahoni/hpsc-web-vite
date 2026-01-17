/**
 * @packageDocumentation
 * Helper functions and constants for application navigation menus.
 * Defines the structure and content of the main navigation menu items.
 */

import { PageMapping } from "@/models/pages/PageMapping.ts";
import { aboutUs, events, history, home, links, members } from "@shared/routes/RouteAliases.tsx";

export const menuItems: PageMapping[] = [
  home,
  members,
  links,
  // venues,
  events,
  history,
  // contactUs,
  aboutUs,
];
