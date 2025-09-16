import * as React from "react";
import { SVGProps, memo } from "react";

const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.3333 8.16671L10.5 14L16.3333 19.8334"
      stroke="#B6B6B6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(ArrowLeft);
