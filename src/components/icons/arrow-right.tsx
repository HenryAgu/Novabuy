import * as React from "react";
import { SVGProps, memo } from "react";

const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6667 8.16671L17.5 14L11.6667 19.8334"
      stroke="#606060"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(ArrowRight);
