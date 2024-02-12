import { useState } from "react";
import PropTypes from "prop-types";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
function Collapsible({ title, content }) {
  const [openItemIndex, setOpenItemIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenItemIndex(index === openItemIndex ? null : index);
  };

  return (
    <div className="w-full  mx-auto">
      <Item
        title={title}
        isOpen={openItemIndex === 2}
        onToggle={() => toggleCollapse(0)}
        content={content}
      />
    </div>
  );
}

function Item({ title, isOpen, onToggle, content }) {
  return (
    <div className="border rounded w-full">
      <button
        onClick={onToggle}
        className="w-full px-4 py-2.5  focus:outline-none flex justify-between items-center"
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
              <div>Store name: {content.storeName}</div>
              <div>Address: {content.address}</div>
              <div>Phone: {content.phone}</div>
              <div>
                Map link:{" "}
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
                  Description: <p className="pt-2">{content.description}</p>
                </div>
              )}
            </div>
          ) : (
            "No content"
          )}
        </div>
      )}
    </div>
  );
}

Item.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
  content: PropTypes.string,
};

Collapsible.propTypes = {
  title: PropTypes.string,
  content: PropTypes.object,
};

export default Collapsible;
