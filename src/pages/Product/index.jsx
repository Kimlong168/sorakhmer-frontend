import PageTitle from "../../components/ui/PageTitle";
import ProductListSection from "./ProductListSection";
import Layout from "../../layouts/Layout";
import MetadataHeader from "../../components/ui/MetadataHeader";
const Product = () => {
  return (
    <>
      <Layout>
        <MetadataHeader title="Products" description="Welcome to Sorakhmer" />
        <div className="md:hidden">
          <PageTitle text="Products" />
        </div>
        <div className="hidden md:block">
          <PageTitle text="Our Products" />
        </div>
        <ProductListSection />
      </Layout>
    </>
  );
};

export default Product;
