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
  max-width: 24.5rem;
`;

export const HardSkillsContent = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 1rem;

  span {
    color: ${(props) => props.theme.white};
  }
`;
