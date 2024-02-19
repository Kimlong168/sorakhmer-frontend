import { FaSearch } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import DrawOutlineButton from "../../components/ui/DrawOutlineButton";
import { DataContext } from "../../contexts/DataContext";
import { useContext, useState } from "react";
import adminProfile from "../../assets/images/adminProfile.png";
import BlogCard from "../../components/ui/BlogCard";
import { Link } from "react-router-dom";
// import PrimaryButton from "../../components/ui/PrimaryButton";
import GoToTop from "../../components/ui/GoToTop";
const BlogListSection = () => {
  const { blogList, authorList, blogCategoryList } = useContext(DataContext);
  const [visible, setVisible] = useState(3);
  //   const [visible1, setVisible1] = useState(4);

  const handleLoadMore = (numberToShow) => {
    setVisible((prev) => prev + numberToShow);
    // setVisible1((prev) => prev + numberToShow);
  };

  const activeBlog = blogList.filter((blog) => blog.isActive);
  return (
    <section className="container p-8 md:p-0">
      <div className="pt-12 md:py-12">
        {/* all buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 border-b border-border pb-4  text-lg font-bold">
          <div className="flex items-center justify-between sm:justify-start gap-12">
            <DrawOutlineButton>
              <Link to="/blogs">
                <button className="px-4 py-2">All Blog</button>
              </Link>
            </DrawOutlineButton>

            <select className="outline-none px-2 cursor-pointer">
              <option value="default">All Category</option>
              {blogCategoryList.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </div>
          <DrawOutlineButton>
            <div className="w-full sm:w-auto">
              <div className="flex items-center gap-3 px-4 py-2 border">
                <input
                  className="outline-none border-none p-1 w-full"
                  type="text"
                  placeholder="Search..."
                />
                <div>
                  <FaSearch />
                </div>
              </div>
            </div>
          </DrawOutlineButton>
        </div>

        {/* blog list */}

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-5 lg:gap-10 overflow-x-auto pb-5 mt-8"
          id="blog"
        >
          {activeBlog.length > 0 ? (
            activeBlog.slice(0, visible).map((blog, index) => {
              // return if the blog is disabled
              if (!blog.isActive) return;
              // get the author name and profile image
              const authorName =
                blog.authorId.toLowerCase() === "default"
                  ? "Admin"
                  : authorList &&
                    authorList.map((data) => {
                      if (data.id == blog.authorId) {
                        return data.fullName;
                      }
                    });

              const authorImage =
                blog.authorId.toLowerCase() === "default"
                  ? adminProfile
                  : authorList &&
                    authorList.map((data) => {
                      if (data.id == blog.authorId) {
                        return data.profilePicture;
                      }
                    });

              return (
                <BlogCard
                  key={index}
                  coverImage={blog.coverImage}
                  authorImg={authorImage}
                  authorName={authorName}
                  title={blog.title}
                  description={blog.description}
                />
              );
            })
          ) : (
            <div className="text-center col-span-3"> No blog found</div>
          )}
        </div>

        {/* load more button */}

        {visible < activeBlog.length ? (
          <div className="flex justify-center mt-5">
            <button
              onClick={() => handleLoadMore(3)}
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
    </section>
  );
};

export default BlogListSection;
