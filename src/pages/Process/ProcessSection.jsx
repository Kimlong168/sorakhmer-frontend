import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import ContentDisplay from "../../components/ui/ContentDisplay";
import { DataContext } from "../../contexts/DataContext";
const ProcessSection = () => {
  const { processList } = useContext(DataContext);
  const [openItemIndex, setOpenItemIndex] = useState(null);

  // toggle the collapsible item
  const toggleCollapse = (index) => {
    setOpenItemIndex(index === openItemIndex ? null : index);
  };
  return (
    <section className="container p-8 md:p-0">
      <div className="pt-12 md:py-12">
        <h3 className="text-nowrap text-center font-primary-bold text-4xl md:text-5xl ">
          Our Process<span className="text-primary font-bold">.</span>
        </h3>
        <p className="text-center mb-8 mt-2">
          Discover how we create our products and explore their ingredients
          below
        </p>

        <div>
          {processList &&
            processList.map((process) => {
              return (
                <Collapsible
                  key={process.id}
                  title={process.processName}
                  description={process.description}
                  isOpen={openItemIndex === process.id}
                  onToggle={() => toggleCollapse(process.id)}
                />
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
          className="w-full px-4 py-2.5  font-semibold focus:outline-none flex justify-between items-center"
        >
          {title}
          <span className="text-primary">
            {isOpen ? <FaArrowDown /> : <FaArrowRight />}
          </span>
        </button>

        {isOpen && (
          <div className="bg-gray-200/50">
            <div className="prose lg:prose-xl mx-auto p-4 md:px-8 py-1  ">
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
