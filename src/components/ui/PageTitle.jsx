import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import dragon from "../../assets/images/dragon.png";
import PropTypes from "prop-types";

// Page title component is used to display the title of the page
const PageTitle = ({ text = "About" }) => {
  var screenHeight = window.innerHeight;

  // Subtract 250 pixels from the screen height
  var adjustedHeight = screenHeight - 200;

  return (
    <section className="relative -mb-6">
      <div className="absolute bg-pageTitleSmall md:bg-pageTitle brightness-[0.7]  inset-0 bg-cover bg-center bg-no-repeat  xl:bg-contain xl:bg-left xl:bg-repeat-round 2xl:bg-cover 2xl:bg-center 2xl:bg-no-repeat"></div>
      {/* bg-repeat-round */}
      <div
        className="relative z-2 overflow-hidden"
        style={{ height: adjustedHeight }}
      >
        <div
          style={{ height: adjustedHeight }}
          className="container mx-auto flex justify-center items-center"
        >
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="flex items-end -mt-[100px] p-4"
          >
            <img width={80} src={dragon} alt="dragon" />
            <span className="text-5xl pb-2 text-primary font-extrabold uppercase border-b-[3px] rounded-br-2xl border-primary -ml-5 mb-[5px] pr-3">
              {text}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
PageTitle.propTypes = {
  text: PropTypes.string,
};
export default PageTitle;
