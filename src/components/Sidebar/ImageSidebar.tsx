import React, { ReactElement } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { ImageWithSourceAndDescription } from "@tahoni/tahoni-lib-react";
import classes from "./ImageSidebar.module.scss";

interface SidebarProps {
  source: ImageWithSourceAndDescription;
}

export const ImageSidebar = React.memo((props: SidebarProps): ReactElement => {
  return (
    <Container fluid className={classes.sidebar}>
      <Row className={classes.sidebarInner}>
        <Col className={classes.sidebarImage}>
          <Image src={props.source?.image} alt={props.source?.description} />
        </Col>
      </Row>
    </Container>
  );
});
