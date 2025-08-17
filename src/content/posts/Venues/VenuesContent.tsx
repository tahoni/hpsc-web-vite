import React, { ReactElement } from "react";
import { Venue } from "../../../models/Venue.ts";
import { shootingRangeVenues } from "./VenueConstants.ts";

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
