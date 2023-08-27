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
      animation: loaderAnim 1500ms infinite ease-in-out;

      &:nth-of-type(2) {
        animation-delay: 112ms;
        background-color: var(--t100);
      }

      &:nth-of-type(3) {
        animation-delay: 224ms;
        background-color: var(--t200);
      }

      &:nth-of-type(4) {
        animation-delay: 336ms;
        background-color: var(--t300);
      }

      &:nth-of-type(5) {
        animation-delay: 448ms;
        background-color: var(--t400);
      }
    }
  }

  h2 {
    opacity: 0;
    align-self: self-start;

    &.fadeIn {
      animation: fadeIn 400ms forwards;
    }

    &.fadeOut {
      animation: fadeOut 400ms forwards;
    }
  }

  @keyframes loaderAnim {
    0%,
    30% {
      top: 0;
    }
    15% {
      top: -4rem;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
