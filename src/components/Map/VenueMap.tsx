import React, { CSSProperties, PropsWithChildren, ReactElement } from "react";
import { VenueMapLatLngType } from "../../models/Venue.ts";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import {
  googleMapApiKey,
  googleMapDefaultTypeId,
  googleMapDefaultZoom,
} from "../../constants/MapConstants.ts";
import { generateMapKey } from "../../utils/MapUtils.ts";
import classes from "./VenueMap.module.scss";

export interface VenueMapProps {
  mapStyle: CSSProperties;
  center?: VenueMapLatLngType;
  zoom?: number;
  mapMode?: string;
}

const VenueMap = React.memo(
  (props: PropsWithChildren<VenueMapProps>): ReactElement => {
    return (
      <div className={classes.VenueMap}>
        <APIProvider apiKey={googleMapApiKey}>
          <Map
            mapId={generateMapKey(props.center)}
            style={props.mapStyle}
            mapTypeId={props.mapMode?.toLowerCase() ?? googleMapDefaultTypeId}
            defaultCenter={{
              lat: props.center?.lat ?? 0,
              lng: props.center?.lng ?? 0,
            }}
            defaultZoom={props.zoom ?? googleMapDefaultZoom}
          >
            {props.children}
          </Map>
        </APIProvider>
      </div>
    );
  },
);

export default VenueMap;
