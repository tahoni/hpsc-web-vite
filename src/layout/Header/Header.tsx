import {ReactElement} from "react";
import {Col, Container, Row} from "react-bootstrap";
import classes from "./Header.module.scss";

export const Header = (): ReactElement => {
    return (
        <Container fluid className={classes.header}>
            <Row>
                <Col>

                </Col>
            </Row>
        </Container>
    )
}
