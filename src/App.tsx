import { ReactElement, Suspense } from "react";
import { Route, Routes } from "react-router";
import { APIProvider } from "@vis.gl/react-google-maps";
import { Breakpoints, Layout } from "./layout";
import { routes } from "./helpers/RouteHelpers.tsx";
import {
  ImageWithSourceAndDescription,
  Loader,
} from "@tahoni/tahoni-lib-react";
import {
  leftShooter,
  rightShooter,
} from "./constants/images/LayoutImageConstants.ts";
import { googleMapApiKey } from "./constants/MapConstants.ts";
import { PageAlias } from "./model/PageAlias.ts";
import "./App.scss";

function App(): ReactElement {
  const leftSidebarImage: ImageWithSourceAndDescription = leftShooter;
  const rightSidebarImage: ImageWithSourceAndDescription = rightShooter;

  return (
    <Suspense fallback={<Loader isLoading={true} key={"app"} />}>
      <APIProvider apiKey={googleMapApiKey}>
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
        <Breakpoints />
      </APIProvider>
    </Suspense>
  );
}

export default App;
