import React, { ReactElement } from "react";
import { AdvancedMarker } from "@vis.gl/react-google-maps";
import { VenueType } from "../../models/Venue.ts";

export interface VenuePinProps {
  venue: VenueType;
}

const VenuePin = React.memo((props: VenuePinProps): ReactElement => {
  if (!props.venue || !props.venue.latLng) {
    return <></>;
  }

  return (
    <AdvancedMarker
      position={{
        lat: props.venue.latLng.lat ?? 0,
        lng: props.venue.latLng.lng ?? 0,
      }}
      title={props.venue.name}
    />
  );
});

export default VenuePin;
