import React from "react";
import { Col, Row } from "react-bootstrap";
import { PageTitle } from "../../components/Title/PageTitle.tsx";
import { HistoryContent } from "../../content";
import {
  clubAbbreviation,
  clubName,
  clubShootingRangeDescription,
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

export const HistoryPage = React.memo(() => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="History" />
        </Col>
      </Row>
      <Row>
        <Col>
          <HistoryContent
            clubName={clubName}
            clubAbbreviation={clubAbbreviation}
            clubShootingRage={clubShootingRangeDescription}
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
            provincialAssociationAbbreviation={
              provincialAssociationAbbreviation
            }
          />
        </Col>
      </Row>
    </>
  );
});
