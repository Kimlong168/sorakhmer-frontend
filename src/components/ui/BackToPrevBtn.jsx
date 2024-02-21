// import { useHistory } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import scrollTop from "../../utils/scrollTop";
const BackToPrevBtn = () => {

  return (
    <div
      onClick={() => {
        scrollTop();
        window.history.back();
      }}
    >
      <button
        className="uppercase text-gray-900 dark:text-white hover:text-primary
        transition-all gap-2 hover:gap-4 flex items-center mt-5"
      >
        <AiOutlineArrowLeft /> previous
      </button>
    </div>
  );
};

export default BackToPrevBtn;
