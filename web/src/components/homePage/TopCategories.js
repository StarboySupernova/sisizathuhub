import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { TopCategoriesStyles } from "../../styles/homePage/TopCategoriesStyles";
// import CategoryGrid from '../category/CategoryGrid';
import ActivityGrid from "../category/ActivityGrid";
import ParagraphText from "../typography/ParagraphText";
import { SectionTitle } from "../typography/Title";
import ValueGrid from "../category/ValueGrid";
import ObjectiveGrid from "../category/ObjectiveGrid";

function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allSanitySpotlight(filter: { _id: { eq: "spotlightItems" } }) {
        nodes {
          activity {
            id
            title
            slug {
              current
            }
            _rawDescription
          }
        }
      }
      allSanityObjective {
        nodes {
          id
          _rawDescription
        }
      }
      allSanityValue {
        nodes {
          id
          _rawDescription
        }
      }
    }
  `);
  const spotlightNode = data.allSanitySpotlight.nodes[0];
  const activities = spotlightNode?.activity || [];
  const objectives = data.allSanityObjective?.nodes || [];
  const DiginotiveValues = data.allSanityValue?.nodes || [];

  return (
    <TopCategoriesStyles>
      <SectionTitle className="centre__text">Our Vision</SectionTitle>
      <ParagraphText className="hero__text centre__text">
        To be the premier digital catalyst for SMME growth, bridging the
        technology gap through secure, scalable, and innovative IT
        infrastructure.
      </ParagraphText>

      <SectionTitle className="centre__text">Our Mission</SectionTitle>
      <ParagraphText className="hero__text centre__text">
        To empower Small and Medium Enterprises by providing enterprise-grade
        Cybersecurity, bespoke Software Solutions, and robust Web Hosting that
        protects and accelerates business in the digital age.
      </ParagraphText>
      <SectionTitle className="centre__text">Our Values</SectionTitle>
      <ValueGrid DiginotiveValues={DiginotiveValues} />
      <SectionTitle className="centre__text">Our Objectives</SectionTitle>
      <ObjectiveGrid objectives={objectives} />
      <SectionTitle>Core Initiatives</SectionTitle>
      <ParagraphText>
        Catalyzing Community & Grassroot Sustainability: Our Impactful
        Interventions
      </ParagraphText>
      <ActivityGrid activities={activities} />
    </TopCategoriesStyles>
  );
}

export default TopCategories;

// https://0wfqubi4.api.sanity.io/v1/graphql/production/default
