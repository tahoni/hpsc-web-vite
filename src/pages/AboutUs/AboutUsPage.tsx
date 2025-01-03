import React, { CSSProperties } from "react";
import { Col, Row } from "react-bootstrap";
import { PageTitle, SimpleVenueMap } from "../../components";
import { VenueType } from "../../model/Venue.ts";
import {
  adminEmail,
  chairmanEmail,
  clubShootingRangeDescription,
  clubShootingRangeName,
  enquiriesEmail,
} from "../../constants/about/ClubConstants.ts";
import {
  EUFEES_SHOOTING_RANGE,
  shootingRangeMapPins,
} from "../../constants/content/ShootingRanges.ts";
import classes from "./AboutUsPage.module.scss";

export const AboutUsPage = React.memo(() => {
  const mapStyle: CSSProperties = {
    width: classes.mapWidth,
    height: classes.mapHeight,
  };

  const footerMapRange: string = EUFEES_SHOOTING_RANGE;
  const footerMapPins: VenueType[] = [shootingRangeMapPins.get(footerMapRange)];

  return (
    <>
      <Row>
        <Col>
          <PageTitle title="About Us" />
        </Col>
      </Row>
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
            Jan Kleynhans
          </a>
        </Col>
      </Row>
      <Row>
        <Col>Secretary</Col>
        <Col>
          <a href={"mailto:" + adminEmail} target="_blank">
            Albert van Herk
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
            center={shootingRangeMapPins.get(footerMapRange)?.center}
            venues={footerMapPins}
          />
        </Col>
      </Row>
    </>
  );
});
