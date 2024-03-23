import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import PartnersList from "../../components/ui/PartnersList";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
const PartnerSection = () => {
  const { language } = useContext(DataContext);
  return (
    <section className="overflow-hidden md:mt-32 pt-3">
      <h3 className="font-primary-bold text-4xl md:text-5xl pt-8 uppercase text-center">
        {language == "en" ? "OUR PARTNERS" : "ស្ថាប័នជាដៃគូរបស់យើង"}
        <span className="text-primary">.</span>
      </h3>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className=" w-[130%] translate-x-[-50px] -rotate-12 grayscale mt-12">
          <PartnersList direction="left" />
        </div>

        <div className=" w-[130%] translate-x-[-50px] rotate-12 -mt-8 mb-4 md:mb-8">
          <PartnersList direction="right" />
        </div>
      </motion.div>
    </section>
  );
};

export default PartnerSection;
