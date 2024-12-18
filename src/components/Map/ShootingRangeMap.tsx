import React, {CSSProperties, ReactElement, useRef} from "react";
import {GoogleMap, LoadScript} from "@react-google-maps/api";
import {ShootingRangeLocation} from "./ShootingRangeLocation.tsx";
import {
    DEFAULT_ZOOM,
    GOOGLE_MAP_API_KEY,
} from "../../constants/MapConstants.ts";
import {EUFEES_RANGE, shootingRanges} from "../../constants/content/Venues.ts";
import classes from "./ShootingRangeMap.module.scss";

interface ShootingRangeMapProps {
    mapStyle: CSSProperties;
}

export const ShootingRangeMap = React.memo(
        (props: ShootingRangeMapProps): ReactElement => {

    const googleMapRef = useRef<GoogleMap>(null);

    return (
        <div className={classes.ShootingRangeMap}>
            <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY}>
                        <GoogleMap
                            ref={googleMapRef}
                            mapContainerStyle={{...props.mapStyle, font: 'Noto Sans'}}
                            center={shootingRanges.get(EUFEES_RANGE)}
                            zoom={DEFAULT_ZOOM}
                            clickableIcons={true}
                        >
                            <ShootingRangeLocation/>
                        </GoogleMap>
            </LoadScript>
        </div>
    )
});
