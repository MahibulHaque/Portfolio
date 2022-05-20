import React from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Link as LinkS } from "react-scroll";
import { AnimatePresence } from "framer-motion";
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
import { AnimatedDiv } from "../../Animated";

const DropdownMenu = ({ navOpen, setNavOpen }) => {
  navOpen ? disableBodyScroll(document) : enableBodyScroll(document);

  const variants = {
    hidden: {
      height: 0,
      opacity: 0,
    },
    animate: {
      height: "100vh",
      opacity: 1,
    },
    exit: {
      height: 0,
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      {navOpen && (
        <Container
          key="nav-container"
          navOpen={navOpen}
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{duration:4}}
        >
          <GridWrapper>
            <AnimatedDiv
              initial={variants.hidden}
              animate={variants.animate}
              exit={variants.exit}
              transition={{ ease: "easeInOut" }}
            ></AnimatedDiv>
            <AnimatedDiv
              initial={variants.hidden}
              animate={variants.animate}
              exit={variants.exit}
              transition={{ ease: "easeInOut", delay: 0.2 }}
            ></AnimatedDiv>
            <AnimatedDiv
              initial={variants.hidden}
              animate={variants.animate}
              exit={variants.exit}
              transition={{ ease: "easeInOut", delay: 0.4 }}
            ></AnimatedDiv>
            <AnimatedDiv
              initial={variants.hidden}
              animate={variants.animate}
              exit={variants.exit}
              transition={{ ease: "easeInOut", delay: 0.6 }}
            ></AnimatedDiv>
          </GridWrapper>

          <NavSub navOpen={navOpen}>
            <Logo src="/images/logo_1.svg" alt="logo" navOpen={navOpen} />
            <CloseIcon navOpen={navOpen} onClick={() => setNavOpen(!navOpen)}>
              <MdClose />
            </CloseIcon>
          </NavSub>
          <NavSectionSocial navOpen={navOpen}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{
              duration:.25,
              ease:"easeInOut"
            }}
          >
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
          <NavNavigation navOpen={navOpen}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{
              duration:.25,
              ease:"easeInOut"
            }}
          >
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
      )}
    </AnimatePresence>
  );
};

export default DropdownMenu;
