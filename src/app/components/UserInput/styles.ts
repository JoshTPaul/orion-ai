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

  .alert {
    cursor: pointer;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    color: #e6bf63;
  }

  aside {
    position: fixed;
    overflow: hidden;

    .backdrop {
      opacity: 0;
    }

    .drawer {
      position: absolute;
      width: 500px;
      height: 100vh;
      height: 100dvh;
      top: 0;
      right: -600px;
      padding: 1rem;
      background-color: #292929;

      h3 {
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .close {
        cursor: pointer;
      }

      p {
        margin-bottom: 2rem;
      }

      div {
        cursor: pointer;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid white;
        margin-bottom: 1rem;
        background-color: #3c3c3c;

        a {
          color: currentColor;
        }

        h4 {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        &.selected {
          background-color: #313830;
          border-color: #70af62;
        }

        &:hover {
          opacity: 0.8;
        }
      }
    }

    &.active {
      inset: 0;

      .backdrop {
        position: absolute;
        inset: 0;
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.75);
      }

      .drawer {
        right: 0;
      }
    }
  }
`;
