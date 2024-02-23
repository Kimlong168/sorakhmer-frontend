import BackToPrevBtn from "../../components/ui/BackToPrevBtn";
import GoToTop from "../../components/ui/GoToTop";
import BlogCard from "../../components/ui/BlogCard";
import PropType from "prop-types";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import adminProfile from "../../assets/images/adminProfile.png";
import scrollTop from "../../utils/scrollTop";
import { Link } from "react-router-dom";

const RelatedContent = ({ relatedPost }) => {
  return (
    <div>
      {/* related content */}
      {relatedPost.length !== 0 && (
        <div className="mb-8">
          <div className="text-white font-semibold  bg-primary px-5 py-3 mt-8 rounded-sm flex items-center justify-between">
            <small className="border-l-[5px] pl-5 border-white text-lg md:text-xl uppercase ">
              Related Contents
            </small>
          </div>

          {/* related content blog card for big screen */}
          <div className="grid sm:hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-7 mt-5">
            <RelatedBlogContainer numberToShow={3} relatedPost={relatedPost} />
          </div>

          {/* related content blog card for small screen */}
          <div className="hidden sm:grid lg:hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-7 mt-5">
            <RelatedBlogContainer numberToShow={4} relatedPost={relatedPost} />
          </div>
        </div>
      )}

      {/* back to previous page button */}
      <div className="mb-8">
        <BackToPrevBtn />
      </div>

      {/* goto top */}
      <GoToTop />
    </div>
  );
};

const RelatedBlogContainer = ({ relatedPost, numberToShow }) => {
  const { authorList } = useContext(DataContext);
  return (
    <>
      {relatedPost.slice(0, numberToShow).map((data) => {
        // get author for the blog
        let author = authorList.filter(
          (author) => author.id == data.authorId
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
          <div key={data.id} onClick={scrollTop}>
            <Link to={`/blog/${data.id}`}>
              <BlogCard
                coverImage={data.coverImage}
                title={data.title}
                description={data.description}
                authorImg={author.profilePicture}
                authorName={author.fullName}
              />
            </Link>
          </div>
        );
      })}
    </>
  );
};

RelatedBlogContainer.propTypes = {
  relatedPost: PropType.array,
  numberToShow: PropType.number,
};
RelatedContent.propTypes = {
  relatedPost: PropType.array,
};
export default RelatedContent;
