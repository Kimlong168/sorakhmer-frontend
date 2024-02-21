import BlogCard from "../../components/ui/BlogCard";
// import sora1 from "../../assets/images/sora3.jpg";
import "../../App.css";
import PrimaryButton from "../../components/ui/PrimaryButton";
import adminProfile from "../../assets/images/adminProfile.png";
import { DataContext } from "../../contexts/DataContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const BlogSection = () => {
  const { blogList, authorList } = useContext(DataContext);
  const activeBlog = blogList.filter((blog) => blog.isActive);

  return (
    <section className="container p-8 md:p-0 mb-12">
      <h3 className="font-primary-bold text-4xl md:text-5xl py-8 uppercase text-center mb-4">
        Blogs <span className="text-primary">&</span> Events
        <span className="text-primary">.</span>
      </h3>
      <div
        className="flex justify-between gap-5 lg:gap-10 overflow-x-auto pb-5"
        id="blog"
      >
        {activeBlog &&
          activeBlog.slice(0, 3).map((blog, index) => {
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
              <div key={index} className="w-full">
                <Link to={`/blog/${blog.id}`}>
                  <BlogCard
                    coverImage={blog.coverImage}
                    title={blog.title}
                    description={blog.description}
                    authorImg={author.profilePicture}
                    authorName={author.fullName}
                  />
                </Link>
              </div>
            );
          })}
      </div>
      <div className="flex justify-center mt-4">
        <PrimaryButton content="View All Blogs" href="/blogs" />
      </div>
    </section>
  );
};

export default BlogSection;
