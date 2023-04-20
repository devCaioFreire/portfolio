import styled from "styled-components";

export const SkillsContainer = styled.main`
  display: flex;
  justify-content: space-between;
  margin: 7rem auto;
  max-width: 85rem;

  h1 {
    font-weight: 400;
  }

  span {
    color: ${(props) => props.theme.purple};
  }
`;

export const SkillImageContainer = styled.div`
  margin-top: 3rem;
  max-width: 21rem;

  @media screen and (max-width: 1119px) {
    display: none;
  }
`;

export const HardSkillsContent = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 1rem;

  span {
    color: ${(props) => props.theme.white};
  }

  @media screen and (max-width: 1119px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    width: 100%;
    grid-gap: 5rem;
    margin-left: -9rem;
  }

  @media screen and (max-width: 1023px) {
    margin-left: -9rem;
  }

  @media screen and (max-width: 923px) {
    margin-right: 2rem;
  }

  @media screen and (max-width: 893px) {
    margin-right: 3rem;
  }

  @media screen and (max-width: 850px) {
    margin-left: -9rem;
    margin-right: 5rem;
  }

  @media screen and (max-width: 800px) {
    margin-right: 6.5rem;
  }

  @media screen and (max-width: 768px) {
    margin-left: -9.5rem;
    margin-right: 6rem;
  }

  @media screen and (max-width: 750px) {
    gap: 3rem;
    margin-right: 4.5rem;
  }

  @media screen and (max-width: 732px) {
    display: flex;
    gap: 2rem;

    div {
      width: fit-content;
    }
  }

  @media screen and (max-width: 690px) {
    display: flex;
    gap: 1.5rem;
  }

  @media screen and (max-width: 680px) {
    display: flex;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }

  @media screen and (max-width: 650px) {
    margin-right: 1rem;
  }

  @media screen and (max-width: 460px) {
    display: inline-flex;
    flex-direction: column;
    margin-top: 4rem;
    width: fit-content;
  }
`;
