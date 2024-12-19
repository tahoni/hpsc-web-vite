import React, {ReactElement} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {VenueType} from "../../model/VenueTypes.tsx";
import {SimpleVenueMap} from "../../components";
import {mapHeight, mapWidth} from "../../constants/MapConstants.ts";
import {EUFEES_RANGE, rangeMapPins} from "../../constants/content/Ranges.ts";
import {ngpsaLogo, sapsaLogo} from "../../constants/AppConstants.ts";
import NGPSALogo from "../../assets/images/logos/ngpsa-logo.png";
import SAPSALogo from "../../assets/images/logos/sapsa-logo.png";
import classes from "./Footer.module.scss"

export const Footer = React.memo(
    (): ReactElement => {
    const footerMapRange: string = EUFEES_RANGE;
    const footerMapPins: VenueType[] = [
        rangeMapPins.get(footerMapRange),
    ]

    return (
        <Container fluid className={classes.Footer}>
            <Row>
                <Col xs={{span: 6}} md={{span: 2}} className={classes.HeaderLogo}>
                    <a href={ngpsaLogo} target="_blank">
                        <Image src={NGPSALogo} alt="NGPSA logo" className={classes.LeftLogo}/>
                    </a>
                </Col>
                <Col xs={{span: 12}} md={{span: 8}} className={classes.FooterMap}>
                    <Row>
                        <Col className={classes.FooterCenter}>
                            <Row>
                                <Col className={classes.FooterMap}>
                                    <SimpleVenueMap
                                        mapStyle={{width: mapWidth, height: mapHeight}}
                                        center={rangeMapPins.get(footerMapRange)?.latLng}
                                        venues={footerMapPins}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col className={classes.FooterContacts}>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xs={{span: 6}} md={{span: 2}} className={classes.FooterLogo}>
                    <a href={sapsaLogo} target="_blank">
                        <Image src={SAPSALogo} alt="SAPSA logo" className={classes.RightLogo}/>
                    </a>
                </Col>
            </Row>
        </Container>
    )
})
