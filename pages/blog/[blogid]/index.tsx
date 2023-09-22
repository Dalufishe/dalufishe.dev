import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { readFile, readdir } from "fs/promises";
import path from "path";
import { css } from "@emotion/css";
import { classes } from "../../../utils/classes";
import { NextPageWithLayout } from "../../_app";
import BlogLayout from "../../../components/BlogPage/layout/BlogLayout";
import Block from "../../../components/_Global/ui/Block/Block";

type PageProps = {
  source: MDXRemoteSerializeResult;
};

const BlogIdPage: NextPageWithLayout<PageProps> = (props: PageProps) => {
  const { source } = props;

  return (
    <div className={classes("flex flex-col items-center")}>
      <Block value={40} />
      <div
        className={classes(
          "w-[1024px]",
          css`
            h1 {
              font-size: 2em;
            }
            h2 {
              font-size: 1.5em;
            }
            h3 {
              font-size: 1.17em;
            }
            h4 {
              font-size: 1em;
            }
            h5 {
              font-size: 0.83em;
            }
            h6 {
              font-size: 0.67em;
            }
            ul {
              display: block;
              list-style-type: disc;
              margin-top: 1em;
              margin-bottom: 1 em;
              margin-left: 0;
              margin-right: 0;
              padding-left: 40px;
            }
            li {
              display: list-item;
            }
          `
        )}
      >
        <MDXRemote {...source} />
      </div>
    </div>
  );
};

BlogIdPage.getLayout = (page) => {
  return <BlogLayout>{page}</BlogLayout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogsFolders = await readdir(path.join(process.cwd(), "data", "blogs"));
  const paths = blogsFolders.map((blogsFolder) => "/blog/" + blogsFolder);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogid = context.params?.blogid;

  if (typeof blogid !== "string") return { notFound: true };

  const source = await readFile(
    path.join(process.cwd(), "data", "blogs", blogid, "blog.mdx")
  );

  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
};

export default BlogIdPage;
