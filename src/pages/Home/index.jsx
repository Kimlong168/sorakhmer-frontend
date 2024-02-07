import Layout from "../../layouts/Layout";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import ProductSection from "./ProductSection";
import BlogSection from "./BlogSection";
const Home = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <AboutSection />
        <ProductSection />
        <BlogSection />
      </Layout>
    </>
  );
};

export default Home;
