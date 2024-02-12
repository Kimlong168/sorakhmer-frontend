import Layout from "../../layouts/Layout";
import PageTitle from "../../components/ui/PageTitle";
import IntroSection from "./IntroSection";
import ProcessSection from "./ProcessSection";
import VideoSection from "./VideoSection";
import PhotoSection from "./PhotoSection";
const Process = () => {
  return (
    <Layout>
      <PageTitle text="Process" />
      <IntroSection />
      <ProcessSection />
      <VideoSection />
      <PhotoSection />
    </Layout>
  );
};

export default Process;
