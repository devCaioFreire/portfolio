import styled from "styled-components";
import { VscQuote } from "react-icons/vsc";

export const QuoteContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 7rem auto;
  max-width: 42.73rem;
`;

export const QuoteMain = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.gray};
  padding: 1.5rem;
  position: relative;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  transition: all 0.4s;
  margin: 0 1rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  svg {
    transition: all 0.5s;
  }

  &:hover {
    border: 1px solid ${(props) => props.theme.purple};

    svg {
      fill: ${(props) => props.theme.white};
    }
    h1 {
      font-weight: 700;
    }
  }
`;

export const QuoteIconMain = styled(VscQuote)`
  position: absolute;
  top: -1rem;
  left: 1rem;
  color: ${(props) => props.theme.gray};
  background-color: ${(props) => props.theme.background};
`;

export const QuoteAuthor = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  border: 1px solid ${(props) => props.theme.gray};
  padding: 1.5rem;
  align-self: flex-end;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  transition: all 0.4s;
  margin: 0 1rem;

  p {
    font-size: 1.25rem;
    font-weight: 500;
  }

  svg {
    transition: all 0.5s;
  }

  &:hover {
    border: 1px solid ${(props) => props.theme.purple};

    svg {
      fill: ${(props) => props.theme.white};
    }

    p {
      font-weight: 700;
    }
  }
`;

export const QuoteIconAuthor = styled(VscQuote)`
  position: absolute;
  top: -1rem;
  right: 1rem;
  color: ${(props) => props.theme.gray};
  background-color: ${(props) => props.theme.background};
`;
