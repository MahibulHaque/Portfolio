import React from "react";
import { Link as LinkS } from "react-scroll";

import { MdHome, MdStar } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

import {
  Nav,
  NavMenu,
  Logo,
  MobileIcon,
  HeaderItemContainer,
} from "./TopbarElements";

const Topbar = ({ close, setNavOpen, navOpen }) => {
  return (
    <Nav close={close}>
      <HeaderItemContainer>
        <Logo
          src="/images/logo_1.svg"
          alt="logo"
          onClick={() => {
            window.location.reload();
          }}
        />
        <NavMenu>
          <LinkS
            to="hero_section"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="nav_links"
          >
            <div>
              <MdHome />
            </div>
            <span>HOME</span>
          </LinkS>
          <LinkS
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav_links"
          >
            <div>
              <MdStar />
            </div>
            <span>SKILLS</span>
          </LinkS>
          <LinkS
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav_links"
          >
            <div className="getSmall">
              <BsFillBriefcaseFill />
            </div>
            <span>PROJECTS</span>
          </LinkS>
          <LinkS
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav_links"
          >
            <div className="getSmall">
              <FaUser />
            </div>
            <span>Contact</span>
          </LinkS>
        </NavMenu>

        <MobileIcon onClick={() => setNavOpen(!navOpen)}>
          <FiMenu onClick={() => setNavOpen(!navOpen)} />
        </MobileIcon>
      </HeaderItemContainer>
    </Nav>
  );
};

export default Topbar;
