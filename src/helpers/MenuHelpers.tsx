import { PageMapping } from "../model/PageMapping.ts";
import {
  aboutUs,
  events,
  history,
  home,
  links,
  members,
} from "../config/RouteAliases.tsx";

export const menuItems: PageMapping[] = [
  home,
  members,
  links,
  // venues,
  events,
  history,
  aboutUs,
  // contactUs,
];
