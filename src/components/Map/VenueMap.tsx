import React, {
  CSSProperties,
  PropsWithChildren,
  ReactElement,
  useRef,
} from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { VenueMapLatLngType } from "../../model/Venue.ts";
import { textFontName } from "../../constants/AppConstants.ts";
import {
  googleMapApiKey,
  googleMapDefaultZoom,
} from "../../constants/MapConstants.ts";
import classes from "./VenueMap.module.scss";

export interface VenueMapProps {
  mapStyle: CSSProperties;
  center?: VenueMapLatLngType;
  zoom?: number;
  mapTypeId?: google.maps.MapTypeId;
}

export const VenueMap = React.memo(
  (props: PropsWithChildren<VenueMapProps>): ReactElement => {
    const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: googleMapApiKey,
      preventGoogleFontsLoading: true,
    });

    const googleMapRef = useRef<GoogleMap>(null);

    return (
      <div className={classes.VenueMap}>
        {isLoaded ? (
          <GoogleMap
            ref={googleMapRef}
            mapContainerStyle={{ ...props.mapStyle, font: textFontName }}
            center={props.center}
            zoom={props.zoom ? props.zoom : googleMapDefaultZoom}
            clickableIcons={true}
            mapTypeId={props.mapTypeId}
          >
            {props.children}
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    );
  },
);
