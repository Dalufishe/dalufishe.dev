import type { NextPage } from "next";
import Head from "next/head";
import { classes } from "../utils/classes";
import AboutME from "../components/Homepage/AboutME/AboutME";
import MyTechStack from "../components/Homepage/MyTechStack/MyTechStack";
import Navbar from "../components/_Global/layout/Navbar/Navbar";
import Block from "../components/_Global/ui/Block/Block";
import MySocial from "../components/Homepage/MySocial/MySocail";
import Flex from "../components/_Global/ui/Flex/Flex";
import MyProject from "../components/Homepage/MyProject/MyProject";
import { wrapper } from "../redux/store";
import myImage from "../assets/me.png";
import NextIcon from "../components/_Global/icons/NextIcon";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Dalufishe</title>
        <meta
          name="description"
          content="Full Stack Web Developer, love softwares, coding, games and more. Have fun :D"
        />
        <meta property="og:url" content="https://dalufishe-dev.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Dalufishe | Full Stack Web Developer"
        />
        <meta
          property="og:description"
          content="Love softwares, coding, games and more. Have fun :D"
        />
        <meta property="og:image" content={myImage.src} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes("flex flex-col items-center", "relative")}>
        <Navbar />
        <Block value={20} />
        {/* 關於我 */}
        <AboutME />
        <Block value={15} />
        <main className={classes("w-[85%]")}>
          <Flex is gap={3} fw>
            {/* 我的技術棧 */}
            <MyTechStack />
            {/* 我的項目 */}
            <MyProject />
            {/* 我的社交 */}
            <MySocial />
          </Flex>
        </main>
      </div>
      <footer>
        <Block value={10} />
        <Flex fc ic gap={2}>
          <div className="text-lesslight">&copy; 2023 · Dalufishe</div>
          <Flex gap={2} is className="text-lesslight text-sm text-left">
            powered by <NextIcon />, an open source web framework.
          </Flex>
        </Flex>
        <Block value={5} />
      </footer>
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps(() => async () => {
  return { props: {} };
});

export default Home;
