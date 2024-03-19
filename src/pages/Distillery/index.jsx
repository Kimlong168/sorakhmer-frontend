import PageTitle from "../../components/ui/PageTitle";
import Layout from "../../layouts/Layout";
import IntroSection from "./IntroSection";
import DistillerySection from "./DistillerySection";
import FarmSection from "./FarmSection";
import VisitorSection from "./VisitorSection";
import MetadataHeader from "../../components/ui/MetadataHeader";
const Distillery = () => {
  return (
    <>
      <Layout>
        <MetadataHeader title="Sorakhmer | Distillery" description="Welcome to Sorakhmer" />
        <div className="overflow-x-hidden">
          <PageTitle text="Distillery" />
          <IntroSection />
          <DistillerySection />
          <FarmSection />
          <VisitorSection />
        </div>
      </Layout>
    </>
  );
};

export default Distillery;
