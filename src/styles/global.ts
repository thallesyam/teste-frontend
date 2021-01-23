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

  .guuruq, .cJeRRR {
    background-color: var(--grayLight) !important;
    display: none !important;

    @media (max-width: 768px) {
      display: block !important;
    }

  }

  .cJeRRR:hover, .cJeRRR:focus, .cJeRRR {
    background-color: var(--alertColor) !important;
    box-shadow: 0 0 1px 2px var(--alertColor) !important;
  }

  .iLquPE, .lgksPe  {
      display: none !important;

      background-color: var(--white) !important;
      border: none !important;
      box-shadow: none !important;

      &:hover {
        background-color: var(--black) !important;
        color: #fff !important;
      }
  }

  @media (min-width: 710px) {
    .iLquPE, .lgksPe  {
      display: block !important;
    }

    .guuruq, .bkVSTc {
      display: none !important;
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
