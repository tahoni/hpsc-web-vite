import { ReactElement } from "react";
import { Route, Routes } from "react-router";
import {
  leftShooter,
  rightShooter,
} from "../constants/images/LayoutImageConstants";
import { PageAlias } from "../model/PageAlias";
import { routes } from "../helpers/RouteHelpers";
import { Layout } from "../layout";

const AppRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route
        element={
          <Layout
            leftSideImage={leftShooter}
            rightSideImage={rightShooter}
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
