import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase-config";
import { BiSolidUser } from "react-icons/bi";
import { LuCalendarDays } from "react-icons/lu";
import SharingBtn from "../../components/ui/SharingBtn";

import adminProfile from "../../assets/images/adminProfile.png";
import Loading from "../../components/ui/Loading";
import ContentDisplay from "../../components/ui/ContentDisplay";
import { DataContext } from "../../contexts/DataContext";
import AboutAuthor from "../../components/ui/AboutAuthor";
import RelatedContent from "./RelatedContent";
const BlogDetailSection = () => {
  const { id: blogParams } = useParams();
  const { blogList, authorList, blogCategoryList } = useContext(DataContext);
  const [data, setData] = useState(null);
  const [author, setAuthor] = useState(null);
  const [category, setCategory] = useState(null);

  //   get current url
  const currentURL = window.location.href;

  //   fetch data from firestore by id or param
  useEffect(() => {
    const blogRef = doc(db, "blogs", blogParams);

    const fetchData = async () => {
      try {
        const docSnap = await getDoc(blogRef);
        if (docSnap.exists()) {
          const data = docSnap.data();

          //   get author data
          let authorData = null;
          authorList.map((author) => {
            if (author.id == data.authorId) {
              authorData = author;
            }
          });

          //   if author data is not available
          if (!authorData) {
            authorData = {
              id: "default",
              fullName: "Admin",
              profilePicture: adminProfile,
            };
          }

          //   get category name
          let categoryName = null;
          blogCategoryList.map((category) => {
            if (category.id == data.categoryId) {
              categoryName = category.categoryName;
            }
          });

          setData(data);
          setAuthor(authorData);
          setCategory(categoryName);
          console.log("detail data", data);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchData();
  }, [blogParams, authorList, blogCategoryList]);

  //   get related content
  const relatedPost = blogList.filter((blog) => {
    return (
      blog.categoryId === data?.categoryId &&
      blog.id !== blogParams &&
      blog.isActive
    );
  });

  //   if data is not available
  if (!data) return <Loading />;
  return (
    <section className="container px-4 md:p-0 min-h-screen">
      {/* content */}
      <div className=" flex flex-col md:flex-row gap-2 mt-3 md:mt-5 ">
        <div className="w-full md:w-[75%] mt-4 bg-white dark:bg-black dark:text-white border border-white/20 shadow-xl p-6 min-h-screen">
          <div className="text-gray-900 dark:text-white font-bold text-2xl md:text-3xl">
            {data.title}
          </div>
          <div className="flex items-center gap-5 md:gap-8 py-5">
            <div className="flex items-center gap-2">
              <LuCalendarDays />
              {data.publicationDate}
            </div>
            <div className="flex items-center gap-2">
              <BiSolidUser /> {category}
            </div>
            <div className="flex items-center gap-2">
              <BiSolidUser /> {author.fullName}
            </div>
          </div>
          <div className="mb-5 text-xl font-semibold">{data.description}</div>
          <div className="mb-5 w-full">
            <img className="w-full" src={data.coverImage} alt="cover-image" />
          </div>

          {/* content */}
          <div className="prose lg:prose-xl prose-a:text-blue-600 min-w-full">
            <ContentDisplay htmlString={data.content} />
          </div>
          <div className="mt-10 mb-5">
            <SharingBtn url={currentURL} title={data.title} />
          </div>
          <hr />
          <div>
            {author && author.fullName !== "Admin" && (
              <AboutAuthor
                fullName={author.fullName}
                profileImage={author.profilePicture}
                bio={author.bio}
                links={author.links}
              />
            )}
          </div>
        </div>

        {/* right side of the content  */}
        <div className="hidden md:flex flex-col items-center  gap-2 md:w-[25%] mt-4 md:min-h-screen bg-white shadow-xl p-6 text-2xl font-semibold ">
          <span className="text-center uppercase">SPONSORED BY</span>
        </div>
      </div>

      {/* related contents */}

      <div>
        <RelatedContent relatedPost={relatedPost} />
      </div>
    </section>
  );
};

export default BlogDetailSection;
