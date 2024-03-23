import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import dragon from "../../assets/images/dragon.png";
import ImagesCarousel from "../../components/ui/ImagesCarousel";
import distilery_1 from "../../assets/images/distilery_1.webp";
import distilery_2 from "../../assets/images/distilery_2.webp";
import distilery_3 from "../../assets/images/distilery_3.webp";
import distilery_4 from "../../assets/images/distilery_4.webp";
import distilery_5 from "../../assets/images/distilery_5.webp";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

const DistillerySection = () => {
  const { language } = useContext(DataContext);
  const imageList = [
    distilery_1,
    distilery_2,
    distilery_3,
    distilery_5,
    distilery_4,
  ];
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
            <span className=" first-line:font-semibold text-2xl text-primary border-b-2 rounded-br-xl border-primary -ml-3 mb-[2.2px] pr-3">
              {language == "en"
                ? "About Our Distillery"
                : "អំពីរោងចក្រផលិតរបស់យើង"}
            </span>
          </div>
        </motion.h3>
        <p className="mx-auto text-center mt-6  prose lg:prose-xl dark:text-white/90">
          {language == "en"
            ? "At Sorakhmer, we are all about crafting exceptional spirits. From selecting the finest ingredients to our careful distillation process, each bottle reflects our commitment to quality and tradition. Come join us in celebrating the art of making great products."
            : "យើងប្តេជ្ញាផលិតផលិតផលដែលល្អឯក។ ផ្តើមចេញពីការជ្រើសរើសគ្រឿងផ្សំល្អបំផុតរហូតដល់ដំណាក់កាលនៃការចម្រាញ់ដោយប្រុងប្រយ័ត្ន ដបនីមួយៗឆ្លុះបញ្ចាំងពីការប្តេជ្ញាចិត្តរបស់យើងចំពោះគុណភាព និងប្រពៃណីរបស់ខ្មែរយើង។"}
        </p>
        <div>
          <ImagesCarousel imageList={imageList} />
        </div>
      </div>
    </section>
  );
};

export default DistillerySection;
