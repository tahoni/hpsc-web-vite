import React, { CSSProperties, ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SimpleVenueMap } from "@components/Map";
import { VenueType } from "@models/venues/VenueType";
import {
  adminEmail,
  chairmanEmail,
  chairmanName,
  clubShootingRangeDescription,
  clubShootingRangeName,
  enquiriesEmail,
  secretaryName
} from "@constants/about/clubConstants";
import { aboutUsMapId, aboutUsMapMode, aboutUsMapZoom, eufeesShootingRange } from "./AboutUsConstants";
import classes from "./AboutUs.module.scss";

/**
 * AboutUsContent is a React memoised functional component that displays information
 * about the organisation, including contact details and location details.
 *
 * It provides details such as general enquiry email, chairman's email, and secretary's email.
 * Additionally, it shows information about the club's shooting range and renders a map
 * centred at a specified location with pins representing venues.
 *
 * The component makes use of responsive grid layout for better presentation and is styled
 * using CSS classes.
 *
 * @type {React.MemoExoticComponent<() => ReactElement>}
 */
const AboutUsContent: React.MemoExoticComponent<() => ReactElement> =
  React.memo((): ReactElement => {
    const mapStyle: CSSProperties = {
      width: classes.mapWidth,
      height: classes.mapHeight,
    };

    const shootingRangePins: VenueType[] = [eufeesShootingRange];

    return (
      <article>
        <Container className={classes.aboutUsItem}>
          <Row>
            <Col sm={12} md={6}>
              Enquiries
            </Col>
            <Col sm={12} md={6}>
              <a href={"mailto:" + enquiriesEmail} target="_blank">
                {enquiriesEmail}
              </a>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6}>
              Chairman
            </Col>
            <Col sm={12} md={6}>
              <a href={"mailto:" + chairmanEmail} target="_blank">
                {chairmanName}
              </a>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6}>
              Secretary
            </Col>
            <Col sm={12} md={6}>
              <a href={"mailto:" + adminEmail} target="_blank">
                {secretaryName}
              </a>
            </Col>
          </Row>
        </Container>
        <Container className={classes.aboutUsItem}>
          <Row className={classes.aboutUsItem}>
            <Col>
              {clubShootingRangeName} of the {clubShootingRangeDescription}
            </Col>
          </Row>
          <Row className={classes.aboutUsItem}>
            <Col>
              {eufeesShootingRange && (
                <SimpleVenueMap
                  mapStyle={mapStyle}
                  mapId={aboutUsMapId}
                  mapMode={aboutUsMapMode}
                  zoom={aboutUsMapZoom}
                  center={
                    eufeesShootingRange?.center ?? eufeesShootingRange.latLng
                  }
                  venues={shootingRangePins}
                />
              )}
            </Col>
          </Row>
        </Container>
      </article>
    );
  });

export default AboutUsContent;
