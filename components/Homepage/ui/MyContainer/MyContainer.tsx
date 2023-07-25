import React, { FC, ReactNode } from "react";
import { classes } from "../../../../utils/classes";

type Props = {
  children: ReactNode;
  className: string;
};

const MyContainer: FC<Props> = (props: Props) => {
  return (
    <section
      className={classes(
        "border-[3px] border-secondary",
        "py-6 px-5",
        props.className
      )}
    >
      {props.children}
    </section>
  );
};

export default MyContainer;
