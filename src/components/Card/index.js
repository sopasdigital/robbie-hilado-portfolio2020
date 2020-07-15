import React from "react"

import {
  CardWrapper,
  CardBarWrapper,
  CardBarWrapperToggleA,
  CardBarWrapperToggleB,
  CardContentWrapper,
} from "./styled"

const Card = ({ children }) => <CardWrapper>{children}</CardWrapper>

const CardBar = ({ children }) => <CardBarWrapper>{children}</CardBarWrapper>

const CardBarDesktop = ({ children }) => (
  <CardBarWrapperToggleA>{children}</CardBarWrapperToggleA>
)

const CardBarMobile = ({ children }) => (
  <CardBarWrapperToggleB>{children}</CardBarWrapperToggleB>
)

const CardContent = ({ children }) => (
  <CardContentWrapper>{children}</CardContentWrapper>
)

export { Card, CardBar, CardBarDesktop, CardBarMobile, CardContent }
