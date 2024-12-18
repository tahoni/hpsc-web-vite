import {ReactElement} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {RangeMap} from "../../components";
import {mapHeight, mapWidth} from "../../constants/MapConstants.ts";
import {EUFEES_RANGE, rangeMapPins} from "../../constants/content/Ranges.ts";
import classes from "./Footer.module.scss"
import {RangeType} from "../../model/RangeTypes.tsx";

export const Footer = (): ReactElement => {
    const footerMapRange: string = EUFEES_RANGE;
    const footerMapPins: RangeType[] = [
        rangeMapPins.get(footerMapRange),
    ]

    return (
        <Container fluid className={classes.Footer}>
            <Row>
                <Col xs={{span: 12}} md={{span: 8, offset: 2}} className={classes.FooterMap}>
                    <Row>
                        <Col className={classes.FooterMap}>
                            <RangeMap
                                mapStyle={{width: mapWidth, height: mapHeight}}
                                center={rangeMapPins.get(footerMapRange)?.latLng}
                                pins={footerMapPins}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
