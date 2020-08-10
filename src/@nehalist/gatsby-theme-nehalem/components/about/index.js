import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
   StyledMidsection,
   MidsectionWrapper,
   Title,
   Description
} from './style';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const About = () => {
   const data = useStaticQuery(
      graphql`
         query AboutQuery {
            contentfulAbout {
               childContentfulAboutBodyRichTextNode {
                  json
               }
            }
         }
      `
   );

   const AboutRichBody =
      data.contentfulAbout.childContentfulAboutBodyRichTextNode.json;

   const options = {
      renderNode: {
         [BLOCKS.HEADING_2]: (node, children) => <Title>{children}</Title>,
         [BLOCKS.PARAGRAPH]: (node, children) => (
            <Description>{children}</Description>
         )
      }
   };

   return (
      <StyledMidsection>
         <MidsectionWrapper>
            {documentToReactComponents(AboutRichBody, options)}
         </MidsectionWrapper>
      </StyledMidsection>
   );
};

export default About;
