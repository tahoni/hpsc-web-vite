import { ReactElement } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { PageTitle } from "../../components/Title/PageTitle.tsx";
import {
  internationalAssociationAbbreviation,
  internationalAssociationName,
  internationalAssociationSmallLogo,
  internationalAssociationWebsite,
  nationalAssociationAbbreviation,
  nationalAssociationName,
  nationalAssociationSmallLogo,
  nationalAssociationWebsite,
  provincialAssociationAbbreviation,
  provincialAssociationName,
  provincialAssociationSmallLogo,
  provincialAssociationWebsite,
} from "../../constants/about/AssociationConstants.ts";
import classes from "./LinksPage.module.scss";

export const LinksPage = (): ReactElement => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="Links" />
        </Col>
      </Row>
      <Row className={classes.logoHyperlink}>
        <Col>
          <a href={provincialAssociationWebsite} target={"_blank"}>
            <Image
              src={provincialAssociationSmallLogo}
              alt={provincialAssociationName + " logo"}
            />
            {provincialAssociationName} ({provincialAssociationAbbreviation})
          </a>
        </Col>
      </Row>
      <Row className={classes.logoHyperlink}>
        <Col>
          <a href={nationalAssociationWebsite} target={"_blank"}>
            <Image
              src={nationalAssociationSmallLogo}
              alt={nationalAssociationName + " logo"}
            />
            {nationalAssociationName} ({nationalAssociationAbbreviation})
          </a>
        </Col>
      </Row>
      <Row className={classes.logoHyperlink}>
        <Col>
          <a href={internationalAssociationWebsite} target={"_blank"}>
            <Image
              src={internationalAssociationSmallLogo}
              alt={internationalAssociationName + " logo"}
            />
            {internationalAssociationName} (
            {internationalAssociationAbbreviation})
          </a>
        </Col>
      </Row>
    </>
  );
};
