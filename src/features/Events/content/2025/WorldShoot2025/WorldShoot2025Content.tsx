import React, { CSSProperties, PropsWithChildren, ReactElement } from "react";
import { Image } from "react-bootstrap";
import { SimpleVenueMap } from "@components/Map";
import { YouTubeVideo } from "@components/Video";
import { VenueEvent } from "@/models/venues/VenueEvent.ts";
import { VenueType } from "@/models/venues/VenueType.ts";
import { worldShootEvents } from "./WorldShootConstants.tsx";
import classes from "./WorldShoot.module.scss";

export interface WorldShootContentProps {
  year: number;
}

/**
 * A memoised React component that displays content related to a World Shoot event.
 *
 * This component renders event-specific information such as descriptions, dates, location,
 * images, links to external resources, and a map with venue details.
 *
 * @param {PropsWithChildren<WorldShootContentProps>} props - The properties passed to this component.
 * @returns {ReactElement} A React element representing the World Shoot event content, or an empty fragment if no event is found for the provided year.
 */
const WorldShoot2025Content = React.memo(
  (props: PropsWithChildren<WorldShootContentProps>): ReactElement => {
    const worldShootEvent: VenueEvent | undefined = worldShootEvents.get(
      props.year,
    );
    if (worldShootEvent === undefined) {
      return <></>;
    }

    const mapStyle: CSSProperties = {
      width: classes.mapWidth,
      height: classes.mapHeight,
    };

    const worldShootRangePins: VenueType[] = [worldShootEvent.shootingRange];

    return (
      <article className={classes.worldShoot}>
        <h3>{worldShootEvent.description}</h3>
        <h4>
          {worldShootEvent.longDates}
          <br />
          {worldShootEvent.location}
        </h4>
        <h5>{worldShootEvent.shootingRangeName}</h5>
        <br />
        {worldShootEvent.images.length > 0 && worldShootEvent.images[0] && (
          <a href={worldShootEvent.link} target="_blank">
            <Image
              src={worldShootEvent.images[0].image}
              alt={worldShootEvent.images[0].description}
              fluid
              width={worldShootEvent.imageWidth}
            />
          </a>
        )}

        <div className={classes.worldShootSummary}>{props.children}</div>

        {/*
        <h6>Apparel</h6>
        <div className={classes.worldShootSummary}>
          <p>
            <a href={worldShootEvent.apparelLink} target="_blank">
              {worldShootEvent.apparelDescription}
            </a>
          </p>
        </div>
        <br />
*/}

        <h6>
          {worldShootEvent.shootingRangeName} at{" "}
          {worldShootEvent.shootingRange?.city} in{" "}
          {worldShootEvent.shootingRange?.province}
        </h6>

        <div className={classes.worldShootRangeVideo}>
          <YouTubeVideo url="https://www.youtube.com/embed/COcWeS1XP-M?si=ax7D5KhwA4alKLaJ" />
        </div>

        <div className={classes.worldShootRangeMap}>
          <SimpleVenueMap
            mapStyle={mapStyle}
            mapMode={worldShootEvent.mapMode}
            zoom={worldShootEvent.mapZoom}
            center={
              worldShootEvent.shootingRange?.center ??
              worldShootEvent.shootingRange?.latLng
            }
            venues={worldShootRangePins}
          />
        </div>
      </article>
    );
  },
);

export default WorldShoot2025Content;
