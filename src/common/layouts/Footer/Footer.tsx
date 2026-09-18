import React, { ReactElement } from "react";
import { Col, Container, Image } from "react-bootstrap";
import { FooterContent } from "./FooterContent";
import {
  internationalAssociationAbbreviation,
  internationalAssociationLogo,
  internationalAssociationWebsite,
  nationalAssociationAbbreviation,
  nationalAssociationLogo,
  nationalAssociationWebsite,
} from "@/constants/about/associationConstants";
import classes from "./Footer.module.scss";

export const Footer = React.memo((): ReactElement => {
  return (
    <Container fluid className={classes.footer}>
      <div className={classes.footerInner}>
        <div className={classes.footerSidebar}>
          <Col className={classes.logoContainer}>
            <a href={nationalAssociationWebsite} target="_blank">
              <Image
                src={nationalAssociationLogo}
                alt={nationalAssociationAbbreviation + " logo"}
                className={`${classes.logo} ${classes.leftLogo}}`}
              />
            </a>
          </Col>
        </div>
        <Col className={classes.footerCenter}>
          <FooterContent />
        </Col>
        <div className={classes.footerSidebar}>
          <Col className={classes.logoContainer}>
            <a href={internationalAssociationWebsite} target="_blank">
              <Image
                src={internationalAssociationLogo}
                alt={internationalAssociationAbbreviation + " logo"}
                className={`${classes.logo} ${classes.rightLogo}`}
              />
            </a>
          </Col>
        </div>
      </div>
    </Container>
  );
});
