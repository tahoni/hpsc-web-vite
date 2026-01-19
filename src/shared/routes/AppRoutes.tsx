import { ReactElement } from "react";
import { Route, Routes } from "react-router";
import {
  leftShooter,
  rightShooter,
} from "@constants/images/layoutImageConstants.ts";
import { PageAlias } from "@models/pages/PageAlias.ts";
import { routes } from "@helpers/routeHelpers.tsx";
import { Layout } from "@shared/layouts";

/**
 * AppRoutes is a React functional component responsible for rendering
 * the application's route structure.
 * It uses the `Routes` and `Route`
 * components from `react-router-dom` to define the navigation paths and
 * associated components for the application.
 *
 * The component uses a parent layout, `Layout`, which accepts `leftSideImage`
 * and `rightSideImage` props for customisation.
 * The specific routes are dynamically
 * generated based on the `routes` array, where each route specifies properties
 * such as path and element.
 *
 * @returns {ReactElement} The rendered route structure for the application.
 */

const AppRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route
        element={
          <Layout leftSideImage={leftShooter} rightSideImage={rightShooter} />
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
