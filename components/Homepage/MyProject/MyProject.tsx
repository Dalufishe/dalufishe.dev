import React, { FC } from "react";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { BiLogoJava } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { TbWorldWww } from "react-icons/tb";
import TechCard from "./TechCard/TechCard";
import MyContainer from "../ui/MyContainer/MyContainer";
import MyTitle from "../ui/MyTitle/MyTitle";
import Block from "../../_Global/ui/Block/Block";
import MyDescription from "../ui/MyDescription/MyDescription";
import Flex from "../../_Global/ui/Flex/Flex";
import MyItembox from "../ui/MyItembox/MyItembox";
import { classes } from "../../../utils/classes";
import { tailwind_config } from "../../../utils/twconf2js";

const MyProject: FC = () => {
  return (
    <MyContainer className={classes("w-[33%]")}>
      <MyTitle color={tailwind_config.theme.colors.highlight}>Projects</MyTitle>
      <Block value={4} />
      <MyDescription>
        I absolutely love building software! These are the projects I built
        since I started coding.
      </MyDescription>
      <Block value={4} />
      <Flex fc gap={4}>
        {/* SpeedTypingWeb */}
        <MyItembox
          hover={false}
          icon={<TbWorldWww className="text-4xl" />}
          title="Speed Typing Web"
          description="A free, feature rich website to practice typing. It's an open source project on github."
          extras={
            <Flex jb className="my-1 mr-1 mt-1">
              <Flex gap={3}>
                <TechCard>React</TechCard>
                <TechCard>JavaScript</TechCard>
              </Flex>
              <Flex gap={3}>
                <TechCard contained>
                  <a
                    href="https://github.com/Dalufishe/speed-typing-web"
                    target="_blank"
                  >
                    Github
                  </a>
                </TechCard>
                <TechCard contained>
                  <a
                    href="http://localhost:3001/speed-typing-web"
                    target="_blank"
                  >
                    Site
                  </a>
                </TechCard>
              </Flex>
            </Flex>
          }
        />
        {/* Dalufishe.dev */}
        <MyItembox
          hover={false}
          icon={<TbWorldWww className="text-4xl" />}
          title="Dalufishe.dev"
          description="My personal homepage."
          extras={
            <Flex jb className="my-1 mr-1 mt-1">
              <Flex gap={3}>
                <TechCard>Next.js</TechCard>
                <TechCard>TypeScript</TechCard>
              </Flex>
              <Flex gap={3}>
                <TechCard contained>
                  <a
                    href="https://github.com/Dalufishe/dalufishe.dev"
                    target="_blank"
                  >
                    Github
                  </a>
                </TechCard>
                <TechCard contained>
                  <a
                    href="http://localhost:3001/speed-typing-web"
                    target="_blank"
                  >
                    Site
                  </a>
                </TechCard>
              </Flex>
            </Flex>
          }
        />
      </Flex>
    </MyContainer>
  );
};

export default MyProject;
