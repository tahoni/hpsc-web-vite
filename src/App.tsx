import { ReactElement, Suspense } from "react";
import { Loader } from "@tahoni/tahoni-lib-react";
import { Breakpoints } from "@layouts/Breakpoints";
import { ErrorBoundary } from "@layouts/ErrorBoundary";
import AppRoutes from "@shared/routes/AppRoutes";
import "./App.scss";

/**
 * Represents the main application component wrapped with necessary providers
 * and suspense fallback for asynchronous loading.
 *
 * @returns The React element representing the application.
 */
function App(): ReactElement {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader isLoading={true} key={"app"} />}>
        {/*<APIProvider apiKey={googleMapApiKey}>*/}
        {/*  <GoogleReCaptchaProvider reCaptchaKey={reCaptchaV2SiteKey}>*/}
        <AppRoutes />
        <Breakpoints />
        {/*  </GoogleReCaptchaProvider>*/}
        {/*</APIProvider>*/}
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
