import React, {
  CSSProperties,
  PropsWithChildren,
  ReactElement,
  Suspense,
  useRef
} from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { VenueMapLatLngType } from "../../model/Venue.ts";
import { textFontName } from "../../constants/AppConstants.ts";
import {
  googleMapApiKey,
  googleMapDefaultZoom
} from "../../constants/MapConstants.ts";
import classes from "./VenueMap.module.scss";
import { Loader } from "@tahoni/tahoni-lib-react";

export interface VenueMapProps {
  mapStyle: CSSProperties;
  center?: VenueMapLatLngType;
  zoom?: number;
  mapMode?: string;
}

const GoogleMap = React.lazy(() => import("./DefaultGoogleMap.tsx"));

const VenueMap = React.memo(
  (props: PropsWithChildren<VenueMapProps>): ReactElement => {
    const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: googleMapApiKey,
      preventGoogleFontsLoading: true
    });

    const googleMapRef = useRef(null);

    return (
      <Suspense fallback={<Loader isLoading={true} key={"venueMap"} />}>
        <div className={classes.VenueMap}>
          {isLoaded ? (
            <GoogleMap
              ref={googleMapRef}
              mapContainerStyle={{ ...props.mapStyle, font: textFontName }}
              center={props.center}
              zoom={props.zoom ? props.zoom : googleMapDefaultZoom}
              clickableIcons={true}
              mapTypeId={props.mapMode}
            >
              {props.children}
            </GoogleMap>
          ) : (
            <></>
          )}
        </div>
      </Suspense>
    );
  }
);

export default VenueMap;
