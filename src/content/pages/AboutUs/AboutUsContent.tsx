import React, { CSSProperties, ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SimpleVenueMap from "../../../components/Map/SimpleVenueMap.tsx";
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
  ShootingRanges,
  shootingRangeVenues,
} from "../../posts/Venues/VenueConstants.ts";
import classes from "./AboutUs.module.scss";

const AboutUsContent = React.memo((): ReactElement => {
  const mapStyle: CSSProperties = {
    width: classes.mapWidth,
    height: classes.mapHeight,
  };

  const eufeesShootingRange: VenueType = shootingRangeVenues.get(
    ShootingRanges.EUFEES,
  );
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
            {eufeesShootingRange ? (
              <SimpleVenueMap
                mapStyle={mapStyle}
                mapMode="satellite"
                zoom={16}
                center={
                  eufeesShootingRange?.center ?? eufeesShootingRange.latLng
                }
                venues={shootingRangePins}
              />
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </Container>
    </article>
  );
});

export default AboutUsContent;
