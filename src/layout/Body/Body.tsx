import {ReactElement} from "react";
import {Outlet} from "react-router";
import {Col, Container, Row} from "react-bootstrap";
import classes from "./Body.module.scss";

export const Body = (): ReactElement => {
    return (
        <Container>
            <Row className={classes.this}>
                <Col>
                    <Outlet/>
                </Col>
            </Row>
        </Container>
    )
}
