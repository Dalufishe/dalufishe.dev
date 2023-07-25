import React, { FC, useState, useEffect, ReactNode } from "react";
import { classes } from "../../../../utils/classes";
import { css } from "@emotion/css";

type Props = {
  children: ReactNode;
  highlightColor: string;
  highlightWidth: number;
  highlightAnimated?: boolean;
  highlightAnimatedDelay?: number;
};

const MyTitle: FC<Props> = ({
  children,
  highlightColor,
  highlightWidth,
  highlightAnimated = false,
  highlightAnimatedDelay = 100,
}: Props) => {
  // scale
  const [scale, setScale] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setScale(1);
    }, highlightAnimatedDelay);
    return () => {};
  }, []);

  // jsx
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
            width: ${highlightWidth}px;
            height: 3px;
            background-color: ${highlightColor};
            pointer-events: none;
          }
        `,
        highlightAnimated
          ? css`
              &::after {
                transform: scale(${scale});
                transition: transform 0.2s ease-in-out;
                transform-origin: left;
              }
            `
          : ""
      )}
    >
      {children}
    </h4>
  );
};

export default MyTitle;
