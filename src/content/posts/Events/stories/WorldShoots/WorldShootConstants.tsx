import { JSX } from "react";
import { VenueEvent } from "../../../../../models/VenueEvent";
import WorldShoot2025Component from "./2025/WorldShoot2025Component";
import { worldShoot2025Event } from "./2025/WorldShoot2025Constants";

/**
 * @packageDocumentation
 * Constants and components related to World Shoot events.
 * Provides mappings between event years, event data, and their corresponding
 * React components for rendering World Shoot information.
 */

export const worldShootEventYears: number[] = [2025];
export const worldShootEvents: Map<number, VenueEvent> = new Map([
  [2025, worldShoot2025Event],
]);
export const worldShootComponents: Map<number, JSX.Element> = new Map([
  [2025, <WorldShoot2025Component />],
]);
