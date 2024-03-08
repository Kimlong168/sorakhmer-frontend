import dragon from "../../assets/images/dragon.png";
import Marquee from "react-fast-marquee";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

const VisitorSection = () => {
  const { galleryList } = useContext(DataContext);

  // split the gallery list into 3 or 2 rows
  let imgLength =
    galleryList.length < 12 ? galleryList.length / 2 : galleryList.length / 3;
  const imageRow1 = galleryList.slice(0, imgLength);
  const imageRow2 = galleryList.slice(imgLength, 2 * imgLength);
  const imageRow3 = galleryList.slice(2 * imgLength, galleryList.length);

  return (
    <section>
      <div className="pt-12 pb-1">
        {/* title */}
        <h3>
          <div className="flex items-end justify-center">
            <img width={40} height={100} src={dragon} alt="dragon" />
            <span className=" first-line:font-semibold text-2xl border-b-2 rounded-br-xl border-primary -ml-3 mb-[2.2px] pr-3">
              Visitors and Guests
            </span>
          </div>
        </h3>

        {/* gallery */}
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

        {/* don't show this row of images is less than 12 */}
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
    </section>
  );
};

export default VisitorSection;
