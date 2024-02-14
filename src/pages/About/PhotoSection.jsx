import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";
import sora12 from "../../assets/images/sora12.jpg";
import sora13 from "../../assets/images/sora13.jpeg";
import sora14 from "../../assets/images/sora14.jpeg";
import sora15 from "../../assets/images/sora15.jpeg";
const PhotoSection = () => {
  const imageList = [sora12, sora13, sora14, sora15];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="container">
      <div className="md:pt-12 flex justify-center">
        <div className="w-[95%] md:w-[90%]  lg:w-[100%]">
          <Slider {...settings}>
            {imageList &&
              imageList.map((item, index) => {
                return (
                  <div key={index}>
                    <img
                      className="w-full object-cover h-[300px] sm:h-[400px] md:h-[500px] rounded-xl"
                      src={item}
                      alt="item"
                    />
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PhotoSection;
