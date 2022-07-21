import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --black: #000;
    --white: #fff;
    --gray-1: #F4F5F7;
    --gray-2: #999999;
    --gray-3: #F2F3F5;
    --text-1: #9E9E9E;
    --blue-1: #2E4ACD;
    --red-1: #FC3637;

    /* Icons */
    --i-size-1: 20px;
    

    /* Border Radius */
    --brr-1: 4px;
  }

  *{
    box-sizing: border-box ;
  }

  html, body{
    margin: 0;
    padding:0;
    font-family: "Poppins", sans-serif !important;
    font-size: 16px;
  }

  h1, h2, h3,h4,h5,h6,p{
    margin: 0;
    font-family: "Poppins", sans-serif !important;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;

  .wrapper {
    width: 100%;
    flex: 60%;
    padding: 2rem;
  }
`;

export default GlobalStyles;
