import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
  
  :root {
    --slide-height: calc(100vw * 0.525716258198136);
    --primary-color: #19acbe;
  }
  
  html,
  body,
  #root {
    width: 100vw;
    height: 100vh;
  }
  
  body,
  h1, h3 {
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
