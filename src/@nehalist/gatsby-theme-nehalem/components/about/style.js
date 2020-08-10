import styled from 'styled-components';
import Theme from '../../styles/theme';

export const StyledMidsection = styled.div`
   display: flex;
   background: ${Theme.components.midsection.background};
   flex-direction: column;
   height: ${Theme.components.midsection.height};
   border-bottom: 2px #ededed solid;

   @media (max-width: ${Theme.breakpoints.sm}) {
      height: 53vh;
   }
`;

export const MidsectionWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;
   flex-direction: column;

   @media (max-width: ${Theme.breakpoints.sm}) {
      margin-top: -20px;
      font-size: 0.75em;
      margin-left: 10px;
      margin-right: 10px;
      text-align: center;
      line-height: 1.5em;
   }
`;

export const Title = styled.h1`
   display: block;
   margin-bottom: 10px;
   color: #fff;
   text-shadow: 0 5px 18px rgba(0, 0, 0, 0.07);
   animation-name: moveUp;
   animation-duration: 2.5s;
   animation-timing-function: ease-out;

   @keyframes moveUp {
      0% {
         opacity: 0;
      }

      10% {
         opacity: 0.3;
         transform: translateY(10rem);
      }

      100% {
         opacity: 1;
         transform: translate(0);
      }
   }

   @media (max-width: ${Theme.breakpoints.sm}) {
      margin-bottom: 20px;
   }
`;

export const Description = styled.h3`
   margin: 0;
   width: 75%;
   color: rgb(253, 253, 253);

   opacity: 0.85;
   animation-name: moveUp;
   animation-duration: 3.5s;
   animation-timing-function: ease-out;

   @keyframes moveUp {
      0% {
         opacity: 0;
      }

      65% {
         opacity: 0;
         transform: translateY(10rem);
      }

      100% {
         opacity: 1;
         transform: translate(0);
      }
   }

   @media (max-width: ${Theme.breakpoints.sm}) {
      width: 90%;
   }
`;
