import PageTitle from "../../components/ui/PageTitle";
import Layout from "../../layouts/Layout";
import RecentBlogSection from "./RecentBlogSection";
import BlogListSection from "./BlogListSection";
const Blog = () => {
  return (
    <Layout>
      <div className="md:hidden">
        <PageTitle text="Blogs" />
      </div>
      <div className="hidden md:block">
        <PageTitle text="Blogs & Events" />
      </div>
      <RecentBlogSection />
      <BlogListSection />
    </Layout>
  );
};

export default Blog;
