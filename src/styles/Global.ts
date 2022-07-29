import styled, { createGlobalStyle, css } from "styled-components";
import { Responsive } from "./Mixins";

export const ScrollableTrack = css`
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar:horizontal {
    height: 5px !important;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    display: none;
    background: #fdfdfd;
    box-shadow: inset 0 0 5px grey;
    /* border-radius: 10px; */
    transition: display 1s ease-in-out;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    display: none;
    background: #b1b1b1;
    transition: display 1s ease-in-out;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #b1b1b1;
  }

  :hover {
    /* Track */
    ::-webkit-scrollbar-track {
      display: block;
      background: #fdfdfd;
      box-shadow: inset 0 0 5px grey;
      /* border-radius: 10px; */
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      display: block;
      background: #b1b1b1;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #b1b1b1;
    }
  }
`;

const GlobalStyles = createGlobalStyle`
  :root{
    --black: #000;
    --white: #fff;
    --gray-1: #F4F5F7;
    --gray-2: #999999;
    --gray-3: #F2F3F5;
    --gray-4: #DDDDDD;
    --text-1: #9E9E9E;
    --blue-1: #2E4ACD;
    --red-1: #FC3637;

    /* Icons */
    --i-size-1: 10px;
    --i-size-2: 20px;
    --i-size-3: 30px;
    --i-size-4: 40px;
    

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
    line-height: 1.5;
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
    position: relative;
    width: 100%;
    flex: 60%;
    padding: 2rem;
    overflow-y: auto;
    ${ScrollableTrack}

    .inprog {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  ${Responsive.laptop.standard`
     .wrapper{
      flex: 80%;
      padding: 1rem;
     }
  `}

  ${Responsive.tablet.standard`
     .wrapper{
      transition: all 0.3s ease-in-out;
      flex: 90%;
      padding: 0.5rem;
     }
  `}
`;

export default GlobalStyles;
