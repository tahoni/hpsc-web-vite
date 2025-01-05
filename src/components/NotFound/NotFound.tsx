import React, { ReactElement } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./NotFound.module.scss";

interface PageNotFoundProps {
  message: string;
  returnTo?: string;
  returnToMessage?: string;
}

export const NotFound = React.memo((props: PageNotFoundProps): ReactElement => {
  return (
    <>
      <Row className={classes.pageNotFoundItem}>
        <Col>
          <p>Sorry, {props.message}.</p>
        </Col>
      </Row>
      <Row className={classes.pageNotFoundItem}>
        <Col>
          <NavLink to={props.returnTo ? props.returnTo : "/"}>
            <Button>
              {props.returnToMessage ? props.returnToMessage : "Home"}
            </Button>
          </NavLink>
        </Col>
      </Row>
    </>
  );
});
