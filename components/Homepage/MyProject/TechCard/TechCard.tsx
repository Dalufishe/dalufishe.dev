import { FC } from "react";
import { classes } from "../../../../utils/classes";

type Props = { children: any; contained?: boolean };

const TechCard: FC<Props> = ({ children, contained = false }: Props) => {
  return (
    <div
      className={classes(
        contained
          ? classes(
              "bg-highlight",
              "text-primary",
              "font-bold",
              "hover:bg-light"
            )
          : classes("border border-highlight", "text-highlight"),
        "px-1.5",
        "flex items-center",
        "cursor-pointer"
      )}
    >
      <span>{children}</span>
    </div>
  );
};

export default TechCard;
