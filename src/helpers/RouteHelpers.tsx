import { Navigate } from "react-router";
import { PageAlias } from "../model/PageAlias.ts";
import {
  aboutUs,
  history,
  home,
  links,
  members,
  events,
} from "../config/RouteAliases.tsx";

export const routes: PageAlias[] = [
  { mapping: home },
  { path: "/home", mapping: home, element: <Navigate to={"/"} /> },
  { path: "/index.html", mapping: home, element: <Navigate to={"/"} /> },

  { mapping: members },
  { mapping: links },
  { mapping: history },

  // { mapping: ContactUs },
  // { path: "/contact_us", mapping: ContactUs },
  { mapping: aboutUs },
  { path: "/about_us", mapping: aboutUs },

  { mapping: events },
  // { mapping: Venues },
];
