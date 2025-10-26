import React, { ReactElement } from "react";
import WorldShoot2025MDX from "./WorldShoot2025.mdx";

/**
 * WorldShoot2025Component is a memoized React functional component used to render the
 * WorldShoot2025MDX component. This ensures that the component re-renders only when
 * its props change, optimizing performance.
 *
 * The component leverages React.memo to prevent unnecessary re-renders.
 *
 * It is designed to encapsulate the content provided by WorldShoot2025MDX.
 */
const WorldShoot2025Component = React.memo((): ReactElement => {
  return <WorldShoot2025MDX />;
});

export default WorldShoot2025Component;
