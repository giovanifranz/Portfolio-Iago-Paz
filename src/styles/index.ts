import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'VCR OSD Mono';
  src: url("/fonts/VCR_OSD_MONO.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'Louis George Café';
  font-style: normal;
  font-weight: 400;
  src: local('Louis George Café'), url('/fonts/Louis/Louis_George_Cafe.ttf');
}

@font-face {
  font-family: 'Louis George Café';
  font-style: normal;
  font-weight: 400;
  src: local('Louis George Café'), url('/fonts/Louis/Louis_George_Cafe_Italic.ttf');
}

@font-face {
  font-family: 'Louis George Café';
  font-style: normal;
  font-weight: 700;
  src: local('Louis George Café'), url('/fonts/Louis/Louis_George_Cafe_Bold.ttf');
}

@font-face {
  font-family: 'Louis George Café';
  font-style: normal;
  font-weight: 700;
  src: local('Louis George Café'), url('/fonts/Louis/Louis_George_Cafe_Bold_Italic.ttf');
}

@font-face {
  font-family: 'Louis George Café Light';
  font-style: normal;
  font-weight: 400;
  src: local('Louis George Café'), url('/fonts/Louis/Louis_George_Cafe_Light.ttf');
}

@font-face {
  font-family: 'Louis George Café Light';
  font-style: italic;
  font-weight: 400;
  src: local('Louis George Café'), url('/fonts/Louis/Louis_George_Cafe_Light_Italic.ttf');
}

:root {
  --white: #fafafa;
  --black: #000;
  --gray: #a9a9a9;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (min-width: 1080px) {
    font-size: 93.75%;
  }
  @media (min-width: 768px) {
    font-size: 87.5%;
  }

  width: 100%;
  height: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
  background-color: var(--white);
  color: var(--black);
  margin: 0;
  font-family: 'Inconsolata';

  h1 {
    font-size: 16px;
  }

  p {
    font-size: 14px;
  }
}
`
