import { SVGProps } from "react";
const SunIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
  >
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM7.333.667h1.334v2H7.333v-2Zm0 12.666h1.334v2H7.333v-2ZM2.343 3.286l.943-.943L4.7 3.757l-.943.943-1.414-1.413v-.001Zm8.957 8.957.943-.943 1.414 1.414-.943.943-1.414-1.414Zm1.414-9.9.943.943L12.243 4.7l-.943-.943 1.414-1.414ZM3.757 11.3l.943.943-1.414 1.414-.943-.943L3.757 11.3Zm11.576-3.967v1.334h-2V7.333h2Zm-12.666 0v1.334h-2V7.333h2Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SunIcon;
