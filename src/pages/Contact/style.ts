import styled from "styled-components";

export const ContactContainer = styled.div`
  max-width: 85rem;
  margin: 0 auto;

  header {
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
    margin-top: 3rem;
  }
`;

export const ContactTextContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 42.5rem;
  line-height: 1.6;
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
`;
