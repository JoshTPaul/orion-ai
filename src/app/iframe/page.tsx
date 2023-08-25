import React, { useRef } from "react";

const Iframe = ({ onRefLoad }: any) => {
  const ref = useRef(null);

  return (
    <iframe
      ref={ref}
      src="http://localhost:3000/button"
      width={1440}
      height={1024}
      onLoad={() =>
        onRefLoad(
          getComputedStyle(
            ref?.current?.contentWindow?.document?.querySelector("#button")
          )
        )
      }
    />
  );
};

export default Iframe;
