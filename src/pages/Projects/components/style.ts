import styled from "styled-components";

export const ProjectsCards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 3fr));
  margin-top: 3rem;
  gap: 1rem;
  width: fit-content;
`;

export const Project = styled.div`
  border: 2px solid ${(props) => props.theme.gray};
  height: fit-content;
  border-radius: 8px;
  overflow: hidden;

  p {
    padding: 0.5rem 1rem;
    color: ${(props) => props.theme.gray};
  }

  @media screen and (max-width: 350px) {
    width: 95%;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-top: 2px solid ${(props) => props.theme.gray};
  padding: 1rem;
  color: ${(props) => props.theme.gray};

  p {
    margin: 1rem 0;
    padding: 0;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  a {
    border: 1px solid ${(props) => props.theme.purple};
    color: ${(props) => props.theme.gray};
    padding: 0.5rem 1rem;
    transition: all 0.2s;
    border-radius: 4px;

    &:hover {
      color: ${(props) => props.theme.white};
    }
  }
`;

export const ProjectSmallApp = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${(props) => props.theme.gray};
  border-radius: 6px;
  overflow: hidden;
  max-width: 20rem;
  transition: all 0.4s;

  span {
    border-bottom: 2px solid ${(props) => props.theme.gray};
    padding: 1rem;
    color: ${(props) => props.theme.gray};
    transition: all 0.4s;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;

    h2 {
      color: ${(props) => props.theme.white};
      font-weight: 500;
    }

    a {
      width: fit-content;
      border: 1px solid ${(props) => props.theme.purple};
      color: ${(props) => props.theme.white};
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: all 0.3s;

      &:hover {
        background: ${(props) => props.theme.purple};
      }
    }
  }

  &:hover {
    border: 2px solid ${(props) => props.theme.purple};

    span {
      border-bottom: 2px solid ${(props) => props.theme.purple};
    }
  }

  @media screen and (max-width: 350px) {
    width: 95%;
  }
`;
