import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    height: 100vh ;
  }
  
  .nav-menu.active {
    left: 0;
    transition: 350ms;
  }


  /* End Mobile Nav */

  /* Style Components Elastic Carousel */

  /* arrow */
  .jAkCdf {
    display: block !important;
    background-color: #fff !important;
    box-shadow: none !important;

    &:hover {
      background-color: #000 !important;
      color: #fff !important;
    }


    @media (max-width: 768px) {
      display: none;
    }
  }

  /* Bullet */
  .cOWINi {
    display: none !important;

    @media (max-width: 768px) {
      display: block;
    }
  }


  /* End style Elastic Carousel */



  /* Variables */

  body {
    --white: ${props => props.theme.colors.white};
    --black: ${props => props.theme.colors.black};
    --grayLight: ${props => props.theme.colors.grayLight};
    --grayDark: ${props => props.theme.colors.grayDark};
    --alertColor: ${props => props.theme.colors.alertColor};
  }
`
