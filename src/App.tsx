import { ReactElement, Suspense } from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import { Breakpoints } from "./layout";
import { Loader } from "@tahoni/tahoni-lib-react";
import { googleMapApiKey } from "./constants/MapConstants.ts";
import AppRoutes from "./config/Routes/AppRoutes.tsx";
import "./App.scss";

/**
 * Represents the main application component wrapped with necessary providers
 * and suspense fallback for asynchronous loading.
 *
 * @return {ReactElement} The React element representing the application.
 */
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
