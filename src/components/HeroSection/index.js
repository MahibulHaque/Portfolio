import React, { useEffect, useState } from "react";

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
import { motion, useAnimation } from "framer-motion";
const HeroSection = ({ close }) => {
  const animation = useAnimation();
  const [notAnimDone, setNotAnimDone] = useState(true);

  useEffect(() => {
    if (close && notAnimDone) {
      animation.start({
        y: 0,
        rotate:0
      });

      setNotAnimDone(false);
    }
    if (!close && notAnimDone) {
      animation.start({
        y: 200,
        rotate:10,
      });
    }
  }, [close, animation, notAnimDone]);

  return (
    <Container id="hero_section" close={close}>
      <Section className="details">
        <Subheader>
          <motion.p
            animate={animation}
            transition={{
              ease: "easeInOut",
              duration: .5,
              delay: 0.1,
            }}
          >
            HI THERE✌ I'M
          </motion.p>
        </Subheader>
        <Header>
          <motion.h1
            animate={animation}
            transition={{
              ease: "easeInOut",
              duration: .5,
              delay: 0.3,
            }}
          >
            Mahibul Haque
          </motion.h1>
        </Header>
        <Header>
          <motion.h3 animate={animation} transition={{
            ease: "easeInOut",
            duration: .5,
            delay: 0.5,
          }}>I craft things for the web</motion.h3>
        </Header>
        <BottomTag>
          <motion.h3 animate={animation} transition={{
            ease: "easeInOut",
            duration: .5,
            delay: 0.7,
          }}>DESIGNER + DEVELOPER</motion.h3>
        </BottomTag>
        <Description>
          <motion.p animate={animation} transition={{
            ease: "easeInOut",
            duration: .5,
            delay: 0.9,
          }}>
            I'm a design minded front-end web developer based in Dhaka,
            Bangladesh.
          </motion.p>
        </Description>
        <Btn>
          <motion.div animate={animation} transition={{
            ease: "easeInOut",
            duration: .5,
            delay: 1.1,
          }}>
            <BtnMain href="https://calendly.com/mahibulhaque" target="blank">
              LET'S TALK!
            </BtnMain>
            <BtnSecond>MY RESUME</BtnSecond>
          </motion.div>
        </Btn>
      </Section>
    </Container>
  );
};

export default HeroSection;
