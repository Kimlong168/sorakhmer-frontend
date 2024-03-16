import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useEffect, useRef, useState } from "react";
import herophoto1 from "../../assets/images/heroPhoto/heroPhoto1.jpg";
import herophoto2 from "../../assets/images/heroPhoto/heroPhoto2.jpg";
import herophoto3 from "../../assets/images/heroPhoto/heroPhoto3.jpg";
import herophoto4 from "../../assets/images/heroPhoto/heroPhoto4.jpg";
import herophoto5 from "../../assets/images/heroPhoto/heroPhoto5.jpg";
import herophoto6 from "../../assets/images/heroPhoto/heroPhoto6.jpg";
import herophoto7 from "../../assets/images/heroPhoto/heroPhoto7.jpg";
import herophoto8 from "../../assets/images/heroPhoto/heroPhoto8.jpg";
import herophoto9 from "../../assets/images/heroPhoto/heroPhoto9.jpg";
import herophoto10 from "../../assets/images/heroPhoto/heroPhoto10.jpg";

import sora1 from "../../assets/images/sora1.jpg";
import sora2 from "../../assets/images/sora2.jpg";
import sora3 from "../../assets/images/sora3.jpg";
import sora4 from "../../assets/images/sora4.jpg";
import sora5 from "../../assets/images/sora5.jpg";
import sora8 from "../../assets/images/sora8.jpg";

import PrimaryButton from "../../components/ui/PrimaryButton";
import { TypeAnimation } from "react-type-animation";
// import dragon from "../../assets/images/dragon.png";
const HeroSection = () => {
  return (
    // items-center
    <section className="w-full px-8 py-10 sm:py-20 grid grid-cols-1 md:grid-cols-2  gap-8 md:gap-24  mx-auto container">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.5 }}
      >
        <span className="block mb-4 text-xs md:text-sm text-primary font-medium">
          Explore quality and value with us
        </span>
        <h3 className="text-4xl md:text-5xl lg:text-6xl">
          <div className=" font-primary">
            <TypeAnimation
              speed={50}
              cursor={false}
              sequence={[
                "សូមស្វាគមន៍មកកាន់",
                2000,
                "Welcome to",
                2000,
                "へようこそ",
                2000,
              ]}
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
            />
            <span className="invisible">I</span>
          </div>
          <div className="mt-2 font-primary-bold">
            SORA KHMER<span className="text-primary font-bold">.</span>
          </div>
        </h3>
        <p className="text-base md:text-lg  my-4 md:my-6 porse lg:prose-xl">
          Fine spirits supporting post-demining sustainable community
          development<span className="text-primary font-bold">.</span>
        </p>
        <div className="hidden md:block">
          <PrimaryButton content="Contact Us" href="/contact" />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
      >
        <ShuffleGrid />
      </motion.div>
      <div className="md:hidden block">
        <PrimaryButton content="Contact Us" href="/contact" />
      </div>
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: herophoto1,
  },
  {
    id: 2,
    src: herophoto2,
  },
  {
    id: 3,
    src: herophoto3,
  },
  {
    id: 4,
    src: herophoto4,
  },
  {
    id: 5,
    src: herophoto5,
  },
  {
    id: 6,
    src: herophoto6,
  },
  {
    id: 7,
    src: herophoto7,
  },

  {
    id: 8,
    src: herophoto8,
  },
  {
    id: 9,
    src: herophoto9,
  },
  {
    id: 10,
    src: herophoto10,
  },
  {
    id: 11,
    src: sora1,
  },
  {
    id: 12,
    src: sora2,
  },
  {
    id: 13,
    src: sora3,
  },
  {
    id: 14,
    src: sora4,
  },
  {
    id: 15,
    src: sora5,
  },
  {
    id: 18,
    src: sora8,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full shadow-2xl"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 4000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 h-[300px] sm:h-[400px] lg:h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default HeroSection;
