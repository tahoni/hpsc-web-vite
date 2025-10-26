import React, { ReactElement } from "react";
import VenuePin from "./VenuePin.tsx";
import { VenueType } from "../../models/Venue.ts";
import { generateMapVenueKey } from "../../utils/MapUtils.ts";

export interface VenuePinsProps {
  venues: VenueType[];
}

/**
 * `VenuePins` is a memoised React functional component that renders a collection
 * of pins on a map for a list of venue locations. It takes in a set of `VenuePinsProps`
 * and returns a React element containing a series of `VenuePin` components.
 *
 * The component performs the following:
 * - Checks if the `venues` property exists and is non-empty. If not, it renders nothing.
 * - Filters out invalid venues from the provided list of venues.
 * - Maps over the filtered list of venues to generate individual `VenuePin` components.
 *
 * The `key` for each `VenuePin` is generated using the `generateMapVenueKey` function.
 *
 * The component is wrapped with `React.memo` to optimise rendering by avoiding unnecessary re-renders when the props do not change.
 *
 * @param {VenuePinsProps} props - The properties required by the VenuePins component, including a list of venues.
 * @returns {ReactElement} A React fragment containing a list of `VenuePin` components or an empty fragment if no valid venues exist.
 */
const VenuePins = React.memo((props: VenuePinsProps): ReactElement => {
  if (!props.venues || props.venues.length == 0) {
    return <></>;
  }

  const venues: VenueType[] = props.venues
    .filter((venue) => venue)
    .map((venue) => venue);

  return (
    <>
      {venues?.map((venue) => (
        <VenuePin key={generateMapVenueKey(venue)} venue={venue} />
      ))}
    </>
  );
});

export default VenuePins;
