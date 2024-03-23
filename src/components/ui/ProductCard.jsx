import { FaShoppingCart } from "react-icons/fa";
import PropType from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "../../variants";
import scrollTop from "../../utils/scrollTop";
import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const ProductCard = ({ product }) => {
  const { addToCart, setShowViewCartBtn, language } = useContext(DataContext);
  const { id, name, price, image } = product;
  const [isAddedtoCart, setIsAddedtoCart] = useState(false);
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col shadow-xl group cursor-pointer border border-white/20 dark:hover:border-primary"
    >
      <div
        onClick={scrollTop}
        className="w-full min-h-[315px] md:min-h-[280px] lg:min-h-[315px] overflow-hidden"
      >
        <Link to={`/product/${id}`}>
          <img
            className="w-full  h-[325px] md:h-[280px] lg:h-[315px]  group-hover:scale-110 transition-all "
            src={product.image}
            alt="product-image"
          />
        </Link>
      </div>

      <div className="flex flex-col justify-between gap-2 h-full">
        <Link to={`/product/${id}`}>
          <div onClick={scrollTop} className="p-4 pb-0">
            <h3 className="text-xl font-bold line-clamp-1 group-hover:text-primary">
              {product.name}
            </h3>
            <p className="text-sm line-clamp-1 mt-1.5 mb-2 dark:text-white/70 text-gray-500">
              {product.description}
            </p>
          </div>
        </Link>
        <div className="flex items-center gap-5">
          <Link to={`/product/${id}`} className="flex-1 p-4 pt-0">
            <p
              onClick={scrollTop}
              className="text-xl flex-1 font-extrabold text-primary"
            >
              $ {`${product.price}${!product.price.includes(".") ? ".00" : ""}`}
            </p>
          </Link>
          <span
            onClick={() => {
              // const isAdded = addToCart({ id, name, price, image });
              addToCart({ id, name, price, image });
              setIsAddedtoCart(true);

              // show view cart button
              setShowViewCartBtn(true);

              // hide view cart button after 2s
              setTimeout(() => {
                setShowViewCartBtn(false);
              }, 2000);
            }}
            className="dark:text-white/70 text-gray-800 hover:text-primary p-4 pt-0 relative"
          >
            {isAddedtoCart ? (
              <IoMdCheckmarkCircleOutline size={24} />
            ) : (
              <FaShoppingCart size={24} />
            )}
          </span>
        </div>
      </div>

      {/* copy link notification */}

      {isAddedtoCart && (
        <div className="flex flex-col gap-1 w-72 fixed top-1 right-2 z-50 pointer-events-none">
          <AnimatePresence>
            <Notification
              // text={`${name} is added to cart!`}
              text={`${name} ${
                language == "en" ? "is added to" : "បានបញ្ជូលទៅក្នុង"
              } cart!`}
              removeNotif={() => setIsAddedtoCart(false)}
              id={id}
              bg="bg-primary"
            />
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
};

ProductCard.propTypes = {
  product: PropType.object,
};

export default ProductCard;
