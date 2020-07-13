import React from "react"
import PropTypes from "prop-types"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

import Footer from "./Footer"
import Container from "./Container"
import Content from "./Content"
import FullPageBG from "./FullPageBG"
import Menu from "./Menu"
import ThemeProvider from "../theme/ThemeProvider"

library.add(fab)

const Layout = ({ children, bgtext }) => {
  return (
    <ThemeProvider>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "30px auto 30px",
          gridTemplateRows: "1fr auto",
          minHeight: "100%",
        }}
      >
        <Container>
          <Content>{children}</Content>
          <Menu />
        </Container>
      </div>
      <Footer />
      <FullPageBG text={bgtext} />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
