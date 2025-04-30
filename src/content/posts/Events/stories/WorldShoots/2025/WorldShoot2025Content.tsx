import React, { CSSProperties, ReactElement } from "react";
import { Image } from "react-bootstrap";
import SimpleVenueMap from "../../../../../../components/Map/SimpleVenueMap";
import { VenueType } from "../../../../../../model/Venue";
import {
  worldShoot2025Description,
  worldShoot2025LongDates,
  worldShoot2025Link,
  worldShoot2025Location,
  worldShoot2025RangeName,
  worldShoot2025Range,
} from "./WorldShoot2025Constants";
import {
  worldShoot2025Image,
  worldShoot2025MapMode,
  worldShoot2025MapZoom,
} from "./WorldShoot2025Constants";
import WorldShoot2025 from "./WorldShoot2025.mdx";
import classes from "./WorldShoot2025.module.scss";

const WorldShoot2025Content = React.memo((): ReactElement => {
  const mapStyle: CSSProperties = {
    width: classes.mapWidth,
    height: classes.mapHeight,
  };

  const worldShoot2025RangePins: VenueType[] = [worldShoot2025Range];

  return (
    <article className={classes.worldShoot2025}>
      <h3>{worldShoot2025Description}</h3>
      <h4>
        {worldShoot2025LongDates}
        <br />
        {worldShoot2025Location}
      </h4>
      <h5>{worldShoot2025RangeName}</h5>
      <br />
      <a href={worldShoot2025Link} target="_blank">
        <Image
          src={worldShoot2025Image.image}
          alt={worldShoot2025Image.description}
          fluid
          width={250}
        />
      </a>

      <div className={classes.worldShoot2025Summary}>
        <WorldShoot2025 />
      </div>

      <h6>
        {worldShoot2025Range?.name} at {worldShoot2025Range?.city} in{" "}
        {worldShoot2025Range?.province}
      </h6>
      <div className={classes.worldShootRangeMap}>
        <SimpleVenueMap
          mapStyle={mapStyle}
          mapMode={worldShoot2025MapMode}
          zoom={worldShoot2025MapZoom}
          center={worldShoot2025Range?.center ?? worldShoot2025Range?.latLng}
          venues={worldShoot2025RangePins}
        />
      </div>
    </article>
  );
});

export default WorldShoot2025Content;
