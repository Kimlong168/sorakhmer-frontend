import PageTitle from "../../components/ui/PageTitle";
import Layout from "../../layouts/Layout";
import IntroSection from "./IntroSection";
import DistillerySection from "./DistillerySection";
import EstateSection from "./EstateSection";
import VisitorSection from "./VisitorSection";

const Distillery = () => {
  return (
    <>
      <Layout>
        <div className="overflow-x-hidden">
          <PageTitle text="Distillery" />
          <IntroSection />
          <DistillerySection />
          <EstateSection />
          <VisitorSection />
        </div>
      </Layout>
    </>
  );
};

export default Distillery;
