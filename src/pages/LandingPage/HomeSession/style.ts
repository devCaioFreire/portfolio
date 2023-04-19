import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 85rem;
  margin: 2rem auto;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 3rem;
  }
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

    &:before {
      content: "";
      height: 1rem;
      width: 1rem;
      background-color: ${(props) => props.theme.purple};
    }
  }

  @media screen and (max-width: 1200px) {
    img {
      width: 30rem;
    }
  }

  @media screen and (max-width: 1063px) {
    img {
      width: 25rem;
    }

    p {
      margin-left: 1.5rem;
      margin-right: 2rem;
    }
  }

  @media screen and (max-width: 983px) {
    img {
      width: 20rem;
    }

    p {
      margin-left: 1.3rem;
      margin-right: 1.5rem;
    }
  }

  @media screen and (max-width: 903px) {
    img {
      width: 15rem;
    }

    p {
      font-size: 0.875rem;
    }
  }

  @media screen and (max-width: 803px) {
    img {
      width: 13rem;
    }
  }

  @media screen and (max-width: 768px) {
    img {
      width: 17rem;
    }
  }
`;
