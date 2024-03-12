import { TypeAnimation } from "react-type-animation";
import cambodiaMap from "../../assets/images/cambodia-map.png";
import PrimaryButton from "../../components/ui/PrimaryButton";
const IntroSection = () => {
  return (
    <section className="container p-8 md:pt-0">
      <div className="pt-12 md:py-12 flex flex-col md:flex-row gap-8 mg:gap-24">
        <div className="w-full">
          <h3 className="font-primary-bold text-4xl md:text-5xl">
            <span className="text-primary">Visit Our </span>
            <TypeAnimation
              speed={50}
              cursor={false}
              sequence={["Distillery", 3000, "Estate", 3000]}
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
            />
            <span className="text-primary">.</span>
          </h3>
          <div className="w-full lg:w-4/5 mt-8">
            <p className="text-lg md:text-xl">
              Our distillery is located in northwestern Cambodia, where we have
              been producing Sorakhmer since 2008. We warmly welcome visitors to
              our distillery and offer tours and tastings.
            </p>
          </div>

          <div className="mt-8 hidden md:block">
            <PrimaryButton content="Contact us" href="/contact" />
          </div>
        </div>

        {/* combodia map image */}
        <div className="w-full  md:w-4/5">
          <img
            src={cambodiaMap}
            alt="map of cambodia"
            className="w-full shadow-2xl rounded-lg"
          />
        </div>

        <div className="mt-2 md:hidden block">
          <PrimaryButton content="Contact us" href="/contact" />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
