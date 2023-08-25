import React from "react";
import { ResultsWrapper } from "./styles";

function Results() {
  return (
    <ResultsWrapper>
      <div className="viewport">Viewport</div>
      <div className="sideNav">
        <div className="scoreContainer">Score</div>
        <div className="listContainer">List</div>
      </div>
    </ResultsWrapper>
  );
}

export default Results;
