// motion
import { motion } from "framer-motion";
// vartants
import { fadeIn } from "../../variants";
import { BiSolidUser } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import noImage from "../../assets/images/sora1.jpg";
import PropType from "prop-types";
const BlogCard = ({
  coverImage,
  title,
  description,
  authorImg,
  authorName,
}) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <motion.div
      onClick={scrollTop}
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      className="mb-2 cursor-pointer shadow-xl md:h-[500px] bg-white dark:bg-white/90"
    >
      <div className="w-full h-[240px] overflow-hidden">
        <img
          className="w-full h-full  hover:scale-110 transition-all "
          src={coverImage ? coverImage : noImage}
        />
      </div>
      <div className="-mt-[40px] px-7 flex gap-7 items-end  relative">
        <div className="w-[75px] h-[75px] overflow-hidden">
          <img className="w-full h-full cover" src={authorImg} alt="" />
        </div>
        <div className="text-sm text-gray-400 flex items-center gap-3">
          <BiSolidUser />
          {authorName}
        </div>
      </div>

      <div className="p-4 md:p-6">
        <div className="line-clamp-2  font-semibold text-2xl my-4 hover:text-primary transition-all ">
          {title}
        </div>
        <div className="line-clamp-2 text-sm text-gray-400">{description}</div>
        <div className="mt-4">
          <button className="flex items-center gap-2 hover:gap-5 hover:text-primary transition-all font-light text-sm">
            Continue Reading <BsArrowRight />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
BlogCard.propTypes = {
  coverImage: PropType.string,
  title: PropType.string,
  description: PropType.string,
  authorImg: PropType.string,
  authorName: PropType.string,
};
export default BlogCard;
