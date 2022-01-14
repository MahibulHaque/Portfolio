import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: var(--black);
  display: ${({ close }) => (close ? "flex" : "none")};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;


export const Section = styled.div`
  max-width: 1200px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Subheader = styled.div`
  overflow: hidden;
  & > p {
    font-family: PoppinsRegular;
    font-size: 1.5rem;
    letter-spacing: 0.3rem;
    word-spacing: 0.3rem;
  }
`;
export const Header = styled.div`
  overflow: hidden;
  & > h1,
  h3 {
    font-size: clamp(40px, 7vw, 70px);
    font-family: "PoppinsSemiBold";
    margin-bottom: .25em;
  }
  & > h1 {
    color: var(--grey-1);
    margin: .25em 0;
  }
`;
export const BottomTag = styled.div`
  overflow: hidden;
  & > h3 {
    color: var(--purple-1);
    word-spacing: 0.6rem;
    letter-spacing: 0.6rem;
    font-family: PoppinsRegular;
    font-size: 1.8rem;
    @media screen and (max-width: 374px) {
      font-size: 1.7rem;
    }
  }
`;

export const Description = styled.div`
  overflow: hidden;
  & > p {
    margin: 2rem 0 0 0;
    font-size: 16px;
    word-spacing: 0.3rem;
    line-height: 2rem;
    color: var(--grey-1);
  }
`;

export const Btn = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-top: 2rem;
  & > div {
    display: flex;
  }
`;

export const BtnMain = styled.a`
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-right: 2rem;
  background-color: var(--purple-1);
  padding: 1rem 3rem;
  border-radius: 2rem;
  letter-spacing: 0.2rem;
  cursor: pointer;
  font-size: 1.8rem;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    background-color: var(--dark-purple);
  }

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
    padding: 1rem 2rem;
  }
`;
export const BtnSecond = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: none;
  padding: 1rem 3rem;
  border-radius: 2rem;
  border: 1.5px solid var(--purple-1);
  letter-spacing: 0.2rem;
  cursor: pointer;
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
    padding: 1rem 2rem;
  }
`;
