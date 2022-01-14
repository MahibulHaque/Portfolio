import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdMailOutline, MdContentCopy } from "react-icons/md";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import {
  Container,
  InnerContainer,
  Description,
  Subtitle,
  HeaderTag,
  EmailButton,
  PhoneNumber,
  FooterSection,
  Social,
  Comment
} from "./ContactElements";

const Contact = ({ close }) => {
  return (
    <Container close={close} id="contact">
      <InnerContainer>
        <Subtitle>Contact</Subtitle>
        <HeaderTag>
          <span>Interested ?</span>
          <span>Lets Get In Touch !</span>
        </HeaderTag>
        <Description>
          I’m not really active on{" "}
          <a href="https://twitter.com/Mahibul45291325">Twitter</a> but you can
          get in touch with me on{" "}
          <a
            href="https://www.linkedin.com/in/mahibul-haque-969160202"
            target="blank"
          >
            LinkedIn
          </a>
          . I post some of my design works on{" "}
          <a href="https://dribbble.com/Mahibul26" target="blank">
            Dribbble
          </a>{" "}
          and{" "}
          <a href="https://www.behance.net/mahibhaque" target="blank">
            Behance
          </a>
          .
        </Description>
        <CopyToClipboard text="mahibulhaque2000@gmail.com">
          <EmailButton>
            <div className="icon">
              <MdMailOutline className="mailIcon" />
              <MdContentCopy className="copyIcon" />
            </div>
            <div className="email">mahibulhaque2000@gmail.com</div>
          </EmailButton>
        </CopyToClipboard>
        <PhoneNumber>
          <span>PHONE</span>
          <a href="tel:+8801301054403">+(880)1301054403</a>
        </PhoneNumber>
        <FooterSection>
          <Social>
            <a href="https://twitter.com/Mahibul45291325">
              <FiTwitter />
              Twitter
            </a>
            <div className="divider"></div>
            <a href="https://linkedin.com/in/mahibul-haque-969160202">
              <FiLinkedin />
              LinkedIn
            </a>
            <div className="divider"></div>
            <a href="https://github.com/MahibulHaque">
              <FiGithub />
              Github
            </a>
          </Social>
          <Comment>
            <p>Expiration date 2021</p>
            <div className="divider"></div>
            <p>Mahibul Haque</p>
          </Comment>
        </FooterSection>
      </InnerContainer>
    </Container>
  );
};

export default Contact;
