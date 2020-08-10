import React, { FunctionComponent } from 'react';
import StyledNavigation from '@nehalist/gatsby-theme-nehalem/src/components/navigation';
import {
   Description,
   StyledHeader,
   StyledTopics,
   Title,
   TitleWrapper
} from './style';
import { MenuItem } from '@nehalist/gatsby-theme-nehalem/src/utils/models';

interface HeaderProps {
   title: string;
   description: string;
   topics: string[];
   menu: MenuItem[];
   search: boolean;
   bigHeader: boolean;
}

const Header: FunctionComponent<HeaderProps> = ({
   title,
   description,
   menu,
   topics = [],
   search = true,
   bigHeader
}) => {
   return (
      <>
         {bigHeader ? (
            <StyledHeader>
               {/* <StyledNavigation
                  title={title}
                  menu={menu}
                  showSearch={search}
               /> */}
               <TitleWrapper>
                  <Title>{title}</Title>
                  <Description>{description}</Description>
               </TitleWrapper>
            </StyledHeader>
         ) : (
            <StyledHeader>
               <StyledNavigation
                  title={title}
                  menu={menu}
                  showSearch={search}
               />
               <TitleWrapper>
                  <Title>{title}</Title>
                  <Description>{description}</Description>
               </TitleWrapper>
            </StyledHeader>
         )}
      </>
   );
};

export default Header;
