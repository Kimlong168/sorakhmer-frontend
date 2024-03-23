import PageTitle from "../../components/ui/PageTitle";
import Layout from "../../layouts/Layout";
import RecentBlogSection from "./RecentBlogSection";
import BlogListSection from "./BlogListSection";
import MetadataHeader from "../../components/ui/MetadataHeader";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
const Blog = () => {
  const { language } = useContext(DataContext);
  return (
    <Layout>
      <MetadataHeader
        title="Sorakhmer | Blogs"
        description="Welcome to Sorakhmer"
      />
      <div className="overflow-x-hidden">
        <div className="md:hidden">
          <PageTitle text={language == "en" ? "Blogs" : "អត្ថបទ​"} />
        </div>
        <div className="hidden md:block">
          <PageTitle
            text={
              language == "en" ? "Blogs & Events" : "អត្ថបទ​ & ព្រឹត្តិការណ៍"
            }
          />
        </div>
        <RecentBlogSection />
        <BlogListSection />
      </div>
    </Layout>
  );
};

export default Blog;
