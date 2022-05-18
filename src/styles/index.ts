import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

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
  overflow-x: hidden;

  h1 {
    font-size: 16px;
  }

  p {
    font-size: 14px;
  }
}
`

export const Container = styled.main`
  max-width: 1920px;
  margin: 0 auto;
  margin-top: 220px;
  margin-bottom: 25px;
  display: block;

  @media (max-width: 768px) {
    max-width: 768px;
    margin-top: 150px;
    margin-bottom: 12px;
  }
`
