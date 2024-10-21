import { FC } from "react";
import SVG from "./SVG";

type Props = {
  className?: string;
};

const Play: FC<SVG> = ({ className = "text-white" }: Props) => (
  <svg
    width="11"
    height="12"
    viewBox="0 0 11 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M1.5 0.75L9.66667 6L1.5 11.25V0.75Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Play;
