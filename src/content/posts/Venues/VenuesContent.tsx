import React, { CSSProperties, ReactElement } from "react";
import { Venue } from "../../../model/Venue.ts";
import { shootingRangeVenues } from "./VenueConstants.ts";
import ClusteredVenueMap from "../../../components/Map/ClusteredVenueMap.tsx";
import classes from "../../pages/AboutUs/AboutUs.module.scss";

const VenuesContent = React.memo((): ReactElement => {
  const mapStyle: CSSProperties = {
    width: classes.mapWidth,
    height: classes.mapHeight,
  };

  const venues: Venue[] = [];
  shootingRangeVenues.forEach((value) => {
    venues.push(value);
  });

  return (
    <>
      <article></article>
      <article>
        <ClusteredVenueMap venues={venues} mapStyle={mapStyle} />
      </article>
    </>
  );
});
export default VenuesContent;
