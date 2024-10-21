import { FC } from "react";
import SVG from "./SVG";

type Props = {
  className?: string;
};

const Heart: FC<SVG> = ({ className = "text-white" }: Props) => (
  <svg
    width="14"
    height="12"
    viewBox="0 0 14 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M11.0833 7.16667C11.9525 6.315 12.8333 5.29417 12.8333 3.95833C12.8333 3.10743 12.4953 2.29138 11.8936 1.6897C11.292 1.08802 10.4759 0.75 9.625 0.75C8.59833 0.75 7.875 1.04167 7 1.91667C6.125 1.04167 5.40167 0.75 4.375 0.75C3.5241 0.75 2.70804 1.08802 2.10637 1.6897C1.50469 2.29138 1.16667 3.10743 1.16667 3.95833C1.16667 5.3 2.04167 6.32083 2.91667 7.16667L7 11.25L11.0833 7.16667Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Heart;
