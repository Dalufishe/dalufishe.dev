import React, { FC } from "react";
import { classes } from "../../../utils/classes";
import { tailwind_config } from "../../../utils/twconf2js";
import MyContainer from "../ui/MyContainer/MyContainer";
import MyTitle from "../ui/MyTitle/MyTitle";
import Block from "../../_Global/ui/Block/Block";
import MyDescription from "../ui/MyDescription/MyDescription";
import MyItembox from "../ui/MyItembox/MyItembox";
import { BsDiscord } from "react-icons/bs";
import Flex from "../../_Global/ui/Flex/Flex";
import { AiFillGithub } from "react-icons/ai";
import { SOCIAL } from "../../../constant/social";

type Props = {};

const MySocial: FC<Props> = (props: Props) => {
  return (
    <MyContainer className={classes("w-full md:w-[49%] lg:w-[32%]")}>
      <MyTitle
        highlightColor={tailwind_config?.theme?.colors?.highlight as string}
        highlightWidth={80}
        highlightAnimated
        highlightAnimatedDelay={300}
      >
        Social
      </MyTitle>
      <Block value={4} />
      <MyDescription>
        You can find me on discord, github, and more! Contact me if you have a
        problem or just wanna chat with me ( ?
      </MyDescription>
      <Block value={4} />
      <Flex fc gap={4}>
        {/* Github */}
        <a href={SOCIAL.GITHUB.HREF} target="_blank">
          <MyItembox
            icon={<AiFillGithub className="text-4xl" />}
            title="Github"
            description={SOCIAL.GITHUB.NAME}
          />
        </a>
        {/* Discord */}
        <a href={SOCIAL.DISCORD.HREF} target="_blank">
          <MyItembox
            icon={<BsDiscord className="text-3xl" />}
            title="Discord"
            description={SOCIAL.DISCORD.NAME}
          />
        </a>
      </Flex>
    </MyContainer>
  );
};

export default MySocial;
