import React, {ReactElement} from "react";
import {VenueMap, VenueMapProps} from "./VenueMap.tsx";
import {
    ClusteredVenuePins,
    ClusteredVenuePinsProps
} from "./ClusteredVenuePins.tsx";
import classes from "./VenueMap.module.scss";

interface ClusteredVenueMapProps extends VenueMapProps {
    venues: ClusteredVenuePinsProps;
}

export const ClusteredVenueMap = React.memo(
    (props: ClusteredVenueMapProps): ReactElement => {

        return (
            <div className={classes.ClusteredVenuesMap}>
                <VenueMap {...props}>
                    <ClusteredVenuePins {...props.venues}/>
                </VenueMap>
            </div>
        )
    }
)
