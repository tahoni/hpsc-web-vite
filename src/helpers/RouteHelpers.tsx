import { Navigate } from "react-router";
import { PageAlias } from "../model/PageAlias.ts";
import {
  AboutUs,
  History,
  Home,
  Links,
  Members,
  Events,
} from "../conf/RouteAliases.tsx";

export const routes: PageAlias[] = [
  { mapping: Home },
  { path: "/home", mapping: Home, element: <Navigate to={"/"} /> },
  { path: "/index.html", mapping: Home, element: <Navigate to={"/"} /> },

  { mapping: Members },
  { mapping: Links },
  { mapping: History },

  // { mapping: ContactUs },
  // { path: "/contact_us", mapping: ContactUs },
  { mapping: AboutUs },
  { path: "/about_us", mapping: AboutUs },

  { mapping: Events },
  // { mapping: Venues },
];
