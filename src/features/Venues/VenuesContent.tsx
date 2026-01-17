import React, { ReactElement } from "react";
import { Venue } from "@models/venues/Venue";
import { shootingRangeVenues } from "@constants/about/venueConstants";

/**
 * VenuesContent is a React functional component wrapped with React.memo for performance optimisation.
 * It processes a list of shooting range venues and prepares the necessary data for rendering.
 *
 * This component loops through the `shootingRangeVenues` array and populates the `venues` array with its elements.
 *
 * @returns {ReactElement} A React fragment containing the structured render elements.
 */
const VenuesContent = React.memo((): ReactElement => {
  const venues: Venue[] = [];
  shootingRangeVenues.forEach((value) => {
    venues.push(value);
  });

  return (
    <>
      <article></article>
    </>
  );
});
export default VenuesContent;
