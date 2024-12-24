import React, {ReactElement} from "react";
import {Col, Row} from "react-bootstrap";
import {SimpleVenueMap} from "../../components";
import {VenueType} from "../../model/VenueTypes.ts";
import {mapHeight, mapWidth} from "../../constants/MapConstants.ts";
import {EUFEES_RANGE, rangeMapPins} from "../../constants/content/Ranges.ts";
import classes from "./Footer.module.scss"

export const FooterContent = React.memo(
    (): ReactElement => {

    const footerMapRange: string = EUFEES_RANGE;
    const footerMapPins: VenueType[] = [
        rangeMapPins.get(footerMapRange),
    ]

    return (
        <Row className={classes.FooterContent}>
            <Col xs={{span: 12}} md={{span: 6}} className={classes.FooterMap}>
                <SimpleVenueMap
                    mapStyle={{width: mapWidth, height: mapHeight}}
                    center={rangeMapPins.get(footerMapRange)?.latLng}
                    venues={footerMapPins}
                />
            </Col>
            <Col className={classes.FooterText}>

            </Col>
        </Row>
    )
})
