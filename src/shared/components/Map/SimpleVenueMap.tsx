import React, { ReactElement } from "react";
import VenueMap, { VenueMapProps } from "./VenueMap";
import VenuePins from "./VenuePins";
import { VenueType } from "@models/venues/VenueType";

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
