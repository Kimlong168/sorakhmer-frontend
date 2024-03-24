import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { TypeAnimation } from "react-type-animation";
import cambodiaMap from "../../assets/images/cambodia-map.png";
import PrimaryButton from "../../components/ui/PrimaryButton";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
const IntroSection = () => {
  const { language } = useContext(DataContext);
  return (
    <section className="container p-8 md:pt-0">
      <div className="pt-12 md:py-12">
        <div>
          <h3 className="font-primary-bold text-4xl md:text-5xl">
            <span className="text-primary block md:inline-block">
              {language == "en" ? "Visit Our" : "មកទស្សនា"}
            </span>
            <TypeAnimation
              speed={50}
              cursor={false}
              sequence={
                language == "en"
                  ? ["Distillery", 3000, "Farm", 3000]
                  : ["រោងចក្រផលិតរបស់យើង", 3000, "កសិដ្ឋានរបស់យើង", 3000]
              }
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
            />
            <span className="text-primary">.</span>
          </h3>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mg:gap-24  mt-8">
          <div className="w-full">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full lg:w-4/5"
            >
              <p className="text-lg md:text-xl text-justify">
                {language == "en"
                  ? "Our distillery is located in northwestern Cambodia, where wehave been producing Sorakhmer since 2008. We warmly welcomevisitors to our distillery and offer tours and tastings."
                  : "រោងចក្រផលិតស្រារបស់យើងមានទីតាំងនៅភាគពាយព្យនៃប្រទេសកម្ពុជា ដែលជាកន្លែងដែលយើងផលិត សុរាខ្មែរ តាំងពីឆ្នាំ 2008។ យើងស្វាគមន៍យ៉ាងកក់ក្តៅចំពោះអ្នកមកទស្សនារោងចក្ររបស់យើង ហើយផ្តល់ជូននូវដំណើរកម្សាន្ត និងភ្លក់រសជាតិស្រាខ្មែររបស់យើង។"}
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-8 hidden md:block"
            >
              <PrimaryButton
                content={language == "en" ? "Contact Us" : "ទំនាក់ទំនងយើង"}
                href="/contact"
              />
            </motion.div>
          </div>

          {/* combodia map image */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full  md:w-4/5"
          >
            <img
              src={cambodiaMap}
              alt="map of cambodia"
              className="w-full shadow-2xl rounded-lg"
            />
          </motion.div>
        </div>
        <div className="mt-8 md:hidden block">
          <PrimaryButton
            content={language == "en" ? "Contact Us" : "ទំនាក់ទំនងយើង"}
            href="/contact"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
