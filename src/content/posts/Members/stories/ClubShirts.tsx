import React, { ReactElement } from "react";
import { Image } from "react-bootstrap";
import { clubShirts2024Image } from "../MemberConstants";

const ClubShirts = React.memo((): ReactElement => {
  return (
    <article>
      <h3>Club Shirts</h3>
      <br />
      <Image
        src={clubShirts2024Image.image}
        alt={clubShirts2024Image.description}
        fluid
        width={640}
      />
    </article>
  );
});

export default ClubShirts;
