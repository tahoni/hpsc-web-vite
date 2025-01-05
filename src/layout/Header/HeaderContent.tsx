import React, { ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Header.module.scss";
import { HeaderMenu } from "./HeaderMenu.tsx";

interface HeaderContentProps {
  title: string;
}

export const HeaderContent = React.memo(
  (props: HeaderContentProps): ReactElement => {
    return (
      <Container fluid className={classes.headerContent}>
        <Row className={classes.headerItem}>
          <Col className={classes.headerText}>
            <h1>{props.title}</h1>
          </Col>
        </Row>
        <Row className={classes.headerItem}>
          <Col>
            <HeaderMenu />
          </Col>
        </Row>
      </Container>
    );
  },
);
