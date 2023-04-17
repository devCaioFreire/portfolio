import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  max-width: 85rem;
  margin: 0 auto;
  justify-content: space-between;
  padding: 2rem 0;
`;

export const FooterHeader = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  img {
    width: 2rem;
  }

  h1 {
    font-size: 1.2rem;
  }

  a {
    margin-left: 1rem;
    color: ${(props) => props.theme.gray};
  }

  p {
    margin-top: 2rem;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 1.5rem;
  }

  div {
    display: flex;
    gap: 1rem;

    svg {
      color: ${(props) => props.theme.gray};
      transition: all 0.4s;

      &:hover {
        color: ${(props) => props.theme.white};
      }
    }
  }
`;
