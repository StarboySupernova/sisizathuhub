import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import React from 'react';
import favicon from '../images/sisizathuhub.jpg'; // <-- Import your logo

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const seo = {
    title: title
      ? `${title} - ${site.siteMetadata.title}`
      : site.siteMetadata.title,
    description: description || site.siteMetadata.description,
  };

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      {/* Attach favicon to the browser tab */}
      <link rel="icon" href={favicon} />
    </Helmet>
  );
};

export default SEO;