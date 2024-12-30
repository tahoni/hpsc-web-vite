import React from "react";
import { Col, Row } from "react-bootstrap";
import { HistoryContent } from "../../content";
import {
  clubAbbreviation,
  clubName,
  clubShootingRange,
} from "../../constants/about/ClubConstants.ts";
import {
  internationalAssociationAbbreviation,
  internationalAssociationName,
  internationalAssociationWebsite,
  nationalAssociationAbbreviation,
  nationalAssociationName,
  nationalAssociationWebsite,
  provincialAssociationAbbreviation,
  provincialAssociationName,
  provincialAssociationWebsite,
} from "../../constants/about/AssociationConstants.ts";

export const HomePage = React.memo(() => {
  return (
    <Row>
      <Col>
        <HistoryContent
          clubName={clubName}
          clubAbbreviation={clubAbbreviation}
          clubShootingRage={clubShootingRange}
          internationalAssociationWebsite={internationalAssociationWebsite}
          internationalAssociationName={internationalAssociationName}
          internationalAssociationAbbreviation={
            internationalAssociationAbbreviation
          }
          nationalAssociationWebsite={nationalAssociationWebsite}
          nationalAssociationName={nationalAssociationName}
          nationalAssociationAbbreviation={nationalAssociationAbbreviation}
          provincialAssociationWebsite={provincialAssociationWebsite}
          provincialAssociationName={provincialAssociationName}
          provincialAssociationAbbreviation={provincialAssociationAbbreviation}
        />
      </Col>
    </Row>
  );
});
