import React, { CSSProperties, ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import { SimpleVenueMap } from "../../components";
import { VenueType } from "../../model/VenueTypes.ts";
import { EUFEES_RANGE, rangeMapPins } from "../../constants/content/Ranges.ts";
import { copyrightYear } from "../../constants/AppConstants.ts";
import {
  clubName,
  contactEmail,
  facebookGroup,
  facebookPage,
  websiteContactEmail,
} from "../../constants/about/ClubConstants.ts";
import classes from "./Footer.module.scss";

export const FooterContent = React.memo((): ReactElement => {
  const mapStyle: CSSProperties = {
    width: classes.mapWidth,
    height: classes.mapHeight,
  };

  const footerMapRange: string = EUFEES_RANGE;
  const footerMapPins: VenueType[] = [rangeMapPins.get(footerMapRange)];

  return (
    <Row className={classes.FooterContent}>
      <Col xs={{ span: 12 }} md={{ span: 6 }} className={classes.FooterMap}>
        <SimpleVenueMap
          mapStyle={mapStyle}
          center={rangeMapPins.get(footerMapRange)?.latLng}
          venues={footerMapPins}
        />
      </Col>
      <Col className={classes.FooterDetails}>
        <div className={classes.ContactInfo}>
          <Row>
            <Col>E-mail:</Col>
            <Col>
              <a href={"mailto:" + contactEmail} target="_blank">
                {contactEmail}
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

        <div className={classes.WebsiteInfo}>
          <Row>
            <Col>
              <p>
                For any website queries please contact{" "}
                <a href={"mailto:" + websiteContactEmail} target="_blank">
                  {websiteContactEmail}
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
  );
});
