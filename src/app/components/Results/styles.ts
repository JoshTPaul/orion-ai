import { styled } from "styled-components";

export const ResultsWrapper = styled.section`
  display: flex;
  align-items: stretch;
  min-height: 100vh;

  .viewport {
    flex-grow: 1;
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
`;
