import React, { ReactElement } from "react";
import VenueMap, { VenueMapProps } from "./VenueMap.tsx";
import VenuePins from "./VenuePins.tsx";
import { VenueType } from "../../models/Venue.ts";

interface SimpleVenueMapProps extends VenueMapProps {
  venues: VenueType[];
}

const SimpleVenueMap = React.memo(
  (props: SimpleVenueMapProps): ReactElement => {
    return (
      <div>
        <VenueMap {...props}>
          <VenuePins venues={props.venues} />
        </VenueMap>
      </div>
    );
  },
);

export default SimpleVenueMap;
