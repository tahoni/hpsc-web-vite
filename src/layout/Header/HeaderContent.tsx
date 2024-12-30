import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./Header.module.scss";

interface HeaderContentProps {
  title: string;
  pageTitle?: string;
}

export const HeaderContent = React.memo(
  (props: HeaderContentProps): ReactElement => {
    return (
      <Row className={classes.headerContent}>
        <Col className={classes.headerText}>
          <h1>{props.title}</h1>
          <h2>{props.pageTitle}</h2>
        </Col>
      </Row>
    );
  },
);
