import React, { ReactElement } from "react";
import VenuesContent from "./VenuesContent";

/**
 * VenuesPage is a memoized functional component in React that renders
 * the primary content for the venues section of the application.
 *
 * This component uses `React.memo` to prevent unnecessary re-renders
 * by memoising the component output. It ensures that the component
 * only re-renders when its props change.
 *
 * The content of the VenuesPage is composed of the VenuesContent component,
 * which encapsulates the specific details and layout of the venues section.
 *
 * @returns The rendered output of the VenuesPage component, which includes the VenuesContent component.
 */
const VenuesPage: React.MemoExoticComponent<() => ReactElement> = React.memo(
  (): ReactElement => {
    return (
      <>
        <VenuesContent />
      </>
    );
  },
);

export default VenuesPage;
