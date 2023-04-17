import { createGlobalStyle } from "styled-components";
import background from "../assets/background.png";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background};
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 40rem;
    height: 100vh;
    color: ${(props) => props.theme.white};
    font-family: 'Fira Code', sans-serif;
  }

  ul, li, a, button{
    list-style: none;
    text-decoration: none;
    border: none;
    outline: none;
    font-family: 'Fira Code', sans-serif;
  }
`;
