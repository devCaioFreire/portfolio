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
`;

export const HeaderLeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.white};

  h3 {
    font-size: 1rem;
  }

  img {
    width: 2rem;
    height: 2rem;
  }
`;

export const NavContainer = styled.nav`
  display: flex;

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
`;
