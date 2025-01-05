import React, { ReactElement } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

interface PageNotFoundProps {
  message: string;
  returnTo?: string;
  returnToMessage?: string;
}

export const NotFound = React.memo((props: PageNotFoundProps): ReactElement => {
  return (
    <>
      <Row>
        <Col>
          <p>Sorry, {props.message}.</p>
        </Col>
      </Row>
      <Row>
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
