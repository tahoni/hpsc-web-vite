import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./Header.module.scss";

interface HeaderContentProps {
  title: string;
}

export const HeaderContent = React.memo(
  (props: HeaderContentProps): ReactElement => {
    return (
      <Row className={classes.HeaderContent}>
        <Col className={classes.HeaderText}>
          <h1>{props.title}</h1>
        </Col>
      </Row>
    );
  },
);
