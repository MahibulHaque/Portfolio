import { useEffect } from "react";

import {
  Container,
  Subheader,
  Header,
  Section,
  BottomTag,
  Description,
  Btn,
  BtnMain,
  BtnSecond,
} from "./HeroSectionElements";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimatedDiv, AnimatedH1, AnimatedH3, AnimatedP } from "../../Animated";
const HeroSection = ({ close }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const variants = {
    visible: { opacity: 1, y: 0, rotate: 0 },
    hidden: { opacity: 0, y: 100, rotate: 4 },
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <Container id="hero_section" close={close} ref={ref}>
      <Section className="details">
        <Subheader>
          <AnimatedP
            animate={controls}
            initial="hidden"
            variants={variants}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
              delay: 0.1,
            }}
          >
            HI THERE✌ I'M
          </AnimatedP>
        </Subheader>
        <Header>
          <AnimatedH1
            animate={controls}
            initial="hidden"
            variants={variants}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
              delay: 0.3,
            }}
          >
            Mahibul Haque
          </AnimatedH1>
        </Header>
        <Header>
          <AnimatedH3
            animate={controls}
            initial="hidden"
            variants={variants}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
              delay: 0.5,
            }}
          >
            I craft things for the web
          </AnimatedH3>
        </Header>
        <BottomTag>
          <AnimatedH3
            animate={controls}
            initial="hidden"
            variants={variants}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
              delay: 0.7,
            }}
          >
            DESIGNER + DEVELOPER
          </AnimatedH3>
        </BottomTag>
        <Description>
          <AnimatedP
            animate={controls}
            initial="hidden"
            variants={variants}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
              delay: 0.9,
            }}
          >
            I'm a design minded front-end web developer based in Dhaka,
            Bangladesh.
          </AnimatedP>
        </Description>
        <Btn>
          <AnimatedDiv
            animate={controls}
            initial="hidden"
            variants={variants}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
              delay: 1.1,
            }}
          >
            <BtnMain href="https://calendly.com/mahibulhaque" target="blank">
              LET'S TALK!
            </BtnMain>
            <BtnSecond>MY RESUME</BtnSecond>
          </AnimatedDiv>
        </Btn>
      </Section>
    </Container>
  );
};

export default HeroSection;
