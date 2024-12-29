import React from "react";
import History from "../../content/markdown/pages/History.mdx";
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

export const HistoryPage = React.memo(() => {
  return (
    <History
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
      provincialAssocationWebsite={provincialAssociationWebsite}
      provincialAssociationName={provincialAssociationName}
      provincialAssocationAbbreviation={provincialAssociationAbbreviation}
    />
  );
});
