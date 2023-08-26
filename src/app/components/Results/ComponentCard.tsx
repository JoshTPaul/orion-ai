import React, { useState } from "react";
import { ComponentCardWrapper } from "./styles";
import ChevronIcon from "./Chevron";
import ErrorIcon from "./ErrorIcon";
import SuccessIcon from "./SuccessIcon";

function ComponentCard() {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const HEADINGS = ["Property", "Dev", "Design"];

  const DETAILS = [
    {
      property: "X Position",
      dev: 123,
      design: 123,
    },
    {
      property: "Y Position",
      dev: 123,
      design: 123,
    },
    {
      property: "Width",
      dev: "40px",
      design: "50px",
      isError: true,
    },
    {
      property: "Height",
      dev: "60px",
      design: "60px",
    },
    {
      property: "Colour",
      dev: "#ff0000",
      design: "#123456",
      isError: true,
    },
    {
      property: "Background Colour",
      dev: "#123456",
      design: "#123456",
    },
  ];

  const isError = DETAILS?.some((obj) => obj?.isError);

  return (
    <ComponentCardWrapper className={showDetails ? "active" : ""}>
      <div className="preview" onClick={() => setShowDetails(!showDetails)}>
        <h5>
          {isError ? <ErrorIcon /> : <SuccessIcon />}&nbsp;Component Name&nbsp;
          <span>• 2 Errors Found</span>
        </h5>
        <ChevronIcon />
      </div>
      {showDetails && (
        <div className="details">
          {HEADINGS.map((val: string) => (
            <h6 key={`heading-${val}`} className="heading">
              {val}
            </h6>
          ))}
          <hr />
          {DETAILS.map((obj) => (
            <>
              <h6>{obj.property}</h6>
              <h6 className={obj?.isError ? "error" : ""}>{obj.dev}</h6>
              <h6>{obj.design}</h6>
            </>
          ))}
        </div>
      )}
    </ComponentCardWrapper>
  );
}

export default ComponentCard;
