import PageTitle from "../../components/ui/PageTitle";
import ProductListSection from "./ProductListSection";
import Layout from "../../layouts/Layout";
const Product = () => {
  return (
    <div>
      <Layout>
        <div className="md:hidden">
          <PageTitle text="Products" />
        </div>
        <div className="hidden md:block">
          <PageTitle text="Our Products" />
        </div>
        <ProductListSection />
      </Layout>
    </div>
  );
};

export default Product;
