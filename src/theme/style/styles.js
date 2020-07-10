import { createGlobalStyle } from "styled-components"

import reset from "./reset"
import theme from "./theme"

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body {
    height: 100%;
  }

  html {
    font-size: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
  body {
    font-size: 16px;
    line-height: 1.45rem;
    font-family:${theme.fonts.default};
    color: ${theme.colors.black};
    -webkit-font-smoothing: antialiased;
    display: flex;
    flex-direction: column;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.display};
  }

  h1 {
    font-size: 3.052rem;
    line-height: 3.815rem;
    margin-bottom: 1.45rem;
  }

  h2 {
    font-size: 2.441rem;
    line-height: 3.052rem;
  }

  h3 {
    font-size: 1.953rem;
    line-height: 2.441rem;
  }

  h4 {
    font-size: 1.563rem;
    line-height: 1.953rem;
  }

  h5 {
    font-size: 1.25rem;
    line-height: 1.563rem;
  }

  h6 {
    font-size: 1rem;
    line-height: 1.25rem;
  }

  a {
    color: ${theme.colors.blue.primary};
    font-weight: 700;
    
    text-decoration: none;
    
    &:hover, &[aria-current] {
    color: ${theme.colors.blue.secondary};
    font-weight: 700;
    cursor: pointer;
    }

    &[aria-current] {
      color: ${theme.colors.blue.primary};
    }
  }

  p {
    margin-bottom: 1rem;
  }
`

export default GlobalStyle
