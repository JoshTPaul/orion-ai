import { styled } from "styled-components";

export const ResultsWrapper = styled.section`
  width: 1114px;
  margin-inline: auto;

  .title {
    margin-top: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .flexContainer {
    display: flex;
    align-items: stretch;
    gap: 1.25rem;
    height: 100%;
    margin-bottom: 5rem;
  }

  .viewport {
    position: relative;
    flex-basis: 50%;

    h6 {
      margin-bottom: 0.25rem;
    }

    div + h6 {
      margin-top: 1rem;
    }
  }

  .sideNav {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    gap: 1.125rem;

    .scoreContainer {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .recharts-wrapper {
        position: relative;
        left: -4px;
      }

      & > div {
        display: flex;
        flex-direction: column;
      }

      h5 {
        font-size: 15px;
        margin-bottom: 0.25rem;
      }

      p {
        font-size: 12px;
        color: var(--t200);
      }
    }

    .listContainer {
      flex-grow: 1;
      padding: 0;
      overflow-y: auto;
    }
  }

  .preview {
    aspect-ratio: 45/32;
    position: relative;
    overflow-y: auto;
  }

  iframe {
    position: absolute;
    left: 0;
    top: 0;
    scale: 0.3465;
    transform-origin: top left;
  }

  .compBreakdown {
    position: sticky;
    top: 0;
    z-index: 2;
    padding: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--t900);

    h6 {
      color: var(--t200);
    }
  }
`;

export const ComponentCardWrapper = styled.div`
  border-top: 1px solid var(--t700);
  padding-inline: 1.25rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &.active {
    background-color: var(--t950);
  }

  .preview {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
    cursor: pointer;

    h5 {
      display: flex;
      align-items: center;

      span {
        color: var(--t500);
      }
    }
  }

  .details {
    display: grid;
    grid-template-columns: 2fr 1fr auto;
    gap: 0.75rem;
    padding-bottom: 1.25rem;

    .heading {
      color: var(--t400);
    }

    hr {
      grid-column: 1/4;
      width: 100%;
      color: var(--t700);
      margin: 0;
    }

    .error {
      color: #fdab2f;
    }
  }
`;
