import Head from "next/head";
import BlogLayout from "../../components/BlogPage/layout/BlogLayout";
import { NextPageWithLayout } from "../_app";
import Block from "../../components/_Global/ui/Block/Block";
import myImage from "../../assets/me.png";
import { classes } from "../../utils/classes";
import BlogCrad from "../../components/BlogPage/BlogCard/BlogCard";
import { GetStaticProps } from "next";
import { readFile, readdir } from "fs/promises";
import path from "path";
import _ from "lodash";
import { readFileSync, readdirSync } from "fs";
import Flex from "../../components/_Global/ui/Flex/Flex";
import Link from "next/link";

type BlogData = {
  title: string;
  description: string;
  tags: string[];
};

type BlogsData = BlogData[];

type Props = {
  blogsData: BlogsData;
};

const BlogPage: NextPageWithLayout<Props> = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Dalufishe Blog</title>
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
      <Block value={40} />
      <Flex fc ic gap={12} className={classes("relative")}>
        {props.blogsData.map((blogData: BlogData, index) => (
          <Link href={"blog/blog" + (index + 1)}>
            <BlogCrad {...blogData} />
          </Link>
        ))}
      </Flex>
      <Block value={20} />
    </div>
  );
};

BlogPage.getLayout = (page) => {
  return <BlogLayout>{page}</BlogLayout>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  let blogsData: string[] = [];

  const dirs = readdirSync(
    path.join(process.cwd(), "data", "blogs", "_test-blogs")
  );
  dirs.forEach((dir) => {
    const datas = readdirSync(
      path.join(process.cwd(), "data", "blogs", "_test-blogs", dir)
    );
    const data = _.find(datas, (s) => {
      return s === ".json";
    }) as string;

    const file = readFileSync(
      path.join(process.cwd(), "data", "blogs", "_test-blogs", dir, data)
    );

    const json = JSON.parse(file.toString());

    blogsData.push(json);
  });

  return { props: { blogsData } };
};

export default BlogPage;
