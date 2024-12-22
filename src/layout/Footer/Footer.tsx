import React, {ReactElement} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {VenueType} from "../../model/VenueTypes.tsx";
import {SimpleVenueMap} from "../../components";
import {mapHeight, mapWidth} from "../../constants/MapConstants.ts";
import {EUFEES_RANGE, rangeMapPins} from "../../constants/content/Ranges.ts";
import {ngpsaLogo, sapsaLogo} from "../../constants/AppConstants.ts";
import NGPSALogo from "../../assets/images/logos/ngpsa-logo.png";
import SAPSALogo from "../../assets/images/logos/sapsa-logo.png";
import layoutClasses from "../Layout.module.scss";
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
                <Col xs={{span: 6}} md={{span: 2}} className={layoutClasses.LogoContainer}>
                    <a href={ngpsaLogo} target="_blank">
                        <Image src={NGPSALogo} alt="NGPSA logo" className={`${layoutClasses.Logo} ${layoutClasses.LeftLogo}}`}/>
                    </a>
                </Col>
                <Col xs={{span: 12}} md={{span: 8}} className={classes.FooterCenter}>
                        <Row className={classes.FooterContent}>
                            <Col className={classes.FooterMap}>
                                <SimpleVenueMap
                                    mapStyle={{width: mapWidth, height: mapHeight}}
                                    center={rangeMapPins.get(footerMapRange)?.latLng}
                                    venues={footerMapPins}
                                />
                            </Col>
                            <Col className={classes.FooterText}>

                            </Col>
                        </Row>
                </Col>
                <Col xs={{span: 6}} md={{span: 2}} className={layoutClasses.LogoContainer}>
                    <a href={sapsaLogo} target="_blank">
                        <Image src={SAPSALogo} alt="SAPSA logo" className={`${layoutClasses.Logo} ${layoutClasses.RightLogo}`}/>
                    </a>
                </Col>
            </Row>
        </Container>
    )
})
