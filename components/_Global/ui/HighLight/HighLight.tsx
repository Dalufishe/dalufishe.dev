import React, { FC } from "react";
import { css } from "@emotion/css";
import { classes } from "../../../../utils/classes";

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
