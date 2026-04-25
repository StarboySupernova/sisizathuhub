import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import MyPortableText from "../components/MyPortableText";
import PageHeader from "../components/PageHeader";
import PageSpace from "../components/PageSpace";
import SEO from "../components/seo";
import { SingleCategoryStyles } from "../styles/category/SingleCategoryStyles";

export const query = graphql`
  query SinglePublication($id: String!) {
    sanityPublication(id: { eq: $id }) {
      title
      _rawDescription
      targetAudience
      coverImage {
        asset { gatsbyImageData }
        alt
      }
    }
  }
`;

function SinglePublication({ data }) {
  const publication = data.sanityPublication;
  return (
    <PageSpace top={80} bottom={100}>
      <SingleCategoryStyles>
        <div className="container">
          <SEO title={`Diginotive - ${publication.title}`} />
          <PageHeader title={publication.title} className="pageHeader">
            {publication.targetAudience && (
              <p style={{ color: "var(--primary)", marginBottom: "1.5rem", fontSize: "1.6rem" }}>
                <strong>Target Audience:</strong> {publication.targetAudience}
              </p>
            )}
            <MyPortableText value={publication._rawDescription} />
            {publication.coverImage && (
              <GatsbyImage
                image={publication.coverImage.asset.gatsbyImageData}
                alt={publication.coverImage.alt || publication.title}
                className="coverImage"
              />
            )}
          </PageHeader>
        </div>
      </SingleCategoryStyles>
    </PageSpace>
  );
}
export default SinglePublication;