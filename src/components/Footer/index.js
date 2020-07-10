import React from "react"

import FooterContainer from "./styled"

const Footer = () => (
  <FooterContainer>
    <p>Created with love, care, React and Gatsby</p>
    <p>© {new Date().getFullYear()} John Robert Hilado</p>
  </FooterContainer>
)

export default Footer
