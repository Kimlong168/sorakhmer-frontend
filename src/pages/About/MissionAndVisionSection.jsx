import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { FaRegEye } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
const MissionAndVisionSection = () => {
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
            Our Mission<span className="text-primary font-bold">.</span>
          </h3>
          <div className="text-primary text-[150px]">
            <GoGoal />
          </div>
          <p className="lg:w-[80%] text-center">
            Create fine spirits from local products to support local communities
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
            Our Vision<span className="text-primary font-bold">.</span>
          </h3>
          <div className="text-primary text-[150px]">
            <FaRegEye />
          </div>
          <p className="lg:w-[80%] text-center">
            Post-demining sustainable community development and building peace
            for the world
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionAndVisionSection;
