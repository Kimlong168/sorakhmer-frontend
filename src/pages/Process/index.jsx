import Layout from "../../layouts/Layout";
import PageTitle from "../../components/ui/PageTitle";
import IntroSection from "./IntroSection";
import ProcessSection from "./ProcessSection";
import VideoSection from "./VideoSection";
import PhotoSection from "./PhotoSection";
const Process = () => {
  return (
    <Layout>
      <div className="overflow-x-hidden">
        <PageTitle text="Process" />
        <IntroSection />
        <ProcessSection />
        <VideoSection />
        <PhotoSection />
      </div>
    </Layout>
  );
};

export default Process;
