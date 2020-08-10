import React, { FunctionComponent } from 'react';
import { MenuItem } from '@nehalist/gatsby-theme-nehalem/src/utils/models';
import {
   Copyright,
   DesignBy,
   FooterContainer,
   FooterMenuItem,
   FooterMenuLink,
   StyledFooter,
   StyledNav
} from '@nehalist/gatsby-theme-nehalem/src/components/footer/style';

interface FooterProps {
   menu: MenuItem[];
   owner: string;
}

const Footer: FunctionComponent<FooterProps> = ({ menu, owner }) => (
   <StyledFooter>
      <FooterContainer>
         <div>
            <Copyright>
               <strong>{owner}</strong>&nbsp;&copy; {new Date().getFullYear()}
            </Copyright>
            <DesignBy>
               Modified Nehalem theme by{' '}
               <a
                  href={`https://nehalist.io`}
                  target={`_blank`}
                  rel={`noopener`}
               >
                  nehalist.io
               </a>
            </DesignBy>
         </div>
      </FooterContainer>
   </StyledFooter>
);

export default Footer;
