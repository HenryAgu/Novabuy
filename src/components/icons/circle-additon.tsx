import clsx from "clsx";
import * as React from "react";
import { SVGProps, memo } from "react";

const CircleAdditionIcon = ({
  className,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width="31"
    height="32"
    viewBox="0 0 31 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={clsx("lg:w-[31px] lg:h-[32px] w-5 h-3.5", className)}
  >
    <circle opacity="0.2" cx="15.5" cy="16" r="15.5" fill="#9693FA" />
    <path
      d="M16 10.8334V20.1667"
      stroke="#4643AF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.332 15.5H20.6654"
      stroke="#4643AF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(CircleAdditionIcon);
