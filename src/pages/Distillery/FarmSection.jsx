import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import dragon from "../../assets/images/dragon.png";
import ImagesCarousel from "../../components/ui/ImagesCarousel";

import farm_1 from "../../assets/images/farm_1.jpeg";
import farm_2 from "../../assets/images/farm_2.jpeg";
import farm_3 from "../../assets/images/farm_3.jpeg";
import farm_4 from "../../assets/images/farm_4.jpeg";
const EstateSection = () => {
  const imageList = [farm_1, farm_2, farm_3, farm_4];
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
            <span className=" first-line:font-semibold text-2xl border-b-2 rounded-br-xl border-primary -ml-3 mb-[2.2px] pr-3">
              About Our Farm
            </span>
          </div>
        </motion.h3>
        <p className="mx-auto text-center mt-6  prose lg:prose-xl dark:text-white/90">
          Located in Battambang, Cambodia, Sorakhmer is a haven of natural
          beauty and innovation. Discover our commitment to quality and
          sustainability as we invite you to explore our grounds. Welcome to
          excellence.
        </p>
        <div>
          <ImagesCarousel imageList={imageList} />
        </div>
      </div>
    </section>
  );
};

export default EstateSection;
