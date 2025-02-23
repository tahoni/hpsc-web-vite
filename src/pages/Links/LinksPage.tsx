import React, { ReactElement } from "react";

const LinksContent = React.lazy(() => import("../../content/pages/Links/LinksContent.tsx"));

const LinksPage = React.memo((): ReactElement => {
  return (
    <>
      <LinksContent />
    </>
  );
});

export default LinksPage;
