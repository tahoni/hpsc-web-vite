import { JSX } from "react";
import { VenueEvent } from "../../../../../model/VenueEvent";
import WorldShoot2025Component from "./2025/WorldShoot2025Component";
import { worldShoot2025Event } from "./2025/WorldShoot2025Constants";

export const worldShootEventYears: number[] = [2025];
export const worldShootEvents: Map<number, VenueEvent> = new Map([
  [2025, worldShoot2025Event],
]);
export const worldShootComponents: Map<number, JSX.Element> = new Map([
  [2025, <WorldShoot2025Component />],
]);
