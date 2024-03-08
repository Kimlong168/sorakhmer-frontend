import dragon from "../../assets/images/dragon.png";
import ImagesCarousel from "../../components/ui/ImagesCarousel";
import sora16 from "../../assets/images/sora16.jpeg";
import sora15 from "../../assets/images/sora14.jpeg";
import sora13 from "../../assets/images/sora13.jpeg";
import sora14 from "../../assets/images/sora14.jpeg";
const DistillerySection = () => {
  const imageList = [sora16, sora15, sora13, sora14];
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel iste
          quasi veniam dicta deserunt ipsa mollitia perferendis vitae similique
          incidunt ipsum nostrum facilis adipisci velit eveniet illum quae,
          dolore exercitationem?
        </p>
        <div>
          <ImagesCarousel imageList={imageList} />
        </div>
      </div>
    </section>
  );
};

export default DistillerySection;
