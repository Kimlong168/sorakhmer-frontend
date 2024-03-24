import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import dragon from "../../assets/images/dragon.png";
import ImagesCarousel from "../../components/ui/ImagesCarousel";

import farm_1 from "../../assets/images/farm_1.jpg";
import farm_2 from "../../assets/images/farm_2.jpg";
import farm_3 from "../../assets/images/farm_3.jpg";
import farm_4 from "../../assets/images/farm_4.jpg";
import farm_5 from "../../assets/images/farm_5.jpg";
import farm_6 from "../../assets/images/farm_6.jpeg";

import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
const EstateSection = () => {
  const { language } = useContext(DataContext);
  const imageList = [farm_1, farm_3, farm_2, farm_4, farm_5, farm_6];
  return (
    <section className="container p-8 md:pt-0">
      <div className="pt-12 md:py-12">
        <motion.h3
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-end justify-center">
            <img width={40} height={100} src={dragon} alt="dragon" />
            <span className=" first-line:font-semibold text-2xl border-b-2 rounded-br-xl border-primary text-primary -ml-3 mb-[2.2px] pr-3">
              {language == "en" ? "About Our Farm" : "អំពីកសិដ្ឋានរបស់យើង"}
            </span>
          </div>
        </motion.h3>
        <p className="mx-auto text-center mt-6  prose lg:prose-xl dark:text-white/90">
          {language == "en"
            ? "Located in Battambang, Cambodia, Sorakhmer is a haven of natural beauty and innovation. Discover our commitment to quality and sustainability as we invite you to explore our grounds. Welcome to excellence."
            : "សុរាខ្មែរ មានទីតាំងនៅខេត្តបាត់ដំបង ប្រទេសកម្ពុជា ជាឋានសួគ៌នៃសម្រស់ធម្មជាតិ និងការច្នៃប្រឌិត។ ស្វែងយល់ពីការប្តេជ្ញាចិត្តរបស់យើងចំពោះគុណភាព និងនិរន្តរភាពដោយផ្ទាល់នៅកសិដ្ឋានរបស់យើង។"}
        </p>
        <div>
          <ImagesCarousel imageList={imageList} />
        </div>
      </div>
    </section>
  );
};

export default EstateSection;
