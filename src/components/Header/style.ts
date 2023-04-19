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
    div {
      display: none;
    }

    ul {
      width: 100%;
    }
  }

  @media screen and (max-width: 839px) {
    div {
      display: block;
    }

    transition: all 0.3s;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: -1rem;
    width: ${(props) => (props.isOpen ? "20%" : "0")};
    height: 100%;
    background-color: ${({ theme }) => theme.gray};
    display: ${(props) => (props.isOpen ? "flex" : "inline-block")};
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
`;
