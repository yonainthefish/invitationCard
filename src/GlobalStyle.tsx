import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


  * {
    box-sizing: border-box;
  }

  body {
    color: inherit;
    font-family: 'Noto Sans', sans-serif;
    line-height: 1.5;
    width:390px;
    margin:0 auto 50px;
  }
  :root {
    --primary-color:#6FA744;
    --point-text-color:#A2D0A7;
    --point-color: #F17C9B;
    --white-900:#ffffff;
    --gray-300:#494949;
    --gray-900:#1F1F1F;
    
    --serif : 'Prata', serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, input, textarea {
    font-family: 'Noto Sans', sans-serif;
    padding: 0;
    border: none;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: inherit;
    background-color: inherit;
  }

  button {
    cursor: pointer;
  }

  ol, ul, li {
    list-style: none;
    margin:0;
    padding:0;
  }

  h1,h2,h3,h4,h5,h6,p,span{
    margin:0;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  dialog {
    padding: 0;
    border: none;
  }

  dialog::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export default GlobalStyle;
