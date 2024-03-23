import BlogCard from "../../components/ui/BlogCard";
// import sora1 from "../../assets/images/sora3.jpg";
import "../../App.css";
import PrimaryButton from "../../components/ui/PrimaryButton";
import adminProfile from "../../assets/images/adminProfile.png";
import { DataContext } from "../../contexts/DataContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const BlogSection = () => {
  const { blogList, authorList, language } = useContext(DataContext);
  const activeBlog = blogList.filter((blog) => blog.isActive);

  // return if there is no active blog
  if (!activeBlog || activeBlog.length < 3) return null;

  return (
    <section className="container p-8 md:pt-0 mb-12">
      <h3 className="font-primary-bold text-4xl md:text-5xl py-8 uppercase text-center mb-4">
        {language == "en" ? "Blogs" : "អត្ថបទ"}{" "}
        <span className="text-primary">&</span>{" "}
        {language == "en" ? "Events" : "ព្រឹត្តិការណ៍"}
        <span className="text-primary">.</span>
      </h3>
      <div
        className="flex gap-5 lg:gap-10 overflow-x-auto pb-5"
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
        <PrimaryButton
          content={language == "en" ? "View All Blogs" : "មើលអត្ថបទទាំងអស់"}
          href="/blogs"
        />
      </div>
    </section>
  );
};

export default BlogSection;
