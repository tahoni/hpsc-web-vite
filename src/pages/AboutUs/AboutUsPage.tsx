import React, { CSSProperties } from "react";
import { Col, Row } from "react-bootstrap";
import { PageTitle } from "../../components/Title/PageTitle.tsx";
import { SimpleVenueMap } from "../../components";
import { VenueType } from "../../model/Venue.ts";
import {
  adminEmail,
  chairmanEmail,
  clubShootingRange,
  clubShootingRangeVenue,
  enquiriesEmail,
} from "../../constants/about/ClubConstants.ts";
import { EUFEES_RANGE, rangeMapPins } from "../../constants/content/Ranges.ts";
import classes from "./AboutUsPage.module.scss";

export const AboutUsPage = React.memo(() => {
  const mapStyle: CSSProperties = {
    width: classes.mapWidth,
    height: classes.mapHeight,
  };

  const footerMapRange: string = EUFEES_RANGE;
  const footerMapPins: VenueType[] = [rangeMapPins.get(footerMapRange)];

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
          {clubShootingRangeVenue} of the {clubShootingRange}
        </Col>
      </Row>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
      <Row>
        <Col>
          <SimpleVenueMap
            mapStyle={mapStyle}
            mapMode={"satellite"}
            center={rangeMapPins.get(footerMapRange)?.latLng}
            zoom={100}
            venues={footerMapPins}
          />
        </Col>
      </Row>
    </>
  );
});
