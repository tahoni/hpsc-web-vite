import {ReactElement} from "react";
import {Col, Container, Row} from "react-bootstrap";
import classes from "./Footer.module.scss"

export const Footer = (): ReactElement => {
    return (
        <Container fluid className={classes.Footer}>
            <Row className={classes.FooterInner}>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}
