import { FaWindowClose } from "react-icons/fa";
import PropType from "prop-types";
import RedStar from "../../components/ui/RedStar";
import "../../App.css";
import { useEffect, useState } from "react";
import SuccessModal from "../../components/ui/SuccessModal";
import WarningModal from "../../components/ui/WarningModal";
import LoadingWithPercentage from "../../components/ui/LoadingWithPercentage";
const CustomerContactForm = ({
  setIsOpenForm,
  formData,
  setFormData,
  sendToTelegram,
  setChangeContent,
}) => {
  const [isSubmitted, setIsSubmitted] = useState({
    showForm: true,
    showAlert: false,
  });
  const [isShowWarning, setIsShowWarning] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [progress, setProgress] = useState(0);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, such as sending the data to a server
    console.log(formData);
  };

  // handle loading with percentage
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 96 ? prevProgress + 4 : 100
      );
    }, 250);

    return () => clearInterval(interval);
  }, [isSending]);

  return (
    <div>
      {isSubmitted.showForm && (
        <div className="fixed inset-0 bg-slate-900/20 backdrop-blur z-10 grid place-content-center ">
          <div
            className="overflow-auto my-10 p-6 pt-0 w-fit bg-white rounded relative"
            id="placeOrder"
          >
            <div className=" md:w-[600px] lg:w-[700px]">
              <div className="sticky top-0 left-5 right-5 pb-3 pt-6 mb-4 border-b-4 border-gray-400  bg-white flex justify-between items-center gap-4">
                <h2 className="text-2xl font-bold">Place Order</h2>
                <div
                  onClick={() => setIsOpenForm(false)}
                  className="cursor-pointer hover:text-primary"
                >
                  <FaWindowClose size={18} />
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    title="required"
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name <RedStar />
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md  w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    title="required"
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number <RedStar />
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="mt-1 p-2 border w-full border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="telegram"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Telegram, Line, Facebook or other <RedStar />
                  </label>
                  <input
                    type="url"
                    id="telegram"
                    name="telegram"
                    placeholder="example: https://t.me/kimlong_chann"
                    value={formData.telegram}
                    onChange={handleChange}
                    className="mt-1 p-2 border w-full border-gray-300 rounded-md"
                  />
                </div>

                <div className="mb-4">
                  <label
                    title="required"
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address <RedStar />
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-1 p-2 border w-full border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 border w-full border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="mt-1 p-2 border w-full border-gray-300 rounded-md"
                  />
                </div>

                <div className="mb-4">
                  <p>
                    <span className="font-bold rounded mr-2">Note:</span> We
                    will reach out to you via Telegram promptly. Once we confirm
                    your order, we will proceed to process the checkout. Thank
                    you for your patience
                  </p>
                </div>
                <button
                  onClick={() => {
                    if (
                      formData.fullName &&
                      formData.phoneNumber &&
                      formData.address &&
                      formData.telegram
                    ) {
                      setIsSending(true);
                      // this function is used to prevent user from changing the content of the page epsecially the price, and quantity to make us screenshot the wrong data
                      setChangeContent();
                      // delay 1.5s to make sure the content is changed and the image is taken
                      setTimeout(() => {
                        sendToTelegram();
                      }, 2000);
                      // delay 3s to make sure the image is uploaded and also deleted after sending to telegram successfully
                      setTimeout(() => {
                        setIsSubmitted({
                          showForm: false,
                          showAlert: true,
                        });
                      }, 3000);
                    } else {
                      setIsShowWarning(true);
                    }
                  }}
                  type="submit"
                  className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark"
                >
                  {!isSending ? (
                    "Order Now"
                  ) : (
                    <div className="flex items-center gap-3">
                      Sending
                      <LoadingWithPercentage percentage={progress} />
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* fill required information alert */}
      <WarningModal
        isOpen={isShowWarning}
        setIsOpen={setIsShowWarning}
        title="Fill Required Information!"
        description="Please fill the required fields with * mark. Thank you!"
      />

      {/* submiting successfully alert */}
      <SuccessModal
        isOpen={isSubmitted.showAlert}
        setIsOpen={() => {
          setIsSubmitted({
            showForm: false,
            showAlert: false,
          });
          setIsOpenForm(false);
        }}
        title="You have ordered successfully!"
        description="We will contact to you as soon as possible. Thank you for your patience."
      />
    </div>
  );
};

CustomerContactForm.propTypes = {
  setIsOpenForm: PropType.func.isRequired,
  formData: PropType.object.isRequired,
  setFormData: PropType.func.isRequired,
  sendToTelegram: PropType.func.isRequired,
  setChangeContent: PropType.func.isRequired,
};

export default CustomerContactForm;
