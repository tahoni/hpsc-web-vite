import React, { CSSProperties, ReactElement } from "react";
import { Image } from "react-bootstrap";
import SimpleVenueMap from "../../../../../components/Map/SimpleVenueMap";
import { VenueType } from "../../../../../model/Venue";
import {
  ShootingRanges,
  shootingRangeVenues,
} from "../../../Venues/VenueConstants";
import WorldShoot2025 from "./WorldShoot2025.mdx";
import {
  worldShoot2025,
  worldShoot2025Date,
  worldShoot2025Link,
  worldShoot2025Location,
  worldShoot2025Venue,
} from "../../EventsConstants";
import { worldShoot2025Image } from "../../EventsConstants";

const WorldShoot2025Content = React.memo((): ReactElement => {
  const mapStyle: CSSProperties = {
    width: 500,
    height: 500,
  };

  const frontierShootingRange: VenueType = shootingRangeVenues.get(
    ShootingRanges.FRONTIER,
  );
  const shootingRangePins: VenueType[] = [frontierShootingRange];

  return (
    <>
      <h3>{worldShoot2025}</h3>
      <h4>
        {worldShoot2025Date}
        <br />
        {worldShoot2025Location}
      </h4>
      <h5>{worldShoot2025Venue}</h5>
      <br />
      <a href={worldShoot2025Link} target="_blank" rel="noreferrer">
        <Image
          src={worldShoot2025Image.image}
          alt={worldShoot2025Image.description}
          fluid
          width={250}
        />
      </a>

      <WorldShoot2025 />

      <h6>
        {frontierShootingRange?.name} at {frontierShootingRange?.city} in{" "}
        {frontierShootingRange?.province}
      </h6>
      <SimpleVenueMap
        mapStyle={mapStyle}
        mapMode="satellite"
        zoom={17}
        center={frontierShootingRange?.center ?? frontierShootingRange?.latLng}
        venues={shootingRangePins}
      />
    </>
  );
});

export default WorldShoot2025Content;
