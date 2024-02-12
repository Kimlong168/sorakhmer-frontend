import PrimaryButton from "../../components/ui/PrimaryButton";
const VideoSection = () => {
  return (
    <section className="container p-8 md:p-0 mt-12">
      <div className="flex flex-col md:flex-row gap-8 md:gap-24 py-12">
        <div className="w-full">
          <h3 className="text-nowrap font-primary-bold text-4xl md:text-5xl">
            Our Video<span className="text-primary font-bold">.</span>
          </h3>
          <p className="md:my-8 mt-8 porse lg:prose-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste sit
            exercitationem quae dolor magnam libero nam, repellat aliquam,
            provident debitis et natus quisquam laboriosam voluptas molestiae
            sed nulla praesentium.
          </p>

          <div className="hidden md:block">
            <PrimaryButton content="View more" href="/" />
          </div>
        </div>
        <div className="w-full overflow-hidden hover:rounded-lg hover:shadow-lg">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="md:hidden block">
          <PrimaryButton content="View more" href="/" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-24 py-12">
        <div className="w-full order-3 md:order-1 overflow-hidden hover:rounded-lg hover:shadow-lg">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full order-1 md:order-2">
          <h3 className="text-nowrap font-primary-bold text-4xl md:text-5xl">
            Our Video<span className="text-primary font-bold">.</span>
          </h3>
          <p className="md:my-8 mt-8 porse lg:prose-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste sit
            exercitationem quae dolor magnam libero nam, repellat aliquam,
            provident debitis et natus quisquam laboriosam voluptas molestiae
            sed nulla praesentium.
          </p>

          <div className="hidden md:block">
            <PrimaryButton content="View more" href="/" />
          </div>
        </div>

        <div className="md:hidden block order-3">
          <PrimaryButton content="View more" href="/" />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
