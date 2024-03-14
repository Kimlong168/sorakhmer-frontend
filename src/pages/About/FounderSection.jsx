import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import adminProfile from "../../assets/images/founder.jpg";
const FounderSection = () => {
  return (
    <section className="container p-8 md:pt-0">
      <div className="flex flex-col md:flex-row items-center gap-5 md:gap-24 py-12">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="md:w-[40%]"
        >
          {/* profile image */}
          <img
            className="w-[250px] h-[250px]  block mx-auto rounded-full"
            src={adminProfile}
            alt="adminProfile"
          />
          {/* founder name */}
          <div className="text-center mt-5">
            <h5 className="font-bold uppercase text-xl">Hong Sokmean</h5>
            <p className="text-gray-700 dark:text-primary">Founder of SORAKHMER</p>
          </div>
        </motion.div>

        {/* description */}
        <div className="porse lg:prose-xl text-justify md:w-[60%]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt justo eget ullamcorper feugiat. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Quisque vel odio nec ipsum tincidunt posuere.
          </p>
          <p>
            Nullam ut leo ac turpis vestibulum vehicula. Proin nec ipsum ut elit
            vulputate aliquet. Fusce at sem eu velit Integer euismod elit a ex
            eleifend, non dapibus justo interdum. Ut sit amet nulla id mauris
            luctus consectetur. Maecenas eu lectus ut libero vulputate aliquam.
            Vestibulum lacinia ligula eu metus feugiat, a fermentum purus
            sodales.
          </p>
          <p>
            Suspendisse potenti Praesent efficitur turpis ut efficitur tempus.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Nam consequat congue elit, id lacinia felis
            fringilla et.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
