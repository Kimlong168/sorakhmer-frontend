import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import PrimaryButton from "../../components/ui/PrimaryButton";
const VideoSection = () => {
  return (
    <section className="container p-8 md:pt-0 md:mt-32">
      <div className="flex flex-col md:flex-row gap-8 md:gap-24 py-12">
        <div className="w-full">
          <h3 className="text-nowrap font-primary-bold text-4xl md:text-5xl">
            Kura master<span className="text-primary font-bold">.</span>
          </h3>
          <p className="md:my-8 mt-8 porse lg:prose-xl">
            Sora Khmer won grand medal in Paris
          </p>

          <div className="hidden md:block">
            <PrimaryButton content="View more" href="/" />
          </div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full overflow-hidden hover:rounded-lg hover:shadow-lg"
        >
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube-nocookie.com/embed/z7qbwhekJq8?si=_bihtZcMMa5uHTYW&amp;start=46"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </motion.div>

        <div className="md:hidden block">
          <PrimaryButton content="View more" href="/" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-24 py-12">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full order-3 md:order-1 overflow-hidden hover:rounded-lg hover:shadow-lg"
        >
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>

        <div className="w-full order-1 md:order-2">
          <h3 className="text-nowrap font-primary-bold text-4xl md:text-5xl">
            Our Video<span className="text-primary font-bold">.</span>
          </h3>
          <p className="md:my-8 mt-8 porse lg:prose-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste sit
            exercitationem quae dolor magnam libero nam, repellat aliquam,
            provident debitis et natus quisquam laboriosam voluptas molestiae
            sed nulla praesentium.
          </p>

          <div className="hidden md:block">
            <PrimaryButton content="View more" href="/" />
          </div>
        </div>

        <div className="md:hidden block order-3">
          <PrimaryButton content="View more" href="/" />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
