import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { FaRegEye } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
const MissionAndVisionSection = () => {
  const { language } = useContext(DataContext);
  return (
    <section className="container p-8 md:pt-0">
      <div className="flex flex-col sm:flex-row justify-center gap-24 pt-12 md:py-12 porse lg:prose-xl">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center gap-8"
        >
          <h3 className="text-nowrap font-primary-bold text-4xl md:text-5xl ">
            {language == "en" ? "Our Mission" : "បេសសកម្មរបស់យើង"}
            <span className="text-primary font-bold">.</span>
          </h3>
          <div className="text-primary text-[150px]">
            <GoGoal />
          </div>
          <p className="lg:w-[80%] text-center">
            {language == "en"
              ? "Create fine spirits from local products to support local communities"
              : "បង្កើតស្មារតីដ៏ល្អពីផលិតផលក្នុងស្រុក ដើម្បីគាំទ្រសហគមន៍មូលដ្ឋាន"}
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center gap-8"
        >
          <h3 className="text-nowrap font-primary-bold text-4xl md:text-5xl ">
            {language == "en" ? "Our Vision" : "ចក្ខុវិស័យរបស់យើង"}
            <span className="text-primary font-bold">.</span>
          </h3>
          <div className="text-primary text-[150px]">
            <FaRegEye />
          </div>
          <p className="lg:w-[80%] text-center">
            {language == "en"
              ? "Post-demining sustainable community development and building peace for the world"
              : "ការអភិវឌ្ឍសហគមន៍ប្រកបដោយនិរន្តរភាពក្រោយការដោះមីន និងការកសាងសន្តិភាពសម្រាប់ពិភពលោក"}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionAndVisionSection;
