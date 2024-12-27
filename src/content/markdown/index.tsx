import AboutUs from "./pages/AboutUs.mdx";
import ContactUs from "./pages/ContactUs.mdx";
import Home from "./pages/Home.mdx";
import News from "./pages/News.mdx";
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
import React from "react";

export const AboutUsContent = React.memo(() => {
  return (
    <AboutUs
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

export const HomeContent = React.memo(() => {
  return <Home />;
});

export const ContactUsContent = React.memo(() => {
  return <ContactUs />;
});

export const NewsContent = React.memo(() => {
  return <News />;
});
