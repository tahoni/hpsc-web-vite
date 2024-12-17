import {ReactElement, useRef} from "react";
import {GoogleMap, useJsApiLoader} from "@react-google-maps/api";
import {ShootingRangeLocation} from "./ShootingRangeLocation.tsx";

const containerStyle = {
  width: '50%',
  height: '100%'
};

const center = {
  lat: -25.785894221414374,
  lng: 28.172921002448536
};

export const ShootingRangeMap = (): ReactElement => {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDzipCOOttI97zheBOmsdIJGQx4HR1plsU"
    });

    const googleMapRef = useRef<GoogleMap>(null);

    return (
        <>
            {isLoaded ?
                <GoogleMap
                    ref={googleMapRef}
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
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
