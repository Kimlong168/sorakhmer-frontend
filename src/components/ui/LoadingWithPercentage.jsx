import PropTypes from "prop-types";
import { MdOutlineDone } from "react-icons/md";
const LoadingWithPercentage = ({ percentage }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-48 sm:w-56 md:w-64 h-4 bg-gray-800 relative">
        <div
          className="absolute top-0 left-0 h-full bg-green-500"
          style={{ width: `${percentage}%` }}
        ></div>
        <div className="absolute  top-0 left-0 w-full h-full flex items-center justify-center gap-3 text-white font-bold text-sm">
          {percentage}%{" "}
          <span>
            {percentage > 99 && <MdOutlineDone className="animate-ping" />}
          </span>
        </div>
      </div>
    </div>
  );
};

LoadingWithPercentage.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default LoadingWithPercentage;
