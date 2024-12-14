import {ReactElement} from "react";
import {Outlet} from "react-router";
import {Col, Container, Row} from "react-bootstrap";

export const Body = (): ReactElement => {
    return (
        <Container>
            <Row className="align-content-center justify-content-center">
                <Col>
                    <Outlet/>
                </Col>
            </Row>
        </Container>
    )
}
