import { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import kbachkhmer from "../../assets/images/kbachkhmer.png";
// drop down link in the navigation bar with the underline animation
const NavLinkDropdown = () => {
  const { language } = useContext(DataContext);
  return (
    <div className="flex justify-center">
      <FlyoutLink FlyoutContent={AboutContent}>
        {language == "en" ? "About" : "អំពីយើង"}
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <div className="relative text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-primary-light transition-transform duration-300 ease-out"
        />
      </div>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12  text-black rounded-lg border"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />

            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white">
              <img
                className="block border  "
                src={kbachkhmer}
                alt="kbachkhmer"
              />
            </div>
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AboutContent = () => {
  const { language } = useContext(DataContext);
  return (
    <div
      className={`w-64  bg-neutral-950/90 text-white p-6 shadow-xl rounded-lg  ${
        language == "en" ? "text-md" : "text-lg"
      }`}
    >
      <div className="mb-3 space-y-3">
        <Link
          to="/about"
          className="group hover:underline hover:text-primary flex items-center gap-2"
        >
          <div className="hidden group-hover:block h-2 w-2 rotate-45 ">
            <img className="block" src={kbachkhmer} alt="kbachkhmer" />
          </div>
          {language == "en" ? "Company" : "អំពីយើង"}
        </Link>
        <Link
          to="/process"
          className="group hover:underline hover:text-primary flex items-center gap-2"
        >
          <div className="hidden group-hover:block h-2 w-2 rotate-45 ">
            <img className="block" src={kbachkhmer} alt="kbachkhmer" />
          </div>
          {language == "en" ? "Process" : "ដំណើរការផលិត"}
        </Link>
        <Link
          to="/distillery"
          className="group hover:underline hover:text-primary flex items-center gap-2"
        >
          <div className="hidden group-hover:block h-2 w-2 rotate-45 ">
            <img className="block" src={kbachkhmer} alt="kbachkhmer" />
          </div>
          {language == "en" ? "Distillery" : "រោងចក្រផលិត"}
        </Link>
      </div>
    </div>
  );
};

FlyoutLink.propTypes = {
  children: PropTypes.node.isRequired,
  FlyoutContent: PropTypes.func,
};

export default NavLinkDropdown;
