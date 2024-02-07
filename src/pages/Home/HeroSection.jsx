import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import sora1 from "../../assets/images/sora1.jpg";
import sora2 from "../../assets/images/sora2.jpg";
import sora3 from "../../assets/images/sora3.jpg";
import sora4 from "../../assets/images/sora4.jpg";
import sora5 from "../../assets/images/sora5.webp";
import sora6 from "../../assets/images/sora6.webp";
import sora7 from "../../assets/images/sora7.jpg";
import sora8 from "../../assets/images/sora8.jpg";
import sora9 from "../../assets/images/sora9.jpg";
import sora10 from "../../assets/images/sora10.jpg";
import sora11 from "../../assets/images/sora11.jpg";
import sora12 from "../../assets/images/sora12.jpg";
import sora13 from "../../assets/images/sora13.jpeg";
import sora14 from "../../assets/images/sora14.jpeg";
import sora15 from "../../assets/images/sora15.jpeg";
import sora16 from "../../assets/images/sora16.jpeg";
import PrimaryButton from "../../components/ui/PrimaryButton";

const HeroSection = () => {
  return (
    <section className="w-full px-8 py-10 sm:py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-primary font-medium">
          Explore quality and value with us
        </span>
        <h3 className="text-4xl md:text-6xl font-primary-bold">
          <div className="mb-4">WELCOME TO</div>
          <div>
            SORA KHMER<span className="text-primary font-bold">.</span>
          </div>
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Fine spirits supporting post-demining sustainable community
          development<span className="text-primary font-bold">.</span>
        </p>
        <PrimaryButton content="Contact Us" href="/contact" />
      </div>
      <ShuffleGrid />
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
    src: sora2,
  },
  {
    id: 3,
    src: sora3,
  },
  {
    id: 4,
    src: sora4,
  },
  {
    id: 5,
    src: sora5,
  },
  {
    id: 6,
    src: sora6,
  },
  {
    id: 7,
    src: sora7,
  },
  {
    id: 8,
    src: sora13,
  },
  {
    id: 9,
    src: sora14,
  },
  {
    id: 10,
    src: sora15,
  },
  {
    id: 11,
    src: sora16,
  },
  {
    id: 12,
    src: sora12,
  },
  {
    id: 13,
    src: sora8,
  },
  {
    id: 14,
    src: sora9,
  },
  {
    id: 15,
    src: sora10,
  },
  {
    id: 16,
    src: sora11,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
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

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default HeroSection;
