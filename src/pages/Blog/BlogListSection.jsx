import { FaSearch } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import DrawOutlineButton from "../../components/ui/DrawOutlineButton";
import { DataContext } from "../../contexts/DataContext";
import { useContext, useEffect, useState } from "react";
import adminProfile from "../../assets/images/adminProfile.png";
import BlogCard from "../../components/ui/BlogCard";
import GoToTop from "../../components/ui/GoToTop";
import PropType from "prop-types";
// motion
import { motion } from "framer-motion";
// vartants
import { fadeIn } from "../../variants";
import { Link } from "react-router-dom";
const BlogListSection = () => {
  const { blogList, authorList, blogCategoryList } = useContext(DataContext);
  const [visible1, setVisible1] = useState(3);
  const [visible2, setVisible2] = useState(4);
  const [filter, setFilter] = useState("default");
  const [activeBlog, setActiveBlog] = useState(blogList);
  const [activeCategory, setActiveCategory] = useState(blogCategoryList);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  // search blog
  const handleSearch = (e) => {
    e.preventDefault();
    setFilter("default");
    const searchedBlog = blogList.filter((blog) =>
      blog.title.toLowerCase().includes(searchKeyword.toLowerCase().trim())
    );
    setActiveBlog(searchedBlog);
    setIsSearched(true);
    if (searchedBlog.length === 0) {
      setSearchKeyword("");
    }
  };

  // get the category which has active blog
  useEffect(() => {
    const activeCategory = blogCategoryList.filter((category) => {
      const activeBlogs = blogList.filter(
        (blog) => blog.isActive && blog.categoryId === category.id
      );
      return activeBlogs.length > 0;
    });
    setActiveCategory(activeCategory);
  }, [blogList, blogCategoryList]);

  // get active blog and filter base on category
  useEffect(() => {
    let activeBlog = [];
    if (filter === "default") {
      activeBlog = blogList.filter((blog) => blog.isActive);
      setActiveBlog(activeBlog);
    } else {
      activeBlog = blogList.filter(
        (blog) => blog.isActive && blog.categoryId === filter
      );
      setActiveBlog(activeBlog);
    }
    setSearchKeyword("");
  }, [blogList, filter]);

  return (
    <section className="container p-8 md:p-0">
      <div className="pt-12 md:py-12">
        {/* all buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 border-b border-border pb-4  text-lg font-bold">
          <div className="flex items-center justify-between sm:justify-start gap-12">
            {/* set filter to default or show all blogs */}
            <DrawOutlineButton>
              <button
                onClick={() => {
                  const activeBlog = blogList.filter((blog) => blog.isActive);
                  setActiveBlog(activeBlog);
                  setFilter("default");
                  setSearchKeyword("");
                }}
                className="px-4 py-2 font-bold"
              >
                All Blogs
              </button>
            </DrawOutlineButton>

            {/* filter blog base on categorys */}
            <DrawOutlineButton>
              <select
                className="outline-none p-3 cursor-pointer border-none bg-transparent font-bold"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="default">All Categories</option>
                {activeCategory.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
            </DrawOutlineButton>
          </div>

          {/* search bar */}
          <DrawOutlineButton>
            <form className="w-full sm:w-auto" onSubmit={handleSearch}>
              <div className="flex items-center gap-3 px-4 py-2 border">
                {/* search input */}
                <input
                  className="outline-none border-none p-1 w-full"
                  type="text"
                  placeholder="Search..."
                  name="search"
                  value={searchKeyword}
                  // onBlur={() => setIsSearched(false)}
                  onChange={(e) => {
                    setSearchKeyword(e.target.value);
                    setIsSearched(false);
                  }}
                />

                {/* search icon */}
                <div onClick={handleSearch}>
                  <FaSearch />
                </div>
              </div>
            </form>
          </DrawOutlineButton>
        </div>

        {/* blog list */}

        {isSearched && searchKeyword.length !== 0 && (
          <div className="mt-8 ">
            Search result for{" "}
            <span className="text-primary font-bold">
              &quot;{searchKeyword}&ldquo;
            </span>
          </div>
        )}

        {/* blog list for big screen */}
        <div
          className="hidden lg:grid lg:grid-cols-3 auto-rows-auto gap-5 lg:gap-10 overflow-x-auto pb-5 mt-8"
          id="blog"
        >
          <BlogList
            activeBlog={activeBlog}
            visible={visible1}
            authorList={authorList}
          />
        </div>
        {/* blog list for small screen */}
        <div
          className="grid lg:hidden grid-cols-1 sm:grid-cols-2 auto-rows-auto gap-5 lg:gap-10 overflow-x-auto pb-5 mt-8"
          id="blog"
        >
          <BlogList
            activeBlog={activeBlog}
            visible={visible2}
            authorList={authorList}
          />
        </div>

        {/* load more button */}
        {/* for big screen */}
        <div className="hidden lg:block">
          {visible1 < activeBlog.length ? (
            <div className="flex justify-center mt-5">
              <button
                onClick={() => setVisible1((prev) => prev + 3)}
                className="flex group  items-center gap-2 border-2 border-dashed border-primary bg-white px-6 py-3 font-semibold uppercase text-primary transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-xl hover:shadow-[4px_4px_0px_rgb(245,156,0)] active:translate-x-[0px] active:translate-y-[0px] active:rounded-lg active:shadow-none"
              >
                Load More{" "}
                <span className="group-hover:block hidden animate-ping">
                  <IoMdArrowForward />
                </span>
              </button>
            </div>
          ) : (
            <GoToTop />
          )}
        </div>

        {/* for small screen */}
        <div className="lg:hidden">
          {visible2 < activeBlog.length ? (
            <div className="flex justify-center mt-5">
              <button
                onClick={() => setVisible2((prev) => prev + 2)}
                className="flex group  items-center gap-2 border-2 border-dashed border-primary bg-white px-6 py-3 font-semibold uppercase text-primary transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-xl hover:shadow-[4px_4px_0px_rgb(245,156,0)] active:translate-x-[0px] active:translate-y-[0px] active:rounded-lg active:shadow-none"
              >
                Load More{" "}
                <span className="group-hover:block hidden animate-ping">
                  <IoMdArrowForward />
                </span>
              </button>
            </div>
          ) : (
            <GoToTop />
          )}
        </div>
      </div>
    </section>
  );
};

const BlogList = ({ activeBlog, visible, authorList }) => {
  return (
    <>
      {activeBlog.length > 0 ? (
        activeBlog.slice(0, visible).map((blog, index) => {
          // return if the blog is disabled
          if (!blog.isActive) return;

          // get author for the blog
          let author = authorList.filter(
            (author) => author.id == blog.authorId
          )[0];

          if (!author) {
            author = {
              id: "default",
              fullName: "Admin",
              profilePicture: adminProfile,
            };
          }

          console.log("author for card:", author);

          return (
            <Link to={`/blog/${blog.id}`} key={index}>
              <BlogCard
                key={index}
                coverImage={blog.coverImage}
                authorImg={author.profilePicture}
                authorName={author.fullName}
                title={blog.title}
                description={blog.description}
              />
            </Link>
          );
        })
      ) : (
        <div className="text-center col-span-3 h-[100px]">
          <motion.div
            variants={fadeIn("up", 0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0 }}
          >
            No blog found
          </motion.div>
        </div>
      )}
    </>
  );
};

BlogList.propTypes = {
  activeBlog: PropType.array,
  visible: PropType.number,
  authorList: PropType.array,
};

export default BlogListSection;
