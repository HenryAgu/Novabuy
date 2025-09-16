import * as React from "react";
import { SVGProps, memo } from "react";

const ArrowLongRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="18"
    height="12"
    viewBox="0 0 18 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.0002 6L1.00023 5.99976"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.0002 1L16.2931 5.29289C16.6265 5.62623 16.7931 5.79289 16.7931 6C16.7931 6.20711 16.6265 6.37377 16.2931 6.70711L12.0002 11"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default memo(ArrowLongRight);
