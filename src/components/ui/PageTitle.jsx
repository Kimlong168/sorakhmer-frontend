import dragon from "../../assets/images/dragon.png";
import PropTypes from "prop-types";
const PageTitle = ({ text = "About" }) => {
  var screenHeight = window.innerHeight;

  // Subtract 100 pixels from the screen height
  var adjustedHeight = screenHeight - 100;
  return (
    <section className="relative">
      <div className="absolute bg-pageTitle brightness-[0.3] bg-repeat-round inset-0"></div>
      <div className="relative z-2" style={{ height: adjustedHeight }}>
        <div
          style={{ height: adjustedHeight }}
          className="container mx-auto flex justify-center items-center"
        >
          <div className="flex items-end -mt-[100px] p-4">
            <img width={80} src={dragon} alt="dragon" />
            <span className="text-5xl pb-2 text-primary font-extrabold uppercase border-b-[3px] rounded-br-2xl border-primary -ml-5 mb-[5px] pr-3">
              {text}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
PageTitle.propTypes = {
  text: PropTypes.string,
};
export default PageTitle;
