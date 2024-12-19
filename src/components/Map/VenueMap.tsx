import React, {CSSProperties, ReactElement, useRef} from "react";
import {GoogleMap, useJsApiLoader} from "@react-google-maps/api";
import {VenueMapLatLngType} from "../../model/VenueTypes.tsx";
import {textFontName} from "../../constants/AppConstants.ts";
import {
    googleMapApiKey,
    googleMapDefaultZoom
} from "../../constants/MapConstants.ts";
import classes from "./VenueMap.module.scss";

export interface VenueMapProps {
    mapStyle: CSSProperties;
    center?: VenueMapLatLngType;
    zoom?: number;
    child?: ReactElement;
}

export const VenueMap = React.memo(
    (props: VenueMapProps): ReactElement => {

    const {isLoaded} = useJsApiLoader({
        id: 'google-simple-map-script',
        googleMapsApiKey: googleMapApiKey,
        preventGoogleFontsLoading: true,
    })

    const googleMapRef = useRef<GoogleMap>(null);

    return (
        <div className={classes.VenueMap}>
            {isLoaded ?
                <GoogleMap
                    ref={googleMapRef}
                    mapContainerStyle={{...props.mapStyle, font: textFontName}}
                    center={props.center}
                    zoom={props.zoom ? props.zoom : googleMapDefaultZoom}
                    clickableIcons={true}
                    children={[props.child]}
                />
            :
                <></>
            }
        </div>
    )
})
