import { Navigate } from "react-router";
import { PageAlias } from "../models/PageAlias.ts";
import {
  aboutUs,
  events,
  history,
  home,
  links,
  members,
} from "../config/Routes/RouteAliases.tsx";

export const routes: PageAlias[] = [
  { mapping: home },
  { path: "/home", mapping: home, element: <Navigate to={"/"} /> },
  { path: "/index.html", mapping: home, element: <Navigate to={"/"} /> },

  { mapping: members },
  { mapping: links },
  { mapping: history },

  // { mapping: contactUs },
  // { path: "/contact_us", mapping: contactUs },
  { mapping: aboutUs },
  { path: "/about_us", mapping: aboutUs },

  { mapping: events },
  // { mapping: venues },
];
