import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --black: #000;
    --white: #fff;
  }

  *{
    box-sizing: border-box ;
  }

  html, body{
    margin: 0;
    padding:0;
  }

  h1, h2, h3,h4,h5,h6,p{
    margin: 0;
    font-family: Roboto !important;
  }
`;

export default GlobalStyles;
