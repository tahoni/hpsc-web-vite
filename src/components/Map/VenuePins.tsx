import React, { ReactElement, useState } from "react";
import { VenuePin } from "./VenuePin.tsx";
import { Venue, VenueType } from "../../model/VenueTypes.tsx";
import { generateMapVenueKey } from "../../utils/MapUtils.ts";

export interface VenuePinsProps {
  venues: VenueType[];
}

export const VenuePins = React.memo((props: VenuePinsProps): ReactElement => {
  if (!props.venues || props.venues.length == 0) {
    return <></>;
  }

  const [venues] = useState<Venue[]>(
    props.venues.filter((venue) => venue).map((venue) => venue as Venue),
  );

  return (
    <>
      {venues?.map((venue) => (
        <VenuePin key={generateMapVenueKey(venue)} venue={venue} />
      ))}
    </>
  );
});
