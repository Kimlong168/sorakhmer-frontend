import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase-config";
import { BiCalendar, BiCategory, BiUser } from "react-icons/bi";
import SharingBtn from "../../components/ui/SharingBtn";
import adminProfile from "../../assets/images/adminProfile.png";
import Loading from "../../components/ui/Loading";
import ContentDisplay from "../../components/ui/ContentDisplay";
import { DataContext } from "../../contexts/DataContext";
import AboutAuthor from "../../components/ui/AboutAuthor";
import RelatedContent from "./RelatedContent";
import { IoIosArrowBack } from "react-icons/io";
import DrawOutlineButton from "../../components/ui/DrawOutlineButton";
import { FaSearch, FaWindowClose } from "react-icons/fa";
// motion
import { motion } from "framer-motion";
// vartants
import { fadeIn } from "../../variants";
import scrollTop from "../../utils/scrollTop";
import WarningModal from "../../components/ui/WarningModal";
import "../../App.css";
import MetadataHeader from "../../components/ui/MetadataHeader";
const BlogDetailSection = () => {
  const { id: blogParams } = useParams();
  const { blogList, authorList, blogCategoryList, language } =
    useContext(DataContext);
  const [data, setData] = useState(null);
  const [author, setAuthor] = useState(null);
  const [category, setCategory] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [resultBlog, setResultBlog] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [showSercchBar, setShowSearchBar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  // handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchKeyword.trim() === "") {
      // alert("Please enter a keyword to search");
      setIsOpen(true);
      setResultBlog([]);
      return;
    }

    const searchedBlog = blogList.filter(
      (blog) =>
        blog.isActive &&
        blog.title.toLowerCase().includes(searchKeyword.toLowerCase().trim())
    );
    setResultBlog(searchedBlog);
    setIsSearched(true);
    if (searchedBlog.length === 0) {
      // setSearchKeyword("");
      setResultBlog([]);
    }
  };

  //   if data is not available
  if (!data) return <Loading />;
  return (
    <section className="container px-4 md:pt-0 min-h-screen">
      {/* metadata header */}
      <MetadataHeader
        title={`Blog | ${data.title}`}
        description={data.description}
        image={data.coverImage}
      />
      {/* back button and search */}
      <div className="mt-3 md:mt-5 flex justify-between items-center">
        <Link to="/blogs">
          <DrawOutlineButton>
            <button className="group text-primary font-bold rounded px-3 py-1.5  flex items-center justify-center gap-1 ">
              <IoIosArrowBack className="group-hover:block hidden" />{" "}
              {language == "en" ? "Back" : "ត្រឡប់ក្រោយ"}
            </button>
          </DrawOutlineButton>
        </Link>

        <div
          className="flex items-center gap-3 font-bold hover:text-primary cursor-pointer lg:hidden"
          onClick={() => setShowSearchBar(true)}
        >
          {language == "en" ? "Search" : "ស្វែងរក"} <FaSearch />
        </div>
      </div>

      {/* content */}
      <div className=" flex flex-col md:flex-row gap-2 mt-7">
        <div className="w-full lg:w-[75%] bg-white dark:bg-transparent dark:text-white/90 border border-white/20 shadow-xl p-6 min-h-screen">
          <div className="text-gray-900 dark:text-white/80  font-bold text-2xl md:text-3xl">
            {data.title}
          </div>
          <div className="flex items-center gap-5 md:gap-8 py-5 mb-3">
            {/* publish date */}
            <div className="flex items-center gap-2">
              <BiCalendar />
              {data.publicationDate}
            </div>
            {/* category */}
            <div className="flex items-center gap-2">
              <BiCategory /> {category}
            </div>
            {/* author name */}
            <div className=" sm:flex items-center gap-2 hidden">
              <BiUser /> {author.fullName}
            </div>
          </div>

          {/* description */}
          <div className="mb-5 text-xl font-semibold">{data.description}</div>

          {/* blog cover image */}
          <div className="mb-5 w-full">
            <img className="w-full" src={data.coverImage} alt="cover-image" />
          </div>

          {/* blog content */}
          <div className="prose lg:prose-xl prose-img:w-full lg:prose-img:w-auto lg:prose-img:mx-auto lg:prose-img:block prose-a:text-blue-600 prose-a:hover:text-blue-400 dark:prose-blockquote:text-white/70 dark:prose-strong:text-white/90 dark:prose-h1:text-white/90 dark:prose-h2:text-white/90  dark:prose-h3:text-white/90  dark:prose-h4:text-white/90  min-w-full dark:text-white/80">
            <ContentDisplay htmlString={data.content} />
          </div>

          {/* sharing to social media button */}
          <div className="mt-10 mb-5">
            <div className="font-semibold text-center p-4">
              {language == "en" ? "Share this blog" : "ចែករំលែកទៅកាន់"}
            </div>
            <SharingBtn url={currentURL} title={data.title} />
          </div>
          <hr />

          {/* about the author */}
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
        <aside
          className={`${
            showSercchBar ? "flex " : "hidden "
          } lg:w-[25%] w-[100%] lg:flex  justify-center items-center lg:justify-start lg:items-start shadow-xl fixed lg:static bg-black/50 inset-0 z-[100] lg:z-[1] md:min-h-screen lg:bg-transparent dark:border border-white/20`}
        >
          <div
            id="searchResult"
            className="flex flex-col gap-2 mt-4 p-6 w-[90%]  sm:w-[70%] lg:w-full text-xl font-semibold h-[100%]  overflow-auto lg:overflow-hidden bg-white lg:bg-transparent"
          >
            {/* search bar header */}
            <div className="flex justify-between items-center gap-4 text-black lg:dark:text-white">
              <span>{language == "en" ? "Search" : "ស្វែងរក"} </span>
              <FaWindowClose
                className="cursor-pointer lg:hidden hover:text-primary"
                onClick={() => setShowSearchBar(false)}
              />
            </div>

            {/* search bar */}
            <DrawOutlineButton>
              <form className="w-full sm:w-auto" onSubmit={handleSearch}>
                <div className="flex items-center gap-3 px-4 py-2 border">
                  {/* search input */}
                  <input
                    className="outline-none border-none p-1 w-full bg-transparent "
                    type="text"
                    placeholder={
                      language == "en" ? "find blogs..." : "ស្វែងរកអត្ថបទ..."
                    }
                    name="search"
                    value={searchKeyword}
                    onChange={(e) => {
                      setSearchKeyword(e.target.value);
                      setResultBlog([]);
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

            <hr className="mt-1 mb-3" />

            <div>
              {/* search result for text */}
              {resultBlog.length !== 0 && searchKeyword.length !== 0 && (
                <div className="mb-2 text-sm text-black lg:dark:text-white">
                  {language == "en" ? "Found" : "ស្វែងរកឃើញ"}{" "}
                  <span className="text-primary font-bold">
                    {resultBlog.length}
                  </span>{" "}
                  {language == "en" ? (
                    <>{resultBlog.length === 1 ? " blog" : "blogs"}</>
                  ) : (
                    "អត្ថបទ"
                  )}{" "}
                  {language == "en" ? "for" : "សម្រាប់"}{" "}
                  <span className="text-primary font-bold">
                    &quot;{searchKeyword}&ldquo;
                  </span>
                </div>
              )}
            </div>

            {/* result blog display */}
            <div className="flex flex-col gap-5 text-sm text-black">
              {resultBlog.length !== 0 ? (
                resultBlog.map((blog) => {
                  return (
                    <Link to={`/blog/${blog.id}`} key={blog.id}>
                      <motion.div
                        onClick={() => {
                          scrollTop();
                          setShowSearchBar(false);
                        }}
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex gap-3 w-full h-[60px] cursor-pointer group"
                      >
                        <div className="w-[85px] h-[60px] lg:h-auto lg:w-[30%]">
                          {/* blog image */}
                          <img
                            className="w-full h-full rounded-sm"
                            src={blog.coverImage}
                            alt="coverImage"
                          />
                        </div>
                        <div className="w-[100%] lg:w-[70%]">
                          {/* blog title */}
                          <div className="line-clamp-2 font-semibold group-hover:text-primary  lg:dark:text-white/80">
                            {blog.title}
                          </div>
                          {/* publish date */}
                          <div className="line-clamp-1 font-light mt-0.5 lg:dark:text-white/50">
                            {blog.publicationDate}
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })
              ) : (
                <>
                  {/* search not found */}
                  {isSearched && (
                    <motion.div
                      onClick={scrollTop}
                      variants={fadeIn("up", 0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.3 }}
                      className="text-center lg:dark:text-white"
                    >
                      {language == "en" ? "No blog found" : "ស្វែងរកមិនឃើញ"}
                    </motion.div>
                  )}
                </>
              )}
            </div>
          </div>
        </aside>
      </div>

      {/* related contents */}

      <div>
        <RelatedContent relatedPost={relatedPost} />
      </div>

      {/* warning modal */}
      <div>
        <WarningModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title={language == "en" ? "No Result Found!" : "ស្វែងរកមិនឃើញ!"}
          description={
            language == "en"
              ? "Please Enter a Keyword to Search"
              : "សូមបញ្ចូលពាក្យគន្លឺះដើម្បីស្វែងរក"
          }
        />
      </div>
    </section>
  );
};

export default BlogDetailSection;
