import React, { ReactElement } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HeaderContent } from "./HeaderContent.tsx";
import {
  clubAbbreviation,
  clubLogo,
  clubName,
} from "../../constants/about/ClubConstants.ts";
import {
  provincialAssociationAbbreviation,
  provincialAssociationLogo,
  provincialAssociationWebsite,
} from "../../constants/about/AssociationConstants.ts";
import layoutClasses from "../Layout.module.scss";
import classes from "./Header.module.scss";

export const Header = React.memo((): ReactElement => {
  return (
    <Container fluid className={classes.header}>
      <Row className={classes.headerInner}>
        <Col
          xs={{ span: 6 }}
          md={{ span: 2 }}
          className={layoutClasses.logoContainer}
        >
          <Link to="/">
            <Image
              src={clubLogo}
              alt={clubAbbreviation + " logo"}
              className={`${layoutClasses.logo} ${layoutClasses.leftLogo}`}
            />
          </Link>
        </Col>
        <Col
          xs={{ span: 12, order: "last" }}
          md={{ span: 8 }}
          className={classes.headerCenter}
        >
          <HeaderContent title={clubName} />
        </Col>
        <Col
          xs={{ span: 6 }}
          md={{ span: 2, order: "last" }}
          className={layoutClasses.logoContainer}
        >
          <a href={provincialAssociationWebsite} target="_blank">
            <Image
              src={provincialAssociationLogo}
              alt={provincialAssociationAbbreviation + " logo"}
              className={`${layoutClasses.logo} ${layoutClasses.rightLogo}`}
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
});
