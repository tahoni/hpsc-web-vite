import React, { ReactElement } from "react";
import WorldShootContent from "./WorldShootContent";
import {
  worldShootComponents,
  worldShootEventYears,
} from "./WorldShootConstants";

const WorldShootsContent = React.memo((): ReactElement => {
  return (
    <section>
      {worldShootEventYears.map((year: number, index: number) => {
        return (
          <WorldShootContent
            year={year}
            key={"worldShoot_" + "_" + year + "_" + index}
          >
            {worldShootComponents.get(year)}
          </WorldShootContent>
        );
      })}
    </section>
  );
});

export default WorldShootsContent;
