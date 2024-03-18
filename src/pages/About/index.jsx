import Layout from "../../layouts/Layout";
import PageTitle from "../../components/ui/PageTitle";
import HistorySection from "./HistorySection";
import MissionAndVisionSection from "./MissionAndVisionSection";
import FounderSection from "./FounderSection";
import AwardSection from "./AwardSection";
import PartnerSection from "./PartnerSection";
import PhotoSection from "./PhotoSection";
import VideoSection from "./VideoSection";
import MetadataHeader from "../../components/ui/MetadataHeader";
const About = () => {
  return (
    <div>
      <Layout>
        <MetadataHeader title="About Us" description="Welcome to Sorakhmer" />
        <div className="overflow-x-hidden">
          <PageTitle text="About us" />
          <HistorySection />
          <MissionAndVisionSection />
          <FounderSection />
          <VideoSection />
          <PhotoSection />
          <AwardSection />
          <PartnerSection />
        </div>
      </Layout>
    </div>
  );
};

export default About;
