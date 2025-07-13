import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { linkWithLogoIconDefaultHeight } from "../../constants/ContentConstants.ts";
import classes from "./LinkWithLogoAndDescription.module.scss";

interface LinkWithLogoAndDescriptionProps {
  website: string;
  logoImageSrc: string;
  logoImageAlt: string;
  linkDescriptionName: string;
  linkDescriptionDetail?: string;
  linkDescriptionAbbreviation?: string;
}

const LinkWithLogoAndDescription = React.memo(
  (props: LinkWithLogoAndDescriptionProps) => {
    // TODO: use CSS classes
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
            {props.linkDescriptionDetail ? (
              <span>- {props.linkDescriptionDetail}&nbsp;</span>
            ) : (
              ""
            )}
            {props.linkDescriptionAbbreviation ? (
              <span>&nbsp;({props.linkDescriptionAbbreviation})</span>
            ) : (
              ""
            )}
          </p>
        </Col>
      </Row>
    );
  },
);

export default LinkWithLogoAndDescription;
