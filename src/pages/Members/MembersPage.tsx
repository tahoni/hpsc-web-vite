import React, { ReactElement } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { PageTitle } from "../../components";
import { clubShirtsImage } from "../../constants/images/ClubImageConstants.ts";

export const MembersPage = React.memo((): ReactElement => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="Members" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Club Shirts</h3>
          <br />
          <Image
            src={clubShirtsImage.image}
            alt={clubShirtsImage.description}
            fluid
            width={640}
          />
        </Col>
      </Row>
    </>
  );
});
