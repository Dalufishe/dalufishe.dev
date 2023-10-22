import React, { FC, ReactNode } from "react";
import { classes } from "../../../../utils/classes";
import Flex from "../../../_Global/ui/Flex/Flex";

type Props = {
  className?: string;
  icon?: any;
  title: string;
  description: ReactNode;
  extras?: any;
  hover?: boolean;
};

const MyItembox: FC<Props> = ({
  className,
  icon,
  title,
  description,
  extras,
  hover = true,
}: Props) => {
  return (
    <div
      className={classes(
        hover
          ? classes("hover:bg-highlight hover:text-primary", "cursor-pointer")
          : "",
        "border border-secondary",
        "p-1",
        className as string
      )}
    >
      <Flex ic gap={1}>
        <Flex jc ic className="w-[56px]">
          {icon}
        </Flex>
        <Flex fc className="w-full">
          <h5 className="font-bold text-2xl">{title}</h5>
          <h5 className="text-base">{description}</h5>
          {extras}
        </Flex>
      </Flex>
    </div>
  );
};

export default MyItembox;
