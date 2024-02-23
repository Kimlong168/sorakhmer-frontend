import PrimaryButton from "../../components/ui/PrimaryButton";
import Title from "../../components/ui/Title";
import { TypeAnimation } from "react-type-animation";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

const ProductSection = () => {
  return (
    <>
      <section className="container p-8 md:p-0 flex flex-col md:flex-row items-center justify-between  gap-8 md:gap-24 md:h-screen md:-mt-36">
        <div className="w-full sm:w-[80%] md:w-[500px]  md:min-w-[400px] shadow-2xl rounded-lg order-2 md:order-1 hover:rounded-lg overflow-hidden">
          <ProductCarousel />
        </div>
        <div className="order-1 md:order-2">
          <Title />
          <h3 className="font-primary-bold text-4xl md:text-5xl py-8">
            <TypeAnimation
              speed={50}
              cursor={false}
              sequence={[
                "OUR PRODUCTS",
                2000,
                "SORA KHMER",
                2000,
                "FRUIT JAM",
                2000,
                "NATURAL TEA",
                2000,
                "NATURAL OIL",
                2000,
              ]}
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
            />

            <span className="text-primary font-bold">.</span>
          </h3>
          <p className="md:mb-10">
            Sora Khmer envisions building peace for the world by supporting
            post-demining sustainable community development
            <span className="text-primary font-bold">.</span>
          </p>
          <div className="hidden md:block">
            <PrimaryButton content="View Products" href="/product" />
          </div>
        </div>
        <div className="md:hidden block w-full order-3">
          <PrimaryButton content="View Products" href="/product" />
        </div>
      </section>
    </>
  );
};

// ProductCarousel component
const ProductCarousel = () => {
  const { productList } = useContext(DataContext);
  return (
    <div className=" w-full h-full">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showIndicators={true}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        stopOnHover={true}
        interval={4000}
        transitionTime={500}
      >
        {productList &&
          productList.slice(0, 8).map((item) => (
            <div className="w-full h-[280px] md:h-[335px]" key={item.id}>
              <img className="h-full w-full" src={item.image} alt={item.name} />
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default ProductSection;
