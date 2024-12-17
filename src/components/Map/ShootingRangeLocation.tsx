import {ReactElement} from "react";
import {Image} from "react-bootstrap";
import ipscTarget from "../../assets/images/pictures/ipsc-target-with-bullet-holes.png";

export const ShootingRangeLocation = (): ReactElement => {
    return (
        <>
            <Image src={ipscTarget} alt="Test"/>
        </>
    )
}
