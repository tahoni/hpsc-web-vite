import React, {ReactElement} from "react";
import VenuePin from "./VenuePin.tsx";
import {VenueType} from "../../model/Venue.ts";
import {generateMapVenueKey} from "../../utils/MapUtils.ts";

export interface VenuePinsProps {
  venues: VenueType[];
}

const VenuePins = React.memo((props: VenuePinsProps): ReactElement => {
  if (!props.venues || props.venues.length == 0) {
    return <></>;
  }

  const venues: VenueType[] = props.venues.filter((venue) => venue).map((venue) => venue);

  return (
    <>
      {venues?.map((venue) => (
        <VenuePin key={generateMapVenueKey(venue)} venue={venue} />
      ))}
    </>
  );
});

export default VenuePins;
