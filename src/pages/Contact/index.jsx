import PageTitle from "../../components/ui/PageTitle";
import Layout from "../../layouts/Layout";
import ContactForm from "./ContactSection";
import WhereToBuy from "./WhereToBuySection";
import PhotoSection from "./PhotoSection";
const Contact = () => {
  return (
    <Layout>
      <PageTitle text="Contact" />
      <ContactForm />
      <WhereToBuy />
      <PhotoSection />
    </Layout>
  );
};

export default Contact;
