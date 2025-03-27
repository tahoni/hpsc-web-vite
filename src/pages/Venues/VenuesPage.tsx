import React, { ReactElement } from "react";
import VenuesContent from "../../content/posts/Venues/VenuesContent.tsx";

const VenuesPage = React.memo((): ReactElement => {
  return (
    <>
      <VenuesContent />
    </>
  );
});

export default VenuesPage;
