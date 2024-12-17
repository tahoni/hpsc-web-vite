import {ReactElement} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Outlet} from "react-router";
import classes from "./Content.module.scss";

export const Content = (): ReactElement => {
    return (
        <Container fluid className={classes.Content}>
            <Row className={classes.ContentInner}>
                <Col>
                    <Outlet/>
                </Col>
            </Row>
        </Container>
    )
}
