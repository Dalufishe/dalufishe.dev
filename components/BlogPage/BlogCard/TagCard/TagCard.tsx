import { FC, ReactNode } from "react";
import { classes } from "../../../../utils/classes";

type Props = { children: ReactNode };

const TagCard: FC<Props> = ({ children }: Props) => {
  return (
    <div
      className={classes(
        classes("border border-highlight", "text-highlight"),
        "px-1.5",
        "flex items-center",
        "cursor-pointer"
      )}
    >
      <span>{children}</span>
    </div>
  );
};

export default TagCard;
