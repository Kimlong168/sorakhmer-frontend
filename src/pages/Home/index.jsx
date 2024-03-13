import Layout from "../../layouts/Layout";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import ProductSection from "./ProductSection";
import BlogSection from "./BlogSection";
import AwardSection from "./AwardSection";
import PartnerSection from "./PartnerSection";
const Home = () => {
  return (
    <>
      <Layout>
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
