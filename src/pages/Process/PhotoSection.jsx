import ImagesCarousel from "../../components/ui/ImagesCarousel";
import sora16 from "../../assets/images/sora7.jpg";
import sora15 from "../../assets/images/sora8.jpg";
import sora13 from "../../assets/images/sora9.jpg";
import sora14 from "../../assets/images/sora10.jpg";

const PhotoSection = () => {
  const imageList = [sora16, sora15, sora13, sora14];
  return (
    <section className="container p-8 md:p-0">
      <div className="py-12">
        <h4 className="text-2xl text-center font-semibold">
          We crafted it with passion and care{" "}
          <span className="text-primary">!</span>
        </h4>
        <ImagesCarousel imageList={imageList} />
      </div>
    </section>
  );
};

export default PhotoSection;
