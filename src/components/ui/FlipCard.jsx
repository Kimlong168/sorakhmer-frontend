import { useState } from "react";
import PropType from "prop-types";
const FlipCard = ({
  awardLogo,
  awardName,
  awardedBy,
  recieveDate,
  description,
}) => {
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
                Detail Information
              </h2>
              <table>
                {/* award name */}
                <tr className="mb-1">
                  <td className="font-bold pr-2  whitespace-no-wrap break-keep">
                    Award name:
                  </td>
                  <td>{awardName}</td>
                </tr>
                {/* awarded by */}
                {awardedBy && (
                  <tr className="mb-1">
                    <td className="font-bold pr-2">Awarded by:</td>
                    <td>{awardedBy}</td>
                  </tr>
                )}

                {/* date */}
                {recieveDate && (
                  <tr className="mb-1">
                    <td className="font-bold pr-2">Recieve date:</td>
                    <td>{recieveDate}</td>
                  </tr>
                )}

                {/* description */}
                {description && (
                  <tr className="mb-1">
                    <td className="font-bold pr-2">Description:</td>
                    <td>{description}</td>
                  </tr>
                )}
              </table>
            </div>
          ) : (
            <>
              {/* front side */}
              {/* award logo */}
              <img
                className="w-full object-cover h-[300px]"
                src={awardLogo}
                alt="award"
              />
              {/* award name */}
              <div className="text-center font-bold  uppercase pb-3 text-primary">
                {awardName}
              </div>
            </>
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
