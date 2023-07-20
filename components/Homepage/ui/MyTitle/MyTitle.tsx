import React, { FC } from "react";
import { classes } from "../../../../utils/classes";
import { css } from "@emotion/css";

type Props = {
  children: any;
  color: string;
};

const MyTitle: FC<Props> = (props: Props) => {
  return (
    <h4
      className={classes(
        "text-2xl font-bold",
        "relative",
        css`
          &::after {
            content: "";
            position: absolute;
            left: 0;
            top: 100%;
            width: 3.5em;
            height: 3px;
            background-color: ${props.color};
            pointer-events: none;
          }
        `
      )}
    >
      {props.children}
    </h4>
  );
};

export default MyTitle;
