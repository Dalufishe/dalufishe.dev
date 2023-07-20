import React, { FC } from "react";
import { classes } from "../../../utils/classes";
import { css } from "@emotion/css";
import { tailwind_config } from "../../../utils/twconf2js";
import MyContainer from "../ui/MyContainer/MyContainer";
import MyTitle from "../ui/MyTitle/MyTitle";
import Block from "../../_Global/ui/Block/Block";
import MyDescription from "../ui/MyDescription/MyDescription";
import MyItembox from "../ui/MyItembox/MyItembox";
import { BsDiscord } from "react-icons/bs";
import { SiNextdotjs } from "react-icons/si";
import Flex from "../../_Global/ui/Flex/Flex";
import { AiFillGithub } from "react-icons/ai";

type Props = {};

const MySocial: FC<Props> = (props: Props) => {
  return (
    <MyContainer className={classes("w-[33%]")}>
      <MyTitle color={tailwind_config.theme.colors.highlight}>Social</MyTitle>
      <Block value={4} />
      <MyDescription>
        You can find me on discord, github, and more! Contact me if you have a
        problem or just wanna chat with me ( ?
      </MyDescription>
      <Block value={4} />
      <Flex fc gap={4}>
        {/* Github */}
        <a href="https://github.com/Dalufishe" target="_blank">
          <MyItembox
            icon={<AiFillGithub className="text-4xl" />}
            title="Github"
            description="Dalufishe"
          />
        </a>
        {/* Discord */}
        <a href="https://discord.gg/RJkEhWmGw5" target="_blank">
          <MyItembox
            icon={<BsDiscord className="text-3xl" />}
            title="Discord"
            description="dalufishe"
          />
        </a>
      </Flex>
    </MyContainer>
  );
};

export default MySocial;
