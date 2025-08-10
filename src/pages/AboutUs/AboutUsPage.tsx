import React from "react";

const AboutUsContent = React.lazy(
  () => import("../../content/pages/AboutUs/AboutUsContent.tsx"),
);

/**
 * A React functional component for rendering the "About Us" page of the application.
 * Uses React.memo for performance optimization by memoizing the component and preventing unnecessary re-renders.
 * This component serves as a wrapper for the AboutUsContent component that contains the main content of the page.
 */
const AboutUsPage = React.memo(() => {
  return (
    <>
      <AboutUsContent />
    </>
  );
});

export default AboutUsPage;
