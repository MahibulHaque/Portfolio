import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 70px);
  display: ${({ close }) => (close ? "flex" : "none")};
  align-items: flex-start;
  justify-content: center;
  position: relative;

`;
export const InnerContainer = styled.div`
  max-width: 1800px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;

export const HeaderTag = styled.header`
  font-size: clamp(30px, 6vw, 60px);
  font-family: "PoppinsRegular";
  word-spacing: 0.5rem;
`;
export const WrapperSection = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 15rem;
  margin-top: 15rem;
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(90%, 1fr));
    margin-top: 5rem;
    gap: 5rem;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  & > h1 {
    display: flex;
    align-items: center;
    font-size: clamp(20px, 4vw, 30px);
    font-family: "PoppinsRegular";
    margin-bottom: 2rem;
    span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 5rem;
      height: 5rem;
      margin-right: 2rem;
      background-color: var(--purple-1);
      border-radius: 50%;
    }
  }
  & > p {
    font-size: 1.6rem;
    color: var(--grey-1);
    font-family: "PoppinsRegular";
    line-height: 2.4rem;
    margin-bottom: 4rem;
  }
`;

export const TechContent = styled.div`
  display: flex;
  flex-direction: column;
  & > h1 {
    font-size: clamp(25px, 4vw, 30px);
    font-family: "PoppinsRegular";
    position: relative;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;
export const IconContainerHeader = styled.h3`
  font-size: clamp(15px, 4vw, 20px);
  font-family: "PoppinsRegular";
  color: var(--grey-1);
  margin-bottom: 3rem;


`;

export const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  gap: 5rem;
  margin-bottom: 10rem;
`;
