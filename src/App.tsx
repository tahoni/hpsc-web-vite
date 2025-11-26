import { ReactElement, Suspense } from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Loader } from "@tahoni/tahoni-lib-react";
import { Breakpoints } from "@layouts/Breakpoints";
import { reCaptchaV2SiteKey } from "@components/Captcha";
import { googleMapApiKey } from "@components/Map";
import AppRoutes from "@shared/routes/AppRoutes";
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
