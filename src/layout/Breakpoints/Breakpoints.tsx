import React, { ReactElement } from "react";
import { Breakpoints as TahoniBreakpoints } from "@tahoni/tahoni-lib-react/dist";

export const Breakpoints = React.memo((): ReactElement => {
  return (
    <>
      {import.meta.env.VITE_SHOW_BREAKPOINTS == "true" ? (
        <TahoniBreakpoints />
      ) : (
        <></>
      )}
    </>
  );
});
