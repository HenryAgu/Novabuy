import * as React from "react";
import { SVGProps, memo } from "react";

const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_606_11992)">
      <path
        d="M18.3337 10.0002C18.3337 5.39779 14.6027 1.66683 10.0003 1.66683C5.39795 1.66683 1.66699 5.39779 1.66699 10.0002C1.66699 14.6025 5.39795 18.3335 10.0003 18.3335C14.6027 18.3335 18.3337 14.6025 18.3337 10.0002Z"
        stroke="#2A353D"
        stroke-width="1.5"
      />
      <path
        d="M10.2025 14.1667V10.0001C10.2025 9.60724 10.2025 9.41083 10.0804 9.28879C9.9584 9.16675 9.76198 9.16675 9.36914 9.16675"
        stroke="#2A353D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.993 6.66675H10.0005"
        stroke="#2A353D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_606_11992">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default memo(InfoIcon);
