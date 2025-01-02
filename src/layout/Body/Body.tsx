import React, { ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Content } from "../Content/Content.tsx";
import { ImageSidebar } from "../../components";
import { BodyProps } from "../LayoutProps.ts";
import classes from "./Body.module.scss";

export const Body = React.memo((props: BodyProps): ReactElement => {
  return (
    <div className={classes.body}>
      <div className={classes.bodyInner}>
        <div className={classes.bodySidebar}>
          {props.leftSideImage ? (
            <ImageSidebar source={props.leftSideImage} />
          ) : (
            <></>
          )}
        </div>
        <div className={classes.bodyCenter}>
          <Container>
            <Row>
              <Col>
                <Content />
              </Col>
            </Row>
          </Container>
        </div>
        <div className={classes.bodySidebar}>
          {props.rightSideImage ? (
            <ImageSidebar source={props.rightSideImage} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
});
