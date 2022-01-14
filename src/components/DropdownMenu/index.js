import React from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Link as LinkS } from "react-scroll";

import { MdClose } from "react-icons/md";

import {
  Container,
  GridWrapper,
  CloseIcon,
  Logo,
  NavSub,
  NavSectionSocial,
  HeaderLine,
  SocialLinks,
  NavNavigation,
} from "./DropdownMenuElements";

import { FiDribbble } from "react-icons/fi";
import { FaBehance, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const DropdownMenu = ({ navOpen, setNavOpen }) => {
  navOpen ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <Container navOpen={navOpen}>
      <GridWrapper navOpen={navOpen} className={`${navOpen ? "active" : ""}`}>
        <div
          navOpen={navOpen}
          className={`${navOpen ? "div_1_active" : "div_1"}`}
        ></div>
        <div
          navOpen={navOpen}
          className={`${navOpen ? "div_2_active" : "div_2"}`}
        ></div>
        <div
          navOpen={navOpen}
          className={`${navOpen ? "div_3_active" : "div_3"}`}
        ></div>
        <div
          navOpen={navOpen}
          className={`${navOpen ? "div_4_active" : "div_4"}`}
        ></div>
      </GridWrapper>

      <NavSub navOpen={navOpen}>
        <Logo src="/images/logo_1.svg" alt="logo" navOpen={navOpen} />
        <CloseIcon navOpen={navOpen} onClick={() => setNavOpen(!navOpen)}>
          <MdClose />
        </CloseIcon>
      </NavSub>
      <NavSectionSocial navOpen={navOpen}>
        <HeaderLine navOpen={navOpen}>ON THE WEB</HeaderLine>
        <SocialLinks navOpen={navOpen}>
          <a href="https://dribbble.com/Mahibul26" target="blank">
            <div>
              <FiDribbble />
            </div>
          </a>
          <a href="https://www.behance.net/mahibhaque" target="blank">
            <div>
              <FaBehance />
            </div>
          </a>
          <a href="https://github.com/MahibulHaque" target="blank">
            <div>
              <FaGithub />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/mahibul-haque-969160202"
            target="blank"
          >
            <div>
              <FaLinkedin />
            </div>
          </a>
          <a href="https://www.facebook.com/mahibhaque" target="blank">
            <div>
              <FaFacebook />
            </div>
          </a>
        </SocialLinks>
      </NavSectionSocial>
      <NavNavigation navOpen={navOpen}>
        <HeaderLine navOpen={navOpen}>NAVIGATION</HeaderLine>
        <LinkS
          to="hero_section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          delay={1500}
          className="nav_links"
          onClick={() => setNavOpen(!navOpen)}
        >
          HOME
        </LinkS>
        <LinkS
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          delay={1500}
          className="nav_links"
          onClick={() => setNavOpen(!navOpen)}
        >
          SKILLS
        </LinkS>
        <LinkS
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          delay={1500}
          className="nav_links"
          onClick={() => setNavOpen(!navOpen)}
        >
          PROJECTS
        </LinkS>
        <LinkS
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          delay={1500}
          className="nav_links"
          onClick={() => setNavOpen(!navOpen)}
        >
          CONTACT
        </LinkS>
      </NavNavigation>
    </Container>
  );
};

export default DropdownMenu;
