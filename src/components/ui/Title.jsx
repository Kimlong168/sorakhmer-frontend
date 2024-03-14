import dragon from "../../assets/images/dragon.png";
import PropType from "prop-types";
// the title with dragon image
const Title = ({ text = "about" }) => {
  return (
    <>
      <div className="flex items-end">
        <img width={40} height={100} src={dragon} alt="dragon" />
        <span className=" text-primary first-line:font-semibold text-xl uppercase border-b-2 rounded-br-xl border-primary -ml-3 mb-[2.2px] pr-3">
          {text}
        </span>
      </div>
    </>
  );
};

Title.propTypes = {
  text: PropType.string,
};

export default Title;
