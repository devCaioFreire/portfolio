import styled from "styled-components";

export const ProjectsContainer = styled.main`
  margin: 7rem auto;
  max-width: 85rem;
`;

export const ProjectHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;

  span {
    color: ${(props) => props.theme.purple};
  }

  h1 {
    font-size: 2rem;
    font-weight: 400;
  }

  a {
    color: ${(props) => props.theme.white};

    span {
      color: ${(props) => props.theme.white};
      transition: all 0.2s;
    }

    &:hover {
      span {
        color: ${(props) => props.theme.purple};
      }
    }
  }
`;

export const ProjectsCards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1rem;
  margin: 3rem 1rem;
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

    &:hover {
      color: ${(props) => props.theme.white};
    }
  }
`;
