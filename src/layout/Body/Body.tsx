import {ReactElement} from "react";
import {Outlet} from "react-router";
import {Col, Container, Row} from "react-bootstrap";
import classes from "./Body.module.scss";

export const Body = (): ReactElement => {
    return (
        <Container fluid className={classes.body}>
            <Row>
                <Col>
                </Col>
            </Row>
            <Outlet/>
        </Container>
    )
}
