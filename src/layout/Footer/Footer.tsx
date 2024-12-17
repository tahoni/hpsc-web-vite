import {ReactElement} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ShootingRangeMap} from "../../components";
import classes from "./Footer.module.scss"

export const Footer = (): ReactElement => {
    return (
        <Container fluid className={classes.Footer}>
            <Row className={classes.FooterInner}>
                <Col>
                    <ShootingRangeMap/>
                </Col>
            </Row>
        </Container>
    )
}
