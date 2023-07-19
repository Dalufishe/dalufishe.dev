import React, { FC } from "react";
import { classes } from "../../../utils/classes";
import { css } from "@emotion/css";

type Props = {
  children: any;
  type: "underline";
  color: string;
};

const HighLight: FC<Props> = (props: Props) => {
  if (props.type === "underline") {
    return (
      <span
        className={classes(
          "border-b-2",
          css`
            border-color: ${props.color};
          `
        )}
      >
        {props.children}
      </span>
    );
  } else {
    return <></>;
  }
};

export default HighLight;
