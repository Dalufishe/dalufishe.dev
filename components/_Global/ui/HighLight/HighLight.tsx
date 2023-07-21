import React, { FC } from "react";
import { css } from "@emotion/css";
import { classes } from "../../../../utils/classes";

type Props = {
  children: any;
  type: "underline";
  color: string;
  animated?: boolean;
};

const HighLight: FC<Props> = ({
  children,
  type,
  color,
}: Props) => {
  if (type === "underline") {
    return (
      <span
        className={classes(
          "border-b-2",
          css`
            border-color: ${color};
          `
        )}
      >
        {children}
      </span>
    );
  } else {
    return <></>;
  }
};

export default HighLight;
