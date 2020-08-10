import styled from 'styled-components';
import Theme from '@nehalist/gatsby-theme-nehalem/src/styles/theme';
import Typed from 'react-typed';

export const StyledHeader = styled.header`
   display: flex;
   background: ${Theme.components.header.background};
   background-image: ${Theme.components.header.backgroundImage};
   flex-direction: column;
   height: ${Theme.components.header.height};
   border-bottom: 2px #ededed solid;

   @media (max-width: ${Theme.breakpoints.sm}) {
      height: 40vh;
   }
`;

export const TitleWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;
   flex-direction: column;

   @media (max-width: ${Theme.breakpoints.sm}) {
      margin-top: 40px;
      font-size: 0.75em;
      margin-left: 10px;
      margin-right: 10px;
      text-align: center;
   }
`;

export const Title = styled.h1`
   display: block;
   color: #fff;
   text-shadow: 0 5px 18px rgba(0, 0, 0, 0.07);
   animation-name: moveInLeft;
   animation-duration: 1.5s;
   animation-timing-function: ease-out;

   @keyframes moveInLeft {
      0% {
         opacity: 0;
         transform: translateX(-10rem);
      }

      100% {
         opacity: 1;
         transform: translate(0);
      }
   }
`;

export const Description = styled.h2`
   margin: 0;
   opacity: 0.85;
   animation-name: moveInRight;
   animation-duration: 1.5s;
   animation-timing-function: ease-out;

   @keyframes moveInRight {
      0% {
         opacity: 0;
         transform: translateX(10rem);
      }

      100% {
         opacity: 1;
         transform: translate(0);
      }
   }
`;

export const StyledTopics = styled(Typed)`
   border-bottom: 3px #000 solid;
`;
