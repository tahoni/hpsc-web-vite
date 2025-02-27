import { PageMapping } from "../model/PageMapping.ts";
import {
  AboutUs,
  ContactUs,
  History,
  Home,
  Links,
  Members,
  Venues
} from "./Items.tsx";

export const menuItems: PageMapping[] = [
  Home, Members, Links, Venues, History, ContactUs, AboutUs
];
