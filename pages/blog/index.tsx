
import BlogLayout from "../../components/BlogPage/layout/BlogLayout";
import { NextPageWithLayout } from "../_app";

const BlogPage: NextPageWithLayout = () => {
  return <div>BlogPage</div>;
};

BlogPage.getLayout = (page) => {
  return <BlogLayout>{page}</BlogLayout>;
};

export default BlogPage;
