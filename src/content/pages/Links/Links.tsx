import React, { ReactElement } from "react";
import { Col, Image, Row } from "react-bootstrap";
import {
  internationalAssociationAbbreviation,
  internationalAssociationLogo,
  internationalAssociationName,
  internationalAssociationWebsite,
  nationalAssociationAbbreviation,
  nationalAssociationLogo,
  nationalAssociationName,
  nationalAssociationWebsite,
  provincialAssociationAbbreviation,
  provincialAssociationLogo,
  provincialAssociationName,
  provincialAssociationWebsite,
} from "../../../constants/about/AssociationConstants.ts";
import classes from "./Links.module.scss";

const Links = React.memo((): ReactElement => {
  return (
    <>
      <Row className={classes.logoHyperlink}>
        <Col>
          <a href={provincialAssociationWebsite} target="_blank">
            <Image
              src={provincialAssociationLogo}
              alt={provincialAssociationName + " logo"}
              height={60}
            />
            {provincialAssociationName} ({provincialAssociationAbbreviation})
          </a>
        </Col>
      </Row>
      <Row className={classes.logoHyperlink}>
        <Col>
          <a href={nationalAssociationWebsite} target="_blank">
            <Image
              src={nationalAssociationLogo}
              alt={nationalAssociationName + " logo"}
              height={60}
            />
            {nationalAssociationName} ({nationalAssociationAbbreviation})
          </a>
        </Col>
      </Row>
      <Row className={classes.logoHyperlink}>
        <Col>
          <a href={internationalAssociationWebsite} target="_blank">
            <Image
              src={internationalAssociationLogo}
              alt={internationalAssociationName + " logo"}
              height={60}
            />
            {internationalAssociationName} (
            {internationalAssociationAbbreviation})
          </a>
        </Col>
      </Row>
    </>
  );
});

export default Links;
