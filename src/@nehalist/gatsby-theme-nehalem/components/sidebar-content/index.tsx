import React, { FunctionComponent } from 'react';
import Bio from '@nehalist/gatsby-theme-nehalem/src/components/bio';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StickySidebarContent = styled.div`
   position: sticky;
   top: 30px;
`;

const ContactMeButton = styled.p`
   background-color: rgb(164, 203, 184);
   color: rgb(255, 255, 255);
   font-weight: bold;
   box-shadow: rgb(230, 230, 230) 0px 1px 1px, rgb(230, 230, 230) 0px 2px 4px;
   display: block;
   width: 100%;
   font-size: 1.2em;
   text-align: center;
   padding: 15px;
   border-radius: 0.3em;
   margin: 30px 0px;
   transition: all 0.5s ease 0s;
`;

const SidebarContent: FunctionComponent = () => {
   return (
      <StickySidebarContent>
         <Bio
            textAlign={`justify`}
            avatarStyle={{ float: `left`, margin: `0 20px 5px 0` }}
         />

         <Link to="/contact-me">
            <ContactMeButton>Contact Me</ContactMeButton>
         </Link>
      </StickySidebarContent>
   );
};

export default SidebarContent;

// const StickySidebarContent = styled.div`
//    position: sticky;
//    top: 30px;
// `;

// /**
//  * Placeholder for the front page sidebar content.
//  */
// const SidebarContent: FunctionComponent = () => {
//    return (
//       <StickySidebarContent>
//          <Bio
//             textAlign={`justify`}
//             avatarStyle={{ float: `left`, margin: `0 20px 5px 0` }}
//          />
//       </StickySidebarContent>
//    );
// };

// export default SidebarContent;
