import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import PrimaryButton from "../../components/ui/PrimaryButton";
import Title from "../../components/ui/Title";
import about_1 from "../../assets/images/about_1.jpg";
import { TypeAnimation } from "react-type-animation";
const AboutSection = () => {
  return (
    <section className="container p-8 md:pt-0 flex flex-col md:flex-row items-center justify-between  gap-8 md:gap-24 md:h-screen">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Title />
        <h3 className="font-primary-bold text-4xl md:text-5xl py-8">
          {/* <div className="mb-6 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]"> */}
          <TypeAnimation
            speed={50}
            cursor={false}
            sequence={[
              "SORA KHMER",
              2000,
              "OUR JOURNEY",
              2000,
              "OUR HISTORY",
              2000,
              "OUR MISSION",
              2000,
              "OUR VISION",
              2000,
            ]}
            className="text-accent"
            wrapper="span"
            repeat={Infinity}
          />
          {/* </div> */}
          <span className="text-primary font-bold">.</span>
        </h3>
        <p className="md:mb-10 porse lg:prose-xl">
          We create fine spirits that support post-demining sustainable
          community development<span className="text-primary font-bold">.</span>
        </p>
        <div className="hidden md:block">
          <PrimaryButton content="Learn More" href="/about" />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full md:w-[500px] shadow-2xl overflow-hidden rounded-lg transition-all"
      >
        <img
          className="scale-105 hover:scale-125 transition-all cursor-pointer w-full h-full object-cover object-center"
          src={about_1}
          alt="about-image"
        />
      </motion.div>
      <div className="md:hidden block w-full">
        <PrimaryButton content="Learn More" href="/about" />
      </div>
    </section>
  );
};

export default AboutSection;
