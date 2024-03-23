import { useContext, useState } from "react";
import PropType from "prop-types";
import { DataContext } from "../../contexts/DataContext";
const FlipCard = ({
  awardLogo,
  awardName,
  awardedBy,
  recieveDate,
  description,
}) => {
  const { language } = useContext(DataContext);
  const [isFlipped, setIsFlipped] = useState(false);
  let timeoutId;

  //   handle mouse leave
  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsFlipped(false);
    }, 2000); // 2000 milliseconds = 2 seconds
  };

  //   hande mouse enter
  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
  };

  return (
    <div
      className={`relative transition-all duration-500 w-full h-[300px] ${
        isFlipped
          ? " [transform-style:preserve-3d] [transform:rotateY(180deg)] "
          : ""
      }`}
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div className="absolute inset-0 flex justify-center items-center ">
        <div className="w-full p-2 ">
          {isFlipped ? (
            <div className="[transform:rotateY(180deg)] p-6 h-[300px] border">
              {/* back side */}
              <h2 className=" text-center text-xl uppercase font-bold mb-4 text-primary">
                {language == "en" ? "Detail Information" : "ព័ត៌មានលម្អិត"}
              </h2>
              <table>
                {/* award name */}
                <tr className="mb-1">
                  <td className="font-bold pr-2  whitespace-no-wrap break-keep">
                    {language == "en" ? "Award name:" : "ឈ្មោះពានរង្វាន់៖"}
                  </td>
                  <td>{awardName}</td>
                </tr>
                {/* awarded by */}
                {awardedBy && (
                  <tr className="mb-1">
                    <td className="font-bold pr-2">
                      {language == "en" ? "Awarded by:" : "ប្រគល់ជូនដោយ៖"}
                    </td>
                    <td>{awardedBy}</td>
                  </tr>
                )}

                {/* date */}
                {recieveDate && (
                  <tr className="mb-1">
                    <td className="font-bold pr-2">
                      {language == "en" ? "Recieve date:" : "ថ្ងៃទទួល៖"}
                    </td>
                    <td>{recieveDate}</td>
                  </tr>
                )}

                {/* description */}
                {description && (
                  <tr className="mb-1">
                    <td className="font-bold pr-2">
                      {language == "en" ? "Description:" : "ការពិពណ៌នា៖"}
                    </td>
                    <td>{description}</td>
                  </tr>
                )}
              </table>
            </div>
          ) : (
            <div className="pb-5  h-[370px]">
              {/* front side */}
              {/* award logo */}
              <div>
                <img
                  className="w-full object-cover h-[300px]"
                  src={awardLogo}
                  alt="award"
                />
              </div>
              {/* award name */}
              <div className="text-center font-bold  uppercase pb-3 my-3 text-primary">
                {awardName}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

FlipCard.propTypes = {
  awardLogo: PropType.string,
  awardName: PropType.string,
  awardedBy: PropType.string,
  recieveDate: PropType.string,
  description: PropType.string,
};
export default FlipCard;
