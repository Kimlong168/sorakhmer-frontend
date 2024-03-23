import PageTitle from "../../components/ui/PageTitle";
import Layout from "../../layouts/Layout";
import ContactForm from "./ContactSection";
import WhereToBuy from "./WhereToBuySection";
import PhotoSection from "./PhotoSection";
import MetadataHeader from "../../components/ui/MetadataHeader";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
const Contact = () => {
  const { language } = useContext(DataContext);
  return (
    <Layout>
      <MetadataHeader
        title="Sorakhmer | Contact Us"
        description="Welcome to Sorakhmer"
      />
      <div className="overflow-x-hidden">
        <PageTitle text={language == "en" ? "Contact" : "ទំនាក់ទំនង"} />
        <ContactForm />
        <WhereToBuy />
        <PhotoSection />
      </div>
    </Layout>
  );
};

export default Contact;
