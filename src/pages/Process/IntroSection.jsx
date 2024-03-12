import { TypeAnimation } from "react-type-animation";
import process_1 from "../../assets/images/process_1.webp";
const IntroSection = () => {
  return (
    <section className="container p-8 md:pt-0">
      <div className="pt-12 md:py-12 flex flex-col lg:flex-row gap-8 lg:gap-24">
        <div className="w-full">
          <h3 className="font-primary-bold text-4xl md:text-5xl ">
            <span className="text-primary"> We make what </span>
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
          <div className="mt-8 porse lg:prose-xl ">
            <p>
              Welcome to Sorakhmer&rsquo;s products process journey! Explore
              the magic behind our products – from concept to reality. Join us
              as we unveil the creativity and dedication driving our innovation.
            </p>
          </div>
        </div>

        <div className="w-full ">
          <img
            className="mx-auto block w-full lg:w-auto rounded-lg shadow-2xl"
            src={process_1}
            alt="processImage"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
