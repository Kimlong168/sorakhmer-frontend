import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import PropTypes from "prop-types";
import "../../App.css";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import FlipCard from "./FlipCard";
function AwardCarousel() {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const { awardList } = useContext(DataContext);
  useEffect(() => {
    const handleResize = () => {
      // Check Tailwind breakpoints and update slidesToShow accordingly
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setSlidesToShow(2); // Adjust slidesToShow for the medium breakpoint
      } else if (window.innerWidth < 768) {
        setSlidesToShow(1); // Adjust slidesToShow for the small breakpoint
      } else {
        setSlidesToShow(3); // Default slidesToShow for other cases
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the initial slidesToShow value
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  // slider configuration
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="py-8 flex justify-center">
      <div className="w-[95%] md:w-[90%]  lg:w-[95%] relative">
        <Slider {...settings}>
          {awardList &&
            awardList.map((award, index) => {
              return (
                <div key={index}>
                  <FlipCard {...award} />
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
}

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="custom-next-arrow text-2xl text-primary cursor-pointer"
      onClick={onClick}
    >
      <MdArrowForwardIos />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="custom-prev-arrow text-2xl text-primary cursor-pointer "
      onClick={onClick}
    >
      <MdArrowBackIos />
    </div>
  );
};

NextArrow.propTypes = {
  onClick: PropTypes.func,
};

PrevArrow.propTypes = {
  onClick: PropTypes.func,
};
export default AwardCarousel;
