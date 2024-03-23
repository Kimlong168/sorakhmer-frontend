import Layout from "../../layouts/Layout";
import PageTitle from "../../components/ui/PageTitle";
import IntroSection from "./IntroSection";
import ProcessSection from "./ProcessSection";
import VideoSection from "./VideoSection";
import PhotoSection from "./PhotoSection";
import MetadataHeader from "../../components/ui/MetadataHeader";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

const Process = () => {
  const { language } = useContext(DataContext);
  return (
    <Layout>
      <MetadataHeader
        title="Sorakhmer | Production Process"
        description="Welcome to Sorakhmer"
      />
      <div className="overflow-x-hidden">
        <PageTitle text={language == "en" ? "Process" : "ដំណើរការផលិត"} />

        <IntroSection />
        <ProcessSection />
        <VideoSection />
        <PhotoSection />
      </div>
    </Layout>
  );
};

export default Process;
