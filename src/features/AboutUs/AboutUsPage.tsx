import React from "react";

/**
 * AboutUsContent is a React component which is asynchronously loaded using React.lazy.
 * It imports the AboutUsContent module from the specified feature path.
 *
 * This component allows for code splitting and deferred loading of the About Us content,
 * improving the initial load time of the application by loading the component only when it is needed.
 */
const AboutUsContent = React.lazy(
  () => import("@features//AboutUs/AboutUsContent")
);

/**
 * A React functional component for rendering the "About Us" page of the application.

 * Uses 'React.memo` for performance optimisation by memoising the component and preventing unnecessary re-renders.
 * This component serves as a wrapper for the AboutUsContent component that contains the main content of the page.
 *
 * @returns {ReactElement} The rendered output of the AboutUsPage component, which includes the AboutUsContent component.
 */
const AboutUsPage = React.memo(() => {
  return (
    <>
      <AboutUsContent />
    </>
  );
});

export default AboutUsPage;
