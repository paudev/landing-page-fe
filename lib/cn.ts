import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** TODO: replace clsx with this util to avoid class collision */
const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export default cn;
