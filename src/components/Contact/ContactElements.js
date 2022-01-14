import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 70px);
  display: ${({ close }) => (close ? "flex" : "none")};
  align-items: flex-start;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  max-width: 1600px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

export const Subtitle = styled.h3`
  font-size: 16px;
  color: var(--highlight);
  font-family: "PoppinsRegular";
`;

export const HeaderTag = styled.header`
  margin-top: 2rem;
  font-size: clamp(50px, 6vw, 60px);
  font-family: "PoppinsSemibold";
  display: flex;
  flex-direction: column;
  line-height: 1.25em;
`;

export const Description = styled.p`
  margin-top: 20px;
  font-size: 18px;
  font-family: "PoppinsRegular";
  line-height: 24px;
  color: var(--grey-1);
  a {
    color: var(--white);
    &:hover {
      color: var(--highlight);
    }
  }
`;

export const EmailButton = styled.div`
  margin-top: 4rem;
  display: flex;
  max-width: fit-content;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: none;
  border: 1px solid var(--grey-1);
  font-size: clamp(15px, 3vw, 25px);
  font-family: "PoppinsRegular";
  cursor: pointer;
  overflow: hidden;
  & > .icon {
    position: relative;
    z-index: 1;
    padding: 1em 0.5em 1em 0.5em;
    border-right: 1px solid var(--grey-1);
    & > .copyIcon {
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      display: none;
      opacity: 0;
    }
    & > .mailIcon {
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      display: block;
      opacity: 1;
    }
  }
  & > .email {
    z-index: 1;
    padding: 1em 0.5em 1em 0.5em;
    position: relative;
    color: white;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &::before {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      content: "Click to Copy";
      color: var(--highlight);
      opacity: 0;
      display: none;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      @media (hover: none) {
        content: "Copied";
      }
    }
  }

  &:hover {
    &::before {
      transform: skew(0, 0deg) rotate(0deg) translateY(0px);
    }

    & > .icon {
      & > .mailIcon {
        display: none;
      }
      & > .copyIcon {
        display: block;
        fill: var(--highlight);
        opacity: 1;
      }
    }
    & > .email {
      color: var(--purple-1);
      &::before {
        opacity: 1;
        display: block;
      }
    }
  }

  &::before {
    content: "";
    background-color: var(--purple-1);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: skew(0, 10deg) rotate(10deg) translateY(250px);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    z-index: 0;
  }
`;

export const PhoneNumber = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: fit-content;
  font-size: 2.5rem;
  font-family: "PoppinsRegular";

  @media (max-width: 834px){
    font-size: 20px;
  }

  span {
    font-size: 16px;
    color: var(--grey-1);
    font-family: "MontserratBold";
    margin-bottom: 20px;
  }
  a:hover {
    color: var(--highlight);
  }
`;

export const FooterSection = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  padding: 100px 0px 100px 0px;
  box-sizing: border-box;

  @media (min-width: 834px) and (max-width: 1200px) {
    margin-top: 40px;
    padding: 0px 0px 100px 0px;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 834px) {
    margin-top: 40px;
    flex-direction:column;
    padding: 40px 0px 40px 0px;
  }
`;

export const Social = styled.div`
  border-bottom: 1px solid var(--grey-1);
  border-top: 1px solid var(--grey-1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  height: 90px;
  width: calc(50% - 160px);

  @media (min-width: 834px) and (max-width: 1200px) {
    width: 100%;
  }

  @media (min-width: 320px) and (max-width: 834px) {
    width: 100%;
    height: 120px;
  }

  & > a {
    display: flex;
    align-items: flex-start;
    font-size: 16px;

    @media (min-width: 320px) and (max-width: 834px) {
      flex-direction: column;
      align-items: center;
    }

    & > svg {
      width: 20px;
      height: 20px;
      margin-right: 14px;
      stroke: var(--highlight);

      @media (min-width: 320px) and (max-width: 834px) {
        margin: 0 0 20px 0;
      }
    }
  }
  &>.divider {
    height: 40px;
    width: 1px;
    background-color: var(--grey-1);
  }
`;

export const Comment = styled.div`
  border-bottom: 1px solid var(--grey-1);
  border-top: 1px solid var(--grey-1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  height: 90px;
  width: calc(50% - 160px);

  @media (min-width: 320px) and (max-width: 1200px){
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    border-top: none;
    height: 120px;
    width: 100%;
    margin-top: 10px;
  }

  &>p{
    display: flex;
    align-items: flex-start;
    color: var(--white);
    font-size: 18px;
    line-height: 32px;

    @media (max-width: 834px){
      font-size: 16px;
      line-height: 24px;
    }
  }

  &>.divider{
    height: 40px;
    width: 1px;
    background-color: var(--grey-1);

    @media (max-width: 1200px){
      height: 1px;
      width: 80px;
    }
  }
`;
