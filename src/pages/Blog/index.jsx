import PageTitle from "../../components/ui/PageTitle";
import Layout from "../../layouts/Layout";
import RecentBlogSection from "./RecentBlogSection";
import BlogListSection from "./BlogListSection";
const Blog = () => {
  return (
    <Layout>
      <PageTitle text="Blog & Event" />
      <RecentBlogSection />
      <BlogListSection />
    </Layout>
  );
};

export default Blog;
