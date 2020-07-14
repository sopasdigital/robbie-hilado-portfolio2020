import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import Typed from "react-typed"

import Layout from "../components/layout"
import SEO from "../components/seo"

config.autoAddCss = false

const IndexPage = () => (
  <Layout bgtext="Olá">
    <SEO title="Home" />
    <div>
      <div style={{ maxWidth: "700px" }}>
        <h1 className="typedText">
          Hello there! I'm Robbie. <br />I enjoy{" "}
          <Typed
            strings={[
              "interaction design",
              "front-end development",
              "web design",
              "user experience design",
              "user interface design",
              "illustration",
              "calligraphy",
            ]}
            backDelay={2000}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
          .
        </h1>

        <p>
          I'm an Interaction Designer and Front-end Developer from the
          Philippines who is currently based in Porto, Portugal. I thrive in
          creating pleasant experiences through digital media with a strong
          focus on human-centered design. I also dabble in photography,
          illustration and calligraphy.
        </p>
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            color: "#00A5DF",
            alignItems: "center",
          }}
        >
          <Link to="/projects/">
            See my latest projects{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              size="sm"
              style={{ marginLeft: "10px" }}
            />
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
