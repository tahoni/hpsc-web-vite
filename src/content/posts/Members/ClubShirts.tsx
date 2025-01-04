import React, { ReactElement } from "react";
import { Image } from "react-bootstrap";
import { clubShirtsImage } from "../../../constants/images/ClubImageConstants.ts";

const ClubShirts = React.memo((): ReactElement => {
  return (
    <>
      <h3>Club Shirts</h3>
      <br />
      <Image
        src={clubShirtsImage.image}
        alt={clubShirtsImage.description}
        fluid
        width={640}
      />
    </>
  );
});

export default ClubShirts;
