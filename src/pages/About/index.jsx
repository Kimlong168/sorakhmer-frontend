import Layout from "../../layouts/Layout";
import PageTitle from "../../components/ui/PageTitle";
import HistorySection from "./HistorySection";
import MissionAndVisionSection from "./MissionAndVisionSection";
import FounderSection from "./FounderSection";
import AwardSection from "./AwardSection";
import PartnerSection from "./PartnerSection";
import PhotoSection from "./PhotoSection";
const About = () => {
  return (
    <div>
      <Layout>
        <PageTitle text="About us" />
        <HistorySection />
        <MissionAndVisionSection />
        <FounderSection />
        <PhotoSection />
        <AwardSection />
        <PartnerSection />
      </Layout>
    </div>
  );
};

export default About;
