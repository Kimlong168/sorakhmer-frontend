import partner1 from "../../assets/images/partner1.png";
import partner2 from "../../assets/images/partner2.png";
// import partner4 from "../../assets/images/partner4.png";
import Marquee from "react-fast-marquee";

const PartnersList = () => {
  return (
    <div className="bg-primary">
      <Marquee
        pauseOnClick={true}
        autoFill={true}
        speed={80}
        delay={2}
        gradient={true}
        gradientWidth={0}
        className="flex justify-between items-center py-6 w-full"
      >
        <div>
          <img
            className="max-w-[80px] md:max-w-[120px] mr-8 md:mr-24"
            src={partner1}
            alt="partner"
          />
        </div>
        <div>
          <img
            className="max-w-[120px] mr-8 md:mr-24"
            src={partner2}
            alt="partner"
          />
        </div>
        {/* <div>
          <img
            className="max-w-[120px] mr-8 md:mr-24"
            src={partner4}
            alt="partner"
          />
        </div> */}
      </Marquee>
    </div>
  );
};

export default PartnersList;
