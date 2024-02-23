import PropTypes from "prop-types";
import LinkIcon from "./LinkIcon";
const AboutAuthor = ({ fullName, profileImage, bio, links }) => {
  return (
    <div className=" mt-20">
      <div className="text-center text-xl uppercase font-bold">
        About the author
      </div>
      <div className="shadow-3xl my-3 p-5  ">
        <div className="flex justify-center text-gray-900">
          {/* profile image */}
          <a href={profileImage} className="w-[120px] h-[120px]">
            <img
              src={profileImage}
              alt="profileImage"
              className="rounded-full cover w-full h-full shadow-xl border-solid border-[3px] "
            />
          </a>
        </div>
        <div className="text-center md:px-3 pt-2">
          {/* author name */}
          <h3 className=" bold  text-2xl text-bold uppercase ">{fullName}</h3>
          {/* bio */}
          <p className="mt-2  w-full md:w-[60%] mx-auto block">{bio}</p>
        </div>

        {/* links */}
        <div className="flex justify-center  mt-8">
          <div className="flex justify-center space-x-6 ">
            {links &&
              links.map((link) => (
                <>
                  <a href={link.url}>
                    <LinkIcon title={link.title} />
                  </a>
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
AboutAuthor.propTypes = {
  fullName: PropTypes.string,
  profileImage: PropTypes.string,
  bio: PropTypes.string,
  links: PropTypes.array,
};
export default AboutAuthor;
