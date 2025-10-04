import { ReactElement, Suspense } from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Breakpoints } from "./layout";
import { Loader } from "@tahoni/tahoni-lib-react";
import { googleMapApiKey } from "./constants/MapConstants.ts";
import { reCaptchaV2SiteKey } from "./constants/CaptchaConstants.ts";
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
        <GoogleReCaptchaProvider reCaptchaKey={reCaptchaV2SiteKey}>
          <AppRoutes />
          <Breakpoints />
        </GoogleReCaptchaProvider>
      </APIProvider>
    </Suspense>
  );
}

export default App;
