import BlogCard from "../../components/ui/BlogCard";
import sora1 from "../../assets/images/sora3.jpg";

import "../../App.css";
import PrimaryButton from "../../components/ui/PrimaryButton";
import adminProfile from "../../assets/images/adminProfile.png";
const BlogSection = () => {
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
        <BlogCard
          coverImage={sora1}
          authorImg={adminProfile}
          authorName={"Kimlong"}
          title={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illo necessitatibus cum dolorum velit laboriosam. Nihil ipsum nostrum molestias sunt! Exercitationem corporis est libero tenetur culpa quasi tempore laboriosam consectetur."
          }
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illo necessitatibus cum dolorum velit laboriosam. Nihil ipsum nostrum molestias sunt! Exercitationem corporis est libero tenetur culpa quasi tempore laboriosam consectetur."
          }
        />
        <BlogCard
          coverImage={sora1}
          authorImg={adminProfile}
          authorName={"Kimlong"}
          title={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illo necessitatibus cum dolorum velit laboriosam. Nihil ipsum nostrum molestias sunt! Exercitationem corporis est libero tenetur culpa quasi tempore laboriosam consectetur."
          }
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illo necessitatibus cum dolorum velit laboriosam. Nihil ipsum nostrum molestias sunt! Exercitationem corporis est libero tenetur culpa quasi tempore laboriosam consectetur."
          }
        />
        <BlogCard
          coverImage={sora1}
          authorImg={adminProfile}
          authorName={"Kimlong"}
          title={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illo necessitatibus cum dolorum velit laboriosam. Nihil ipsum nostrum molestias sunt! Exercitationem corporis est libero tenetur culpa quasi tempore laboriosam consectetur."
          }
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illo necessitatibus cum dolorum velit laboriosam. Nihil ipsum nostrum molestias sunt! Exercitationem corporis est libero tenetur culpa quasi tempore laboriosam consectetur."
          }
        />
      </div>
      <div className="flex justify-center mt-4">
        <PrimaryButton content="View All Blogs" href="/blogs" />
      </div>
    </section>
  );
};

export default BlogSection;
