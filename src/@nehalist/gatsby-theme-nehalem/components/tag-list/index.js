import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import {
   StyledTagList,
   TagArchiveLink,
   TagArchiveLinkWrapper,
   TagContainer
} from '@nehalist/gatsby-theme-nehalem/src/components/tag-list/style';
import SocialChannelList from '@nehalist/gatsby-theme-nehalem/src/components/social-channel-list';

const TagList = () => {
   const SocialQuery = useStaticQuery(graphql`
      query SocialQuery {
         site {
            siteMetadata {
               author {
                  social {
                     facebook
                     twitter
                     linkedin
                     instagram
                     youtube
                     github
                     twitch
                  }
               }
            }
         }
      }
   `);

   const social = SocialQuery.site.siteMetadata.author.social;

   return (
      <TagContainer>
         <StyledTagList>
            <SocialChannelList channels={social} />
         </StyledTagList>
      </TagContainer>
   );
};

export default TagList;
