/**
 * @packageDocumentation
 *
 * Constants related to Google Maps configuration and default settings.
 *
 * This module exports constants used for initialising and configuring Google Maps
 * within the application, including the API key retrieved from environment variables,
 * default zoom level, and default map type.
 *
 * @remarks
 * The API key is loaded from environment variables using Vite's import.meta.env feature.
 * Ensure the VITE_GOOGLE_MAPS_API_KEY is set in the appropriate .env file.
 */

export const googleMapApiKey: string = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
export const googleMapDefaultZoom: number = 13;
export const googleMapDefaultTypeId: string = "roadmap";
