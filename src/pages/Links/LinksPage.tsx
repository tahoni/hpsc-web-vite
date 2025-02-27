import React, { ReactElement } from "react";
import LinksContent from "../../content/pages/Links/LinksContent.tsx";

const LinksPage = React.memo((): ReactElement => {
  return (
    <>
      <LinksContent />
    </>
  );
});

export default LinksPage;
