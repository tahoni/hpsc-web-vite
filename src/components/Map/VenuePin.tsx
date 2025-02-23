import React, { ReactElement } from "react";
import { VenueType } from "../../model/Venue.ts";

export interface VenuePinProps {
  venue: VenueType;
}

const Marker = React.lazy(() => import("./DefaultMarker.tsx"));

const VenuePin = React.memo((props: VenuePinProps): ReactElement => {
  if (!props.venue || !props.venue.latLng) {
    return <></>;
  }

  return <Marker position={props.venue.latLng} label={props.venue.label} />;
});

export default VenuePin;
