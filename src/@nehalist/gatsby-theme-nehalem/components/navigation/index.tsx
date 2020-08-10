import React, { FunctionComponent } from 'react';
import {
   Nav,
   NavContainer,
   NavLink,
   NavMenu,
   NavMenuItem,
   NavWrapper,
   SearchContainer
} from '@nehalist/gatsby-theme-nehalem/src/components/navigation/style';
import { MenuItem } from '@nehalist/gatsby-theme-nehalem/src/utils/models';

interface NavigationProps {
   title: string;
   menu: MenuItem[];
   showSearch: boolean;
   dark?: boolean;
}

const Navigation: FunctionComponent<NavigationProps> = ({
   title,
   menu,
   dark = false,
   showSearch = true
}) => (
   <NavContainer dark={dark}>
      <Nav>
         {/* <Logo title={title} /> */}
         <NavWrapper>
            <NavMenu mobile={true}>
               {menu.map((item, index) => (
                  <NavMenuItem key={index}>
                     <NavLink to={item.path} key={item.path}>
                        {item.name}
                     </NavLink>
                  </NavMenuItem>
               ))}
            </NavMenu>
         </NavWrapper>
      </Nav>
   </NavContainer>
);

export default Navigation;
