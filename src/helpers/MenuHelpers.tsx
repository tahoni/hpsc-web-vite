import { PageMapping } from "../model/PageMapping.ts";
import {
  AboutUs,
  History,
  Home,
  Links,
  Members,
  Events,
} from "../conf/RouteAliases.tsx";

export const menuItems: PageMapping[] = [
  Home,
  Members,
  Links,
  // Venues,
  Events,
  History,
  AboutUs,
  // ContactUs,
];
