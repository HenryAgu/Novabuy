import * as React from "react";
import { SVGProps, memo } from "react";

const QuestionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1102_4872)">
      <circle
        cx="9.9974"
        cy="9.99996"
        r="8.33333"
        stroke="#121212"
        strokeWidth="1.5"
      />
      <path
        d="M8.32812 7.49992C8.32812 6.57944 9.07432 5.83325 9.99479 5.83325C10.9153 5.83325 11.6615 6.57944 11.6615 7.49992C11.6615 7.83171 11.5645 8.14086 11.3974 8.40058C10.8993 9.17465 9.99479 9.91278 9.99479 10.8333V11.2499"
        stroke="#121212"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9.99203 14.1666H9.99951"
        stroke="#121212"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1102_4872">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default memo(QuestionIcon);
