import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  min-height: calc(100vh - 70px);
  display: ${({ close }) => (close ? "flex" : "none")};
  align-items: flex-start;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  max-width: 1200px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0rem;
`;

export const Header = styled(motion.header)`
  font-size: clamp(30px, 6vw, 60px);
  margin-top: 5rem;
`;
export const CardSection = styled(motion.div)`
  display: grid;

  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 5rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;
export const ProjectHolder = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  height: 500px;
  min-width: 325px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 2rem;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }

  & > h1 {
    margin-top: 3rem;
    font-size: 2.5rem;
    font-family: PoppinsSemibold;
    letter-spacing: 0.25rem;
  }
  & > p {
    margin-top: 3rem;
    font-size: 1.6rem;
    color: var(--grey-1);
    width: 85%;
    line-height: 2.2rem;
  }

  & > .tech-holder {
    margin-top: 3rem;
    width: 85%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    grid-gap: 1.5rem;

    span {
      font-size: 1.4rem;
      color: var(--purple-1);
    }
  }
`;
