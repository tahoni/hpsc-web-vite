import React, { ReactElement } from "react";
import { MarkerClusterer } from "@react-google-maps/api";
import VenuePins, { VenuePinsProps } from "./VenuePins.tsx";

export interface ClusteredVenuePinsProps extends VenuePinsProps {
}

const ClusteredVenuePins = React.memo(
  (props: ClusteredVenuePinsProps): ReactElement => {
    if (!props.venues || props.venues.length === 0) {
      return <></>;
    }

    return (
      <MarkerClusterer averageCenter={true}>
        {() => <VenuePins {...props} />}
      </MarkerClusterer>
    );
  }
);

export default ClusteredVenuePins;
