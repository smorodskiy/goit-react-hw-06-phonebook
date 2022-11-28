import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`    

    ${normalize}

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    address {
        font-style: normal;
    }

    img {
        width: 100%;
        display: block;
        height: auto;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body {
      background-color: #f5f6fa;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      /* font-family: 'Jost', sans-serif; */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    } */
`;

export default GlobalStyle;
