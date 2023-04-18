import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 85rem;
  margin: 2rem auto;
`;

export const HomeText = styled.div`
  max-width: 33rem;

  span {
    color: ${(props) => props.theme.purple};
  }

  p {
    color: ${(props) => props.theme.gray};
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }

  button {
    border: 1px solid ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
    background: transparent;
    padding: 0.5rem 1rem;
    margin-top: 2rem;
    font-size: 1.1rem;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.purple};
      color: ${(props) => props.theme.white};
    }
  }
`;

export const HomeImageContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
    object-fit: cover;
  }

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 2px solid ${(props) => props.theme.gray};
    margin-left: 2.1rem;
    margin-right: 2.5rem;
    padding: 0.5rem 1rem;
    /* border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px; */

    &:before {
      content: "";
      height: 1rem;
      width: 1rem;
      background-color: ${(props) => props.theme.purple};
    }
  }
`;
