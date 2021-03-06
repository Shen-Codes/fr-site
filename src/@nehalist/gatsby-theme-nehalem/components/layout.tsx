import React, { FunctionComponent, ReactNode } from 'react';
import GlobalStyle from '@nehalist/gatsby-theme-nehalem/src/styles/global-style';
import { graphql, useStaticQuery } from 'gatsby';
import Header from '@nehalist/gatsby-theme-nehalem/src/components/header';
import { SiteMetadata } from '@nehalist/gatsby-theme-nehalem/src/utils/models';
import Navigation from '@nehalist/gatsby-theme-nehalem/src/components/navigation';
import Footer from '@nehalist/gatsby-theme-nehalem/src/components/footer';
import About from './about';

interface LayoutProps {
   children: ReactNode;
   bigHeader?: boolean;
}

const Layout: FunctionComponent<LayoutProps> = ({
   children,
   bigHeader = true
}) => {
   const data = useStaticQuery<SiteMetadata>(graphql`
      query {
         site {
            siteMetadata {
               title
               description
               topics
               menu {
                  name
                  path
               }
               footerMenu {
                  name
                  path
               }
               search
            }
         }
      }
   `);

   return (
      <>
         <GlobalStyle />
         {bigHeader ? (
            <>
               <Header
                  title={data.site.siteMetadata.title}
                  description={data.site.siteMetadata.description}
                  topics={data.site.siteMetadata.topics}
                  menu={data.site.siteMetadata.menu}
                  search={data.site.siteMetadata.search}
                  bigHeader={bigHeader}
               />
               <Navigation
                  title={data.site.siteMetadata.title}
                  menu={data.site.siteMetadata.menu}
                  showSearch={data.site.siteMetadata.search}
                  dark={true}
               />
               <About />
            </>
         ) : (
            <Navigation
               title={data.site.siteMetadata.title}
               menu={data.site.siteMetadata.menu}
               showSearch={data.site.siteMetadata.search}
               dark={true}
            />
         )}
         <main>{children}</main>
         <Footer
            menu={data.site.siteMetadata.footerMenu}
            owner={data.site.siteMetadata.title}
         />
      </>
   );
};

export default Layout;
