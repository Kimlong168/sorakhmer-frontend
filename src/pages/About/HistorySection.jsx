import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import about_1 from "../../assets/images/about_1.jpg";
import { TypeAnimation } from "react-type-animation";
const HistorySection = () => {
  return (
    <section className="container p-8 md:pt-0">
      <div className="pt-12 md:py-12">
        <div className="pb-6">
          <h3 className="text-nowrap font-primary-bold text-4xl md:text-5xl ">
            <span className="text-primary">Our </span>
            <TypeAnimation
              speed={50}
              cursor={false}
              sequence={[
                "History",
                2000,
                "Journey",
                2000,
                "Mission",
                2000,
                "Vision",
                2000,
              ]}
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
            />
            <span className="text-primary font-bold">.</span>
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-14 lg:gap-24">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="pt-3 md:w-[90%]"
          >
            <img
              className="w-full  object-cover shadow-2xl rounded-lg"
              src={about_1}
              alt="history"
            />
          </motion.div>

          <div className="flex items-end w-full">
            <article className="prose lg:prose-xl text-justify">
              <p>
                The idea of Sora Khmer started in 2008 when Sokmean and Tayakama
                were working together to improve people’s lives by removing
                mines and UXO in Tasen Commune.
              </p>
              <p>
                Every day, Tayakama saw cassava trucks getting back from
                Thailand and heard farmers complaining, either about the low
                selling price of cassava or about damaged production with the
                rain. He wanted to find a solution for the farmers in Tasen and
                started doing research with Sokmean.
              </p>
              <p>
                Inspired by the Japanese sweet potato liquor, they decided to
                embark on a journey to transform the low-value cassava into a
                fine cassava liquor, which can secure jobs and bring joy all
                year long.
              </p>
              <p>
                In 2013, after 5 years of R&D and a solid intention to support
                sustainable community development, Sora Khmer was born.
              </p>
              <p>
                Today, Sora Khmer has expanded its liquor and rum recipes, using
                jackfruit, mango, rice, coffee, and sugarcane.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
