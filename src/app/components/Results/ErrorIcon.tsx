import * as React from "react";
import { SVGProps } from "react";
const ErrorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#FDAB2F"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
    <path
      stroke="#FDAB2F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 7.5v5.25"
    />
    <path
      fill="#FDAB2F"
      d="M12 17.25A1.125 1.125 0 1 0 12 15a1.125 1.125 0 0 0 0 2.25Z"
    />
  </svg>
);
export default ErrorIcon;
