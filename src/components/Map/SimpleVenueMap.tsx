import React, {ReactElement} from "react";
import {VenueMap, VenueMapProps} from "./VenueMap.tsx";
import {VenuePins} from "./VenuePins.tsx";
import {VenueType} from "../../model/VenueTypes.ts";
import classes from "./VenueMap.module.scss";

interface SimpleVenueMapProps extends VenueMapProps {
    venues: VenueType[];
}

export const SimpleVenueMap = React.memo(
        (props: SimpleVenueMapProps): ReactElement => {

        return (
            <div className={classes.SimpleVenueMap}>
                <VenueMap {...props}>
                    <VenuePins venues={props.venues}/>
                </VenueMap>
            </div>
        )
    }
)
