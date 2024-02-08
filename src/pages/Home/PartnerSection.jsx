import PartnersList from "../../components/ui/PartnersList";
const PartnerSection = () => {
  return (
    <section className="overflow-hidden mt-32">
      <h3 className="font-primary-bold text-4xl md:text-5xl pt-8 uppercase text-center mb-8">
        OUR PARTNERS<span className="text-primary">.</span>
      </h3>
      <div className=" w-[130%] translate-x-[-50px] rotate-12 md:-rotate-12 grayscale">
        <PartnersList />
      </div>

      <div className=" w-[120%] translate-x-[-50px] -rotate-12  md:rotate-12">
        <PartnersList />
      </div>
      <div>{/* <PartnersList /> */}</div>
    </section>
  );
};

export default PartnerSection;
