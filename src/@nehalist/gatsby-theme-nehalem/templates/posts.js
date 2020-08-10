import React from 'react';
import Layout from '@nehalist/gatsby-theme-nehalem/src/components/layout';
import {
   Container,
   Grid
} from '@nehalist/gatsby-theme-nehalem/src/components/common';
import { Card } from '@nehalist/gatsby-theme-nehalem/src/components/card';
import styled from 'styled-components';
import TagList from '@nehalist/gatsby-theme-nehalem/src/components/tag-list';
import SidebarContent from '@nehalist/gatsby-theme-nehalem/src/components/sidebar-content';
import SEO from '@nehalist/gatsby-theme-nehalem/src/components/seo';
import Theme from '@nehalist/gatsby-theme-nehalem/src/styles/theme';
import { graphql, Link } from 'gatsby';

const HomeContainer = styled(Container)`
   display: grid;
   grid-template-columns: minmax(0, 1fr) 0.25fr;
   grid-column-gap: 30px;

   @media (max-width: ${Theme.breakpoints.xl}) {
      grid-template-columns: 1fr;
      grid-column-gap: 0px;
   }
`;

const PostsContainer = styled(Grid)`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-areas: 'latest latest' '. .';
   width: 100%;
   margin-left: 0;
   margin-right: 0;
   margin-top: -30px;

   @media (max-width: ${Theme.breakpoints.sm}) {
      display: block;
      margin: 0;
      grid-gap: 0px;

      article {
         margin-bottom: 30px;
      }
   }
`;

const Sidebar = styled.aside`
   width: 315px;
   padding-top: 30px;

   @media (max-width: ${Theme.breakpoints.xl}) {
      margin: 30px auto;
      border-top: 2px #e5eff5 solid;
      padding: 20px;
      width: 100%;
   }
`;

const PostsPage = ({ data, location }) => {
   const posts = data.allContentfulBlogPost.edges;

   return (
      <Layout>
         <SEO location={location} type={`WebSite`} />
         <HomeContainer>
            <PostsContainer>
               {posts.map((post, index) => (
                  <Card
                     title={post.node.title}
                     path={`blog/${post.node.slug}`}
                     featuredImage={
                        post.node.featuredImage ? post.node.featuredImage : null
                     }
                     meta={{
                        time: post.node.dateOfPost,
                        timePretty: post.node.dateOfPost,
                        tag: null
                     }}
                     content={post.node.excerpt}
                     key={post.node.featuredImage.id}
                     style={{ gridArea: index === 0 ? 'latest' : undefined }}
                     halfImage={index === 0}
                  />
               ))}
            </PostsContainer>
            <Sidebar>
               <SidebarContent />
            </Sidebar>
         </HomeContainer>
         <TagList />
      </Layout>
   );
};

export default PostsPage;

export const contentfulQuery = graphql`
   query contentfulQuery {
      allContentfulBlogPost(
         sort: { fields: dateOfPost, order: DESC }
         limit: 3
      ) {
         edges {
            node {
               contentful_id
               dateOfPost
               slug
               excerpt
               title
               featuredImage {
                  id
                  fluid(maxWidth: 500) {
                     ...GatsbyContentfulFluid
                  }
               }
            }
         }
      }
   }
`;
