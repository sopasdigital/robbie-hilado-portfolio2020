import React from "react"
import PropTypes from "prop-types"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

import Footer from "./Footer"
import FullPageBG from "./FullPageBG"
import Menu from "./Menu"
import ThemeProvider from "../theme/ThemeProvider"

library.add(fab)

const Layout = ({ children, bgtext }) => {
  return (
    <ThemeProvider>
      <div style={{ display: "flex" }}>
        <div
          style={{
            flex: "2",
            padding: "4rem",
            maxHeight: "90vh",
            overflow: "auto",
          }}
        >
          {children}
        </div>
        <Menu />
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
