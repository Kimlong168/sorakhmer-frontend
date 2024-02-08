
import Marquee from "react-fast-marquee";
import PropTypes from "prop-types";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
const PartnersList = ({ direction = "left" }) => {
  const { partnerList } = useContext(DataContext);
  return (
    <div className="bg-primary">
      <Marquee
        pauseOnClick={true}
        autoFill={true}
        speed={80}
        delay={2}
        gradient={true}
        gradientWidth={0}
        direction={direction}
        className="flex justify-between items-center py-6 w-full"
      >
        {partnerList &&
          partnerList.map((partner, index) => {
            return (
              <div key={index}>
                <img
                  className="max-w-[80px] md:max-w-[120px] mr-8 md:mr-24"
                  src={partner.partnerLogo}
                  alt="partner"
                />
              </div>
            );
          })}
      </Marquee>
    </div>
  );
};
PartnersList.propTypes = {
  direction: PropTypes.string,
};
export default PartnersList;
