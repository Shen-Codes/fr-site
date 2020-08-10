import React from 'react';
import Layout from '@nehalist/gatsby-theme-nehalem/src/components/layout';
import SEO from '@nehalist/gatsby-theme-nehalem/src/components/seo';
import { Container } from '@nehalist/gatsby-theme-nehalem/src/components/common';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql } from 'gatsby';

const TrainingRates = ({ location, data }) => {
   const document =
      data.contentfulTrainingAndRates
         .childContentfulTrainingAndRatesTrainingAndRatesRichTextNode.json;

   const docToReact = documentToReactComponents(document);

   return (
      <Layout bigHeader={false}>
         <SEO location={location} title={`Page title`} />
         <Container>{docToReact}</Container>
      </Layout>
   );
};

export const contentfulQuery = graphql`
   query trainingQuery {
      contentfulTrainingAndRates(slug: { eq: "training-and-rates" }) {
         childContentfulTrainingAndRatesTrainingAndRatesRichTextNode {
            json
         }
         slug
      }
   }
`;

export default TrainingRates;

//copy css from node files into separate file
