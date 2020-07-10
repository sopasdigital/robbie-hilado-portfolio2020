import React from "react"
import PropTypes from "prop-types"

import { BGContainer, BGText } from "./styled"

const FullPageBG = ({ text }) => (
  <BGContainer>
    <BGText>{text}</BGText>
  </BGContainer>
)

FullPageBG.propTypes = {
  text: PropTypes.string.isRequired,
}

export default FullPageBG
