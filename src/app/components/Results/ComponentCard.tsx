import React, { useState } from "react";
import { ComponentCardWrapper } from "./styles";
import ChevronIcon from "./Chevron";
import ErrorIcon from "./ErrorIcon";
import SuccessIcon from "./SuccessIcon";

function ComponentCard() {
  const isError = false;

  const [showDetails, setShowDetails] = useState<boolean>(false);

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
          <span className="heading">Property</span>
          <span className="heading">Dev</span>
          <span className="heading">Design</span>
          <hr />
          <span>X Position</span>
          <span>123</span>
          <span>123</span>
        </div>
      )}
    </ComponentCardWrapper>
  );
}

export default ComponentCard;
