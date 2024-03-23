import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import PrimaryButton from "../../components/ui/PrimaryButton";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
const VideoSection = () => {
  const { language } = useContext(DataContext);
  return (
    <section className="container p-8 md:pt-0 md:mt-32" id="video-section">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 py-12">
        <div className="w-full">
          <h3 className="font-primary-bold text-4xl md:text-5xl">
            {language == "en" ? "Production Steps" : "ដំំណាក់កាលនៃការផលិត"}
            <span className="text-primary font-bold">.</span>
          </h3>
          <p className="md:my-8 mt-8 porse lg:prose-xl">
            {language == "en"
              ? "At each step of the process, we are commited and ensure to keep all the products quality and safety and benefits for our cusomter's health."
              : "ដំណាក់កាលនីមួយៗនៃដំណើរការ យើងប្តេជ្ញារក្សាអោយបាននូវគុណភាព សុវត្ថិភាព និងអត្ថប្រយោជន៍នៃផលិតផលទាំងអស់របស់យើងសម្រាប់សុខភាពរបស់អតិថិជនគ្រប់ៗរូប។"}
          </p>

          <div className="hidden md:block">
            <PrimaryButton
              content={language == "en" ? "View More" : "មើលបន្ថែម"}
              href="https://youtube.com/@012130567?si=OjaMuNzPX_zZhKmL"
            />
          </div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full overflow-hidden rounded-lg hover:shadow-lg"
        >
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/D3YoBXctAlU?rel=0&amp;showinfo=0&amp;modestbranding=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>

        <div className="md:hidden block">
          <PrimaryButton
            content={language == "en" ? "View More" : "មើលបន្ថែម"}
            href="https://youtube.com/@012130567?si=OjaMuNzPX_zZhKmL"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 py-12">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full order-3 lg:order-1 overflow-hidden rounded-lg hover:shadow-lg"
        >
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/wYw2YCg2uac?rel=0&amp;showinfo=0&amp;modestbranding=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </motion.div>

        <div className="w-full order-1 lg:order-2">
          <h3 className=" font-primary-bold text-4xl md:text-5xl">
            {language == "en"
              ? "Made from cassava, mango and sugar cane"
              : "ផលិតពីដំឡូងមី ស្វាយ និងអំពៅ"}

            <span className="text-primary font-bold">.</span>
          </h3>
          <p className="md:my-8 mt-8 porse lg:prose-xl">
            {language == "en"
              ? "We've spent years perfecting our products and expanding our offerings. We are commited to produce the best quality of our products."
              : "យើងបានចំណាយពេលជាច្រើនឆ្នាំដើម្បីធ្វើផលិតផលរបស់យើងឱ្យល្អឥតខ្ចោះ និងពង្រីកការផ្តល់ជូនរបស់យើង។"}
          </p>

          <div className="hidden lg:block">
            <PrimaryButton
              content={language == "en" ? "View More" : "មើលបន្ថែម"}
              href="https://youtube.com/@012130567?si=OjaMuNzPX_zZhKmL"
            />
          </div>
        </div>

        <div className="lg:hidden block order-3">
          <PrimaryButton
            content={language == "en" ? "View More" : "មើលបន្ថែម"}
            href="https://youtube.com/@012130567?si=OjaMuNzPX_zZhKmL"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
