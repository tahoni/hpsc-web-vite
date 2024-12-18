import React, {CSSProperties, ReactElement, useRef} from "react";
import {GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api";
import {RangeMapLatLngType, RangeType} from "../../model/RangeTypes.tsx";
import {
    googleMapApiKey,
    googleMapDefaultZoom
} from "../../constants/MapConstants.ts";
import classes from "./RangeMap.module.scss";

interface RangeMapProps {
    mapStyle: CSSProperties;
    center: RangeMapLatLngType;
    zoom?: number;
    pins?: RangeType[];
}

export const RangeMap = React.memo(
        (props: RangeMapProps): ReactElement => {

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: googleMapApiKey,
        preventGoogleFontsLoading: true,
    })

    const googleMapRef = useRef<GoogleMap>(null);

    return (
        <div className={classes.ShootingRangeMap}>
            {isLoaded ?
                <GoogleMap
                    ref={googleMapRef}
                    mapContainerStyle={{...props.mapStyle, font: 'Noto Sans'}}
                    center={props.center}
                    zoom={props.zoom ? props.zoom : googleMapDefaultZoom}
                    clickableIcons={true}
                >
                    {((props.pins) && (props.pins.length > 0)) ?
                        props.pins.map((pin, i) => {
                            if ((pin) && (pin.latLng) && (pin.name)) {
                                return (
                                    <Marker key={i} position={pin.latLng}/>
                                )
                            } else {
                                return (
                                    <></>
                                )
                            }
                        })
                    :
                        <></>
                    }
                </GoogleMap>
            :
                <></>
            }
        </div>
    )
});
