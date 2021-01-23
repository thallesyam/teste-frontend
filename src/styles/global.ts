import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */
  html {
    width: 100vw;
  }


 html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  *{
    box-sizing: border-box;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    background: #fff;
    line-height: 1;
    font-size: 100%;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }


  /* Style Components Elastic Carousel */

  .guuruq, .cJeRRR {
    background-color: var(--grayLight) ;
    
  }

  .cJeRRR:hover, .cJeRRR:focus, .cJeRRR {
    background-color: var(--alertColor) ;
    box-shadow: 0 0 1px 2px var(--alertColor) ;
  }

  .iLquPE, .lgksPe  {
      display: none;

      background-color: var(--white);
      border: none;
      box-shadow: none;

      &:hover {
        background-color: var(--black) !important;
        color: #fff !important;
      }
  }

  @media (min-width: 710px) {
    .iLquPE, .lgksPe  {
      display: block;
    }

    .guuruq, .bkVSTc {
      display: none;
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
