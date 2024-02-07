import PrimaryButton from "../../components/ui/PrimaryButton";
import Title from "../../components/ui/Title";
import sora1 from "../../assets/images/sora1.jpg";
import { TypeAnimation } from "react-type-animation";
const AboutSection = () => {
  return (
    <section className="container p-8 md:p-0 flex flex-col md:flex-row items-center justify-center  gap-8 md:gap-24 md:h-screen">
      <div>
        <Title />
        <h3 className="font-primary-bold text-4xl md:text-5xl py-8">
          {/* <div className="mb-6 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]"> */}
          <TypeAnimation
            speed={50}
            cursor={false}
            sequence={[
              "SORA KHMER",
              2000,
              "OUR JOURNEY",
              2000,
              "OUR HISTORY",
              2000,
              "OUR MISSON",
              2000,
              "OUR VISION",
              2000,
            ]}
            className="text-accent"
            wrapper="span"
            repeat={Infinity}
          />
          {/* </div> */}
          <span className="text-primary font-bold">.</span>
        </h3>
        <p className="mb-10">
          We create fine spirits that support post-demining sustainable
          community development<span className="text-primary font-bold">.</span>
        </p>
        <PrimaryButton content="Learn More" href="/about" />
      </div>
      <div className="w-full md:w-[500px] shadow-lg hover:shadow-gray-800 shadow-gray-500 -rotate-6 hover:z-[2] hover:rotate-0 md:rotate-0 md:hover:rotate-6 overflow-hidden transition-all">
        <img
          className="hover:scale-125 transition-all cursor-pointer w-full h-full object-cover object-center"
          src={sora1}
          alt="about-image"
        />
      </div>
    </section>
  );
};

export default AboutSection;
