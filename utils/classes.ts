import { cx } from "@emotion/css";
import { twMerge } from "tailwind-merge";

const classes = (...args: string[]): string => {
  return cx(twMerge(...args));
};

export { classes };
