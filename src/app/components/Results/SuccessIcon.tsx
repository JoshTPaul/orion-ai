import * as React from "react";
import { SVGProps } from "react";
const SuccessIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#27C779"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.125 9.75 10.622 15l-2.747-2.625"
    />
    <path
      stroke="#27C779"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
  </svg>
);
export default SuccessIcon;
