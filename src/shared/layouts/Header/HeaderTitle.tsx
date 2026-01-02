import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./Header.module.scss";

interface HeaderTitleProps {
  title: string;
}

export const HeaderTitle = React.memo(
  (props: HeaderTitleProps): ReactElement => {
    return (
      <Row className={classes.headerItem}>
        <Col className={classes.headerText}>
          <h1>{props.title}</h1>
        </Col>
      </Row>
    );
  },
);
