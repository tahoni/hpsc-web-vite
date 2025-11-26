import React, { ReactElement } from "react";
import VenuesContent from "./VenuesContent";

/**
 * VenuesPage is a memoized functional component in React that renders
 * the primary content for the venues section of the application.
 *
 * This component uses `React.memo` to prevent unnecessary re-renders
 * by memoizing the component output. It ensures that the component
 * only re-renders when its props change.
 *
 * The content of the VenuesPage is composed of the VenuesContent component,
 * which encapsulates the specific details and layout of the venues section.
 *
 * @constant
 * @type {React.NamedExoticComponent}
 * @returns {ReactElement} The rendered React element for the venues page.
 */
const VenuesPage = React.memo((): ReactElement => {
  return (
    <>
      <VenuesContent />
    </>
  );
});

export default VenuesPage;
