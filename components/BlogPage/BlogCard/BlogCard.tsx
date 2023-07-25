import Image from "next/image";
import React, { FC, ReactElement } from "react";
import Flex from "../../_Global/ui/Flex/Flex";
import { classes } from "../../../utils/classes";
import { css } from "@emotion/css";
import TagCard from "./TagCard/TagCard";

type Props = {
  title: string;
  description: string;
  tags: string[];
};


const right = css`
`;

const BlogCrad: FC<Props> = (props: Props) => {
  return (
    <Flex
      fc
      className={classes(
        "w-[1024px] h-[170px]",
        "p-3 pb-3",
        "bg-secondary"
      )}
    >
      <Flex
        fc
        gap={1}
        className={classes(
          "relative",
          "w-full h-full",
          "px-6",
          "py-5",
          "bg-primary",
          css`
            clip-path: polygon(
              1em 0%,
              calc(100% - 4em) 0%,
              100% 4em,
              100% calc(100% - 1em),
              calc(100% - 1em) 100%,
              1em 100%,
              0% calc(100% - 1em),
              0% 1em
            );
          `
        )}
      >
        <Flex jb ic className="w-[95%]">
          <h2 className="text-[24px] font-bold">{props.title}</h2>
          <Flex gap={3}>
            {props.tags?.map((tag) => (
              <TagCard key={tag}>{tag}</TagCard>
            ))}
          </Flex>
        </Flex>
        <h3 className="text-[16px] text-lesslight">{props.description}</h3>
        <Flex
          gap={3}
          className={classes(
            "absolute",
            "bottom-1 right-[3%] translate-x-[-15%]"
          )}
        >
          <div className="p-1.5 text-lesslight text-sm">
            Tue, 25 Jul 2023 23:03:13 GMT
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BlogCrad;
