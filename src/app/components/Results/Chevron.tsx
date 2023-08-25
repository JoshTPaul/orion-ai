import * as React from "react";
import { SVGProps } from "react";
const ChevronIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#D1D1D1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18 10-6 6-6-6"
    />
  </svg>
);
export default ChevronIcon;
