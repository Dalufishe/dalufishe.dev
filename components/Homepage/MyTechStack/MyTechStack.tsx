import React, { FC } from "react";
import { classes } from "../../../utils/classes";
import { css } from "@emotion/css";
import { tailwind_config } from "../../../utils/twconf2js";
import MyContainer from "../ui/MyContainer/MyContainer";
import MyTitle from "../ui/MyTitle/MyTitle";
import Block from "../../_Global/ui/Block/Block";
import MyDescription from "../ui/MyDescription/MyDescription";
import MyItembox from "../ui/MyItembox/MyItembox";
import { BiLogoReact } from "react-icons/bi";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import Flex from "../../_Global/ui/Flex/Flex";
import { BiLogoJava } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { AiFillApi } from "react-icons/ai";

const MyTechStack: FC = () => {
  return (
    <MyContainer className={classes("w-full md:w-[49%] lg:w-[32%]")}>
      <MyTitle
        highlightColor={tailwind_config.theme.colors.highlight}
        highlightWidth={80}
        highlightAnimated
        highlightAnimatedDelay={100}
      >
        Tech Stack
      </MyTitle>
      <Block value={4} />
      <MyDescription>
        I{"'"}m a Javascript enthusiast, familiar with Next.js, React.js, JQuery
        and more.
      </MyDescription>
      <Block value={4} />
      <Flex fc gap={4}>
        {/* React */}
        <MyItembox
          icon={<BiLogoReact className="text-5xl" />}
          title="React"
          description="I am fimiliar with React, Redux, JSX and more."
        />
        {/* Next */}
        <MyItembox
          icon={<SiNextdotjs className="text-4xl" />}
          title="Next.js"
          description="I prefer building apps for production using Next.js."
        />
        {/* TypeScript */}
        <MyItembox
          icon={<SiTypescript className="text-3xl" />}
          title="TypeScript"
          description="Statically typed version of Javascript. Love it."
        />
        {/* API */}
        <MyItembox
          icon={<AiFillApi className="text-3xl" />}
          title="API"
          description="Connecting the services and getting apps stronger."
        />
        {/* Java */}
        <MyItembox
          icon={<BiLogoJava className="text-4xl" />}
          title="Java"
          description="Build Server side applications. Handle requests."
        />
        {/* MySQL */}
        <MyItembox
          icon={<GrMysql className="text-3xl" />}
          title="MySQL"
          description="Trust me. I am not a CRUD dev :D ."
        />
      </Flex>
    </MyContainer>
  );
};

export default MyTechStack;
