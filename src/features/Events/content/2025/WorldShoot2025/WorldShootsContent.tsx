import React, { ReactElement } from "react";
import { worldShootComponents, worldShootEventYears } from "./WorldShootConstants.tsx";
import WorldShoot2025Content from "./WorldShoot2025Content.tsx";

/**
 * `WorldShootsContent` is a React memoised functional component that renders a section containing a list of `WorldShootContent` components. Each `WorldShootContent` represents a year's world shooting event, dynamically created based on the `worldShootEventYears` array.
 *
 * This component maps through an array of years (`worldShootEventYears`) and constructs individual child components, passing the year and its corresponding components from a map (`worldShootComponents`) as props.
 *
 * The `key` for each child is dynamically generated using the year, its index, and a specific naming pattern to ensure unique identification for React's reconciliation process.
 *
 * @type {React.MemoExoticComponent<() => ReactElement>}
 */
const WorldShootsContent = React.memo((): ReactElement => {
  return (
    <section>
      {worldShootEventYears.map((year: number, index: number) => {
        return (
          <WorldShoot2025Content
            year={year}
            key={"worldShoot_" + "_" + year + "_" + index}
          >
            {worldShootComponents.get(year)}
          </WorldShoot2025Content>
        );
      })}
    </section>
  );
});

export default WorldShootsContent;
