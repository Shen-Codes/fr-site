import React, { useState } from 'react';
import { FaAlignJustify, FaTimes } from 'react-icons/fa';
import { graphql, Link } from 'gatsby';
import slugify from 'slugify';
import Layout from '@nehalist/gatsby-theme-nehalem/src/components/layout';
import Toc from '@nehalist/gatsby-theme-nehalem/src/components/toc';
import Bio from '@nehalist/gatsby-theme-nehalem/src/components/bio';
import Comments from '@nehalist/gatsby-theme-nehalem/src/components/comments';
import SEO from '@nehalist/gatsby-theme-nehalem/src/components/seo';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import {
   PostContainer,
   LeftSidebar,
   PostContent,
   TocWrapper,
   PostHeader,
   PostTitle,
   StyledImage,
   FeaturedBlogImage,
   PostFooter,
   FooterTagLink,
   StyledPost,
   PostAddition,
   PostAdditionContent,
   BioWrapper,
   ToggleTocButton
} from './contentful-styles';

const PostTemplate = ({ data, location }) => {
   const [showToc, setShowToc] = useState(false);
   const post = data.contentfulBlogPost;
   const postRichBody = post.childContentfulBlogPostBodyRichTextNode.json;
   const toggleToc = () => setShowToc(!showToc);

   const options = {
      renderNode: {
         [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
            <StyledImage
               src={`https:${node.data.target.fields.file['en-US'].url}`}
            />
         )
      }
   };

   const regex = /heading/i;

   return (
      <Layout bigHeader={false}>
         <SEO
            location={location}
            title={post.title}
            publishedAt={post.dateOfPost}
            tags={post.tags}
         />
         <PostContainer>
            {postRichBody.content.some(node => regex.test(node.nodeType)) && (
               <>
                  <LeftSidebar show={showToc}>
                     <TocWrapper>
                        <Toc onClick={toggleToc} />
                     </TocWrapper>
                  </LeftSidebar>
                  <ToggleTocButton
                     role={`button`}
                     aria-label={`Toggle table of contents`}
                     onClick={toggleToc}
                  >
                     {showToc ? <FaTimes /> : <FaAlignJustify />}
                  </ToggleTocButton>
               </>
            )}

            <PostContent>
               <PostHeader>
                  <PostTitle>{post.title}</PostTitle>
                  <FeaturedBlogImage fluid={post.featuredImage.fluid} />
               </PostHeader>
               <StyledPost className={`post`}>
                  {documentToReactComponents(postRichBody, options)}
               </StyledPost>
               <PostFooter>
                  <p>
                     Published under&nbsp;
                     {post.tags &&
                        post.tags.map((tag, index) => (
                           <span key={index}>
                              <FooterTagLink
                                 to={`/tag/${slugify(tag, { lower: true })}`}
                              >
                                 {tag}
                              </FooterTagLink>
                              {post.tags.length > index + 1 && <>, </>}
                           </span>
                        ))}
                     &nbsp;on{' '}
                     <time dateTime={post.dateOfPost}>{post.dateOfPost}</time>.
                  </p>
                  {post.updatedAt !== post.dateOfPost && (
                     <p>
                        Last updated on{' '}
                        <time dateTime={post.updatedAt}>{post.updatedAt}</time>.
                     </p>
                  )}
               </PostFooter>
            </PostContent>
         </PostContainer>
         <PostAddition>
            <PostAdditionContent>
               <BioWrapper>
                  <Bio textAlign={`center`} showName={true} />
               </BioWrapper>
            </PostAdditionContent>
         </PostAddition>
         <Comments id={post.id} />
      </Layout>
   );
};

export default PostTemplate;

export const contentfulQuery = graphql`
   query($slug: String!) {
      contentfulBlogPost(slug: { eq: $slug }) {
         childContentfulBlogPostBodyRichTextNode {
            id
            json
         }
         title
         dateOfPost
         updatedAt
         tags
         featuredImage {
            id
            fluid(maxWidth: 800, quality: 100) {
               ...GatsbyContentfulFluid
            }
         }
      }
   }
`;
