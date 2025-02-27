import React, { ReactElement } from "react";
import { VenueType } from "../../model/Venue.ts";
import { Marker } from "@react-google-maps/api";

export interface VenuePinProps {
  venue: VenueType;
}

const VenuePin = React.memo((props: VenuePinProps): ReactElement => {
  if (!props.venue || !props.venue.latLng) {
    return <></>;
  }

  return <Marker position={props.venue.latLng} label={props.venue.name} />;
});

export default VenuePin;
