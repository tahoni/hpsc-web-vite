/**
 * @packageDocumentation
 * Helper functions and constants for application navigation menus.
 * Defines the structure and content of the main navigation menu items.
 */

import { PageMapping } from "@models/pages/PageMapping";
import {
  aboutUs,
  contactUs,
  events,
  history,
  home,
  links,
  members,
  venues,
} from "@shared/routes/RouteAliases";

export const menuItems: PageMapping[] = [
  home,
  members,
  links,
  venues,
  events,
  history,
  contactUs,
  aboutUs,
];
