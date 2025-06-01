import { ReactElement } from "react";
import { Route, Routes } from "react-router";
import { ImageWithSourceAndDescription } from "@tahoni/tahoni-lib-react";
import {
  leftShooter,
  rightShooter,
} from "../constants/images/LayoutImageConstants";
import { PageAlias } from "../model/PageAlias";
import { routes } from "../helpers/RouteHelpers";
import { Layout } from "../layout";

const AppRoutes = (): ReactElement => {
  const leftSidebarImage: ImageWithSourceAndDescription = leftShooter;
  const rightSidebarImage: ImageWithSourceAndDescription = rightShooter;

  return (
    <Routes>
      <Route
        element={
          <Layout
            leftSideImage={leftSidebarImage}
            rightSideImage={rightSidebarImage}
          />
        }
      >
        {routes.map((route: PageAlias, index) => (
          <Route
            path={route.path ?? route.mapping.path}
            key={"page_" + index}
            element={route.element ?? route.mapping.element}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
