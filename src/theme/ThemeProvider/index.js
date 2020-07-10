import React from "react"
import { ThemeProvider as ThemeWrapper } from "styled-components"
import PropTypes from "prop-types"

import GlobalStyle from "../style/styles"
import theme from "../style/theme"

const ThemeProvider = ({ children }) => (
  <>
    <ThemeWrapper theme={theme}>
      <>{children}</>
    </ThemeWrapper>
    <GlobalStyle />
  </>
)

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeProvider
