import styled from "styled-components";

export const AboutContainer = styled.div`
  max-width: 85rem;
  margin: 7rem auto;

  h1 {
    font-weight: 400;
  }

  span {
    color: ${(props) => props.theme.purple};
  }

  div {
    display: flex;
  }
`;

export const AboutTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 42.5rem;
  margin-top: 3rem;
  line-height: 1.6;
`;

export const ImageContainer = styled.div`
  display: flex;
  margin-left: auto;
  max-width: 42.5rem;
`;
