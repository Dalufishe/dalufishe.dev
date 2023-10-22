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
    <MyContainer className={classes("w-full md:w-[49%] lg:w-[32%]")}>
      <MyTitle
        highlightColor={tailwind_config.theme.colors.highlight}
        highlightWidth={80}
        highlightAnimated
        highlightAnimatedDelay={200}
      >
        Projects
      </MyTitle>
      <Block value={4} />
      <MyDescription>
        I absolutely love building software! These are the projects I built
        since I started coding.
      </MyDescription>
      <Block value={4} />
      <Flex fc gap={4}>
        {/* Github Search + */}
        <MyItembox
          hover={false}
          icon={<TbWorldWww className="text-4xl" />}
          title="Github Search +"
          description="Next Gen Github Search Tool with Better UI & AI integration."
          extras={
            <Flex jb className="my-1 mr-1 mt-1" fw>
              <Flex gap={3}>
                <TechCard>Next.js</TechCard>
                <TechCard>TypeScript</TechCard>
              </Flex>
              <Flex gap={3}>
                <TechCard contained>
                  <a
                    href="https://7701-106-1-242-61.ngrok-free.app/"
                    target="_blank"
                  >
                    Site
                  </a>
                </TechCard>
              </Flex>
            </Flex>
          }
        />
        {/* Ptt */}
        <MyItembox
          hover={false}
          icon={<TbWorldWww className="text-4xl" />}
          title="VC Whiteboard"
          description={
            <>
              Try to make sense of complex topics in{" "}
              <a
                className="underline"
                href="https://scrollprize.org/"
                target="_blank"
              >
                Vesuvius Challenge
              </a>.
            </>
          }
          extras={
            <Flex jb className="my-1 mr-1 mt-1" fw>
              <Flex gap={3}>
                <TechCard>Three.js</TechCard>
                <TechCard>React</TechCard>
                <TechCard>Javascript</TechCard>
              </Flex>
              <Flex gap={3}>
                <TechCard contained>
                  <a
                    href="https://github.com/tomhsiao1260/volume-viewer"
                    target="_blank"
                  >
                    Github
                  </a>
                </TechCard>
              </Flex>
            </Flex>
          }
        />
        {/* Ptt */}
        <MyItembox
          hover={false}
          icon={<TbWorldWww className="text-4xl" />}
          title="Nextjs.tw"
          description="Next.js documentation in Traditional Chinese, maintained by the opensource community."
          extras={
            <Flex jb className="my-1 mr-1 mt-1" fw>
              <Flex gap={3}>
                <TechCard>Next.js</TechCard>
                <TechCard>TypeScript</TechCard>
                <TechCard>MDX</TechCard>
              </Flex>
              <Flex gap={3}>
                <TechCard contained>
                  <a
                    href="https://github.com/yuaanlin/nextjs.tw"
                    target="_blank"
                  >
                    Github
                  </a>
                </TechCard>
                <TechCard contained>
                  <a href="https://nextjs.tw/" target="_blank">
                    Site
                  </a>
                </TechCard>
              </Flex>
            </Flex>
          }
        />
        {/* Ptt */}
        <MyItembox
          hover={false}
          icon={<TbWorldWww className="text-4xl" />}
          title="Ptt-third-party-client"
          description="Brand new PTT third-party client, simple and fast."
          extras={
            <Flex jb className="my-1 mr-1 mt-1" fw>
              <Flex gap={3}>
                <TechCard>Next.js</TechCard>
                <TechCard>TypeScript</TechCard>
              </Flex>
              <Flex gap={3}>
                <TechCard contained>
                  <a
                    href="https://github.com/Dalufishe/third-party-ptt-client"
                    target="_blank"
                  >
                    Github
                  </a>
                </TechCard>
                <TechCard contained>
                  <a
                    href="https://third-party-ptt-client.vercel.app/forum/hot"
                    target="_blank"
                  >
                    Site
                  </a>
                </TechCard>
              </Flex>
            </Flex>
          }
        />
        {/* SpeedTypingWeb */}
        <MyItembox
          hover={false}
          icon={<TbWorldWww className="text-4xl" />}
          title="Speed Typing Web"
          description="A free, feature rich website to practice typing. It's an open source project on github."
          extras={
            <Flex jb className="my-1 mr-1 mt-1" fw>
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
                    href="https://dalufishe.github.io/speed-typing-web/"
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
            <Flex jb className="my-1 mr-1 mt-1" fw>
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
                  <a href="https://dalufishe-dev.vercel.app/" target="_blank">
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
