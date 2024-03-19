import PageTitle from "../../components/ui/PageTitle";
import Layout from "../../layouts/Layout";
import RecentBlogSection from "./RecentBlogSection";
import BlogListSection from "./BlogListSection";
import MetadataHeader from "../../components/ui/MetadataHeader";
const Blog = () => {
  return (
    <Layout>
      <MetadataHeader title="Sorakhmer | Blogs" description="Welcome to Sorakhmer" />
      <div className="overflow-x-hidden">
        <div className="md:hidden">
          <PageTitle text="Blogs" />
        </div>
        <div className="hidden md:block">
          <PageTitle text="Blogs & Events" />
        </div>
        <RecentBlogSection />
        <BlogListSection />
      </div>
    </Layout>
  );
};

export default Blog;
