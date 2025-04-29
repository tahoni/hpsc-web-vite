import React, { ReactElement } from "react";
import { Col, Container, Image } from "react-bootstrap";
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

export const Footer = React.memo((): ReactElement => {
  return (
    <Container fluid className={layoutClasses.footer}>
      <div className={layoutClasses.footerInner}>
        <div className={layoutClasses.footerSidebar}>
          <Col className={layoutClasses.logoContainer}>
            <a href={nationalAssociationWebsite} target="_blank">
              <Image
                src={nationalAssociationLogo}
                alt={nationalAssociationAbbreviation + " logo"}
                className={`${layoutClasses.logo} ${layoutClasses.leftLogo}}`}
              />
            </a>
          </Col>
        </div>
        <Col className={layoutClasses.footerCenter}>
          <FooterContent />
        </Col>
        <div className={layoutClasses.footerSidebar}>
          <Col className={layoutClasses.logoContainer}>
            <a href={internationalAssociationWebsite} target="_blank">
              <Image
                src={internationalAssociationLogo}
                alt={internationalAssociationAbbreviation + " logo"}
                className={`${layoutClasses.logo} ${layoutClasses.rightLogo}`}
              />
            </a>
          </Col>
        </div>
      </div>
    </Container>
  );
});
