import Layout from "../../layouts/Layout";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import ProductSection from "./ProductSection";
import BlogSection from "./BlogSection";
import AwardSection from "./AwardSection";
import PartnerSection from "./PartnerSection";
import MetadataHeader from "../../components/ui/MetadataHeader";
const Home = () => {
  return (
    <>
      <Layout>
        <MetadataHeader title="SORA KHMER" description="Welcome to Sorakhmer" />
        <div className="overflow-x-hidden">
          <HeroSection />
          <AboutSection />
          <ProductSection />
          <BlogSection />
          <AwardSection />
          <PartnerSection />
        </div>
      </Layout>
    </>
  );
};

export default Home;
