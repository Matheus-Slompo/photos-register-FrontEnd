import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --webkit-font-smoothing: antialiased;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: purple;
    font-family: 'Oswald';
  }
`;
