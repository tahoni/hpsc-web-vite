import React, { ReactElement } from "react";
import WorldShootContent from "./WorldShootContent";
import {
  worldShootComponents,
  worldShootEventYears,
} from "./WorldShootConstants";

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
