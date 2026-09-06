/**
 * Helper functions and constants for application navigation menus.
 * Defines the structure and content of the main navigation menu items.
 */

import { PageMapping } from "@/models/pages/PageMapping.ts";
import {
  aboutUs,
  events,
  history,
  home,
  links,
  members,
  venues,
} from "@shared/routes/RouteAliases.tsx";

/**
 * Represents an array of page mappings used to define navigation menu items.
 * The array contains a selection of specific pages that are included in the menu.
 *
 * Each item in the array corresponds to a {@link PageMapping} object, which defines
 * metadata and behaviour for the respective page in the navigation system.
 */
export const menuItems: PageMapping[] = [
  home,
  members,
  links,
  venues,
  events,
  history,
  aboutUs,
];
