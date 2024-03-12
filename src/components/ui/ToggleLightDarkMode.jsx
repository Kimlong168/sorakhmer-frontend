import { motion } from "framer-motion";
import { useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import PropTypes from "prop-types";
import { DataContext } from "../../contexts/DataContext";
const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const ToggleLightDarkMode = () => {
  const { handleThemeSwitch, theme } = useContext(DataContext);

  return (
    <div className={`grid  place-content-center transition-colors `}>
      <SliderToggle handleThemeSwitch={handleThemeSwitch} theme={theme} />
    </div>
  );
};

const SliderToggle = ({ handleThemeSwitch, theme }) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          theme === "light" ? "text-white" : "text-slate-300"
        }`}
        onClick={() => {
          handleThemeSwitch("light");
        }}
      >
        <FiMoon className="relative z-10 text-sm " />
        <span className="relative z-10 hidden md:block">Light</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          theme === "dark" ? "text-white" : "text-white"
        }`}
        onClick={() => {
          handleThemeSwitch("dark");
        }}
      >
        <FiSun className="relative z-10 text-sm " />
        <span className="relative z-10 hidden md:block">Dark</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          theme === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-primary to-primary-dark"
        />
      </div>
    </div>
  );
};
SliderToggle.propTypes = {
  theme: PropTypes.string,
  handleThemeSwitch: PropTypes.func,
};
export default ToggleLightDarkMode;
