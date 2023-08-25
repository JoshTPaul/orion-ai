import React, { useRef } from "react";

const Iframe = ({
  onRefLoad,
  link,
  hidden,
}: {
  onRefLoad: any;
  link: any;
  hidden?: boolean;
}) => {
  const ref = useRef(null);

  return (
    <iframe
      ref={ref}
      src={link}
      width={1440}
      height={1024}
      className={`devFrame ${hidden ? "hidden" : ""}`}
      onLoad={() => {
        onRefLoad(
          getComputedStyle(
            ref?.current?.contentWindow?.document?.querySelector("#button")
          )
        );
      }}
    />
  );
};

export default Iframe;
