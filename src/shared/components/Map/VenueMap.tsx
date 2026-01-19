import React, { CSSProperties, PropsWithChildren, ReactElement } from "react";
import { VenueMapLatLngType } from "@/models/venues/VenueType";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { googleMapApiKey, googleMapDefaultTypeId, googleMapDefaultZoom } from "./MapConstants.ts";
import { generateMapKey } from "@features/Venues/MapUtils.ts";

/**
 * Represents the properties required to configure and render a venue map component.
 *
 * @interface VenueMapProps
 *
 * @property {CSSProperties} mapStyle
 * The styling applied to the map container.
 *
 * @property {string} [mapId]
 * Optional identifier for the map. Used to differentiate between multiple maps or reference specific configurations.
 *
 * @property {VenueMapLatLngType} [center]
 * Optional latitude and longitude coordinates specifying the initial center of the map.
 *
 * @property {number} [zoom]
 * Optional zoom level for the map. Determines the initial scale of the map view.
 *
 * @property {string} [mapMode]
 * Optional mode for the map. Can be used to set specific rendering behaviors or configuration modes.
 */
export interface VenueMapProps {
  mapStyle: CSSProperties;
  mapId?: string;
  center?: VenueMapLatLngType;
  zoom?: number;
  mapMode?: string;
}

/**
 * VenueMap is a memoised React functional component that renders an interactive map using Google Maps API.
 * It accepts props to configure the map's appearance, behaviour, and centre location.
 *
 * Props:
 * - `center`: Specifies the latitude and longitude of the map's centre.
 * - `mapStyle`: Defines the CSS styling for the map container.
 * - `mapMode`: Determines the type of map to render (e.g. roadmap, satellite).
 * - `zoom`: Sets the initial zoom level of the map.
 * - `children`: React children components, typically used for rendering additional map elements like markers or overlays.
 *
 * The component uses `APIProvider` to supply the Google Maps API key and `Map` to render the map interface.
 */
const VenueMap = React.memo(
  (props: PropsWithChildren<VenueMapProps>): ReactElement => {
    return (
      <div>
        <APIProvider apiKey={googleMapApiKey}>
          <Map
            mapId={props.mapId ?? generateMapKey(props.center)}
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
