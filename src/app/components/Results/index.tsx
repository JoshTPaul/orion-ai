import React from "react";
import { ResultsWrapper } from "./styles";
import Iframe from "@/app/iframe";

function Results({ devLink, designLink }: any) {
  const designUrl = new URL(designLink);
  const fileId = designUrl.pathname.split("/")[2];
  const fileName = designUrl.pathname.split("/")[3];
  const nodeId = designUrl.searchParams.get("node-id");

  const figmaEmbedURL = `https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/${fileId}/${fileName}?type=design&node-id=${nodeId}&scaling=scale-down-width&page-id=0%3A1`;

  return (
    <ResultsWrapper>
      <div className="viewport">
        <iframe
          src={figmaEmbedURL}
          width={1440}
          height={1024 + 48}
          className="designFrame"
        />

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
