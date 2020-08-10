exports.createPages = async ({ actions, graphql, reporter }) => {
   const { createPage } = actions;

   const contentfulTemp = require.resolve(`./src/templates/contentful.js`);

   const result = await graphql(`
      {
         allContentfulBlogPost(sort: { fields: dateOfPost, order: DESC }) {
            edges {
               node {
                  dateOfPost
                  slug
               }
            }
         }
      }
   `);

   // Handle errors
   if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`);
      return;
   }

   result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
      createPage({
         path: `/blog/${node.slug}`,
         component: contentfulTemp,
         context: {
            // additional data can be passed via context
            slug: node.slug
         }
      });
   });
};
