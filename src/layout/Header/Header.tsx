import React, { ReactElement } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HeaderContent } from "./HeaderContent.tsx";
import {
  clubLogo,
  clubLogoAlt,
  clubName,
} from "../../constants/about/ClubConstants.ts";
import {
  provincialAssociationAbbreviation,
  provincialAssociationLogo,
  provincialAssociationWebsite,
} from "../../constants/about/AssociationConstants.ts";
import layoutClasses from "../Layout.module.scss";

export const Header = React.memo((): ReactElement => {
  return (
    <Container fluid className={layoutClasses.header}>
      <div className={layoutClasses.headerInner}>
        <div className={layoutClasses.headerSidebar}>
          <Col className={layoutClasses.logoContainer}>
            <Link to="/">
              <Image
                src={clubLogo}
                alt={clubLogoAlt}
                className={`${layoutClasses.logo} ${layoutClasses.leftLogo}`}
              />
            </Link>
          </Col>
        </div>
        <Col className={layoutClasses.headerCenter}>
          <HeaderContent title={clubName} />
        </Col>
        <div className={layoutClasses.headerSidebar}>
          <Col className={layoutClasses.logoContainer}>
            <a href={provincialAssociationWebsite} target="_blank">
              <Image
                src={provincialAssociationLogo}
                alt={provincialAssociationAbbreviation + " logo"}
                className={`${layoutClasses.logo} ${layoutClasses.rightLogo}`}
              />
            </a>
          </Col>
        </div>
      </div>
    </Container>
  );
});
