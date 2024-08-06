import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  lineColor?: string;
}
const LineComponent = ({ lineColor, ...props }: IconProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={1}
    height={24}
    fill="none"
  >
    <path stroke={lineColor || "#000"} d="M.5 0v24" />
  </svg>
);
export default LineComponent;
