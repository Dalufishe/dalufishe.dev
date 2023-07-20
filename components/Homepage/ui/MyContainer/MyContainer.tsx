import React, { FC } from "react";
import { classes } from "../../../../utils/classes";

type Props = {
  children: any;
  className: string;
};

const MyContainer: FC<Props> = (props: Props) => {
  return (
    <section className={classes("border-[3px]", "py-6 px-4", props.className)}>
      {props.children}
    </section>
  );
};

export default MyContainer;
