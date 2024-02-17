import { IconSvgProps } from "./types";

const HappyFace = ({ size }: IconSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="iconify iconify--twemoji"
    viewBox="0 0 36 36"
    width={size}
    height={size}
  >
    <circle cx={18} cy={18} r={18} fill="#FFCC4D" />
    <path
      fill="#664500"
      d="M18 21c-3.623 0-6.027-.422-9-1-.679-.131-2 0-2 2 0 4 4.595 9 11 9 6.404 0 11-5 11-9 0-2-1.321-2.132-2-2-2.973.578-5.377 1-9 1z"
    />
    <path fill="#FFF" d="M9 22s3 1 9 1 9-1 9-1-2 4-9 4-9-4-9-4z" />
    <ellipse cx={12} cy={13.5} fill="#664500" rx={2.5} ry={3.5} />
    <ellipse cx={24} cy={13.5} fill="#664500" rx={2.5} ry={3.5} />
  </svg>
);
export default HappyFace;
