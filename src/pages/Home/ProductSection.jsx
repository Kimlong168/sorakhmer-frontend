import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import PrimaryButton from "../../components/ui/PrimaryButton";
import Title from "../../components/ui/Title";
import { TypeAnimation } from "react-type-animation";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

const ProductSection = () => {
  const { language } = useContext(DataContext);
  return (
    <>
      <section className="container p-8 md:pt-0 flex flex-col md:flex-row items-center justify-between  gap-8 md:gap-24 md:h-screen md:-mt-36">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full sm:w-[60%] md:w-[390px]  md:min-w-[330px] shadow-2xl rounded-lg order-2 md:order-1 hover:rounded-lg overflow-hidden"
        >
          <ProductCarousel />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          className="order-1 md:order-2"
        >
          <Title
            text={language == "en" ? "Popular Products" : "ផលិតផលពេញនិយម"}
          />
          <h3 className="font-primary-bold text-4xl md:text-5xl py-8">
            <TypeAnimation
              speed={50}
              cursor={false}
              sequence={
                language == "en"
                  ? [
                      "OUR PRODUCTS",
                      2000,
                      "SORA KHMER",
                      2000,
                      "DRIED FRUIT",
                      2000,
                      "NATURAL TEA",
                      2000,
                      "ESSENTIAL OIL",
                      2000,
                    ]
                  : [
                      "ផលិតផលរបស់យើង",
                      2000,
                      "សុរាខ្មែរ",
                      2000,
                      "ផ្លែឈើសម្ងួត",
                      2000,
                      "តែធម្មជាតិ",
                      2000,
                      "ប្រេងស្លឹកគ្រៃ",
                      2000,
                    ]
              }
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
            />

            <span className="text-primary font-bold">.</span>
          </h3>
          <p className="md:mb-10 lg:prose-xl">
            {language == "en"
              ? " Sora Khmer envisions building peace for the world by supporting post-demining sustainable community development"
              : "សុរាខ្មែរស្រមៃចង់កសាងសន្តិភាពសម្រាប់ពិភពលោកដោយគាំទ្រដល់ការអភិវឌ្ឍន៍សហគមន៍ប្រកបដោយនិរន្តរភាពក្រោយការដោះមីន"}
            <span className="text-primary font-bold">.</span>
          </p>
          <div className="hidden md:block">
            <PrimaryButton
              content={language == "en" ? "Shop Now" : "ទិញឥឡូវនេះ"}
              href="/products"
            />
          </div>
        </motion.div>
        <div className="md:hidden block w-full order-3">
          <PrimaryButton
            content={language == "en" ? "Shop Now" : "ទិញឥឡូវនេះ"}
            href="/products"
          />
        </div>
      </section>
    </>
  );
};

// ProductCarousel component
const ProductCarousel = () => {
  const { productList } = useContext(DataContext);

  // randomly select 8 product for the productlist
  const activeProduct = productList.filter((item) => item.isActive);
  const products = activeProduct
    .sort(() => Math.random() - Math.random())
    .slice(0, 8);

  return (
    <div className="w-full h-full">
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
        {products &&
          products.map((item) => (
            <div className="w-full h-[370px] md:h-[390px]" key={item.id}>
              <img className="h-full w-full" src={item.image} alt={item.name} />
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default ProductSection;
