import { styled } from "styled-components";

export const UserInputWrapper = styled.section`
  width: 100%;

  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 3rem;
      margin-bottom: 1.5rem;
    }

    p {
      text-align: center;
      max-width: 90ch;
      margin-bottom: 4.5rem;
      color: var(--t200);
    }

    h3 {
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
    }

    input {
      margin-bottom: 1.5rem;
    }

    & > div {
      width: 500px;
      display: flex;
      gap: 1rem;

      button {
        flex-basis: 50%;
      }
    }
  }
`;
