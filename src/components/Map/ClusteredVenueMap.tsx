import React, { ReactElement } from "react";
import { VenueMap, VenueMapProps } from "./VenueMap.tsx";
import { ClusteredVenuePins } from "./ClusteredVenuePins.tsx";
import { VenueType } from "../../model/Venue.ts";
import classes from "./VenueMap.module.scss";

interface ClusteredVenueMapProps extends VenueMapProps {
  venues: VenueType[];
}

export const ClusteredVenueMap = React.memo(
  (props: ClusteredVenueMapProps): ReactElement => {
    return (
      <div className={classes.ClusteredVenuesMap}>
        <VenueMap {...props}>
          <ClusteredVenuePins venues={props.venues} />
        </VenueMap>
      </div>
    );
  },
);
