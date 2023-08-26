import React from "react";
import { ResultsWrapper } from "./styles";
import Iframe from "@/app/iframe";
import ComponentCard from "./ComponentCard";

function Results({ devLink, designLink, restartFlow }: any) {
  const designUrl = new URL(designLink);
  const fileId = designUrl.pathname.split("/")[2];
  const fileName = designUrl.pathname.split("/")[3];
  const nodeId = designUrl.searchParams.get("node-id");

  const figmaEmbedURL = `https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/${fileId}/${fileName}?type=design&node-id=${nodeId}&scaling=scale-down-width&page-id=0%3A1`;

  return (
    <ResultsWrapper>
      <h3 className="title">
        Your Design Audit Successfully Completed!{" "}
        <button className="primary" onClick={restartFlow}>
          Upload New Links
        </button>
      </h3>

      <div className="flexContainer">
        <div className="viewport card">
          <h6>Dev URL</h6>
          <div className="preview">
            <Iframe link={devLink} onRefLoad={() => {}} />
          </div>
          <h6>Figma Frame Link</h6>
          <div className="preview">
            <iframe
              src={figmaEmbedURL}
              width={1440}
              height={1024 + 48}
              className="designFrame"
            />
          </div>
        </div>
        <div className="sideNav">
          <div className="scoreContainer card">
            <h5>Congratulations! You have an excellent Orion score</h5>
            <p>
              Your work earned a 4/5 score, just a few minor tweaks are needed
              to make it perfect.
            </p>
          </div>
          <div className="card listContainer ">
            <div className="compBreakdown">
              <div>
                <h3>Component Breakdown </h3>
                <h6>
                  This is a list of all your components and their statuses
                </h6>
              </div>
              <button className="secondary">Export</button>
            </div>
            <ComponentCard />
            <ComponentCard />
            <ComponentCard />
            <ComponentCard />
            <ComponentCard />
          </div>
        </div>
      </div>
    </ResultsWrapper>
  );
}

export default Results;
