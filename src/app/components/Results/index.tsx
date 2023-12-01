import React from "react";
import { ResultsWrapper } from "./styles";
import Iframe from "@/app/iframe";
import ComponentCard from "./ComponentCard";
import DonutChart from "./DonutChart";
import { calculateCombinedScore } from "./utils";

function Results({ devLink, designLink, restartFlow, aiData, aiInput }: any) {
  const designUrl = new URL(designLink);
  const fileId = designUrl.pathname.split("/")[2];
  const fileName = designUrl.pathname.split("/")[3];
  const nodeId = designUrl.searchParams.get("node-id");
  const figmaEmbedURL = `https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/${fileId}/${fileName}?type=design&node-id=${nodeId}&scaling=scale-down-width&page-id=0%3A1`;

  // const aiResult =
  //   aiData?.data?.res?.text && JSON.parse(aiData?.data?.res?.text)?.response;

  const orionScore = calculateCombinedScore(aiData.data.res, 7);

  const getTitle = () => {
    if (orionScore >= 90)
      return "Congratulations! You have an excellent Orion score";
    else if (orionScore >= 75) return "Well done! You have a good Orion score";
    else if (orionScore >= 60) return "You have an average Orion score";
    else return " You have a poor Orion score";
  };

  const getSubtitle = () => {
    if (orionScore >= 90)
      return "just a few minor tweaks are needed to make it perfect.";
    else if (orionScore >= 75)
      return "only few elements need to be looked at again.";
    else if (orionScore >= 60)
      return "we identified some major discrepancies for you to correct.";
    else
      return "major discrepancies found in most elements that need immediate attention.";
  };

  const getChartColor = () => {
    if (orionScore >= 90) return "#8685F9";
    else if (orionScore >= 75) return "#27C779";
    else if (orionScore >= 60) return "#FDAB2F";
    else return "#FE584D";
  };

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
            <DonutChart val={orionScore} color={getChartColor()} />
            <div>
              <h5>{getTitle()}</h5>
              <p>
                Your work earned a {Number((orionScore / 10).toFixed(1))}/10
                score, {getSubtitle()}
              </p>
            </div>
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
            {aiInput?.map((obj: any, i: number) => {
              return (
                <ComponentCard
                  key={`componentcard-${i}`}
                  elementName={obj?.element}
                  data={obj}
                />
              );
            })}
          </div>
        </div>
      </div>
    </ResultsWrapper>
  );
}

export default Results;
