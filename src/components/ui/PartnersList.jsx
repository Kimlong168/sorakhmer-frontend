import Marquee from "react-fast-marquee";
import PropTypes from "prop-types";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { Link } from "react-router-dom";
const PartnersList = ({ direction = "left" }) => {
  const { partnerList } = useContext(DataContext);
  if (!partnerList) return null;
  return (
    <>
      <div>
        <Marquee
          // pauseOnClick={true}
          pauseOnHover={true}
          autoFill={true}
          speed={80}
          delay={3}
          gradient={true}
          gradientWidth={0}
          direction={direction}
          className="flex justify-between items-center py-3 w-full bg-primary border-[3px] dark:border-white border-black"
        >
          {partnerList.map((partner, index) => {
            return (
              <Link to={partner.link} key={index}>
                <img
                  className="max-w-[80px] md:max-w-[80px] mr-8 md:mr-16"
                  src={partner.partnerLogo}
                  alt="partner"
                />
              </Link>
            );
          })}
        </Marquee>
      </div>
    </>
  );
};
PartnersList.propTypes = {
  direction: PropTypes.string,
};
export default PartnersList;
