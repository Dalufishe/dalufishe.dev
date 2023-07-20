import React, { FC } from "react";
import { classes } from "../../../../utils/classes";
import { css } from "@emotion/css";

type FlexProps = {
  fc?: boolean;
  jb?: boolean;
  jc?: boolean;
  je?: boolean;
  is?: boolean;
  ic?: boolean;
  ie?: boolean;
  gap?: number;
};

type Props = {
  children: any;
  className?: string;
} & FlexProps;

const Flex: FC<Props> = (props: Props) => {
  const { fc, jb, jc, je, is, ic, ie } = props;
  return (
    <div
      className={classes(
        "flex",
        fc ? "flex-col" : "",
        jb ? "justify-between" : "",
        jc ? "justify-center" : "",
        je ? "justify-end" : "",
        is ? "items-start" : "",
        ic ? "items-center" : "",
        ie ? "items-end" : "",
        css`
          gap: ${(props.gap as number) * 4}px;
        `,
        props.className as string
      )}
    >
      {props.children}
    </div>
  );
};

export default Flex;
