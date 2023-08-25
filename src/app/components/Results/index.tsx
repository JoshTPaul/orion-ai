import React from "react";
import { ResultsWrapper } from "./styles";
import Iframe from "@/app/iframe";

function Results({ designData, devLink }: any) {
  console.log(designData);
  return (
    <ResultsWrapper>
      <div className="viewport">
        <img src={designData?.data?.data?.thumbnailUrl} alt="" />

        <Iframe link={devLink} onRefLoad={() => {}} />
      </div>
      <div className="sideNav">
        <div className="scoreContainer">Score</div>
        <div className="listContainer">List</div>
      </div>
    </ResultsWrapper>
  );
}

export default Results;
