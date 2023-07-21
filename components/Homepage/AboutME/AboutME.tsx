import { FC } from "react";
import { classes } from "../../../utils/classes";
import Image from "next/image";
import { tailwind_config } from "../../../utils/twconf2js";
import MyImage from "../../../assets/me.png";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoDiscordAlt } from "react-icons/bi";
import HighLight from "../../_Global/ui/HighLight/HighLight";
import Block from "../../_Global/ui/Block/Block";
import { css } from "@emotion/css";
import { SOCIAL } from "../../../constant/social";

const AboutME: FC = () => {
  return (
    <div className={classes("w-full", "flex flex-col items-center")}>
      <Image
        property="og:image"
        className={classes(
          "cursor-pointer",
          "rounded-full",
          "border-[3px] border-light",
          "bg-red-50"
        )}
        src={MyImage}
        alt="this is my photo"
        width={200}
        height={200}
      />
      <Block value={5} />
      <h2 className={classes("text-3xl", "text-center")}>
        A{" "}
        <HighLight
          type="underline"
          color={tailwind_config.theme.colors.highlight}
        >
          Full Stack
        </HighLight>{" "}
        Web Developer
      </h2>
      <Block value={2} />
      <h3 className="text-2xl text-center">
        love softwares, coding, games and more. Have fun :D
      </h3>
      <Block value={3} />
      <ul className="flex gap-2 text-2xl text-lesslight">
        <li>
          <a href={SOCIAL.GITHUB.HREF} target="_blank">{<AiFillGithub />}</a>
        </li>
        <li>
          <a href={SOCIAL.DISCORD.HREF} target="_blank">{<BiLogoDiscordAlt />}</a>
        </li>
      </ul>
    </div>
  );
};

export default AboutME;
