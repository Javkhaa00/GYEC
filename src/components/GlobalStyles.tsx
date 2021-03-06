import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --slide-height: calc(100vw * 0.525716258198136);
    --dark-color: #1e1d1d;
    --primary-color: #19acbe;
    --secondary-color: #49cdb5;
  }
  
  html,
  body,
  #root {
    width: 100vw;
    height: 100vh;
    scroll-behavior: smooth;
    background-color: #e5e5e5;
  }
  
  body,
  h1, h3, p {
    margin: 0;
  }
  
  * {
    box-sizing: border-box;
  }

  a {
    outline: none;
    text-decoration: none;
  }
  
  body {
    font-family: Raleway, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
