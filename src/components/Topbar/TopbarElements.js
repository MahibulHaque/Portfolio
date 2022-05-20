import styled from "styled-components";

export const Nav = styled.header`
  display: ${({ close }) => (close ? "flex" : "None")};
  align-items: center;
  justify-content: center;
  background-color: var(--black);
  width: 100vw;
  height: 70px;
  z-index: 1;
  overflow: hidden;
  border-bottom: 1px solid var(--dark-bg);
  position: fixed;
  top: 0;
`;

export const HeaderItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height:100%;
  max-width: 1200px;
`;
export const MobileIcon = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  display: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Logo = styled.img`
  height: 49px;
  width: 60.05px;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  .nav_links {
    display: flex;
    cursor: pointer;
    margin: 0 2rem;
    align-items: center;
    div {
      width: 2rem;
      height: 2rem;
      margin-right: 0.8rem;
    }
    .getSmall {
      width: 1.8rem;
      height: 1.8rem;
      margin-right: 0.8rem;
    }

    span {
      text-transform: uppercase;
      font-size: 1.8rem;
      letter-spacing: 0.2rem;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: var(--white);
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
  }
  .nav_links:hover {
    span:after {
      transform: scaleX(1);
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
