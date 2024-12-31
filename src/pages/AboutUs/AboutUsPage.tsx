import React from "react";
import { Col, Row } from "react-bootstrap";
import { PageTitle } from "../../components/Title/PageTitle.tsx";
import {
  adminEmail,
  chairmanEmail,
  enquiriesEmail,
} from "../../constants/about/ClubConstants.ts";

export const AboutUsPage = React.memo(() => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="About Us" />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Enquiries:
            <a href={"mailto:" + enquiriesEmail} target="_blank">
              {enquiriesEmail}
            </a>
            Chairman:
            <a href={"mailto:" + chairmanEmail} target="_blank">
              Jan Kleynhans
            </a>
            Secretary:
            <a href={"mailto:" + adminEmail} target="_blank">
              Albert van Herk
            </a>
          </p>
        </Col>
      </Row>
    </>
  );
});
