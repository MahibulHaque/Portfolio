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
import { AnimatePresence } from "framer-motion";
import { AnimatedDiv, AnimatedH1, AnimatedH3, AnimatedP } from "../../Animated";
const HeroSection = ({ close }) => {
  const variants = {
    visible: { opacity: 1, y: 0, rotate: 0 },
    hidden: { opacity: 0, y: 100, rotate: 4 },
  };

  return (
    <AnimatePresence>
      {close && (
        <Container id="hero_section" key="container-hero">
          <Section className="details">
            <Subheader>
              <AnimatedP
                animate={variants.visible}
                initial={variants.hidden}
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
                animate={variants.visible}
                initial={variants.hidden}
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
                animate={variants.visible}
                initial={variants.hidden}
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
                animate={variants.visible}
                initial={variants.hidden}
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
                animate={variants.visible}
                initial={variants.hidden}
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
                animate={variants.visible}
                initial={variants.hidden}
                variants={variants}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                  delay: 1.1,
                }}
              >
                <BtnMain
                  href="https://calendly.com/mahibulhaque"
                  target="blank"
                >
                  LET'S TALK!
                </BtnMain>
                <BtnSecond>MY RESUME</BtnSecond>
              </AnimatedDiv>
            </Btn>
          </Section>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default HeroSection;
