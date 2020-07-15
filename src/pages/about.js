import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { CategoryHeading, Display, Text, Title } from "../components/Typography"
import { CardSwitched, CardBar, CardContent } from "../components/Card"

const AboutPage = () => (
  <Layout bgtext="About">
    <SEO title="About" />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CategoryHeading>About</CategoryHeading>
        <Display>Robbie Hilado</Display>
        <span
          style={{
            fontSize: "15px",
            textTransform: "uppercase",
            letterSpacing: ".7px",
            marginBottom: "30px",
            display: "block",
            color: "#555",
          }}
        >
          Interaction Designer · Front-end Developer · Calligraphy Enthusiast
        </span>
        <div style={{ maxWidth: "650px" }}>
          <Text>
            I am an Interaction Designer and Front-end Developer with more than
            5 years commercial experience working with clients through digital
            media companies as well as freelance work.
          </Text>
          <Text>
            I come from a background of Design and Arts but have always loved
            development and implementation. It is this combination that I
            believe sets me apart from a lot of other designers or developers
            that stay clear of the other side of the coin. My experience in both
            design and development have greatly impacted how I see, interact,
            implement and improve my work and projects I'm working on at both
            ends of the spectrum.
          </Text>
        </div>
      </div>
      <CardSwitched>
        <CardBar>
          <div style={{ marginBottom: "50px" }}>
            <Title>Core Strengths</Title>
            <Text>Interaction Design</Text>
            <Text>Front End Development</Text>
            <Text>User Experience Design</Text>
            <Text>Calligraphy &amp; Lettering</Text>
            <Text>Sprint Facilitation (Sprint 2.0)</Text>
            <Text>Illustration</Text>
          </div>
          <div style={{ marginBottom: "50px" }}>
            <Title>Tools</Title>
            <Text>Git</Text>
            <Text>VS Code / Sublime Text</Text>
            <Text>Sketch / Figma</Text>
            <Text>Adobe Illustrator / Photoshop</Text>
            <Text>Adobe Lightroom</Text>
            <Text>MacOS / Windows</Text>
            <Text>Design Sprint 2.0</Text>
            <Text>Lightning Decision Jam</Text>
            <Text>Post-its</Text>
            <Text>Good ol' Pen &amp; Paper</Text>
            <Text>Various Art Materials</Text>
          </div>
          <div style={{ marginBottom: "50px" }}>
            <Title>Technologies</Title>
            <Text>Javascript</Text>
            <Text>React (CRA / Gatsby)</Text>
            <Text> HTML5 + CSS3</Text>
          </div>
          <div>
            <Title>Curious About</Title>
            <Text>Advanced CSS and SVG Animation</Text>
            <Text>Motion Design</Text>
            <Text>Typography &amp; Font Development</Text>
            <Text>Typescript</Text>
            <Text>WebGL</Text>
          </div>
        </CardBar>
        <CardContent>
          <h2>Best of Both Worlds</h2>
          <Text style={{ marginBottom: "50px" }}>
            I was fortunate enough to have been exposed and trained for both
            design and development. I've utilised these skills to help create
            functional, pleasing and visually appealing websites and
            applications. Knowing the ups and downs of both sides also make it a
            more efficient process of figuring what works and what doesn't for
            our current goal at hand.
          </Text>
          <h2>Iterative and Human-Centered Approach</h2>
          <Text style={{ marginBottom: "50px" }}>
            Ever since being exposed to research, design sprints and design
            thinking, I've absorbed much of their processes and have
            incorporated it into my current methodology as well. I find that
            iteration and testing is the cornerstone of delivering a
            well-rounded product or project.
          </Text>
          <h2>Involved &amp; Feedback Driven</h2>
          <Text style={{ marginBottom: "50px" }}>
            This philosophy of design has greatly improved how I go about
            helping clients achieve their goals. I get quite picky with my
            clientelle as I prefer to have an open and immersive feedback
            channel when working on projects. I firmly believe that if the
            client can openly communicate their ideas and are open to
            suggestions and improvements to their proposals, there's no other
            way for the project to go but up.
          </Text>
          <h2>Sounds Like a Fit for Your Team or Project?</h2>
          <Text style={{ marginBottom: "50px" }}>
            If you’re curious as to how I work and would like collaborate, pitch
            a project, know more about my process working with clients, or even
            just grab a coffee somewhere; please feel free to drop me an e-mail
            at{" "}
            <a href="mailto:robbie.hilado@gmail.com">robbie.hilado@gmail.com</a>
            .
          </Text>
        </CardContent>
      </CardSwitched>
    </div>
  </Layout>
)

export default AboutPage
