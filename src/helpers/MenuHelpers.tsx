import { PageMapping } from "../model/PageMapping.ts";
import {
  aboutUs,
  history,
  home,
  links,
  members,
  events,
} from "../config/RouteAliases.tsx";

export const menuItems: PageMapping[] = [
  home,
  members,
  links,
  // Venues,
  events,
  history,
  aboutUs,
  // ContactUs,
];
