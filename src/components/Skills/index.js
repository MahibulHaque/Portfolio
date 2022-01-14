import React from "react";
import { MdCode } from "react-icons/md";
import { GiPencilRuler, GiCheckboxTree } from "react-icons/gi";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoSass,
  IoLogoNodejs,
  IoLogoPython,
} from "react-icons/io";
import { SiFirebase } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import {
  SiAdobexd,
  SiAdobeillustrator,
  SiAdobephotoshop,
} from "react-icons/si";

import {
  Container,
  InnerContainer,
  HeaderTag,
  WrapperSection,
  Content,
  TechContent,
  IconContainer,
  IconContainerHeader,
  Icons,
} from "./SkillsElements";

const Skills = ({ close }) => {
  let iconstyles = {
    height: 40,
    width: 40,
    fill: "var(--grey-1)",
  };

  return (
    <Container id="skills" close={close}>
      <InnerContainer>
        <HeaderTag>What I Do & Use</HeaderTag>
        <WrapperSection>
          <Content>
            <h1>
              <span>
                <MdCode style={{ height: 35, width: 35 }}></MdCode>
              </span>
              Web Development
            </h1>
            <p>
              Using HTML, CSS, and JavaScript with pre-processors and build
              tools such as Sass and Grunt, I have a passion for developing
              pixel-perfect websites and apps while maintaining a semantic,
              modular, and DRY code base.
            </p>
            <h1>
              <span>
                <GiPencilRuler
                  style={{ height: 25, width: 25 }}
                ></GiPencilRuler>
              </span>
              Responsive Web Design
            </h1>
            <p>
              I strive to develop and implement responsive and aesthetically
              pleasing interfaces for websites and apps that adapt to any type
              of device, platform, or browser.
            </p>
            <h1>
              <span>
                <GiCheckboxTree
                  style={{ height: 35, width: 35 }}
                ></GiCheckboxTree>
              </span>
              Experience Design
            </h1>
            <p>
              There have been far too many times where I've been trying to
              accomplish a simple task on a website, and ended up wanting to
              throw my computer out the window in frustration. Needless to say,
              user experience is an aspect of software I believe is vital to a
              successful product.
            </p>
          </Content>
          <TechContent>
            <h1>Few Technologies I Use</h1>
            <IconContainer>
              <IconContainerHeader>Development</IconContainerHeader>
              <Icons>
                <IoLogoJavascript style={iconstyles} />
                <IoLogoHtml5 style={iconstyles} />
                <IoLogoSass style={iconstyles} />
                <FaReact style={iconstyles} />
                <IoLogoNodejs style={iconstyles} />
                <DiMysql style={iconstyles} />
                <SiFirebase style={iconstyles} />
                <IoLogoPython style={iconstyles} />
              </Icons>
              <IconContainerHeader>Design</IconContainerHeader>
              <Icons>
                <SiAdobexd style={iconstyles} />
                <SiAdobeillustrator style={iconstyles} />
                <SiAdobephotoshop style={iconstyles} />
              </Icons>
            </IconContainer>
          </TechContent>
        </WrapperSection>
      </InnerContainer>
    </Container>
  );
};

export default Skills;
