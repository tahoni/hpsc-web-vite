import {ReactElement} from "react";
import {Image} from "react-bootstrap";
import {imageConstants} from "../../constants/ImageConstants.ts";
import {EUFEES_RANGE} from "../../constants/content/Venues.ts";
import {ImageWithSourceAndDescription} from "@tahoni/tahoni-lib-react";

export const ShootingRangeLocation = (): ReactElement => {
    const eufeesShootingRange: ImageWithSourceAndDescription | undefined = imageConstants.get(EUFEES_RANGE);

    return (
        <>
            <Image src={eufeesShootingRange?.image} alt={eufeesShootingRange?.description}/>
        </>
    )
}
