import React from 'react';
import Layout from '@nehalist/gatsby-theme-nehalem/src/components/layout';
import SEO from '@nehalist/gatsby-theme-nehalem/src/components/seo';
import { Container } from '@nehalist/gatsby-theme-nehalem/src/components/common';
import { Card } from '@nehalist/gatsby-theme-nehalem/src/components/card';
import { graphql } from 'gatsby';
import './blog.css';

const Blog = ({ location, data }) => {
   return (
      <Layout bigHeader={false}>
         <SEO location={location} title={`blog`} />
         <Container>
            <h1>Latest Contentful Posts</h1>
            {data.allContentfulBlogPost.edges
               .filter(post => post.node.slug !== 'training-and-rates')
               .map((post, index) => (
                  <Card
                     title={post.node.title}
                     path={post.node.slug}
                     featuredImage={
                        post.node.featuredImage ? post.node.featuredImage : null
                     }
                     halfImage={true}
                     meta={{
                        time: post.node.dateOfPost,
                        timePretty: post.node.dateOfPost,
                        tag: null
                     }}
                     content={post.node.excerpt}
                     key={post.node.contentful_id}
                  />
               ))}
         </Container>
      </Layout>
   );
};

export const contentfulQuery = graphql`
   query contentfulQueryBlogPosts {
      allContentfulBlogPost {
         edges {
            node {
               contentful_id
               dateOfPost
               slug
               excerpt
               title
               featuredImage {
                  id
                  fixed(width: 400, height: 300) {
                     ...GatsbyContentfulFixed
                  }
               }
            }
         }
      }
   }
`;

export default Blog;
