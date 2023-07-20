import React, { FC } from "react";
import { classes } from "../../../utils/classes";
import { css } from "@emotion/css";
import { tailwind_config } from "../../../utils/twconf2js";
import MyContainer from "../ui/MyContainer/MyContainer";
import MyTitle from "../ui/MyTitle/MyTitle";
import Block from "../../_Global/ui/Block/Block";
import MyDescription from "../ui/MyDescription/MyDescription";

const MyTechStack: FC = () => {
  return (
    <MyContainer className={classes("w-[33%]", "border-secondary")}>
      <MyTitle color={tailwind_config.theme.colors.highlight}>
        Teck Stach
      </MyTitle>
      <Block value={4} />
      <MyDescription>
        I'm a Javascript enthusiast, familiar with Next.js, React.js, JQuery and
        more.
      </MyDescription>
    <Block value={4} />
    </MyContainer>
  );
};

export default MyTechStack;
