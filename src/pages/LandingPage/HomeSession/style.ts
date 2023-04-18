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
  margin: 0 1rem;

  span {
    color: ${(props) => props.theme.purple};
  }

  p {
    color: ${(props) => props.theme.gray};
    font-size: 1.2rem;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }

  a {
    border: 1px solid ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
    background: transparent;
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    border-radius: 4px;
    transition: all 0.2s;
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
  margin: 0 1rem;

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

  @media screen and (max-width: 1142px) {
    img {
      width: 30rem;
    }
  }

  @media screen and (max-width: 1063px) {
    img {
      width: 25rem;
    }
  }

  @media screen and (max-width: 980px) {
    img {
      width: 20rem;
    }
  }
`;
