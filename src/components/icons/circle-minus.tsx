import * as React from "react";
import { SVGProps, memo } from "react";

const CircleMinusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="31"
    height="32"
    viewBox="0 0 31 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle opacity="0.2" cx="15.5" cy="16" r="15.5" fill="#CFCDFD" />
    <path
      d="M20.6641 16.5H11.3307"
      stroke="#B7B5FB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(CircleMinusIcon);
