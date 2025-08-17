import { PageMapping } from "../models/PageMapping.ts";
import {
  aboutUs,
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
  aboutUs,
  // contactUs,
];
