import React, { ReactElement } from "react";
import NotFound from "../../components/NotFound/NotFound.tsx";

const PageNotFound = React.memo((): ReactElement => {
  return (
    <>
      <NotFound message="the page you are looking for does not exist" />
    </>
  );
});

export default PageNotFound;
