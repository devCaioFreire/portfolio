import styled from "styled-components";

interface HardSkillProps {
  width?: number;
}

export const HardSkills = styled.div<HardSkillProps>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 5fr));
  max-width: 35rem;
  border: 1px solid ${(props) => props.theme.gray};
  margin-top: 1rem;
  width: ${(props) => (props.width ? `${props.width}rem` : "auto")};
  transition: all 0.2s;

  &:nth-child(1) {
    margin-top: 7rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    color: ${(props) => props.theme.white};
    padding: 0.5rem;
    font-weight: 500;
  }

  p {
    color: ${(props) => props.theme.gray};
    border-top: 1px solid ${(props) => props.theme.gray};
    padding: 0.5rem;
  }

  &:hover {
    border-color: ${(props) => props.theme.purple};

    p {
      border-color: ${(props) => props.theme.purple};
    }
  }
`;
