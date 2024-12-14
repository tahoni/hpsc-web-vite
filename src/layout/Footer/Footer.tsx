import {ReactElement} from "react";
import {Col, Container, Row} from "react-bootstrap";
import classes from "./Footer.module.scss"

export const Footer = (): ReactElement => {
    return (
        <Container fluid className={classes.this}>
            <Row>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}
