import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { CategoryHeading, Display, Text, Title } from "../components/Typography"

const AboutPage = () => (
  <Layout bgtext="Projects">
    <SEO title="Projects" />
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
        <CategoryHeading>Projects</CategoryHeading>
        <Display>Works That Worked</Display>
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
          Web Development · Branding · Logo Design · UI · UX
        </span>
        <div style={{ maxWidth: "650px" }}>
          <Text>
            Below are some of the projects that I've been a part of ranging from
            purely conceptual design work to hands-on implementation and
            development. I've experienced and contributed to the whole process
            at different stages and at different sides of the pipeline.
          </Text>
        </div>
      </div>
      <div style={{ display: "flex", marginBottom: "80px" }}>
        <div style={{ width: "30%", paddingRight: "50px", marginTop: "20px" }}>
          <div style={{ marginBottom: "50px" }}>
            <Title>Roles</Title>
            <Text>Illustration</Text>
            <Text>Icon Development</Text>
            <Text>User Experience Design</Text>
            <Text>Copywriter &amp; Editor</Text>
            <Text>Front-end Consultant</Text>
          </div>
        </div>
        <div style={{ width: "70%" }}>
          <h2 style={{ fontSize: "28px" }}>Investing in the Web</h2>
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
            2020 · Freelance
          </span>
          <Text>
            I was brought into the project to help update the site's core visual
            footprint and online presence. The initial website was built in a
            bid to get the project up and running as soon as possible which led
            to rushed decisions on both site flow and usability. We agreed to
            work on an MVP for this iteration so we do not disrupt our existing
            user's daily interaction. The first course of action was to update
            and streamline the sitemap to make it easier for users to get to the
            content they needed. Once we had a cleaner flow for the site, we
            then proceeded to update the visuals to make it look less of an
            outdated templated blog.
          </Text>
          <Text>
            The site is still a work-in-progress, but is currently live and
            active. We are planning on collaborating again once again in the
            future for the next phase of the project.
          </Text>
          <a
            style={{ marginTop: "30px", display: "block" }}
            href="https://investingintheweb.com/"
            target="_blank"
            rel="noreferrer"
          >
            View Project live
            <FontAwesomeIcon
              icon={faArrowRight}
              size="sm"
              style={{ marginLeft: "10px" }}
            />
          </a>
        </div>
      </div>
      <div style={{ display: "flex", marginBottom: "80px" }}>
        <div style={{ width: "30%", paddingRight: "50px", marginTop: "20px" }}>
          <div style={{ marginBottom: "50px" }}>
            <Title>Roles</Title>
            <Text>Logo Design</Text>
            <Text>Calligraphy</Text>
          </div>
        </div>
        <div style={{ width: "70%" }}>
          <h2 style={{ fontSize: "28px" }}>From Left to Write Calligraphy</h2>
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
            2019 · Personal Project
          </span>
          <Text>
            I've been practicing calligraphy for about 5 years now and I wanted
            to create an online presence for myself using the skills I've gained
            so far. I created a logo for my calligraphy instagram starting with
            writing it out using brushpens and rendering it digitally using
            Figma.
          </Text>
        </div>
      </div>
      <div style={{ display: "flex", marginBottom: "80px" }}>
        <div style={{ width: "30%", paddingRight: "50px", marginTop: "20px" }}>
          <div style={{ marginBottom: "50px" }}>
            <Title>Roles</Title>
            <Text>Logo Design</Text>
            <Text>Calligraphy</Text>
          </div>
        </div>
        <div style={{ width: "70%" }}>
          <h2 style={{ fontSize: "28px" }}>Personal Logo</h2>
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
            2019 · Personal Project
          </span>
          <Text>
            I've been using "sopasdigital" as my main online presence for quite
            some time now. It's been increasingly difficult to make people
            associate this presence with myself so I decided to veer away from
            the old name and actually create a logomark that I could use with my
            name. Since I wanted to also reflect a shift in direction of what
            projects I was taking and were willing to take in the future, I
            decided that this was the opportune moment to update my online
            visual mark.
          </Text>
          <Text>
            This logomark utilises my initials as the main reference for the
            core stroke direction of the main line. I also wanted to make sure
            that I keep the overall design to be flowing and adaptive, similar
            to how I am when it comes to projects and problems. Another small
            but fairly important note for me was to retain a certain asian feel
            to my logomark as it's very much a part of my design roots.
          </Text>
        </div>
      </div>
      <div style={{ display: "flex", marginBottom: "80px" }}>
        <div style={{ width: "30%", paddingRight: "50px", marginTop: "20px" }}>
          <div style={{ marginBottom: "50px" }}>
            <Title>Roles</Title>
            <Text>Web Development</Text>
            <Text>Mobile Web Design</Text>
            <Text>User Interface Design</Text>
          </div>
        </div>
        <div style={{ width: "70%" }}>
          <h2 style={{ fontSize: "28px" }}>Lixo Marinho</h2>
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
            2019 · Significa
          </span>
          <Text>
            This was my first project while I was under Signfica. I was able to
            learn more about more current web development practices while
            applying it onto a pretty sizable project. With a small team, we
            were able to create a reliable framework for a webapp which was
            expected to handle frequent data requests, updates and changes.
          </Text>
          <Text>
            I was also able to help iron out concerns for the mobile design as
            there wasn't a solid plan for the mobile version when we started
            working on the project. We were able to streamline the flow and
            content to the most essential information so that we maintain
            optimal performance without taking away from the experience when
            using a mobile device.
          </Text>
          <a
            style={{ marginTop: "30px", display: "block" }}
            href="https://lixomarinho.app/"
            target="_blank"
            rel="noreferrer"
          >
            View Project live
            <FontAwesomeIcon
              icon={faArrowRight}
              size="sm"
              style={{ marginLeft: "10px" }}
            />
          </a>
        </div>
      </div>
      <div style={{ display: "flex", marginBottom: "80px" }}>
        <div style={{ width: "30%", paddingRight: "50px", marginTop: "20px" }}>
          <div style={{ marginBottom: "50px" }}>
            <Title>Roles</Title>
            <Text>Web Development</Text>
          </div>
        </div>
        <div style={{ width: "70%" }}>
          <h2 style={{ fontSize: "28px" }}>Arda Academy</h2>
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
            2019 · Significa
          </span>
          <Text>
            This was my second project in Signfica wherein I was given a larger
            chunk of development responsibility. It was a fun experience
            implementing from scratch the design and interaction that my
            colleague had created. We had a pretty tight timeline for this which
            gave rise to a certain number of prioritisation challenges but we
            were able to deliver a very solid MVP. The site has now since
            received sizable updates to further reflect ideas and
            functionalities we wanted to include.
          </Text>
          <a
            style={{ marginTop: "30px", display: "block" }}
            href="https://ardaacademy.com/"
            target="_blank"
            rel="noreferrer"
          >
            View Project live
            <FontAwesomeIcon
              icon={faArrowRight}
              size="sm"
              style={{ marginLeft: "10px" }}
            />
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
