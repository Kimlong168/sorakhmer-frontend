import PartnersList from "../../components/ui/PartnersList";
const PartnerSection = () => {
  return (
    <section className="overflow-hidden mt-32">
      <h3 className="font-primary-bold text-4xl md:text-5xl pt-8  text-center">
        Our Partners<span className="text-primary">.</span>
      </h3>
      <div className=" w-[130%] translate-x-[-50px] -rotate-12 grayscale mt-12">
        <PartnersList direction="left" />
      </div>

      <div className=" w-[130%] translate-x-[-50px] rotate-12 -mt-12 mb-4 md:mb-8">
        <PartnersList direction="right" />
      </div>
      {/* <div className="grayscale">
        <PartnersList direction="right" />
      </div>
      <div>
        <PartnersList direction="left" />
      </div> */}
    </section>
  );
};

export default PartnerSection;
