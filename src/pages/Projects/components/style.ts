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
