// import ImagesCarousel from "../../components/ui/ImagesCarousel";
import sora11 from "../../assets/images/sora11.jpg";
import sora3 from "../../assets/images/sora3.jpg";
import sora7 from "../../assets/images/sora7.jpg";
import sora10 from "../../assets/images/sora10.jpg";

import herophoto1 from "../../assets/images/heroPhoto/heroPhoto1.jpg";
import herophoto2 from "../../assets/images/heroPhoto/heroPhoto2.jpg";
import herophoto3 from "../../assets/images/heroPhoto/heroPhoto3.jpg";
import herophoto4 from "../../assets/images/heroPhoto/heroPhoto4.jpg";
import herophoto5 from "../../assets/images/heroPhoto/heroPhoto5.jpg";
import herophoto6 from "../../assets/images/heroPhoto/heroPhoto6.jpg";
// import herophoto7 from "../../assets/images/heroPhoto/heroPhoto7.jpg";
import herophoto8 from "../../assets/images/heroPhoto/heroPhoto8.jpg";
import herophoto9 from "../../assets/images/heroPhoto/heroPhoto9.jpg";
import herophoto10 from "../../assets/images/heroPhoto/heroPhoto10.jpg";
import HoverMe from "../../components/ui/HoverMe";
const PhotoSection = () => {
  const imageList = [
    sora11,
    sora3,
    sora7,
    sora10,
    herophoto1,
    herophoto2,
    herophoto3,
    herophoto4,
    herophoto5,
    herophoto6,
    herophoto8,
    herophoto9,
    herophoto10,
  ];
  return (
    <section className="p-0">
      <div className="md:pt-12">
        <h4 className="text-2xl text-center font-semibold">
          We crafted it with passion and care{" "}
          <span className="text-primary">!</span>
        </h4>
        {/* <ImagesCarousel imageList={imageList} /> */}
        <div>
          <HoverMe imageList={imageList} />
        </div>
      </div>
    </section>
  );
};

export default PhotoSection;
