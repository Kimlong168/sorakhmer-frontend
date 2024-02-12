// import banner from "../assets/banner.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import PropTypes from "prop-types";
// import sora1 from "../../assets/images/sora5.webp";
// import sora2 from "../../assets/images/sora2.jpg";
// import sora3 from "../../assets/images/sora3.jpg";
// import sora4 from "../../assets/images/sora4.jpg";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
const ProductCarousel = () => {
  const { productList } = useContext(DataContext);
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
        {productList  && productList.map((item) => (
          <div className="w-full h-[280px] md:h-[335px]" key={item.id}>
            <img
              className="h-full w-full object-fill"
              src={item.image}
              alt={item.name}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
