import { PageMapping } from "../models/PageMapping.ts";
import {
  aboutUs,
  contactUs,
  events,
  history,
  home,
  links,
  members,
} from "../config/Routes/RouteAliases.tsx";

export const menuItems: PageMapping[] = [
  home,
  members,
  links,
  // venues,
  events,
  history,
  contactUs,
  aboutUs,
];
