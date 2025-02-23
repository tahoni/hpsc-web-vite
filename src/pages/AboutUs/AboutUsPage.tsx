import React from "react";

const AboutUsContent = React.lazy(() => import("../../content/pages/AboutUs/AboutUsContent.tsx"));

const AboutUsPage = React.memo(() => {
  return (
    <>
      <AboutUsContent />
    </>
  );
});

export default AboutUsPage;
