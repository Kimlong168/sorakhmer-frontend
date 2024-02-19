import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const WhereToBuySection = () => {
  const { storeList } = useContext(DataContext);
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
    <section className="container p-8 md:p-0">
      <div className="pt-12 md:py-12">
        <h3 className="text-nowrap text-center font-primary-bold text-4xl md:text-5xl ">
          Where To Buy<span className="text-primary font-bold">.</span>
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
                      <Collapsible
                        key={store.id}
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

const Collapsible = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="w-full mx-auto">
      <div className={`border rounded w-full ${isOpen && "border-primary"}`}>
        <button
          onClick={onToggle}
          className="w-full px-4 py-2.5  focus:outline-none flex justify-between items-center capitalize"
        >
          {title}
          <span className="text-primary">
            {isOpen ? <FaArrowDown /> : <FaArrowRight />}
          </span>
        </button>

        {isOpen && (
          <div className="px-4 py-5 bg-gray-200/50">
            {/* Content of the collapsible item */}
            {content ? (
              <div className="flex flex-col gap-2">
                <div>
                  <span className="font-semibold capitalize">Store name:</span>{" "}
                  {content.storeName}
                </div>
                {content.address && (
                  <div>
                    <span className="font-semibold">Address:</span>{" "}
                    {content.address}
                  </div>
                )}
                {content.phone && (
                  <div>
                    <span className="font-semibold">Phone:</span>{" "}
                    {content.phone}
                  </div>
                )}
                <div>
                  <span className="font-semibold">Map:</span>{" "}
                  {content.mapLink ? (
                    <Link
                      to={content.mapLink}
                      className="underline text-blue-400"
                    >
                      Open map
                    </Link>
                  ) : (
                    "No map link"
                  )}
                </div>
                {/* <div className="bg-gray-500 w-full h-[1px] mt-5 mb-2"></div> */}
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
          </div>
        )}
      </div>
    </div>
  );
};

Collapsible.propTypes = {
  title: PropTypes.string,
  content: PropTypes.object,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default WhereToBuySection;
