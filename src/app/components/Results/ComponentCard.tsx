import React, { useState } from "react";
import { ComponentCardWrapper } from "./styles";
import ChevronIcon from "./Chevron";
import ErrorIcon from "./ErrorIcon";
import SuccessIcon from "./SuccessIcon";

function ComponentCard({ elementName, data }: any) {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const HEADINGS = ["Property", "Dev", "Design"];

  const DETAILS = [
    {
      property: "X Position",
      dev: data?.dev?.x,
      design: data?.design?.x,
      isError: data?.dev?.x !== data?.design?.x,
    },
    {
      property: "Y Position",
      dev: data?.dev?.y,
      design: data?.design?.y,
      isError: data?.dev?.y !== data?.design?.y,
    },
    {
      property: "Width",
      dev: data?.dev?.width,
      design: data?.design?.width,
      isError: data?.dev?.width !== data?.design?.width,
    },
    {
      property: "Height",
      dev: data?.dev?.height,
      design: data?.design?.height,
      isError: data?.dev?.height !== data?.design?.height,
    },
    {
      property: "Colour",
      dev: data?.dev?.color,
      design: data?.design?.color,
      isError: data?.dev?.color !== data?.design?.color,
    },
    {
      property: "Font Size",
      dev: data?.dev?.fontSize,
      design: data?.design?.fontSize,
      isError: data?.dev?.fontSize !== data?.design?.fontSize,
    },
    {
      property: "Font Weight",
      dev: data?.dev?.fontWeight,
      design: data?.design?.fontWeight,
      isError: data?.dev?.fontWeight != data?.design?.fontWeight,
    },
  ];

  const isError = DETAILS.filter((obj) => obj?.design)?.some(
    (obj) => obj?.isError
  );
  const length = DETAILS.filter((obj) => obj?.design)?.filter(
    (obj) => obj.isError
  )?.length;

  return (
    <ComponentCardWrapper className={showDetails ? "active" : ""}>
      <div className="preview" onClick={() => setShowDetails(!showDetails)}>
        <h5>
          {isError ? <ErrorIcon /> : <SuccessIcon />}&nbsp;{elementName}&nbsp;
          <span>• {length} Errors Found</span>
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
          {DETAILS.filter((obj) => obj?.design).map((obj) => (
            <>
              <h6>{obj?.property}</h6>
              <h6 className={obj?.isError ? "error" : ""}>{obj.dev}</h6>
              <h6>{obj?.design}</h6>
            </>
          ))}
        </div>
      )}
    </ComponentCardWrapper>
  );
}

export default ComponentCard;
