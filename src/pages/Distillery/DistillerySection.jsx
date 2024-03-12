import dragon from "../../assets/images/dragon.png";
import ImagesCarousel from "../../components/ui/ImagesCarousel";
import distilery_1 from "../../assets/images/distilery_1.webp";
import distilery_2 from "../../assets/images/distilery_2.webp";
import distilery_3 from "../../assets/images/distilery_3.webp";
import distilery_4 from "../../assets/images/distilery_4.webp";
import distilery_5 from "../../assets/images/distilery_5.webp";

const DistillerySection = () => {
  const imageList = [
    distilery_1,
    distilery_2,
    distilery_3,
    distilery_5,
    distilery_4,
  ];
  return (
    <section className="container p-8 md:pt-0">
      <div className="pt-12 md:py-12">
        <h3>
          <div className="flex items-end justify-center">
            <img width={40} height={100} src={dragon} alt="dragon" />
            <span className=" first-line:font-semibold text-2xl  border-b-2 rounded-br-xl border-primary -ml-3 mb-[2.2px] pr-3">
              About Our Distillery
            </span>
          </div>
        </h3>
        <p className="mx-auto text-center mt-6  prose lg:prose-xl">
          At Sorakhmer, we are all about crafting exceptional spirits. From
          selecting the finest ingredients to our careful distillation process,
          each bottle reflects our commitment to quality and tradition. Come
          join us in celebrating the art of making great products.
        </p>
        <div>
          <ImagesCarousel imageList={imageList} />
        </div>
      </div>
    </section>
  );
};

export default DistillerySection;
