import React, { ReactElement } from "react";
import { Col, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { clubLogo, clubLogoAlt, clubName } from "@constants/about/clubConstants";
import {
  provincialAssociationAbbreviation,
  provincialAssociationLogo,
  provincialAssociationWebsite
} from "@constants/about/associationConstants";
import classes from "./Header.module.scss";
import { HeaderMenu } from "@layouts/Header/HeaderMenu.tsx";
import { HeaderTitle } from "@layouts/Header/HeaderTitle.tsx";

export const Header = React.memo((): ReactElement => {
  return (
    <Container fluid className={classes.header}>
      <div className={classes.headerInner}>
        <div className={classes.headerSidebar}>
          <Col className={classes.logoContainer}>
            <Link to="/">
              <Image
                src={clubLogo}
                alt={clubLogoAlt}
                className={`${classes.logo} ${classes.leftLogo}`}
              />
            </Link>
          </Col>
        </div>
        <div className={classes.headerCenter}>
          <HeaderTitle title={clubName} />
        </div>
        <div className={classes.headerSidebar}>
          <Col className={classes.logoContainer}>
            <a href={provincialAssociationWebsite} target="_blank">
              <Image
                src={provincialAssociationLogo}
                alt={provincialAssociationAbbreviation + " logo"}
                className={`${classes.logo} ${classes.rightLogo}`}
              />
            </a>
          </Col>
        </div>
        <div className={classes.headerCenter}>
          <HeaderMenu />
        </div>
      </div>
    </Container>
  );
});
