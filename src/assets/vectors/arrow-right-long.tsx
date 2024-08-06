import { SVGProps } from "react";
const ArrowRightLong = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill="#2F80ED"
      d="M14.293 1.707A1 1 0 0 1 15.707.293l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L18.586 8H1.011A1.006 1.006 0 0 1 0 7c0-.552.453-1 1.011-1h17.575l-4.293-4.293Z"
    />
  </svg>
);
export default ArrowRightLong;
