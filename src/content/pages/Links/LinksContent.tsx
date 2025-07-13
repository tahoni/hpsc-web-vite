import React, { ReactElement } from "react";
import { Row } from "react-bootstrap";
import LinkWithLogoAndDescription from "../../../components/Content/LinkWithLogoAndDescription.tsx";
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

const LinksContent = React.memo((): ReactElement => {
  return (
    <article>
      <Row>
        <LinkWithLogoAndDescription
          website={provincialAssociationWebsite}
          logoImageSrc={provincialAssociationLogo}
          logoImageAlt={provincialAssociationLogoAlt}
          linkDescriptionDetail={provincialAssociationName}
          linkDescriptionName={provincialAssociationAbbreviation}
        />
      </Row>
      <Row>
        <LinkWithLogoAndDescription
          website={nationalAssociationWebsite}
          logoImageSrc={nationalAssociationLogo}
          logoImageAlt={nationalAssociationLogoAlt}
          linkDescriptionDetail={nationalAssociationName}
          linkDescriptionName={nationalAssociationAbbreviation}
        />
      </Row>
      <Row>
        <LinkWithLogoAndDescription
          website={internationalAssociationWebsite}
          logoImageSrc={internationalAssociationLogo}
          logoImageAlt={internationalAssociationLogoAlt}
          linkDescriptionDetail={internationalAssociationName}
          linkDescriptionName={internationalAssociationAbbreviation}
        />
      </Row>
    </article>
  );
});

export default LinksContent;
