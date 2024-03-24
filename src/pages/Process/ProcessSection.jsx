import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import ContentDisplay from "../../components/ui/ContentDisplay";
import { DataContext } from "../../contexts/DataContext";
const ProcessSection = () => {
  const { processList, language } = useContext(DataContext);
  const [openItemIndex, setOpenItemIndex] = useState(null);

  // toggle the collapsible item
  const toggleCollapse = (index) => {
    setOpenItemIndex(index === openItemIndex ? null : index);
  };

  // if there is no process list, return null
  if (processList.length == 0) return null;

  return (
    <section className="container p-8 md:pt-0">
      <div className="pt-12 md:py-12">
        <h3 className="text-nowrap text-center font-primary-bold text-4xl md:text-5xl ">
          {language == "en" ? "Production Process" : "ដំណើរផលិត"}
          <span className="text-primary font-bold">.</span>
        </h3>
        <p className="text-center mb-8 mt-2 porse lg:prose-xl">
          {language == "en"
            ? "Discover how we create our products and explore their ingredients below"
            : "ស្វែងយល់ពីរបៀបដែលយើងបង្កើតផលិតផលរបស់យើង និងស្វែងយល់ពីធាតុផ្សំរបស់វាខាងក្រោម"}
        </p>

        <div>
          {processList &&
            processList.map((process) => {
              return (
                <motion.div
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.3 }}
                  key={process.id}
                >
                  <Collapsible
                    title={process.processName}
                    description={process.description}
                    isOpen={openItemIndex === process.id}
                    onToggle={() => toggleCollapse(process.id)}
                  />
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

const Collapsible = ({ title, description, isOpen, onToggle }) => {
  return (
    <div className="w-full mx-auto mb-3">
      <div className={`border rounded w-full ${isOpen && "border-primary"}`}>
        <button
          onClick={onToggle}
          className={`w-full px-4 py-2.5  font-semibold focus:outline-none flex justify-between items-center capitalize ${
            isOpen && "bg-primary text-white"
          }`}
        >
          {title}
          <span className="text-primary">
            {isOpen ? <FaArrowDown className="text-white" /> : <FaArrowRight />}
          </span>
        </button>

        {isOpen && (
          <div>
            <div className="mx-auto p-4 md:px-8 py-1  prose lg:prose-xl prose-img:w-full lg:prose-img:w-auto lg:prose-img:mx-auto lg:prose-img:block prose-a:text-blue-600 prose-a:hover:text-blue-400 dark:prose-blockquote:text-white/70 dark:prose-strong:text-white/90 dark:prose-h1:text-white/90 dark:prose-h2:text-white/90  dark:prose-h3:text-white/90  dark:prose-h4:text-white/90  min-w-full dark:text-white/80">
              <ContentDisplay htmlString={description} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Collapsible.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default ProcessSection;
