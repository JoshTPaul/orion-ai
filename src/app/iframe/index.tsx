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
  const ref: any = useRef(null);

  return (
    <iframe
      ref={ref}
      src={link}
      width={1440}
      height={1024}
      className={`devFrame ${hidden ? "hidden" : ""}`}
      onLoad={() => {
        return onRefLoad(ref?.current?.contentWindow?.document);
      }}
    />
  );
};

export default Iframe;
