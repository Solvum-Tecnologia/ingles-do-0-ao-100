import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background: ${props => props.theme.background};
  }


  .logo {
    img {
      width: 130px;
    }
  }

  h1, h2, h3, h4, h5, p {
    color: ${props => props.theme.primary};
  }

  h2 {
    font-weight: 900;
  }

  h3 {
    font-weight: 400;
    text-align: justify;
  }

  p {
    font-size: 16px;
    text-align: justify;
  }

  button {
    cursor: pointer;
  }
`;
