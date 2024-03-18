import Layout from "../../layouts/Layout";
import CartItemsSection from "./CartItemsSection";
import MetadataHeader from "../../components/ui/MetadataHeader";
const ShoppingCart = () => {
  return (
    <Layout>
      <MetadataHeader
        title="Shopping Cart"
        description="Welcome to Sorakhmer"
      />
      <CartItemsSection />
    </Layout>
  );
};

export default ShoppingCart;
