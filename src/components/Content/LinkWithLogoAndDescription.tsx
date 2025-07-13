import React from "react";
import { Image } from "react-bootstrap";
import { linkWithLogoIconDefaultHeight } from "../../constants/ContentConstants.ts";
import classes from "./LinkWithLogoAndDescription.module.scss";

interface LinkWithLogoAndDescriptionProps {
  website: string;
  logoImageSrc: string;
  logoImageAlt: string;
  linkDescriptionDetail: string;
  linkDescriptionName: string;
}

const LinkWithLogoAndDescription = React.memo(
  (props: LinkWithLogoAndDescriptionProps) => {
    // TODO: use CSS classes
    const logoHeight: string =
      classes.logoHeight ?? linkWithLogoIconDefaultHeight;

    return (
      <div className={classes.logoHyperlink}>
        <a href={props.website} target="_blank" rel="noopener noreferrer">
          <Image
            src={props.logoImageSrc}
            alt={props.logoImageAlt}
            height={logoHeight}
          />
          <span className={classes.linkDescription}>
            {props.linkDescriptionDetail}&nbsp;
            {props.linkDescriptionName ? (
              <span>({props.linkDescriptionName})</span>
            ) : (
              ""
            )}
          </span>
        </a>
      </div>
    );
  },
);

export default LinkWithLogoAndDescription;
