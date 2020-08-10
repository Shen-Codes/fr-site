import { DefaultTheme } from '@nehalist/gatsby-theme-nehalem';
import burger from '../../../assets/what-a-burger.jpg';

const Theme: DefaultTheme = {
   layout: {
      backgroundColor: `#fafafa`,
      primaryColor: `#a4cbb8`,
      linkColor: `#a4cbb8`
   },
   breakpoints: {
      xs: `425px`,
      sm: `576px`,
      md: `768px`,
      lg: `992px`,
      xl: `1300px`
   },
   fonts: {
      base: `Helvetica`
   },
   components: {
      container: {
         width: `1260px`
      },
      header: {
         height: `440px`,
         background: `linear-gradient(-45deg, #44596e, #a4cbb8) repeat scroll 0 0 transparent`,
         backgroundImage: `url(${burger})`
      },
      midsection: {
         height: `580px`,
         background: `linear-gradient(-45deg, #042860, #374252) repeat scroll 0 0 transparent`
      }
   }
};

export default Theme;
