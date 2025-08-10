import React, { ReactElement } from "react";
import { AdvancedMarker } from "@vis.gl/react-google-maps";
import { VenueType } from "../../models/Venue.ts";

export interface VenuePinProps {
  venue: VenueType;
}

/**
 * VenuePin is a React functional memoised component that renders an AdvancedMarker
 * on a map based on the latitude and longitude values provided in the `venue` prop.
 *
 * The component checks if the `venue` prop and its `latLng` property are defined
 * before rendering the marker. If either is undefined, it returns an empty fragment.
 *
 * Props:
 * - venue (VenuePinProps.venue): The venue object containing location details and optional metadata.
 *   - latLng: An object with `lat` (latitude) and `lng` (longitude) values representing the venue's coordinates.
 *   - name: A string representing the name of the venue, used as the title in the rendered marker.
 *
 * Returns:
 * - ReactElement: An AdvancedMarker component with the specified position and title, or an empty
 *   fragment if required data is missing.
 */
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
