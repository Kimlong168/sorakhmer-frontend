import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import scrollTop from "../../utils/scrollTop";
// primary button component with dashed border
const PrimaryButton = ({ content, href }) => {
  // scroll to top when button is clicked

  return (
    <>
      <Link to={href}>
        <button
          onClick={scrollTop}
          className="border-2 border-dashed border-primary bg-white px-6 py-3 font-semibold uppercase text-primary transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-xl hover:shadow-[4px_4px_0px_rgb(245,156,0)] active:translate-x-[0px] active:translate-y-[0px] active:rounded-lg active:shadow-none"
        >
          {content}
        </button>
      </Link>
    </>
  );
};
PrimaryButton.propTypes = {
  content: PropTypes.string,
  href: PropTypes.string,
};

export default PrimaryButton;
