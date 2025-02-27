import { Navigate } from "react-router";
import { PageAlias } from "../model/PageAlias.ts";
import {
  AboutUs,
  ContactUs,
  History,
  Home,
  Links,
  Members,
  NotFound,
  Venues
} from "./Items.tsx";

export const routes: PageAlias[] = [
  { mapping: Home },
  { path: "/home", mapping: Home, element: <Navigate to={"/"} /> },

  { mapping: Members },
  { mapping: Links },
  { mapping: History },

  { mapping: ContactUs },
  { path: "/contact_us", mapping: ContactUs },
  { mapping: AboutUs },
  { path: "/about_us", mapping: AboutUs },

  { mapping: Venues },

  { mapping: NotFound },
  { path: "*", mapping: NotFound, element: <Navigate to={"/notFound"} /> }
];
