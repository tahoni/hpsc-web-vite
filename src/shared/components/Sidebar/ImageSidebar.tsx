import React, { ReactElement } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { ImageWithSourceAndDescription } from "@tahoni/tahoni-lib-react";
import classes from "./ImageSidebar.module.scss";

export interface SidebarProps {
  source: ImageWithSourceAndDescription;
}

/**
 * A functional React component that renders a sidebar containing an image.
 * The component is memoised to enhance performance by preventing unnecessary re-renders.
 *
 * The component displays an image passed through the `source` property of the `props` object.
 * It uses React-Bootstrap components for layout and styling.
 *
 * @param {SidebarProps} props - The properties object containing configuration for the sidebar.
 * @returns {ReactElement} The rendered sidebar component containing the image.
 */
const ImageSidebar = React.memo((props: SidebarProps): ReactElement => {
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

export default ImageSidebar;
