import React, { CSSProperties, ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { VenueType } from "../../model/Venue.ts";
import SimpleVenueMap from "../../components/Map/SimpleVenueMap.tsx";
import { copyrightYear } from "../../constants/AppConstants.ts";
import {
  clubName,
  enquiriesEmail,
  facebookGroup,
  facebookPage,
  webmasterEmail,
} from "../../constants/about/ClubConstants.ts";
import { clubShootingRangeVenue } from "../../constants/about/ClubConstants.ts";
import classes from "./Footer.module.scss";

export const FooterContent = React.memo((): ReactElement => {
  const mapStyle: CSSProperties = {
    width: classes.mapWidth,
    height: classes.mapHeight,
  };

  const footerMapPins: VenueType[] = [clubShootingRangeVenue];

  return (
    <>
      <Row className={classes.footerContent}>
        <Col className={classes.footerMap}>
          {footerMapPins && footerMapPins.length > 0 && footerMapPins[0] ? (
            <SimpleVenueMap
              mapStyle={mapStyle}
              center={footerMapPins[0].center ?? footerMapPins[0].latLng}
              venues={footerMapPins}
            />
          ) : (
            <></>
          )}
        </Col>
        <Col className={classes.footerDetails}>
          <div className={classes.contactInfo}>
            <Row>
              <Col xs={12} md={6} lg={12} xl={6}>
                <FontAwesomeIcon icon={faEnvelope} className="google-icon" />{" "}
                E-mail:
              </Col>
              <Col>
                <a href={"mailto:" + enquiriesEmail} target="_blank">
                  {enquiriesEmail}
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6} lg={12} xl={6}>
                <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />{" "}
                Facebook:
              </Col>
              <Col>
                <a href={facebookPage} target="_blank">
                  HPSC Page
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6} lg={12} xl={6}>
                <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />{" "}
                Facebook:
              </Col>
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
                  For any website queries please contact&nbsp;
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
