import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import scrollTop from "../../utils/scrollTop";
import kbachkhmer from "../../assets/images/kbachkhmer.png";
import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
// primary button component with dashed border
const PrimaryButton = ({ content, href }) => {
  const { language } = useContext(DataContext);
  const [rotate, setRotate] = useState(false);

  const handleMouseEnter = () => {
    setRotate(true);
    setTimeout(() => {
      setRotate(false);
    }, 1000); // Adjust the delay (in milliseconds) as needed
  };
  return (
    <div className="w-fit">
      <Link to={href}>
        <button
          onMouseEnter={handleMouseEnter}
          onClick={scrollTop}
          className={`${
            language == "en" ? "text-md" : "text-lg"
          } flex items-center justify-center gap-3 group border-2 border-dashed border-primary px-6 py-3 font-semibold uppercase text-primary transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-xl hover:shadow-[4px_4px_0px_rgb(245,156,0)] active:translate-x-[0px] active:translate-y-[0px] active:rounded-lg active:shadow-none`}
        >
          <div
            className={`hidden group-hover:block h-4 w-4 transition-all ${
              rotate ? "rotate-45" : "delay-1000"
            }`}
          >
            <img className="block" src={kbachkhmer} alt="kbachkhmer" />
          </div>
          {content}
        </button>
      </Link>
    </div>
  );
};
PrimaryButton.propTypes = {
  content: PropTypes.string,
  href: PropTypes.string,
};

export default PrimaryButton;
