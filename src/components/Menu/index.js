import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Image from "../image"
import {
  Logo,
  Nav,
  NavDivider,
  MenuWrapper,
  SiteLinks,
  SocialLinks,
} from "./styled"

const Menu = () => (
  <MenuWrapper>
    <Nav>
      <Logo>
        <Link to="/">
          <Image />
        </Link>
      </Logo>
      <SiteLinks>
        <li>
          <Link to="/projects/">Projects</Link>
        </li>
        <li>
          <Link to="/about/">About Me</Link>
        </li>
      </SiteLinks>

      <NavDivider />

      <SocialLinks>
        <li>
          <a
            href="https://github.com/sopasdigital"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/robbiehilado/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </li>
        <li>
          <a
            href="https://dribbble.com/sopasdigital"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "dribbble"]} />
          </a>
        </li>
        <li>
          <a
            href="https://www.behance.net/user/?username=sopasdigital"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "behance"]} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/fromlefttowritecal.li/">
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </a>
        </li>
      </SocialLinks>
    </Nav>
  </MenuWrapper>
)

export default Menu
