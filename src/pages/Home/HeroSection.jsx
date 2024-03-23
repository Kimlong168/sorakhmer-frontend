import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useContext, useEffect, useRef, useState } from "react";
// import herophoto1 from "../../assets/images/heroPhoto/heroPhoto1.jpg";
import herophoto2 from "../../assets/images/heroPhoto/heroPhoto2.jpg";
// import herophoto3 from "../../assets/images/heroPhoto/heroPhoto3.jpg";
import herophoto4 from "../../assets/images/heroPhoto/heroPhoto4.jpg";
import herophoto5 from "../../assets/images/heroPhoto/heroPhoto5.jpg";
import herophoto6 from "../../assets/images/heroPhoto/heroPhoto6.jpg";
import herophoto7 from "../../assets/images/heroPhoto/heroPhoto7.jpg";
import herophoto8 from "../../assets/images/heroPhoto/heroPhoto8.jpg";
// import herophoto9 from "../../assets/images/heroPhoto/heroPhoto9.jpg";
import herophoto10 from "../../assets/images/heroPhoto/heroPhoto10.jpg";

import sora1 from "../../assets/images/sora1.jpg";
import sora4 from "../../assets/images/sora4.jpg";
import sora5 from "../../assets/images/sora5.jpg";
import sora7 from "../../assets/images/sora7.jpg";

import allProducts from "../../assets/images/allProducts.jpg";

import PrimaryButton from "../../components/ui/PrimaryButton";
import { TypeAnimation } from "react-type-animation";
import { DataContext } from "../../contexts/DataContext";
// import dragon from "../../assets/images/dragon.png";
const HeroSection = () => {
  const { language } = useContext(DataContext);
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
          {language == "en"
            ? "Explore quality and value with us"
            : "ស្វែងយល់ពីគុណភាព និងគុណតម្លៃរបស់យើង"}
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
                "ようこそ",
                2000,
              ]}
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
            />

            <span className="invisible">I</span>
          </div>
          <h1 className="mt-4 font-primary-bold">
            {language == "en" ? "SORAKHMER" : "សុរាខ្មែរ"}
            <span className="text-primary font-bold">.</span>
          </h1>
        </h3>
        <p className=" my-4 md:my-6 lg:prose-xl">
          {language == "en"
            ? "Fine spirits supporting post-demining sustainable community development"
            : "យើងមានស្មារតីគាំទ្រដល់ការអភិវឌ្ឍន៍សហគមន៍ប្រកបដោយនិរន្តរភាពក្រោយការដោះមីន"}

          <span className="text-primary font-bold">.</span>
        </p>
        <div className="hidden md:block">
          <PrimaryButton
            content={language == "en" ? "contact us" : "ទំនាក់ទំនងយើង"}
            href="/contact"
          />
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
    src: sora1,
  },
  {
    id: 2,
    src: herophoto2,
  },
  // {
  //   id: 3,
  //   src: sora2,
  // },
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
  // {
  //   id: 9,
  //   src: sora3,
  // },
  {
    id: 10,
    src: herophoto10,
  },
  {
    id: 11,
    src: allProducts,
  },
  // {
  //   id: 12,
  //   src: sora2,
  // },
  // {
  //   id: 13,
  //   src: sora3,
  // },
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
    src: sora7,
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
