import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const WhereToBuySection = () => {
  const { storeList, language } = useContext(DataContext);
  const [cityList, setCityList] = useState([]);
  const [openItemIndex, setOpenItemIndex] = useState(null);

  // toggle the collapsible item
  const toggleCollapse = (index) => {
    setOpenItemIndex(index === openItemIndex ? null : index);
  };

  // update the city list when the store list changes, city list is use to group the stores by city
  useEffect(() => {
    const updatedCitySet = new Set([]);
    storeList.forEach((store) => {
      updatedCitySet.add(store.city.toLowerCase().trim());
    });
    setCityList(Array.from(updatedCitySet));
  }, [storeList]);

  return (
    <section className="container p-8 md:pt-0">
      <div className="pt-12 md:py-12">
        <h3 className="text-nowrap text-center font-primary-bold text-4xl md:text-5xl ">
          {language == "en" ? "Where To Buy" : "ទិញផលិតផលយើងនៅ"}
          <span className="text-primary font-bold">.</span>
        </h3>
        <div className="mt-8">
          {cityList &&
            cityList.map((city) => {
              const cityStores = storeList.filter(
                (store) =>
                  store.city.toLowerCase().trim() === city.toLowerCase().trim()
              );
              return (
                <div key={city}>
                  <h4 className="text-xl font-primary-bold mt-5 md:mt-8 mb-2 flex gap-2 items-center capitalize">
                    <FaMapMarkerAlt className="text-primary" />
                    {city.toLowerCase()}, {cityStores[0].country.toLowerCase()}
                  </h4>
                  <div className="flex flex-col gap-3.5">
                    {cityStores.map((store) => (
                      <motion.div
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.3 }}
                        key={store.id}
                      >
                        <Collapsible
                          language={language}
                          title={store.storeName}
                          content={{
                            mapLink: store.mapLink,
                            description: store.description,
                            country: store.country,
                            address: store.address,
                            phone: store.phone,
                            storeName: store.storeName,
                          }}
                          isOpen={openItemIndex === store.id}
                          onToggle={() => toggleCollapse(store.id)}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

const Collapsible = ({ title, content, isOpen, onToggle, language }) => {
  return (
    <div className="w-full mx-auto">
      <div className={`border rounded w-full ${isOpen && "border-primary"}`}>
        <button
          onClick={onToggle}
          className={`w-full px-4 py-2.5  focus:outline-none flex justify-between items-center capitalize ${
            isOpen && "bg-primary text-white"
          }`}
        >
          {/* title */}
          {title}
          <span className="text-primary">
            {isOpen ? <FaArrowDown className="text-white" /> : <FaArrowRight />}
          </span>
        </button>

        {isOpen && (
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="px-4 py-5 "
          >
            {/* Content of the collapsible item */}
            {content ? (
              <div className="flex flex-col gap-2">
                <div>
                  {/* store name */}
                  <span className="font-semibold capitalize">
                    {language == "en" ? "Store name: " : "ហាង:"}
                  </span>{" "}
                  {content.storeName}
                </div>

                {/* address */}
                {content.address && (
                  <div>
                    <span className="font-semibold">
                      {language == "en" ? "Address: " : "អាសយដ្ឋាន:"}
                    </span>{" "}
                    {content.address}
                  </div>
                )}

                {/* phone number */}
                {content.phone && (
                  <div>
                    <span className="font-semibold">
                      {language == "en" ? "Phone: " : "ទូរស័ព្ទ:"}
                    </span>{" "}
                    {content.phone}
                  </div>
                )}

                {/* map */}
                <div>
                  {content.mapLink && (
                    <>
                      <span className="font-semibold">{language == "en" ? "Map:" : "ផែនទី:"}</span>{" "}
                      <Link
                        to={content.mapLink}
                        className="underline text-blue-400"
                      >
                       {language == "en" ? "Open map" : "មើលផែនទី"}
                      </Link>
                    </>
                  )}
                </div>
                {/* <div className="bg-gray-500 w-full h-[1px] mt-5 mb-2"></div> */}

                {/* description */}
                {content.description && (
                  <div>
                    <span className="font-semibold">Description:</span>{" "}
                    <p className="pt-2">{content.description}</p>
                  </div>
                )}
              </div>
            ) : (
              "No content"
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

Collapsible.propTypes = {
  language: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.object,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default WhereToBuySection;
