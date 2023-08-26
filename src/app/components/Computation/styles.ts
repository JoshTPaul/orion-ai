import { styled } from "styled-components";

export const ComputationWrapper = styled.section`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;

  .loaderContainer {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    row-gap: 3rem;
  }

  .loader {
    align-self: self-end;
    display: flex;
    align-items: center;
    gap: 2rem;

    &-circle {
      position: relative;
      top: 0;
      width: 36px;
      height: 36px;
      border-radius: 100%;
      background-color: var(--t50);
      animation: loaderAnim 3000ms infinite ease-in-out;

      &:nth-of-type(2) {
        animation-delay: 300ms;
      }

      &:nth-of-type(3) {
        animation-delay: 600ms;
      }

      &:nth-of-type(4) {
        animation-delay: 900ms;
      }

      &:nth-of-type(5) {
        animation-delay: 1200ms;
      }
    }
  }

  h2 {
    align-self: self-start;
  }

  @keyframes loaderAnim {
    0%,
    100% {
      top: 0;
      background-color: var(--t400);
    }
    50% {
      top: -5rem;
      background-color: var(--t50);
    }
  }
`;
