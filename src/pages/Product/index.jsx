import PageTitle from "../../components/ui/PageTitle";
import ProductListSection from "./ProductListSection";
import Layout from "../../layouts/Layout";
import MetadataHeader from "../../components/ui/MetadataHeader";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
const Product = () => {
  const { language } = useContext(DataContext);
  return (
    <>
      <Layout>
        <MetadataHeader
          title="Sorakhmer | Products"
          description="Welcome to Sorakhmer"
        />
        <div className="md:hidden">
          <PageTitle text={language == "en" ? "Products" : "ផលិតផល"} />
        </div>
        <div className="hidden md:block">
          <PageTitle
            text={language == "en" ? "Our Products" : "ផលិតផលរបស់យើង"}
          />
        </div>
        <ProductListSection />
      </Layout>
    </>
  );
};

export default Product;
