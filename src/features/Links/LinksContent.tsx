import React, { ReactElement } from "react";
import { Row } from "react-bootstrap";
import { LinkWithLogoAndDescription } from "@components/Content";
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
  provincialAssociationWebsite
} from "@constants/about/associationConstants";
import { bosninjaDetail, bosninjaLogo, bosninjaLogoAlt, bosninjaName, bosninjaWebsite } from "./LinksConstants";

/**
 * A functional React component wrapped with React.memo for optimised rendering.
 * Renders a collection of rows, each containing a link with an associated logo and description.
 * Used to display multiple links with information such as name, abbreviation, or additional details.
 *
 * The component uses the `LinkWithLogoAndDescription` component to display individual links,
 * requiring various props such as the website URL, logo image, name, and other descriptive details.
 *
 * @constant LinksContent
 * @type {React.MemoExoticComponent<()=>React.ReactElement>}
 */
const LinksContent = React.memo((): ReactElement => {
  return (
    <article>
      <Row>
        <LinkWithLogoAndDescription
          website={provincialAssociationWebsite}
          logoImageSrc={provincialAssociationLogo}
          logoImageAlt={provincialAssociationLogoAlt}
          linkDescriptionName={provincialAssociationName}
          linkDescriptionAbbreviation={provincialAssociationAbbreviation}
        />
      </Row>
      <Row>
        <LinkWithLogoAndDescription
          website={nationalAssociationWebsite}
          logoImageSrc={nationalAssociationLogo}
          logoImageAlt={nationalAssociationLogoAlt}
          linkDescriptionName={nationalAssociationName}
          linkDescriptionAbbreviation={nationalAssociationAbbreviation}
        />
      </Row>
      <Row>
        <LinkWithLogoAndDescription
          website={internationalAssociationWebsite}
          logoImageSrc={internationalAssociationLogo}
          logoImageAlt={internationalAssociationLogoAlt}
          linkDescriptionName={internationalAssociationName}
          linkDescriptionAbbreviation={internationalAssociationAbbreviation}
        />
      </Row>
      <Row>
        <LinkWithLogoAndDescription
          website={bosninjaWebsite}
          logoImageSrc={bosninjaLogo}
          logoImageAlt={bosninjaLogoAlt}
          linkDescriptionName={bosninjaName}
          linkDescriptionDetail={bosninjaDetail}
        />
      </Row>
    </article>
  );
});

export default LinksContent;
