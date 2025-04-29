import React, { ReactElement } from "react";
import WorldShoot2025Content from "./WorldShoot/WorldShoot2025";

const WorldShoots = React.memo((): ReactElement => {
  return (
    <>
      <WorldShoot2025Content />
    </>
  );
});

export default WorldShoots;
