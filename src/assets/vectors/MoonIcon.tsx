import { SVGProps } from "react";
const MoonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
  >
    <g clipPath="url(#a)">
      <path
        fill="#03053D"
        d="M6.548 1.492a6 6 0 0 0 7.96 7.96A6.668 6.668 0 0 1 1.333 8a6.669 6.669 0 0 1 5.215-6.508Zm5.561.035.558.14v.666l-.558.14a1.334 1.334 0 0 0-.97.97L11 4h-.666l-.14-.557a1.333 1.333 0 0 0-.97-.97l-.556-.14v-.666l.557-.14a1.333 1.333 0 0 0 .97-.97l.14-.557H11l.14.557a1.333 1.333 0 0 0 .97.97Zm3.334 3.334L16 5v.667l-.557.139a1.333 1.333 0 0 0-.97.97l-.14.557h-.666l-.14-.557a1.334 1.334 0 0 0-.97-.97L12 5.666V5l.557-.14a1.334 1.334 0 0 0 .97-.97l.14-.557h.666l.14.558a1.333 1.333 0 0 0 .97.97Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default MoonIcon;
