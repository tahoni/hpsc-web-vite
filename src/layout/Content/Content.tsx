import React, { ReactElement } from "react";
import { Outlet } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Content.module.scss";

export const Content = React.memo((): ReactElement => {
  return (
    <Container fluid className={classes.content}>
      <Row className={classes.contentInner}>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
});
