import * as React from "react";
import { SVGProps, memo } from "react";

const AngleRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="7"
    height="12"
    viewBox="0 0 7 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.33333 10.1666L5.5 5.99992L1.33333 1.83325"
      stroke="#101010"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(AngleRight);
