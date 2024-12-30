import { ReactElement } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HeaderContent } from "./HeaderContent.tsx";
import {
  clubAbbreviation,
  clubName,
} from "../../constants/about/ClubConstants.ts";
import {
  provincialAssociationAbbreviation,
  provincialAssociationWebsite,
} from "../../constants/about/AssociationConstants.ts";
import ClubLogo from "../../assets/images/logos/hpsc-logo.png";
import ProvincialAssociationLogo from "../../assets/images/logos/ngpsa-logo.png";
import layoutClasses from "../Layout.module.scss";
import classes from "./Header.module.scss";

interface HeaderProps {
  pageTitle?: string;
}

export const Header = (props: HeaderProps): ReactElement => {
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
              src={ClubLogo}
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
          <HeaderContent title={clubName} pageTitle={props.pageTitle} />
        </Col>
        <Col
          xs={{ span: 6 }}
          md={{ span: 2, order: "last" }}
          className={layoutClasses.logoContainer}
        >
          <a href={provincialAssociationWebsite} target="_blank">
            <Image
              src={ProvincialAssociationLogo}
              alt={provincialAssociationAbbreviation + " logo"}
              className={`${layoutClasses.logo} ${layoutClasses.rightLogo}`}
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
};
