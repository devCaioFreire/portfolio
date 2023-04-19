import styled from "styled-components";

export const AboutContainer = styled.div`
  max-width: 85rem;
  margin: 7rem auto;

  header {
    margin: 0 1rem;

    h1 {
      font-weight: 400;
    }

    span {
      color: ${(props) => props.theme.purple};
    }
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
  margin: 3rem 1rem;
  line-height: 1.6;
`;

export const ImageContainer = styled.div`
  display: flex;
  margin-left: auto;
  max-width: 42.5rem;

  @media screen and (max-width: 1400px) {
    margin-left: 15rem;
    margin-right: 1rem;
  }

  @media screen and (max-width: 1300px) {
    margin-left: 14rem;
  }

  @media screen and (max-width: 1290px) {
    margin-left: 13rem;
  }

  @media screen and (max-width: 1270px) {
    margin-left: 12rem;
  }

  @media screen and (max-width: 1250px) {
    margin-left: 11rem;
  }

  @media screen and (max-width: 1230px) {
    margin-left: 10rem;
  }

  @media screen and (max-width: 1210px) {
    margin-left: 9rem;
  }

  @media screen and (max-width: 1200px) {
    margin-left: 5rem;
  }

  @media screen and (max-width: 1120px) {
    img {
      width: 20rem;
      height: 25rem;
    }
  }

  @media screen and (max-width: 768px) {
    margin-left: 3rem;

    img {
      width: 18rem;
      height: 23rem;
    }
  }
`;
