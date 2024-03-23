import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import PrimaryButton from "../../components/ui/PrimaryButton";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
const VideoSection = () => {
  const { language } = useContext(DataContext);
  return (
    <section className="container p-8 md:pt-0 md:mt-32">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 py-12">
        <div className="w-full">
          <h3 className="font-primary-bold text-4xl md:text-5xl">
            {language == "en" ? "Kura Master, Paris" : "Kura Master, Paris"}
            <span className="text-primary font-bold">.</span>
          </h3>
          <p className="md:my-8 mt-8 porse lg:prose-xl ">
            {language == "en"
              ? "Sora Khmer won grand medal in Paris, France. We are proud to be the first Cambodian company to win this award. We are commited to produce the best quality of our products."
              : "សុរាខ្មែរ ឈ្នះមេដាយនៅទីក្រុងប៉ារីស ប្រទេសបារាំង។ យើងមានមោទនភាពដែលបានក្លាយជាក្រុមហ៊ុនកម្ពុជាដំបូងគេដែលឈ្នះពានរង្វាន់នេះ។ យើងប្តេជ្ញាផលិតគុណភាពល្អបំផុតនៃផលិតផលរបស់យើង។"}
          </p>

          <div className="hidden md:block">
            <PrimaryButton
              content={language == "en" ? "View more" : "មើលបន្ថែម"}
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
            src="https://www.youtube.com/embed/z7qbwhekJq8?rel=0&amp;showinfo=0&amp;modestbranding=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </motion.div>

        <div className="md:hidden block">
          <PrimaryButton
            content={language == "en" ? "View more" : "មើលបន្ថែម"}
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
            src="https://www.youtube.com/embed/LXdM6oQVf-c?rel=0&amp;showinfo=0&amp;modestbranding=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </motion.div>

        <div className="w-full order-1 lg:order-2">
          <h3 className=" font-primary-bold text-4xl md:text-5xl">
            {language == "en"
              ? "Good Morning Cambodia"
              : "អរុណសួស្តីកម្ពុជា(ទទក)"}
            <span className="text-primary font-bold">.</span>
          </h3>
          <p className="md:my-8 mt-8 porse lg:prose-xl">
            {language == "en"
              ? "Sorakhmer was invited to join the TVK program, Good Morning Cambodia. We are proud to share our story and our products to the public. We are committed to produce the best quality of our products."
              : "សុរាខ្មែរ ត្រូវ​បាន​អញ្ជើញ​ឲ្យ​ចូល​រួម​កម្មវិធី​ទូរទស្សន៍​ជាតិ​កម្ពុជា។ យើងមានមោទនភាពក្នុងការចែករំលែករឿងរ៉ាវ និងផលិតផលរបស់យើងទៅកាន់សាធារណៈជន។ យើងប្តេជ្ញានាំយកគុណភាពដែលល្អបំផុតនៃផលិតផលរបស់យើង។"}
          </p>

          <div className="hidden lg:block">
            <PrimaryButton
              content={language == "en" ? "View more" : "មើលបន្ថែម"}
              href="https://youtube.com/@012130567?si=OjaMuNzPX_zZhKmL"
            />
          </div>
        </div>

        <div className="lg:hidden block order-3">
          <PrimaryButton
            content={language == "en" ? "View more" : "មើលបន្ថែម"}
            href="https://youtube.com/@012130567?si=OjaMuNzPX_zZhKmL"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
