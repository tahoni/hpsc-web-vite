import React, {ReactElement} from "react";
import {Marker} from "@react-google-maps/api";
import {VenueType} from "../../model/VenueTypes.tsx";

export interface VenuePinProps {
    venue: VenueType;
}

export const VenuePin = React.memo(
    (props: VenuePinProps): ReactElement => {

        if ((!props.venue) || (!props.venue.latLng)) {
            return (
                <></>
            )
        }

        return (
            <Marker position={props.venue.latLng} label={props.venue.label}/>
        )
    }
)
