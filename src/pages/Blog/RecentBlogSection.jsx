import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import PrimaryButton from "../../components/ui/PrimaryButton";
import { TypeAnimation } from "react-type-animation";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
const RecentBlogSection = () => {
  const { blogList, language } = useContext(DataContext);
  const activeBlog = blogList.filter((blog) => blog.isActive);

  //   return nothing if there is no active blog
  if (activeBlog.length === 0) return null;
  return (
    <section className="container p-8 md:pt-0">
      <div className="pt-12 md:py-12 ">
        <div className="mb-10">
          <h3 className="text-nowrap font-primary-bold text-4xl md:text-5xl ">
            {language == "en" && <span className="text-primary">Recent</span>}{" "}
            <TypeAnimation
              speed={50}
              cursor={false}
              sequence={
                language == "en"
                  ? ["Blog", 3000, "Event", 3000]
                  : ["អត្ថបទ", 3000, "ព្រឹត្តិការណ៍", 3000]
              }
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
            />
            <span className="text-primary">{language == "kh" && " ថ្មីៗ"}</span>
            <span className="text-primary font-bold">.</span>
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-24">
          {activeBlog &&
            activeBlog.slice(0, 1).map((blog) => (
              <>
                {/* text */}
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.3 }}
                  className="w-full"
                >
                  <h3 className="text-3xl font-bold hover:text-primary line-clamp-3">
                    {blog.title}
                  </h3>
                  <p className="prose lg:prose-xl mt-4 md:mb-8 line-clamp-2 dark:text-white/70">
                    {blog.description}
                  </p>
                  <div className="hidden md:block">
                    <PrimaryButton
                      content={language == "en" ? "Read More" : "អានបន្ថែមទៀត"}
                      href={`/blog/${blog.id}`}
                    />
                  </div>
                </motion.div>
                {/* cover image */}
                <motion.div
                  variants={fadeIn("down", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.5 }}
                  className="w-full"
                >
                  <img
                    className="w-full lg:w-4/5 max-h-[330px] md:hover:scale-110 transition-all ease-in shadow-2xl  ml-auto  rounded-lg"
                    src={blog.coverImage}
                    alt="coverImage"
                  />
                </motion.div>

                {/* buuton */}
                <div className="md:hidden block mt-4">
                  <PrimaryButton
                    content={language == "en" ? "Read More" : "អានបន្ថែមទៀត"}
                    href={`/blog/${blog.id}`}
                  />
                </div>
              </>
            ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogSection;
