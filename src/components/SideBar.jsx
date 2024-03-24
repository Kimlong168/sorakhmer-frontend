import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useContext, useRef } from "react";
import PropTypes from "prop-types";
import { FiArrowRight } from "react-icons/fi";
import about_1 from "../assets/images/about_1.jpg";
import process_1 from "../assets/images/process_1.webp";
import distillery_5 from "../assets/images/distillery_5.webp";
import farm_4 from "../assets/images/farm_4.jpg";
import allProducts from "../assets/images/allProducts.jpg";
import heroPhoto3 from "../assets/images/heroPhoto/heroPhoto3.jpg";
import heroPhoto9 from "../assets/images/heroPhoto/heroPhoto9.jpg";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import "../App.css";
import scrollToTop from "../utils/scrollTop";
import { DataContext } from "../contexts/DataContext";

const SideBar = ({ setShowSideBar, showSideBar }) => {
  const { language } = useContext(DataContext);
  return (
    <div
      id="sideBar"
      className={`fixed inset-0 z-[1000] overflow-auto overflow-x-hidden transition-all duration-300 ease-in-out transform ${
        showSideBar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <section className="bg-neutral-950 p-4 md:p-8">
        <div className="mx-auto max-w-5xl " onClick={scrollToTop}>
          <LinkContainer
            heading={language == "en" ? "Home" : "ទំព័រដើម"}
            subheading={
              language == "en"
                ? "Welcome to Sora Khmer"
                : "សូមស្វាគមន៍មកកាន់សុរាខ្មែរ"
            }
            imgSrc={about_1}
            href="/"
          />

          <LinkContainer
            heading={language == "en" ? "Shop" : "ទិញទំនិញ"}
            subheading={
              language == "en"
                ? "Explore our amazing products"
                : "ស្វែងយល់ពីផលិតផលរបស់យើង"
            }
            imgSrc={allProducts}
            href="/products"
          />

          <LinkContainer
            heading={language == "en" ? "Blogs" : "អត្ថបទ"}
            subheading={
              language == "en"
                ? "Read our latest blogs"
                : "អានអត្ថបទថ្មីៗរបស់យើង"
            }
            imgSrc={heroPhoto3}
            href="/blogs"
          />

          <LinkContainer
            heading={language == "en" ? "Contact" : "ទំនាក់ទំង"}
            subheading={
              language == "en"
                ? "Incase you want to contact us"
                : "ប្រសិនបើអ្នកចង់ទំនាក់ទំងយើង"
            }
            imgSrc={distillery_5}
            href="/contact"
          />

          <LinkContainer
            heading={language == "en" ? "About" : "អំពីយើង"}
            subheading={
              language == "en"
                ? "Learn what we do here"
                : "ស្វែងយល់អំពីយើងនៅទីនេះ"
            }
            imgSrc={heroPhoto9}
            href="/about"
          />

          <LinkContainer
            heading={language == "en" ? "Process" : "ដំណើរការផលិត"}
            subheading={
              language == "en"
                ? "Our work speaks for itself"
                : "ការងារក្នុងការផលិតរបស់យើង"
            }
            imgSrc={process_1}
            href="/process"
          />

          <LinkContainer
            heading={language == "en" ? "Distillery" : "រោងចក្រផលិត"}
            subheading={
              language == "en"
                ? "Learn about our distillery"
                : "ស្វែងយល់ពីរោងចក្រផលិតរបស់យើង"
            }
            imgSrc={farm_4}
            href="/distillery"
          />
        </div>
      </section>

      {/* close icon */}
      <div
        onClick={() => setShowSideBar((prev) => !prev)}
        className="fixed top-2 right-3 md:top-4 md:right-5 z-[10] p-2 text-white hover:bg-neutral-800"
      >
        <IoMdClose className="w-10 h-10 cursor-pointer" />
      </div>
    </div>
  );
};

const LinkContainer = ({ heading, imgSrc, subheading, href }) => {
  const { language } = useContext(DataContext);
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <Link to={href}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        initial="initial"
        whileHover="whileHover"
        className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
      >
        <div>
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: -16 },
            }}
            transition={{
              type: "spring",
              staggerChildren: 0.075,
              delayChildren: 0.25,
            }}
            className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
          >
            {language == "en" ? (
              <>
                {heading.split("").map((l, i) => (
                  <motion.span
                    variants={{
                      initial: { x: 0 },
                      whileHover: { x: 16 },
                    }}
                    transition={{ type: "spring" }}
                    className="inline-block"
                    key={i}
                  >
                    {l}
                  </motion.span>
                ))}
              </>
            ) : (
              <>{heading}</>
            )}
          </motion.span>
          <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
            {subheading}
          </span>
        </div>

        <motion.img
          style={{
            top,
            left,
            translateX: "-50%",
            translateY: "-50%",
          }}
          variants={{
            initial: { scale: 0, rotate: "-12.5deg" },
            whileHover: { scale: 1, rotate: "12.5deg" },
          }}
          transition={{ type: "spring" }}
          src={imgSrc}
          className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
          alt={`Image representing a LinkContainer for ${heading}`}
        />

        <motion.div
          variants={{
            initial: {
              x: "25%",
              opacity: 0,
            },
            whileHover: {
              x: "0%",
              opacity: 1,
            },
          }}
          transition={{ type: "spring" }}
          className="relative z-10 p-4"
        >
          <FiArrowRight className="text-5xl text-neutral-50" />
        </motion.div>
      </motion.div>
    </Link>
  );
};

LinkContainer.propTypes = {
  heading: PropTypes.string,
  imgSrc: PropTypes.string,
  subheading: PropTypes.string,
  href: PropTypes.string,
};
SideBar.propTypes = {
  setShowSideBar: PropTypes.func.isRequired,
  showSideBar: PropTypes.bool.isRequired,
};
export default SideBar;
