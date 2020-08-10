require('dotenv').config();
module.exports = {
   siteMetadata: {
      title: `Fariaz Rabbani Training`,
      siteUrl: `https://www.calendly.com`,
      description: `This background image is a burger`,
      topics: [],
      menu: [
         {
            name: 'Home',
            path: '/'
         },
         {
            name: 'Training and Rates',
            path: '/training-rates'
         },
         {
            name: 'Blog',
            path: '/blog'
         },
         {
            name: 'Contact Me',
            path: '/contact-me'
         }
      ],
      footerMenu: [
         {
            name: 'Contact Me',
            path: '/contact-me'
         }
      ],
      search: true,
      author: {
         name: `nehalem`,
         description: `Some text and some links go here`,
         social: {
            facebook: ``,
            twitter: `https://twitter.com/nehalist`,
            linkedin: `https://www.linkedin.com/in/kevin-hirczy-7a9377106/`,
            instagram: ``,
            youtube: ``,
            github: `https://github.com/nehalist`,
            twitch: ``
         }
      }
   },
   plugins: [
      {
         resolve: `@nehalist/gatsby-theme-nehalem`,
         options: {
            manifest: {
               name: `nehalem - A Gatsby theme`,
               short_name: `nehalem`,
               start_url: `/`,
               background_color: `#a4cbb8`,
               theme_color: `#a4cbb8`,
               display: `minimal-ui`,
               icon: `${__dirname}/content/assets/images/logo.png`
            }
         },
         postsPerPage: 5
      },
      {
         resolve: `gatsby-source-contentful`,
         options: {
            spaceId: `koch2nitolpy`,
            // Learn about environment variables: https://gatsby.dev/env-vars
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            downloadLocal: true
         }
      }
      // {
      //    resolve: `gatsby-plugin-google-fonts`,
      //    options: {
      //       fonts: [
      //          {
      //             family: `Raleway`,
      //             variants: [`400`, `700`]
      //          },
      //          {
      //             family: `Nixie One`,
      //             subsets: [`latin`]
      //          }
      //       ]
      //    }
      // }
   ]
};
