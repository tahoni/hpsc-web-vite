import {ReactElement, useRef} from "react";
import {GoogleMap, useJsApiLoader} from "@react-google-maps/api";
import {ShootingRangeLocation} from "./ShootingRangeLocation.tsx";
import {
    DEFAULT_ZOOM,
    GOOGLE_MAP_API_KEY,
} from "../../constants/MapConstants.ts";
import {
    EUFEES_RANGE,
    shootingRanges
} from "../../constants/content/Venues.ts";

const containerStyle = {
  width: '50%',
  height: '100%'
};

export const ShootingRangeMap = (): ReactElement => {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_MAP_API_KEY,
    });

    const googleMapRef = useRef<GoogleMap>(null);

    return (
        <>
            {isLoaded ?
                <GoogleMap
                    ref={googleMapRef}
                    mapContainerStyle={containerStyle}
                    center={shootingRanges.get(EUFEES_RANGE)}
                    zoom={DEFAULT_ZOOM}
                    clickableIcons={true}
                >
                    <ShootingRangeLocation/>
                </GoogleMap>
                :
                <></>
            }
        </>
    )
}
