import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { TypeAnimation } from "react-type-animation";
import process_1 from "../../assets/images/process_1.webp";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
const IntroSection = () => {
  const { language } = useContext(DataContext);
  return (
    <section className="container p-8 md:pt-0">
      <div className="pt-12 md:py-12 ">
        <div>
          <h3 className="font-primary-bold text-4xl md:text-5xl ">
            <span className="text-primary">
              {language == "en" ? "We make what" : "យើងផលិតអ្វីដែល"}{" "}
            </span>
            <span className="md:hidden">
              <br />
            </span>
            <TypeAnimation
              speed={50}
              cursor={false}
              sequence={
                language == "en"
                  ? ["We love", 2000, "You desire", 2000]
                  : ["យើងស្រលាញ់", 2000, "អ្នកពេញចិត្ត", 2000]
              }
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
            />
            <span className="text-primary font-bold">.</span>
          </h3>
        </div>
        <div className=" flex flex-col lg:flex-row item gap-8 lg:gap-24 mt-8 ">
          <div className="w-full">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="porse lg:prose-xl text-justify"
            >
              {language == "en" ? (
                <p>
                  Welcome to Sorakhmer&rsquo;s products process journey! Explore
                  the magic behind our products – from concept to reality. Join
                  us as we unveil the creativity and dedication driving our
                  innovation.
                </p>
              ) : (
                <p>
                  សូមស្វាគមន៍មកកាន់ដំណើរដំណើរការផលិតរបស់ សុរាខ្មែរ
                  ស្វែងយល់ពីភាពអស្ចារ្យ នៅពីក្រោយផលិតផលរបស់យើង -
                  ពីគំនិតទៅជាការពិត។ ពួកយើងនឹងបង្ហាញការច្នៃប្រឌិត
                  និងការប្តេជ្ញាចិត្តរបស់យើង។
                </p>
              )}

              <div className="hidden lg:block mt-8">
                <a
                  className={`${
                    language == "en" ? "text-md" : "text-lg"
                  } group border-2 border-dashed border-primary px-6 py-3 font-semibold uppercase text-primary transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-xl hover:shadow-[4px_4px_0px_rgb(245,156,0)] active:translate-x-[0px] active:translate-y-[0px] active:rounded-lg active:shadow-none`}
                  href="#video-section"
                >
                  {language == "en" ? "Explore More" : "ស្វែងយល់បន្ថែម"}
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:w-4/5 "
          >
            <img
              className="mx-auto block w-full lg:w-auto rounded-lg shadow-2xl"
              src={process_1}
              alt="processImage"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
