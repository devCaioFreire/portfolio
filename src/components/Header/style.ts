import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  max-width: 85rem;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`;

export const AsideContainer = styled.aside`
  border-top: 1px solid ${({ theme }) => theme.gray};
  width: 15rem;
  transform: rotate(-90deg);
  line-height: 0;

  a {
    display: inline-flex;
    transform: rotate(90deg);
    position: relative;
    top: -0.5rem;
    right: 6.5rem;
    color: ${(props) => props.theme.gray};

    svg {
      margin-right: 1rem;
    }

    &:hover {
      color: ${({ theme }) => theme.white};
    }
  }

  @media screen and (max-width: 1600px) {
    width: 10rem;
    margin-left: -2rem;
  }

  @media screen and (max-width: 1440px) {
    display: none;
  }
`;

export const HeaderLeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.white};
  margin: 0 1rem;

  h3 {
    font-size: 1rem;
  }

  img {
    width: 2rem;
    height: 2rem;
  }
`;

interface NavMobileProps {
  isOpen: boolean;
}

export const NavContainer = styled.nav<NavMobileProps>`
  display: flex;
  margin: 0 1rem;

  ul {
    display: flex;
    gap: 1rem;
  }

  li {
    a {
      color: ${(props) => props.theme.white};
      font-size: 1.1rem;
      transition: all 0.2s;

      &:hover {
        color: ${({ theme }) => theme.purple};
      }
    }

    span {
      color: ${(props) => props.theme.purple};
      font-size: 1.1rem;
    }

    svg {
      vertical-align: middle;
    }
  }

  @media screen and (min-width: 840px) {
    svg {
      display: none;
    }
  }

  @media screen and (max-width: 839px) {
    transition: all 0.3s;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: -1rem;
    width: ${(props) => (props.isOpen ? "18%" : "0")};
    height: 100%;
    background-color: ${({ theme }) => theme.gray};
    display: flex;
    z-index: 9999;

    svg {
      margin-top: 2rem;
      float: right;
      margin-right: 1rem;
    }

    ul {
      display: flex;
      margin: 5rem 1rem;
      gap: 2rem;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 764px) {
    width: ${(props) => (props.isOpen ? "19%" : "0")};
  }

  @media screen and (max-width: 724px) {
    width: ${(props) => (props.isOpen ? "20%" : "0")};
  }

  @media screen and (max-width: 670px) {
    width: ${(props) => (props.isOpen ? "22%" : "0")};
  }

  @media screen and (max-width: 608px) {
    width: ${(props) => (props.isOpen ? "23%" : "0")};
  }

  @media screen and (max-width: 582px) {
    width: ${(props) => (props.isOpen ? "24%" : "0")};
  }

  @media screen and (max-width: 557px) {
    width: ${(props) => (props.isOpen ? "25.5%" : "0")};
  }

  @media screen and (max-width: 523px) {
    width: ${(props) => (props.isOpen ? "26.5%" : "0")};
  }

  @media screen and (max-width: 502px) {
    width: ${(props) => (props.isOpen ? "27.5%" : "0")};
  }

  @media screen and (max-width: 484px) {
    width: ${(props) => (props.isOpen ? "28.5%" : "0")};
  }

  @media screen and (max-width: 466px) {
    width: ${(props) => (props.isOpen ? "29.5%" : "0")};
  }

  @media screen and (max-width: 449px) {
    width: ${(props) => (props.isOpen ? "31%" : "0")};
  }
`;
