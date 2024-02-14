import AwardCarousel from "../../components/ui/AwardCarousel";

const AwardSection = () => {

  return (
    <section className="container p-4 md:p-0 mb-8 md:mt-32">
      <h3 className="font-primary-bold text-4xl md:text-5xl pt-8 uppercase text-center mb-4">
        OUR AWARDS<span className="text-primary">.</span>
      </h3>
      <div>
        <AwardCarousel />
      </div>
    </section>
  );
};

export default AwardSection;
