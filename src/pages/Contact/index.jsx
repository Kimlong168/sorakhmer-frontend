import PageTitle from "../../components/ui/PageTitle";
import Layout from "../../layouts/Layout";
import ContactForm from "./ContactSection";
import WhereToBuy from "./WhereToBuySection";
import PhotoSection from "./PhotoSection";
const Contact = () => {
  return (
    <Layout>
      <div className="overflow-x-hidden">
        <PageTitle text="Contact" />
        <ContactForm />
        <WhereToBuy />
        <PhotoSection />
      </div>
    </Layout>
  );
};

export default Contact;
