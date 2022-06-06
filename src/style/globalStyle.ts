import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
  	font-size: 62.5%;
	}

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  html, body{
    width: 100%;
    min-height: 100vh;
    overflow: overlay;
  }
`;
