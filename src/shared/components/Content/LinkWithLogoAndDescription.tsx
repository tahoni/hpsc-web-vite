import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { linkWithLogoIconDefaultHeight } from "@/constants/content/contentConstants";
import classes from "./LinkWithLogoAndDescription.module.scss";

export interface LinkWithLogoAndDescriptionProps {
  website: string;
  logoImageSrc: string;
  logoImageAlt: string;
  linkDescriptionName: string;
  linkDescriptionDetail?: string;
  linkDescriptionAbbreviation?: string;
}

/**
 * React functional component that displays a link with an associated logo image and description.
 * This component is memoised using `React.memo` to optimise rendering and prevent unnecessary re-renders.
 *
 * The component accepts the following properties to render a structured layout:
 * - A linked logo image, with specified source, alternative text, and dimensions.
 * - A textual description, including name, details, and an optional abbreviation.
 *
 * The layout consists of two main sections:
 * - The logo rendered as an image within a hyperlink.
 * - The description rendered as a styled paragraph.
 *
 * @param {LinkWithLogoAndDescriptionProps} props - The props required to customise the logo, description, and hyperlink.
 */
const LinkWithLogoAndDescription = React.memo(
  (props: LinkWithLogoAndDescriptionProps) => {
    const logoHeight: string =
      classes.logoHeight ?? linkWithLogoIconDefaultHeight;
    const logoWidth: string = classes.logoWidth ?? "150px";

    return (
      <Row className={classes.linkLogoAndDescription}>
        <Col className={classes.logoHyperlink} sm={12} lg={3}>
          <a href={props.website} target="_blank" rel="noopener noreferrer">
            <Image
              src={props.logoImageSrc}
              alt={props.logoImageAlt}
              height={logoHeight}
              width={logoWidth}
            />
          </a>
        </Col>
        <Col className={classes.linkDescription}>
          <p className={classes.linkDescription}>
            {props.linkDescriptionName}&nbsp;
            {props.linkDescriptionDetail && (
              <span>- {props.linkDescriptionDetail}&nbsp;</span>
            )}
            {props.linkDescriptionAbbreviation && (
              <span>&nbsp;({props.linkDescriptionAbbreviation})</span>
            )}
          </p>
        </Col>
      </Row>
    );
  },
);

export default LinkWithLogoAndDescription;
