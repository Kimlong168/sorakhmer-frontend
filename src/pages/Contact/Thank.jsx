import PrimaryButton from "../../components/ui/PrimaryButton";

// this is a page that use to show to the user after they submit the contact form
const Thank = () => {
  return (
    <section className="container p-8 md:p-0 h-screen grid place-items-center">
      <div className="bg-white p-6  md:mx-auto">
        <svg
          viewBox="0 0 24 24"
          className="text-green-600 w-16 h-16 mx-auto my-6"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Message Sent successfully!
          </h3>
          <p className="text-gray-600 my-2">
            Check your email to see the details of your message.
          </p>
          <p> Have a great day! </p>
          <div className="py-10 text-center">
            <PrimaryButton content="Go Back" href="/contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thank;
