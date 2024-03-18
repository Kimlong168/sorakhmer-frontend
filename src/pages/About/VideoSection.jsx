import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import PrimaryButton from "../../components/ui/PrimaryButton";
const VideoSection = () => {
  return (
    <section className="container p-8 md:pt-0 md:mt-32">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 py-12">
        <div className="w-full">
          <h3 className="font-primary-bold text-4xl md:text-5xl">
            Kura master, Paris<span className="text-primary font-bold">.</span>
          </h3>
          <p className="md:my-8 mt-8 porse lg:prose-xl">
            Sora Khmer won grand medal in Paris, France. We are proud to be the
            first Cambodian company to win this award. We are commited to
            produce the best quality of our products.
          </p>

          <div className="hidden md:block">
            <PrimaryButton
              content="View more"
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
            src="https://www.youtube.com/embed/z7qbwhekJq8?si=C-pOk377oTRxj0GC"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picturev; web-share"
            allowFullScreen
          ></iframe>
        </motion.div>

        <div className="md:hidden block">
          <PrimaryButton
            content="View more"
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
            src="https://www.youtube.com/embed/D3YoBXctAlU?si=bYoKXylHSfUJGRxL"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>

        <div className="w-full order-1 lg:order-2">
          <h3 className=" font-primary-bold text-4xl md:text-5xl">
            Khmer Jyoryu Co., Ltd
            <span className="text-primary font-bold">.</span>
          </h3>
          <p className="md:my-8 mt-8 porse lg:prose-xl">
            We&apos;ve spent years perfecting our products and expanding our
            offerings. We are commited to produce the best quality of our products.
          </p>

          <div className="hidden lg:block">
            <PrimaryButton
              content="View more"
              href="https://youtube.com/@012130567?si=OjaMuNzPX_zZhKmL"
            />
          </div>
        </div>

        <div className="lg:hidden block order-3">
          <PrimaryButton
            content="View more"
            href="https://youtube.com/@012130567?si=OjaMuNzPX_zZhKmL"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
