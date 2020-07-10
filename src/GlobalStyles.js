import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html,
body {
    background: #000000;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #0f9b0f, #000000) no-repeat;  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #0f9b0f, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
}
`;

export default GlobalStyle;
