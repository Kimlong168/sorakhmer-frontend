import PrimaryButton from "../../components/ui/PrimaryButton";
import Title from "../../components/ui/Title";
// import sora1 from "../../assets/images/product1.jpg";
import ProductCarousel from "../../components/ui/ProductCarousel";
import { TypeAnimation } from "react-type-animation";
const ProductSection = () => {
  return (
    <>
      <section className="container p-8 md:p-0 flex flex-col md:flex-row items-center justify-between  gap-8 md:gap-24 md:h-screen md:-mt-36">
        <div className="w-full sm:w-[80%] md:w-[500px]  md:min-w-[400px] shadow-lg hover:shadow-gray-800 shadow-gray-500 order-2 md:order-1 hover:rounded-lg overflow-hidden">
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

export default ProductSection;
