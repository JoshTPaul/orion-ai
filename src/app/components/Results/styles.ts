import { styled } from "styled-components";

export const ResultsWrapper = styled.section`
  display: flex;
  align-items: stretch;
  min-height: 100vh;

  .viewport {
    position: relative;
    flex-grow: 1;
    background-color: green;
  }

  .sideNav {
    flex-basis: 250px;
    display: flex;
    flex-direction: column;

    .scoreContainer {
      background: red;
      flex-basis: 200px;
    }

    .listContainer {
      background: blue;
      flex-grow: 1;
    }
  }

  iframe {
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    scale: 0.35;

    &.devFrame {
      top: 25%;
    }
    &.designFrame {
      top: 75%;
    }
  }
`;
