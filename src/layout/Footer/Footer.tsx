import {ReactElement} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ShootingRangeMap} from "../../components";
import classes from "./Footer.module.scss"

export const Footer = (): ReactElement => {
    return (
        <Container fluid className={classes.Footer}>
            <Row>
                <Col xs={{span: 12}} md={{span: 8, offset: 2}} className={classes.FooterMap}>
                    <Row>
                        <Col className={classes.FooterMap}>
                            <ShootingRangeMap mapStyle={{width: "25%", height: "9rem"}}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
