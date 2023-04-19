import styled from "styled-components";

export const ContactContainer = styled.div`
  max-width: 85rem;
  margin: 0 auto;

  header {
    margin: 0 1rem;

    h1 {
      font-weight: 400;
    }

    span {
      color: ${(props) => props.theme.purple};
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
    margin: 3rem 1rem;

    @media screen and (max-width: 858px) {
      gap: 1rem;
    }

    @media screen and (max-width: 636px) {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

export const ContactTextContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 42.5rem;
  line-height: 1.6;

  @media screen and (max-width: 1060px) {
    max-width: 42rem;
  }

  @media screen and (max-width: 1050px) {
    max-width: 38rem;
  }

  @media screen and (max-width: 990px) {
    max-width: 36rem;
  }

  @media screen and (max-width: 957px) {
    max-width: 33rem;
  }

  @media screen and (max-width: 907px) {
    max-width: 30rem;
  }

  @media screen and (max-width: 858px) {
    max-width: 50%;
  }

  @media screen and (max-width: 756px) {
    max-width: 45%;
  }

  @media screen and (max-width: 724px) {
    max-width: 40%;
  }

  @media screen and (max-width: 636px) {
    max-width: 100%;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border: 1px solid ${(props) => props.theme.gray};
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 13.5rem;
  transition: all 0.2s;

  h3 {
    font-weight: 500;
    padding-bottom: 0.5rem;
  }

  a {
    color: ${(props) => props.theme.gray};
    width: fit-content;

    svg {
      vertical-align: middle;
    }

    &:hover {
      color: ${(props) => props.theme.purple};
      svg {
        color: ${(props) => props.theme.white};
      }
    }
  }

  &:hover {
    border: 1px solid ${(props) => props.theme.purple};
  }

  @media screen and (max-width: 858px) {
    width: fit-content;
    max-width: 50%;
  }

  @media screen and (max-width: 756px) {
    max-width: 55%;
  }

  @media screen and (max-width: 724px) {
    max-width: 60%;
  }

  @media screen and (max-width: 636px) {
    max-width: 100%;
  }

  @media screen and (max-width: 377px) {
    a {
      font-size: 0.875rem;
    }
  }

  @media screen and (max-width: 341px) {
    svg {
      width: 1.2rem;
    }
  }

  @media screen and (max-width: 341px) {
    svg {
      width: 1rem;
    }
  }

  @media screen and (max-width: 333px) {
    a {
      font-size: 0.8rem;
    }
  }
`;
