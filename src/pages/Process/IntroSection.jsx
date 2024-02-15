import { TypeAnimation } from "react-type-animation";
import processImage from "../../assets/images/processImage.png";
const IntroSection = () => {
  return (
    <section className="container p-8 md:p-0">
      <div className="pt-12 md:py-12 flex flex-col lg:flex-row gap-8 lg:gap-24">
        <div className="w-full">
          <h3 className="font-primary-bold text-4xl md:text-5xl ">
            We make what{" "}
            <TypeAnimation
              speed={50}
              cursor={false}
              sequence={["we love", 3000, "you desire", 3000]}
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
            />
            <span className="text-primary font-bold">.</span>
          </h3>
          <div className="mt-8 porse lg:prose-xl text">
            <p>
              Reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className="w-full ">
          <img
            className="mx-auto block w-full lg:w-auto rounded-lg shadow-2xl"
            src={processImage}
            alt="processImage"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
