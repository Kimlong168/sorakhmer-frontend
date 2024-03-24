// import ImagesCarousel from "../../components/ui/ImagesCarousel";
import farm_1 from "../../assets/images/farm_1.jpg";
import farm_2 from "../../assets/images/farm_2.jpg";
import farm_3 from "../../assets/images/farm_3.jpg";
import farm_4 from "../../assets/images/farm_4.jpg";

import herophoto1 from "../../assets/images/heroPhoto/heroPhoto1.jpg";
import herophoto2 from "../../assets/images/heroPhoto/heroPhoto2.jpg";
import herophoto3 from "../../assets/images/heroPhoto/heroPhoto3.jpg";
import herophoto4 from "../../assets/images/heroPhoto/heroPhoto4.jpg";
import herophoto5 from "../../assets/images/heroPhoto/heroPhoto5.jpg";
import herophoto6 from "../../assets/images/heroPhoto/heroPhoto6.jpg";
import herophoto7 from "../../assets/images/heroPhoto/heroPhoto7.jpg";
import herophoto8 from "../../assets/images/heroPhoto/heroPhoto8.jpg";
import herophoto9 from "../../assets/images/heroPhoto/heroPhoto9.jpg";
import herophoto10 from "../../assets/images/heroPhoto/heroPhoto10.jpg";

import sora1 from "../../assets/images/sora1.jpg";
import sora2 from "../../assets/images/sora2.jpg";
import sora3 from "../../assets/images/sora3.jpg";
import sora4 from "../../assets/images/sora4.jpg";
import sora5 from "../../assets/images/sora5.jpg";
import sora6 from "../../assets/images/sora6.jpg";
import sora7 from "../../assets/images/sora7.jpg";
import sora8 from "../../assets/images/sora8.jpg";

import allProducts from "../../assets/images/allProducts.jpg";
import awardOnProducts from "../../assets/images/awardOnProducts.jpg";
import awardProductsFront from "../../assets/images/awardProductFront.jpg";

import HoverMe from "../../components/ui/HoverMe";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
const PhotoSection = () => {
  const { language } = useContext(DataContext);
  const imageList = [
    herophoto1,
    herophoto2,
    herophoto3,
    herophoto4,
    herophoto5,
    herophoto6,
    herophoto7,
    herophoto8,
    herophoto9,
    herophoto10,
    allProducts,
    awardOnProducts,
    awardProductsFront,
    farm_1,
    farm_2,
    farm_3,
    farm_4,
    sora1,
    sora2,
    sora3,
    sora4,
    sora5,
    sora6,
    sora7,
    sora8,
  ];
  return (
    <section className="p-0">
      <div className="md:pt-12">
        <h4 className="text-2xl text-center font-semibold">
          {language == "en" ? (
            <span>
              We crafted it with <span className="text-primary">passion</span>{" "}
              & <span className="text-primary">care</span>
            </span>
          ) : (
            <span>
              យើងបានផលិតវាឡើងដោយ
              <span className="text-primary"> ក្តីស្រលាញ់</span> &{" "}
              <span className="text-primary">ការយកចិត្តទុកដាក់បំផុត</span>
            </span>
          )}
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
