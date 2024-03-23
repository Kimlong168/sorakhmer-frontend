import ImagesCarousel from "../../components/ui/ImagesCarousel";
import farm_1 from "../../assets/images/farm_1.jpeg";
import farm_2 from "../../assets/images/farm_2.jpeg";
import farm_3 from "../../assets/images/farm_3.jpeg";
import farm_4 from "../../assets/images/farm_4.jpeg";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

const PhotoSection = () => {
  const { language } = useContext(DataContext);
  const imageList = [farm_1, farm_2, farm_3, farm_4];
  return (
    <section className="container p-8 md:pt-0">
      <div className="py-12">
        <h4 className="text-2xl text-center font-semibold">
          {language == "en"
            ? "Meet us in person at our farm, Contact us now"
            : "ជួបពួកយើងដោយផ្ទាល់នៅកសិដ្ឋានរបស់យើង សូមទំនាក់ទំនងមកយើងខ្ញុំឥឡូវនេះ"}{" "}
          <span className="text-primary">!</span>
        </h4>
        <ImagesCarousel imageList={imageList} />
      </div>
    </section>
  );
};

export default PhotoSection;
