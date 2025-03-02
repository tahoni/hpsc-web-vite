import React, { ReactElement } from "react";
import { Col, Image, Row } from "react-bootstrap";
import {
  internationalAssociationAbbreviation,
  internationalAssociationLogo,
  internationalAssociationLogoAlt,
  internationalAssociationName,
  internationalAssociationWebsite,
  nationalAssociationAbbreviation,
  nationalAssociationLogo,
  nationalAssociationLogoAlt,
  nationalAssociationName,
  nationalAssociationWebsite,
  provincialAssociationAbbreviation,
  provincialAssociationLogo,
  provincialAssociationLogoAlt,
  provincialAssociationName,
  provincialAssociationWebsite,
} from "../../../constants/about/AssociationConstants.ts";
import classes from "./Links.module.scss";

const LinksContent = React.memo((): ReactElement => {
  return (
    <>
      <Row className={classes.logoHyperlink}>
        <Col>
          <a href={provincialAssociationWebsite} target="_blank">
            <Image
              src={provincialAssociationLogo}
              alt={provincialAssociationLogoAlt}
              height={60}
            />
            <span className={classes.linkDescription}>
              {provincialAssociationName} ({provincialAssociationAbbreviation})
            </span>
          </a>
        </Col>
      </Row>
      <Row className={classes.logoHyperlink}>
        <Col>
          <a href={nationalAssociationWebsite} target="_blank">
            <Image
              src={nationalAssociationLogo}
              alt={nationalAssociationLogoAlt}
              height={60}
            />
            <span className={classes.linkDescription}>
              {nationalAssociationName} ({nationalAssociationAbbreviation})
            </span>
          </a>
        </Col>
      </Row>
      <Row className={classes.logoHyperlink}>
        <Col>
          <a href={internationalAssociationWebsite} target="_blank">
            <Image
              src={internationalAssociationLogo}
              alt={internationalAssociationLogoAlt}
              height={60}
            />
            <span className={classes.linkDescription}>
              {internationalAssociationName} (
              {internationalAssociationAbbreviation})
            </span>
          </a>
        </Col>
      </Row>
    </>
  );
});

export default LinksContent;
