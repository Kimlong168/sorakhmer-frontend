import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import dragon from "../../assets/images/dragon.png";
import Marquee from "react-fast-marquee";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

const VisitorSection = () => {
  const { galleryList, language } = useContext(DataContext);

  // split the gallery list into 3 or 2 rows
  let imgLength =
    galleryList.length < 12 ? galleryList.length / 2 : galleryList.length / 3;
  const imageRow1 = galleryList.slice(0, imgLength);
  const imageRow2 = galleryList.slice(imgLength, 2 * imgLength);
  const imageRow3 = galleryList.slice(2 * imgLength, galleryList.length);

  if (galleryList.length == 0) return null;
  return (
    <section>
      <div className="pt-12 pb-1">
        {/* title */}
        <motion.h3
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-end justify-center">
            <img width={40} height={100} src={dragon} alt="dragon" />
            <span className=" first-line:font-semibold text-2xl border-b-2 rounded-br-xl border-primary text-primary -ml-3 mb-[2.2px] pr-3">
              {language == "en"
                ? "Visitors and Guests"
                : "រូបភាពរបស់ភ្ញៀវមកទស្សនា"}
            </span>
          </div>
        </motion.h3>

        {/* gallery */}
        <div>
          <Marquee
            pauseOnClick={true}
            autoFill={true}
            speed={10}
            delay={3}
            gradient={true}
            gradientWidth={0}
            direction="left"
            className="flex justify-between items-center w-full mt-8"
          >
            {imageRow1 &&
              imageRow1.map((image, index) => {
                return (
                  <div key={index}>
                    <img
                      className="max-w-[300px] h-[110px] md:h-[170px] mr-1"
                      src={image.url}
                      alt="image"
                    />
                  </div>
                );
              })}
          </Marquee>

          <Marquee
            pauseOnClick={true}
            autoFill={true}
            speed={5}
            delay={3}
            gradient={true}
            gradientWidth={0}
            direction="right"
            className="flex justify-between items-center w-full mt-1"
          >
            {imageRow2 &&
              imageRow2.map((image, index) => {
                return (
                  <div key={index}>
                    <img
                      className="max-w-[300px] h-[110px] md:h-[170px] mr-1"
                      src={image.url}
                      alt="image"
                    />
                  </div>
                );
              })}
          </Marquee>

          {galleryList.length > 11 && (
            <Marquee
              pauseOnClick={true}
              autoFill={true}
              speed={10}
              delay={6}
              gradient={true}
              gradientWidth={0}
              direction="left"
              className="flex justify-between items-center w-full mt-1"
            >
              {imageRow3 &&
                imageRow3.map((image, index) => {
                  return (
                    <div key={index}>
                      <img
                        className="max-w-[300px] h-[110px] md:h-[170px] mr-1"
                        src={image.url}
                        alt="image"
                      />
                    </div>
                  );
                })}
            </Marquee>
          )}
        </div>
      </div>
    </section>
  );
};

export default VisitorSection;
