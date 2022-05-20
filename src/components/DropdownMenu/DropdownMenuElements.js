import styled from "styled-components";
import { AnimatedDiv } from "../../Animated";

export const Container = styled(AnimatedDiv)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    top: 0;
    left: 0;
    position: fixed;
    overflow: hidden;
    z-index: ${({ navOpen }) => (navOpen ? "2" : "1")};
    pointer-events: ${({ navOpen }) => (navOpen ? "all" : "none")};
  }
`;
export const GridWrapper = styled(AnimatedDiv)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;

  & > div {
    height: 0vh;
    opacity: 1;
    transition: all 1s ease-in-out;
    background-color: var(--purple-1);
  }
`;

export const NavSub = styled.nav`
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: space-between;
  border-bottom: 1px solid var(--deep-blue);
`;
export const Logo = styled.img`
  opacity: ${({ navOpen }) => (navOpen ? "1" : "0")};
  transition: all .25s ease-in-out;
  height: 49px;
  width: 60.05px;
  margin-left: 5%;
`;
export const CloseIcon = styled(AnimatedDiv)`
  opacity: ${({ navOpen }) => (navOpen ? "1" : "0")};
  transition: all .25s ease-in-out;
  margin-right: 5%;
  width: 2.6rem;
  height: 2.6rem;
  border: solid 2px var(--white);
  border-radius: 50%;
  cursor: pointer;
`;

export const NavSectionSocial = styled(AnimatedDiv)`
  display: flex;
  opacity: 1;
  transition: all 1.5s ease-in-out;
  flex-direction: column;
  align-items: left;
  position: absolute;
  top: 25%;
  left: 15%;
  transform: translate(-15%, -25%);
  width: fit-content;
  height: fit-content;
`;

export const HeaderLine = styled.h1`
  font-family: PoppinsRegular;
  letter-spacing: 0.3rem;
  margin-bottom: 2rem;
`;
export const SocialLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  & > a {
    margin: 2.2rem 2.2rem 0rem 0rem;

    & > div {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

export const NavNavigation = styled(AnimatedDiv)`
  display: flex;
  flex-direction: column;
  align-items: left;
  position: absolute;
  top: 85%;
  left: 15%;
  transform: translate(-15%, -85%);

  .nav_links {
    font-size: 2rem;
    cursor: pointer;
    letter-spacing: 0.2rem;
    margin-bottom: 1.5rem;
    transition: all 0.25s ease-in-out;

    &:hover {
      letter-spacing: 0.6rem;
    }
  }
`;
