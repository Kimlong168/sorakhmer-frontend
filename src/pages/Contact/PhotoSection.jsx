import ImagesCarousel from "../../components/ui/ImagesCarousel";
import sora16 from "../../assets/images/sora16.jpeg";
import sora15 from "../../assets/images/sora14.jpeg";
import sora13 from "../../assets/images/sora13.jpeg";
import sora14 from "../../assets/images/sora14.jpeg";

const PhotoSection = () => {
  const imageList = [sora16, sora15, sora13, sora14];
  return (
    <section className="container p-8 md:p-0">
      <div className="py-12">
        <h4 className="text-2xl text-center font-semibold">
          Meet us in person at our farm, Contact us now <span className="text-primary">!</span>
        </h4>
        <ImagesCarousel imageList={imageList} />
      </div>
    </section>
  );
};

export default PhotoSection;
