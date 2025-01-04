import React, { ReactElement } from "react";
import History from "./History.mdx";
import {
  clubAbbreviation,
  clubName,
  clubShootingRangeDescription,
} from "../../../constants/about/ClubConstants.ts";
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
} from "../../../constants/about/AssociationConstants.ts";

export const HistoryContent = React.memo((): ReactElement => {
  return (
    <History
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
      provincialAssociationAbbreviation={provincialAssociationAbbreviation}
    />
  );
});
