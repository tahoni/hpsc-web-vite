import { ReactElement } from "react";
import { Route, Routes } from "react-router";
import { Breakpoints, Layout } from "./layout";
import { AboutUsPage, ContactUsPage, HomePage } from "./pages";
import { ImageWithSourceAndDescription } from "@tahoni/tahoni-lib-react";
import {
  imageConstants,
  LEFT_SHOOTER,
  RIGHT_SHOOTER,
} from "./constants/ImageConstants.ts";
import "./App.scss";

function App(): ReactElement {
  const leftSidebarImage: ImageWithSourceAndDescription | undefined =
    imageConstants.get(LEFT_SHOOTER);
  const rightSidebarImage: ImageWithSourceAndDescription | undefined =
    imageConstants.get(RIGHT_SHOOTER);

  return (
    <>
      <Routes>
        <Route
          element={
            <Layout
              leftSideImage={leftSidebarImage}
              rightSideImage={rightSidebarImage}
            />
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/news" element={<HomePage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <Breakpoints />
    </>
  );
}

export default App;
