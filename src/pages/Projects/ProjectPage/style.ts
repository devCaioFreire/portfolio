import styled from "styled-components";

export const ProjectContainer = styled.div`
  max-width: 85rem;
  margin: 0 auto;

  h1 {
    font-size: 2rem;
  }
`;

export const HeaderMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;

  span {
    color: ${(props) => props.theme.purple};
  }
`;

export const ProjectHeader = styled.div`
  margin-top: 4rem;

  span {
    color: ${(props) => props.theme.purple};
  }
`;

export const ProjectsCardsContent = styled.section`
  padding-bottom: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
`;
