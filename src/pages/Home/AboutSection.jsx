import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import PrimaryButton from "../../components/ui/PrimaryButton";
import Title from "../../components/ui/Title";
import about_1 from "../../assets/images/about_1.jpg";
import { TypeAnimation } from "react-type-animation";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
const AboutSection = () => {
  const { language } = useContext(DataContext);
  return (
    <section className="container p-8 md:pt-0 flex flex-col md:flex-row items-center justify-between  gap-8 md:gap-24 md:h-screen">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Title text={language == "en" ? "About" : "អំពីយើង"} />
        <h3 className="font-primary-bold text-4xl md:text-5xl py-8">
          <TypeAnimation
            speed={50}
            cursor={false}
            sequence={
              language == "en"
                ? [
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
                  ]
                : [
                    "សុរាខ្មែរ",
                    2000,
                    "ប្រវត្តិរបស់យើង",
                    2000,

                    "បេសកកម្មរបស់យើង",
                    2000,
                    "ចក្ខុវិស័យរបស់យើង",
                    2000,
                  ]
            }
            className="text-accent"
            wrapper="span"
            repeat={Infinity}
          />

          <span className="text-primary font-bold">.</span>
        </h3>
        <p className="md:mb-10 lg:prose-xl">
          {language == "en"
            ? "We create fine spirits that support post-demining sustainable community development"
            : "យើងមានស្មារតីគាំទ្រដល់ការអភិវឌ្ឍន៍សហគមន៍ប្រកបដោយនិរន្តរភាពក្រោយការដោះមីន"}
          <span className="text-primary font-bold">.</span>
        </p>
        <div className="hidden md:block">
          <PrimaryButton
            content={language == "en" ? "Learn More" : "ស្វែងយល់បន្ថែម"}
            href="/about"
          />
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
        <PrimaryButton
          content={language == "en" ? "Learn More" : "ស្វែងយល់បន្ថែម"}
          href="/about"
        />
      </div>
    </section>
  );
};

export default AboutSection;
