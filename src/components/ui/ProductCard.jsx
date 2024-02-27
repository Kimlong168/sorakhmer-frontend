import { FaShoppingCart } from "react-icons/fa";
import PropType from "prop-types";
// motion
import { motion } from "framer-motion";
// vartants
import { fadeIn } from "../../variants";
import scrollTop from "../../utils/scrollTop";
const ProductCard = ({ product }) => {
  return (
    <motion.div
      onClick={scrollTop}
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col shadow-xl group cursor-pointer"
    >
      <div className="w-full min-h-[315px] md:min-h-[280px] lg:min-h-[315px] overflow-hidden">
        <img
          className="w-full h-[315px] md:h-[280px] lg:h-[315px] group-hover:scale-110 transition-all"
          src={product.image}
          alt="product-image"
        />
      </div>

      <div className="flex flex-col justify-between gap-2 p-4 h-full">
        <div>
          <h3 className="text-xl font-bold line-clamp-1 group-hover:text-primary">
            {product.name}
          </h3>
          <p className="text-sm line-clamp-1 mt-1.5 mb-2 text-gray-500">
            {product.description}
          </p>
        </div>
        <div className="flex items-center justify-between gap-5">
          <p className="text-xl font-extrabold text-primary">
            $ {`${product.price}${!product.price.includes(".") ? ".00" : ""}`}
          </p>
          <span className="hover:text-primary text-gray-800">
            <FaShoppingCart size={24} />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

ProductCard.propTypes = {
  product: PropType.object,
};

export default ProductCard;
