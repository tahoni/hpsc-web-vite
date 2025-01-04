import React, { CSSProperties, ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import { SimpleVenueMap } from "../../../components";
import { VenueType } from "../../../model/Venue.ts";
import {
  adminEmail,
  chairmanEmail,
  chairmanName,
  clubShootingRangeDescription,
  clubShootingRangeName,
  enquiriesEmail,
  secretaryName,
} from "../../../constants/about/ClubConstants.ts";
import {
  EUFEES_SHOOTING_RANGE,
  shootingRangeMapPins,
} from "../../../constants/content/ShootingRanges.ts";
import classes from "./AboutUs.module.scss";

const AboutUs = React.memo((): ReactElement => {
  const mapStyle: CSSProperties = {
    width: classes.mapWidth,
    height: classes.mapHeight,
  };

  const eufeesShootingRange: VenueType = shootingRangeMapPins.get(
    EUFEES_SHOOTING_RANGE,
  );
  const shootingRangePins: VenueType[] = [eufeesShootingRange];

  return (
    <>
      <Row>
        <Col>Enquiries</Col>
        <Col>
          <a href={"mailto:" + enquiriesEmail} target="_blank">
            {enquiriesEmail}
          </a>
        </Col>
      </Row>
      <Row>
        <Col>Chairman</Col>
        <Col>
          <a href={"mailto:" + chairmanEmail} target="_blank">
            {chairmanName}
          </a>
        </Col>
      </Row>
      <Row>
        <Col>Secretary</Col>
        <Col>
          <a href={"mailto:" + adminEmail} target="_blank">
            {secretaryName}
          </a>
        </Col>
      </Row>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
      <Row>
        <Col>
          {clubShootingRangeName} of the {clubShootingRangeDescription}
        </Col>
      </Row>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
      <Row>
        <Col>
          <SimpleVenueMap
            mapStyle={mapStyle}
            mapMode={"satellite"}
            zoom={16}
            center={eufeesShootingRange?.center}
            venues={shootingRangePins}
          />
        </Col>
      </Row>
    </>
  );
});

export default AboutUs;
