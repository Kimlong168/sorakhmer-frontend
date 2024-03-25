// motion
import { motion } from "framer-motion";
// vartants
import { fadeIn } from "../../variants";
import { BiSolidUser } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import scrollTop from "../../utils/scrollTop";
import PropType from "prop-types";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
const BlogCard = ({
  coverImage,
  title,
  description,
  authorImg,
  authorName,
}) => {
  const { language } = useContext(DataContext);
  return (
    <motion.div
      onClick={scrollTop}
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      className="group mb-2 cursor-pointer shadow-xl h-[470px] md:h-[500px] min-w-[270px] md:min-w-min dark:border dark:hover:border-primary dark:border-white/20 w-full"
    >
      <div className="w-full h-[240px] overflow-hidden">
        {/* cover image */}
        <img
          className="w-full h-full  group-hover:scale-110 transition-all object-cover object-center"
          src={coverImage}
          alt="blog-cover-image"
        />
      </div>
      <div className="-mt-[40px] px-4 md:px-7 flex gap-4 md:gap-7 items-end  relative">
        {/* author profile image */}
        <div className="w-[75px] h-[75px] overflow-hidden">
          <img className="w-full h-full cover" src={authorImg} alt="" />
        </div>
        {/* author name */}
        <div className="text-sm text-gray-400 flex items-center gap-3 line-clamp-1">
          <BiSolidUser />
          {authorName}
        </div>
      </div>

      <div className="p-4 md:p-6">
        {/* title */}
        <div className="line-clamp-2  font-semibold text-2xl my-1.5 md:my-4 group-hover:text-primary transition-all ">
          {title}
        </div>
        {/* description */}
        <div className="line-clamp-2 text-sm text-gray-400">{description}</div>
        <div className="mt-4">
          <button className="flex items-center gap-2 group-hover:gap-5 group-hover:text-primary transition-all font-light text-sm">
            {language == "en" ? " Continue Reading" : "បន្តការអាន"}{" "}
            <BsArrowRight />
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
