import { ReactElement, Suspense } from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import { Breakpoints } from "./layout";
import { Loader } from "@tahoni/tahoni-lib-react";
import { googleMapApiKey } from "./constants/MapConstants.ts";
import AppRoutes from "./config/AppRoutes.tsx";
import "./App.scss";

function App(): ReactElement {
  return (
    <Suspense fallback={<Loader isLoading={true} key={"app"} />}>
      <APIProvider apiKey={googleMapApiKey}>
        <AppRoutes />
        <Breakpoints />
      </APIProvider>
    </Suspense>
  );
}

export default App;
