import React, { CSSProperties, ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import { VenueType } from "../../model/Venue.ts";
import { SimpleVenueMap } from "../../components";
import { copyrightYear } from "../../constants/AppConstants.ts";
import {
  EUFEES_SHOOTING_RANGE,
  shootingRangeMapPins,
} from "../../constants/content/ShootingRanges.ts";
import {
  clubName,
  enquiriesEmail,
  facebookGroup,
  facebookPage,
  webmasterEmail,
} from "../../constants/about/ClubConstants.ts";
import classes from "./Footer.module.scss";

export const FooterContent = React.memo((): ReactElement => {
  const mapStyle: CSSProperties = {
    width: classes.mapWidth,
    height: classes.mapHeight,
  };

  const footerMapRange: string = EUFEES_SHOOTING_RANGE;
  const footerMapPins: VenueType[] = [shootingRangeMapPins.get(footerMapRange)];

  return (
    <>
      <Row className={classes.footerContent}>
        <Col xs={{ span: 12 }} md={{ span: 6 }} className={classes.footerMap}>
          <SimpleVenueMap
            mapStyle={mapStyle}
            center={shootingRangeMapPins.get(footerMapRange)?.latLng}
            venues={footerMapPins}
          />
        </Col>
        <Col className={classes.footerDetails}>
          <div className={classes.contactInfo}>
            <Row>
              <Col>E-mail:</Col>
              <Col>
                <a href={"mailto:" + enquiriesEmail} target="_blank">
                  {enquiriesEmail}
                </a>
              </Col>
            </Row>
            <Row>
              <Col>Facebook:</Col>
              <Col>
                <a href={facebookPage} target="_blank">
                  HPSC Page
                </a>
              </Col>
            </Row>
            <Row>
              <Col>Facebook:</Col>
              <Col>
                <a href={facebookGroup} target="_blank">
                  HPSC Group
                </a>
              </Col>
            </Row>
          </div>

          <div className={classes.websiteInfo}>
            <Row>
              <Col>
                <p>
                  For any website queries please contact
                  <a href={"mailto:" + webmasterEmail} target="_blank">
                    {webmasterEmail}
                  </a>
                  .
                </p>
                <p>
                  Copyright © {copyrightYear} {clubName}.<br />
                  All rights reserved.
                </p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
});
