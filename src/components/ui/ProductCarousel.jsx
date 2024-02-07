// import banner from "../assets/banner.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import PropTypes from "prop-types";
import sora1 from "../../assets/images/sora1.jpg";
import sora2 from "../../assets/images/sora2.jpg";
import sora3 from "../../assets/images/sora3.jpg";
import sora4 from "../../assets/images/sora4.jpg";
const ProductCarousel = () => {
  const imagesList = [
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
  ];
  return (
    <div className="relative w-full h-full">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showIndicators={true}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        stopOnHover={true}
        interval={4000}
        transitionTime={500}
      >
        {imagesList.map((image) => (
          <div className="w-full h-[280px] md:h-[335px]" key={image.id}>
            <img
              className="h-full w-full object-fill"
              src={image.src}
              alt={image.title}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
