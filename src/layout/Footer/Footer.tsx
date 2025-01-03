import React, { ReactElement } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FooterContent } from "./FooterContent.tsx";
import {
  internationalAssociationAbbreviation,
  internationalAssociationLogo,
  internationalAssociationWebsite,
  nationalAssociationAbbreviation,
  nationalAssociationLogo,
  nationalAssociationWebsite,
} from "../../constants/about/AssociationConstants.ts";
import layoutClasses from "../Layout.module.scss";
import classes from "./Footer.module.scss";

export const Footer = React.memo((): ReactElement => {
  return (
    <Container fluid className={classes.footer}>
      <Row className={classes.footerInner}>
        <Col
          xs={{ span: 6 }}
          md={{ span: 2 }}
          className={layoutClasses.logoContainer}
        >
          <a href={nationalAssociationWebsite} target="_blank">
            <Image
              src={nationalAssociationLogo}
              alt={nationalAssociationAbbreviation + " logo"}
              className={`${layoutClasses.logo} ${layoutClasses.leftLogo}}`}
            />
          </a>
        </Col>
        <Col
          xs={{ span: 12, order: "last" }}
          md={{ span: 8 }}
          className={classes.footerCenter}
        >
          <FooterContent />
        </Col>
        <Col
          xs={{ span: 6 }}
          md={{ span: 2, order: "last" }}
          className={layoutClasses.logoContainer}
        >
          <a href={internationalAssociationWebsite} target="_blank">
            <Image
              src={internationalAssociationLogo}
              alt={internationalAssociationAbbreviation + " logo"}
              className={`${layoutClasses.logo} ${layoutClasses.rightLogo}`}
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
});
